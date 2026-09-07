/**
 * 尾部光标（打字光标）注入。
 *
 * 流式输出未结束时，需要在已渲染内容的末尾显示一个闪烁光标（如 ▋）。
 * 本模块负责解析光标字符，并在 marked 生成的 token 树中定位最后一个可见的
 * 文本/代码叶子节点，为其打上标记，供渲染层追加光标。
 */

const DEFAULT_TAIL_CONTENT = '▋';

/** 解析 tail 参数，返回光标字符；不需要显示时返回 null */
export function resolveTailContent(tail?: boolean | { content?: string }): string | null {
  if (!tail) return null;
  if (typeof tail === 'boolean') return DEFAULT_TAIL_CONTENT;
  return tail.content || DEFAULT_TAIL_CONTENT;
}

/**
 * 将列表项的子 tokens 展平，供 injectTailToTokens 递归使用。
 * marked 的 list token 结构：list.items[].tokens（而非 list.tokens）
 */
function flatListItems(items: any[]): any[] {
  return items.reduce((result: any[], item: any) => {
    if (item.tokens?.length) result.push(...item.tokens);
    return result;
  }, []);
}

/**
 * 从后往前遍历 token 树，找到最后一个非空文本或代码叶子节点，打上 isTail 标记。
 * @returns 是否成功注入
 */
export function injectTailToTokens(tokens: any[], tailChar: string, depth = 0): boolean {
  for (let i = tokens.length - 1; i >= 0; i -= 1) {
    const token = tokens[i];

    // code 块作为叶子节点，直接注入，不递归
    if (token.type === 'code' && (token.text || token.raw)?.trim()) {
      token.isTail = true;
      token.tailContent = tailChar;
      return true;
    }

    // text 包装节点需要优先进入子 tokens，确保光标标记在实际渲染的文本之后。
    if (token.type === 'text' && token.tokens?.length) {
      if (injectTailToTokens(token.tokens, tailChar, depth + 1)) return true;
    }

    // 普通文本和行内代码都是可见叶子节点，光标应位于其后。
    if (['text', 'codespan'].includes(token.type) && (token.text || token.raw)?.trim()) {
      token.isTail = true;
      token.tailContent = tailChar;
      return true;
    }

    // table 节点：从后往前遍历 rows，再遍历 header
    if (token.type === 'table') {
      const allRows: any[][] = [...(token.header ? [token.header] : []), ...(token.rows || [])];
      for (let r = allRows.length - 1; r >= 0; r -= 1) {
        const row = allRows[r];
        for (let c = row.length - 1; c >= 0; c -= 1) {
          const cell = row[c];
          if (cell.tokens?.length) {
            if (injectTailToTokens(cell.tokens, tailChar, depth + 1)) return true;
          }
        }
      }
    } else {
      // 有子节点时递归
      let children: any[] | null = null;
      if (token.tokens?.length) {
        children = token.tokens;
      } else if (token.items?.length) {
        children = flatListItems(token.items);
      }
      if (children?.length) {
        if (injectTailToTokens(children, tailChar, depth + 1)) return true;
      }
    }
  }
  return false;
}
