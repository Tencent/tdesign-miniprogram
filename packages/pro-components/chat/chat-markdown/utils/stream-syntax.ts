/**
 * 流式输出时的未闭合 markdown 语法处理。
 *
 * 大模型流式输出时，文本会逐字符到达，末尾常出现未输完的语法片段（如
 * `[text`、`![alt`、`**bold`、`` `code ``）。若直接交给 marked 解析，会暴露原始
 * 符号与 URL，造成闪烁与光标跳动。此模块在解析前对末尾未闭合语法做补全或隐藏，
 * 待语法闭合后再正常渲染。
 */

/** 反引号围栏（```）起始数为奇数，说明存在未闭合的代码块 */
function hasUnclosedCodeFence(markdown: string): boolean {
  const fences = markdown.match(/(^|\n)[ \t]*(`{3,}|~{3,})/g);
  return !!fences && fences.length % 2 === 1;
}

/** 隐藏未输完的代码围栏（代码块内的闭合围栏、行首的起始围栏，均为 1~2 个反引号） */
function hidePartialFence(markdown: string): string {
  return markdown.replace(/(^|\n)[ \t]*`{1,2}[ \t]*$/, '$1');
}

/** 补全未闭合的图片语法（![alt / ![alt] / ![alt](url）：整段隐藏，闭合后再渲染 */
function closeImage(markdown: string): string | null {
  const match = markdown.match(/!\[[^\n\]]*?(\]\([^)]*|\]|)$/);
  if (!match || match.index === undefined) return null;
  return markdown.slice(0, match.index);
}

/** 补全未闭合的链接语法（[text / [text] / [text](url）；列表任务框除外 */
function closeLink(markdown: string): string | null {
  const match = markdown.match(/\[[^\n\]]*?(\]\([^)]*|\]|)$/);
  if (!match) return null;

  const isTaskBox = /(^|\n)[ \t]*[-+*][ \t]+$/.test(markdown.slice(0, match.index));
  if (isTaskBox) return null;

  const tail = match[1];
  if (tail.startsWith('](')) return `${markdown})`;
  return tail === ']' ? `${markdown}()` : `${markdown}]()`;
}

/** 补全未闭合的行内代码：末尾反引号为奇数个时补同长闭合；暂无内容时隐藏起始反引号 */
function closeInlineCode(markdown: string): string | null {
  const runs = markdown.match(/`+/g);
  if (!runs || runs.length % 2 === 0) return null;
  if (/`+$/.test(markdown)) return markdown.replace(/`+$/, '');
  return `${markdown}${'`'.repeat(runs[runs.length - 1].length)}`;
}

/**
 * 补全最后一行未配对的加粗/斜体（`*` `**` `***`）；无需处理时返回 null。
 * 仅处理 `*` 系语法，`_`、`~~` 未闭合时保持字面量交给 marked 常规解析（成对才渲染）。
 */
function closeEmphasis(markdown: string): string | null {
  const lastLine = markdown.slice(markdown.lastIndexOf('\n') + 1);
  if (!lastLine || /`/.test(lastLine)) return null; // 行内含行内代码时不处理

  const line = lastLine.replace(/^\s*[*+-]\s+/, ''); // 剔除行首列表符号
  // 行末标记片段先不参与配对（可能是未输完的闭合符，也可能是待内容的起始符）
  const trailingMatch = line.match(/(\*)\1*$/);
  const trailing = trailingMatch ? trailingMatch[0] : '';
  const scanLine = trailingMatch ? line.slice(0, trailingMatch.index) : line;

  // 仅当行内存在正文时才补闭合；纯符号行直接隐藏避免闪出
  const hasBody = !!scanLine.replace(/[\s*`]/g, '');
  if (trailing && !hasBody) return markdown.slice(0, markdown.length - lastLine.length);

  // 用栈配对 `*` 序列，栈中残留即为未闭合的起始符
  const urlLess = scanLine.replace(/(?:https?|ftp):\/\/\S+/g, ' '); // 链接内符号不参与配对
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
  if (trailing && !top) {
    // 行末符号但无待闭合内容：视为起始符，先隐藏避免闪出
    return markdown.slice(0, markdown.length - trailing.length);
  }
  if (trailing && top && trailing[0] === top[0]) {
    // 行末标记与栈顶同字符：等长视为闭合符（弹出），不足视为部分闭合符（补足）
    if (trailing.length === top.length) stack.pop();
    else if (trailing.length < top.length) return `${trimmed}${top.slice(trailing.length)}`;
  }
  return stack.length ? `${trimmed}${stack.reverse().join('')}` : null;
}

/** 流式输出时补全/隐藏文本末尾未闭合的语法，避免原始符号与 URL 闪现 */
export default function completeUnclosedInlineSyntax(markdown: string): string {
  // 未闭合代码块：仅隐藏未输完的围栏，块内内容交给 marked 渲染
  if (hasUnclosedCodeFence(markdown)) return hidePartialFence(markdown);

  // 行首未输完的起始围栏（1~2 个反引号）：先隐藏避免闪出
  const hiddenFence = hidePartialFence(markdown);
  if (hiddenFence !== markdown) return hiddenFence;

  // 孤立 !（可能为图片起始符）：先隐藏，避免闪烁导致光标跳动
  if (/(^|[^A-Za-z0-9])!$/.test(markdown)) return markdown.slice(0, -1);

  // 按优先级依次尝试补全，命中即返回；均未命中则保持原文
  return (
    closeImage(markdown) ?? closeLink(markdown) ?? closeInlineCode(markdown) ?? closeEmphasis(markdown) ?? markdown
  );
}
