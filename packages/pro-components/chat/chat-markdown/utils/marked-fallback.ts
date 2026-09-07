interface InlineCodeMask {
  marker: string;
  raw: string;
  text: string;
}

type InlineCodeMaskMatch = { mask: InlineCodeMask; index: number };

/** 跳过 fenced code block。 */
function getCodeFenceRanges(markdown: string): Array<[number, number]> {
  const ranges: Array<[number, number]> = [];
  let fence: { marker: string; start: number } | null = null;
  let lineStart = 0;

  while (lineStart < markdown.length) {
    const newlineIndex = markdown.indexOf('\n', lineStart);
    const lineEnd = newlineIndex === -1 ? markdown.length : newlineIndex + 1;
    const line = markdown.slice(lineStart, newlineIndex === -1 ? lineEnd : newlineIndex);
    const matchedFence = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);

    if (fence) {
      if (
        matchedFence &&
        matchedFence[1][0] === fence.marker[0] &&
        matchedFence[1].length >= fence.marker.length &&
        /^[ \t]*$/.test(matchedFence[2])
      ) {
        ranges.push([fence.start, lineEnd]);
        fence = null;
      }
    } else if (matchedFence) {
      const [, marker, info] = matchedFence;
      if (marker[0] === '~' || !info.includes('`')) fence = { marker, start: lineStart };
    }

    lineStart = lineEnd;
  }

  if (fence) ranges.push([fence.start, markdown.length]);
  return ranges;
}

function isEscaped(markdown: string, index: number): boolean {
  let slashCount = 0;
  for (let i = index - 1; i >= 0 && markdown[i] === '\\'; i -= 1) slashCount += 1;
  return slashCount % 2 === 1;
}

function normalizeCodeSpanText(text: string): string {
  const normalized = text.replace(/[\r\n]+/g, ' ');
  return /^\s/.test(normalized) && /\s$/.test(normalized) && /\S/.test(normalized)
    ? normalized.slice(1, -1)
    : normalized;
}

/** marked 嵌套行内代码解析失败时的回退。 */
export function maskInlineCodes(markdown: string): { source: string; masks: InlineCodeMask[] } {
  const masks: InlineCodeMask[] = [];
  const fenceRanges = getCodeFenceRanges(markdown);
  let fenceIndex = 0;
  let source = '';
  let index = 0;

  while (index < markdown.length) {
    const range = fenceRanges[fenceIndex];
    if (range && index === range[0]) {
      const [rangeStart, rangeEnd] = range;
      source += markdown.slice(rangeStart, rangeEnd);
      index = rangeEnd;
      fenceIndex += 1;
    } else if (markdown[index] !== '`' || isEscaped(markdown, index)) {
      source += markdown[index];
      index += 1;
    } else {
      let delimiterEnd = index;
      while (markdown[delimiterEnd] === '`') delimiterEnd += 1;
      const delimiterLength = delimiterEnd - index;
      const nextFenceStart = fenceRanges[fenceIndex]?.[0] ?? markdown.length;
      let closingStart = delimiterEnd;

      while (closingStart < nextFenceStart) {
        if (markdown[closingStart] === '`') {
          let closingEnd = closingStart;
          while (markdown[closingEnd] === '`') closingEnd += 1;
          if (closingEnd - closingStart === delimiterLength) break;
          closingStart = closingEnd;
        } else {
          closingStart += 1;
        }
      }

      if (closingStart === nextFenceStart) {
        source += markdown.slice(index, delimiterEnd);
        index = delimiterEnd;
      } else {
        const closingEnd = closingStart + delimiterLength;
        const raw = markdown.slice(index, closingEnd);
        const marker = `\uE000TD_CHAT_CODE_${masks.length}\uE001`;
        masks.push({ marker, raw, text: normalizeCodeSpanText(markdown.slice(delimiterEnd, closingStart)) });
        source += marker;
        index = closingEnd;
      }
    }
  }

  return { source, masks };
}

export function restoreMaskedInlineCodes(tokens: any[], masks: InlineCodeMask[]) {
  if (!masks.length) return;

  const findMask = (text: string, from: number): InlineCodeMaskMatch | null => {
    let matchedMask: InlineCodeMask | null = null;
    let matchedIndex = -1;
    for (let i = 0; i < masks.length; i += 1) {
      const mask = masks[i];
      const index = text.indexOf(mask.marker, from);
      if (index !== -1 && (matchedIndex === -1 || index < matchedIndex)) {
        matchedMask = mask;
        matchedIndex = index;
      }
    }
    return matchedMask ? { mask: matchedMask, index: matchedIndex } : null;
  };
  const restoreString = (value: unknown): unknown => {
    if (typeof value !== 'string') return value;
    return masks.reduce((result, mask) => result.split(mask.marker).join(mask.raw), value);
  };

  const restore = (items: any[]): void => {
    for (let i = 0; i < items.length; i += 1) {
      const token = items[i];
      const raw = typeof token.raw === 'string' ? token.raw : token.text;
      const firstMask = token.type === 'text' && typeof raw === 'string' ? findMask(raw, 0) : null;
      if (firstMask) {
        const restored: any[] = [];
        let offset = 0;
        let match: InlineCodeMaskMatch | null = firstMask;
        while (match) {
          if (match.index > offset) {
            restored.push({ type: 'text', raw: raw.slice(offset, match.index), text: raw.slice(offset, match.index) });
          }
          restored.push({ type: 'codespan', raw: match.mask.raw, text: match.mask.text });
          offset = match.index + match.mask.marker.length;
          match = findMask(raw, offset);
        }
        if (offset < raw.length) restored.push({ type: 'text', raw: raw.slice(offset), text: raw.slice(offset) });
        if (token.isTail && restored.length) {
          const last = restored[restored.length - 1];
          last.isTail = true;
          last.tailContent = token.tailContent;
        }
        items.splice(i, 1, ...restored);
        i += restored.length - 1;
      } else {
        token.raw = restoreString(token.raw);
        token.text = restoreString(token.text);
        if (token.tokens?.length) restore(token.tokens);
        if (token.items?.length) token.items.forEach((item: any) => item.tokens?.length && restore(item.tokens));
        if (token.type === 'table') {
          const rows = [...(token.header ? [token.header] : []), ...(token.rows || [])];
          rows.forEach((row: any[]) => row.forEach((cell: any) => cell.tokens?.length && restore(cell.tokens)));
        }
      }
    }
  };

  restore(tokens);
}

/** 检测 marked 未解析的嵌套格式符。 */
export function hasLeakedInlineFormatting(tokens: any[]): boolean {
  const containsLeakedFormatting = (items: any[]): boolean => {
    const text = items
      .filter((token) => token.type === 'text')
      .map((token) => token.raw || token.text || '')
      .join('');
    const hasCodeSpan = items.some((token) => token.type === 'codespan');
    const hasFormatting = /(\*{1,3})[\s\S]*\*{1,3}|_{1,3}[\s\S]*_{1,3}|~~[\s\S]*~~|\[[\s\S]*\]\([^)]*\)/.test(text);

    if (hasCodeSpan && hasFormatting) return true;

    return items.some((token) => {
      if (token.tokens?.length && containsLeakedFormatting(token.tokens)) return true;
      if (token.items?.some((item: any) => item.tokens?.length && containsLeakedFormatting(item.tokens))) return true;
      if (token.type === 'table') {
        const rows = [...(token.header ? [token.header] : []), ...(token.rows || [])];
        return rows.some((row: any[]) =>
          row.some((cell: any) => cell.tokens?.length && containsLeakedFormatting(cell.tokens)),
        );
      }
      return false;
    });
  };

  return containsLeakedFormatting(tokens);
}
