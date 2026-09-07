/**
 * 流式输出时的未闭合 markdown 语法处理。
 *
 * 大模型流式输出时，文本会逐字符到达，末尾常出现未输完的语法片段（如
 * `[text`、`![alt`、`**bold`、`` `code ``）。若直接交给 marked 解析，会暴露原始
 * 符号与 URL，造成闪烁与光标跳动。此模块在解析前对末尾未闭合语法做补全或隐藏，
 * 待语法闭合后再正常渲染。
 */

/** 按 Markdown 围栏规则判断是否存在未闭合代码块。 */
function hasUnclosedCodeFence(markdown: string): boolean {
  let fence: string | null = null;

  markdown.split('\n').forEach((line) => {
    const matchedFence = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (!matchedFence) return;

    const [, marker, info] = matchedFence;
    if (fence) {
      if (marker[0] === fence[0] && marker.length >= fence.length && /^[ \t]*$/.test(info)) fence = null;
      return;
    }

    if (marker[0] === '~' || !info.includes('`')) fence = marker;
  });

  return !!fence;
}

/** 隐藏未输完的 1~2 位代码围栏标记。 */
function hidePartialFence(markdown: string): string {
  return markdown.replace(/(^|\n)[ \t]*[`~]{1,2}[ \t]*$/, '$1');
}

function isEscaped(markdown: string, index: number): boolean {
  let slashCount = 0;
  for (let i = index - 1; i >= 0 && markdown[i] === '\\'; i -= 1) slashCount += 1;
  return slashCount % 2 === 1;
}

interface BacktickRun {
  index: number;
  length: number;
}

/** 收集 fenced code block 外的未转义反引号片段。 */
function getInlineCodeRuns(markdown: string): BacktickRun[] {
  const runs: BacktickRun[] = [];
  let fence: string | null = null;
  let lineStart = 0;

  while (lineStart < markdown.length) {
    const newlineIndex = markdown.indexOf('\n', lineStart);
    const lineEnd = newlineIndex === -1 ? markdown.length : newlineIndex;
    const line = markdown.slice(lineStart, lineEnd);
    const matchedFence = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);

    if (fence) {
      if (
        matchedFence &&
        matchedFence[1][0] === fence[0] &&
        matchedFence[1].length >= fence.length &&
        /^[ \t]*$/.test(matchedFence[2])
      ) {
        fence = null;
      }
    } else if (matchedFence && (matchedFence[1][0] === '~' || !matchedFence[2].includes('`'))) {
      [, fence] = matchedFence;
    } else {
      const re = /`+/g;
      for (let match = re.exec(line); match; match = re.exec(line)) {
        const index = lineStart + match.index;
        if (!isEscaped(markdown, index)) runs.push({ index, length: match[0].length });
      }
    }

    if (newlineIndex === -1) break;
    lineStart = newlineIndex + 1;
  }

  return runs;
}

/** 将已闭合行内代码替换为等长空格，避免其中的 Markdown 字面量参与后续语法检测。 */
function getInlineSyntaxScanSource(markdown: string): string {
  const chars = markdown.split('');
  let opening: BacktickRun | null = null;

  const runs = getInlineCodeRuns(markdown);
  for (let r = 0; r < runs.length; r += 1) {
    const run = runs[r];
    if (!opening) {
      opening = run;
    } else if (run.length === opening.length) {
      for (let i = opening.index; i < run.index + run.length; i += 1) chars[i] = ' ';
      opening = null;
    }
  }

  return chars.join('');
}

type ReferenceLinks = Record<string, unknown>;

function normalizeReferenceLabel(label: string): string {
  return label.trim().replace(/\s+/g, ' ').toLowerCase();
}

function hasReference(referenceLinks: ReferenceLinks, label: string): boolean {
  return Object.prototype.hasOwnProperty.call(referenceLinks, normalizeReferenceLabel(label));
}

/** 隐藏末尾可能发展为图片的孤立 !，下一分片非 [ 或流结束时会由原文恢复。 */
function hideImageMarker(markdown: string): string | null {
  const scanSource = getInlineSyntaxScanSource(markdown);
  const index = scanSource.length - 1;
  if (
    index < 0 ||
    scanSource[index] !== '!' ||
    isEscaped(markdown, index) ||
    (index > 0 && !/\s/.test(scanSource[index - 1]))
  )
    return null;
  return markdown.slice(0, index);
}

/** 隐藏末尾未闭合的图片语法；完整内联图片和已定义的引用式图片交给 marked。 */
function closeImage(markdown: string, referenceLinks: ReferenceLinks): string | null {
  const scanSource = getInlineSyntaxScanSource(markdown);
  const reference = scanSource.match(/!\[([^\]\n]*)\]\[([^\]\n]*)\]$/);
  if (reference?.index !== undefined && !isEscaped(markdown, reference.index)) return null;

  const openReference = scanSource.match(/!\[([^\]\n]*)\]\[[^\]\n]*$/);
  if (openReference?.index !== undefined && !isEscaped(markdown, openReference.index)) {
    return markdown.slice(0, openReference.index);
  }

  const openAlt = scanSource.match(/!\[([^\]\n]*)$/);
  const openDestination = scanSource.match(/!\[([^\]\n]*)\]\([^)\n]*$/);
  const shortcutReference = scanSource.match(/!\[([^\]\n]*)\]$/);
  const match = openAlt || openDestination || shortcutReference;

  if (!match || match.index === undefined || isEscaped(markdown, match.index)) return null;
  if (shortcutReference && hasReference(referenceLinks, shortcutReference[1])) return null;
  return markdown.slice(0, match.index);
}

function isLinkCandidate(markdown: string, index: number): boolean {
  if (isEscaped(markdown, index) || markdown[index - 1] === '!') return false;
  const prefix = markdown.slice(0, index);
  if (/!\[[^\]\n]*\]$/.test(prefix)) return false;
  return !/(^|\n)[ \t]*[-+*][ \t]+$/.test(prefix);
}

/** 补全末尾未闭合的链接语法；完整链接和已定义的引用式链接交给 marked。 */
function closeLink(markdown: string, referenceLinks: ReferenceLinks): string | null {
  const scanSource = getInlineSyntaxScanSource(markdown);
  const reference = scanSource.match(/\[([^\]\n]*)\]\[([^\]\n]*)\]$/);
  if (reference?.index !== undefined && isLinkCandidate(markdown, reference.index)) return null;

  const openDestination = scanSource.match(/\[([^\]\n]*)\]\([^)\n]*$/);
  if (openDestination?.index !== undefined && isLinkCandidate(markdown, openDestination.index)) {
    return `${markdown})`;
  }

  const shortcutReference = scanSource.match(/\[([^\]\n]*)\]$/);
  if (shortcutReference?.index !== undefined && isLinkCandidate(markdown, shortcutReference.index)) {
    return hasReference(referenceLinks, shortcutReference[1]) ? null : `${markdown}()`;
  }

  const openLabel = scanSource.match(/\[([^\]\n]*)$/);
  if (openLabel?.index !== undefined && isLinkCandidate(markdown, openLabel.index)) return `${markdown}]()`;
  return null;
}

/** 补全末尾未闭合的行内代码；闭合符必须与起始反引号长度一致。 */
function closeInlineCode(markdown: string): string | null {
  const runs = getInlineCodeRuns(markdown);
  let opening: BacktickRun | null = null;
  for (let i = 0; i < runs.length; i += 1) {
    const run = runs[i];
    if (!opening) opening = run;
    else if (run.length === opening.length) opening = null;
  }

  if (!opening) return null;
  if (opening.index + opening.length === markdown.length) return markdown.slice(0, opening.index);

  const lastRun = runs[runs.length - 1];
  if (lastRun !== opening && lastRun.index + lastRun.length === markdown.length) {
    if (lastRun.length < opening.length) return `${markdown}${'`'.repeat(opening.length - lastRun.length)}`;
    return `${markdown} ${'`'.repeat(opening.length)}`;
  }
  return `${markdown}${'`'.repeat(opening.length)}`;
}

/**
 * 补全最后一行未配对的加粗/斜体（`*` `**` `***`）；无需处理时返回 null。
 * 仅处理 `*` 系语法，`_`、`~~` 未闭合时保持字面量交给 marked 常规解析（成对才渲染）。
 */
function closeEmphasis(markdown: string): string | null {
  const lastLine = markdown.slice(markdown.lastIndexOf('\n') + 1);
  if (!lastLine || (lastLine.match(/`/g) || []).length % 2 === 1) return null;

  const line = lastLine.replace(/^\s*[*+-]\s+/, '');
  const trailingMatch = line.match(/(\*)\1*$/);
  const trailing = trailingMatch ? trailingMatch[0] : '';
  const scanLine = trailingMatch ? line.slice(0, trailingMatch.index) : line;

  const hasBody = !!scanLine.replace(/[\s*`]/g, '');
  if (trailing && !hasBody) return markdown.slice(0, markdown.length - lastLine.length);

  const urlLess = getInlineSyntaxScanSource(scanLine).replace(/(?:https?|ftp):\/\/\S+/g, ' ');
  const stack: string[] = [];
  const re = /(\*{1,3})/g;
  for (let m = re.exec(urlLess); m; m = re.exec(urlLess)) {
    const escaped = m.index > 0 && urlLess[m.index - 1] === '\\';
    if (!escaped) {
      if (stack[stack.length - 1] === m[0]) stack.pop();
      else stack.push(m[0]);
    }
  }

  const top = stack[stack.length - 1];
  const trimmed = markdown.replace(/[ \t]+$/, '');
  if (trailing && !top) return markdown.slice(0, markdown.length - trailing.length);
  if (trailing && top && trailing[0] === top[0]) {
    if (trailing.length === top.length) stack.pop();
    else if (trailing.length < top.length) return `${trimmed}${top.slice(trailing.length)}`;
  }
  return stack.length ? `${trimmed}${stack.reverse().join('')}` : null;
}

/** 流式输出时补全/隐藏文本末尾未闭合的语法，避免原始符号与 URL 闪现 */
export default function completeUnclosedInlineSyntax(markdown: string, referenceLinks: ReferenceLinks = {}): string {
  // 未闭合代码块：仅隐藏未输完的围栏，块内内容交给 marked 渲染
  if (hasUnclosedCodeFence(markdown)) return hidePartialFence(markdown);

  // 行首未输完的起始围栏（1~2 个反引号）：先隐藏避免闪出
  const hiddenFence = hidePartialFence(markdown);
  if (hiddenFence !== markdown) return hiddenFence;

  // 先补齐行内代码，避免其内部的 [text] / ![alt] 被误判为链接或图片语法。
  const codeClosed = closeInlineCode(markdown) ?? markdown;

  // 图片起始符、图片、链接命中即返回（整段隐藏或补全，不与强调叠加）。
  const imageMarkerHidden = hideImageMarker(codeClosed);
  if (imageMarkerHidden !== null) return imageMarkerHidden;

  const closed = closeImage(codeClosed, referenceLinks) ?? closeLink(codeClosed, referenceLinks);
  if (closed !== null) return closed;

  return closeEmphasis(codeClosed) ?? codeClosed;
}
