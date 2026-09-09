/**
 * 拆分 title：'Button 按钮' -> { title: 'Button', subtitle: '按钮' }
 */
export function splitTitle(title: string): { title: string; subtitle: string } {
  const trimmed = (title || '').trim();
  const match = trimmed.match(/^(.+?)\s+(.+)$/);
  if (match) return { title: match[1].trim(), subtitle: match[2].trim() };
  return { title: trimmed, subtitle: '' };
}

/**
 * 移除站点专用说明块：渲染框架支持情况 / 版本提示 / Tips blockquote / 预览链接。
 * 通过 tag 计数处理嵌套元素，从而整块移除。
 */
export function removeSiteBlocks(body: string): string {
  const blockTags = ['div', 'blockquote'];
  let result = body;

  for (const tag of blockTags) {
    const openRe = new RegExp(`<${tag}\\b[^>]*>`, 'g');
    let match: RegExpExecArray | null;
    while ((match = openRe.exec(result))) {
      const openTag = match[0];
      const isTarget =
        (tag === 'div' && /(background:\s*#ecf2fe|background-color:\s*#ecf2fe|background:\s*#d9e1ff|background-color:\s*#d9e1ff)/.test(openTag)) ||
        (tag === 'blockquote' && /background-color:\s*#/.test(openTag)) ||
        /渲染框架支持情况|该组件于|Tips:|预览效果/.test(openTag);

      if (!isTarget) continue;

      let depth = 0;
      const tokenRe = new RegExp(`</?${tag}(?:\\s[^>]*)?>`, 'g');
      tokenRe.lastIndex = match.index;
      let token: RegExpExecArray | null;
      while ((token = tokenRe.exec(result))) {
        if (token[0].startsWith(`</${tag}`)) {
          depth -= 1;
          if (depth === 0) {
            const end = token.index + token[0].length;
            result = result.slice(0, match.index) + result.slice(end);
            break;
          }
        } else {
          depth += 1;
        }
      }
      openRe.lastIndex = match.index;
    }
  }
  return result;
}

/**
 * 将站点专用的「在开发者工具中预览效果」链接转换为 Markdown 链接。
 */
export function convertPreviewLink(body: string): string {
  return body.replace(
    /<a\s+href="(https:\/\/developers\.weixin\.qq\.com\/s\/[^"]+)"[^>]*>[^<]*<\/a>/g,
    (_m, url: string) => `> [在微信开发者工具中预览效果](${url})`,
  );
}

/**
 * 将站点专用的 Tips blockquote（小程序调试提示）转换为 Markdown 引用块。
 */
export function convertTipsBlock(body: string): string {
  // 匹配 <blockquote ...> ... <p>Tips: ...</p> ... </blockquote>，提取 <p> 内文本
  return body.replace(
    /<blockquote\b[^>]*>\s*<p>([\s\S]*?)<\/p>\s*<\/blockquote>/g,
    (_m, text: string) =>
      text
        .split(/<br\s*\/?>|\n/)
        .map((line) => line.replace(/<[^>]+>/g, '').trim())
        .filter(Boolean)
        .map((line) => `> ${line}`)
        .join('\n'),
  );
}

/**
 * 将站点顶部的说明块（版本上线提示 / 渲染框架支持情况）转换为 Markdown 引用块。
 *
 * README 源码结构为外层容器 div 嵌套若干内层说明 div：
 *   <div style="background: #ecf2fe; ...">
 *     <div ...>该组件于 0.9.0 版本上线，请留意版本</div>
 *     <div ...>渲染框架支持情况：Skyline、WebView</div>
 *   </div>
 * 故先匹配外层容器，再逐行提取内层 div 文本。
 */
export function convertHeaderNoticeBlocks(body: string): string {
  const openRe = /<div\s+style="background:\s*#(?:ecf2fe|d9e1ff)[^"]*"[^>]*>/g;
  let result = body;
  let match: RegExpExecArray | null;

  while ((match = openRe.exec(result))) {
    // 从开标签起，按深度计数找到配对的闭标签，正确处理嵌套 div
    let depth = 0;
    const tokenRe = /<\/?div(?:\s[^>]*)?>/g;
    tokenRe.lastIndex = match.index;
    let token: RegExpExecArray | null;
    let end = -1;
    while ((token = tokenRe.exec(result))) {
      if (token[0].startsWith('</div')) {
        depth -= 1;
        if (depth === 0) {
          end = token.index + token[0].length;
          break;
        }
      } else {
        depth += 1;
      }
    }
    if (end === -1) break;

    const inner = result.slice(match.index + match[0].length, end);
    const converted = [...inner.matchAll(/<div\b[^>]*>([\s\S]*?)<\/div>/g)]
      .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .map((line) => `> ${line}`)
      .join('\n');
    // 整块替换为 Markdown 引用（保留前后空行结构）
    result = result.slice(0, match.index) + converted + result.slice(end);
    openRe.lastIndex = match.index;
  }
  return result;
}

/**
 * 清理站点专用 HTML：转换为 Markdown 语义后，移除剩余站点专用 HTML 块。
 */
export function cleanSiteHtml(body: string): string {
  // 先做转换：预览链接 / Tips 提示块 / 渲染框架支持情况 -> Markdown
  const converted = convertHeaderNoticeBlocks(convertTipsBlock(convertPreviewLink(body)));
  // 再移除剩余站点专用 HTML 块（如「该组件于 xx 版本」等），保留代码示例中的真实内容。
  return removeSiteBlocks(converted)
    .replace(/<a href="https:\/\/developers\.weixin\.qq\.com\/s\/[^"]*"[^>]*>[^<]*<\/a>/g, '');
}
