import completeUnclosedInlineSyntax from '../utils/stream-syntax';

describe('completeUnclosedInlineSyntax', () => {
  it.each([
    ['[text', '[text]()'],
    ['[text]', '[text]()'],
    ['[text](url', '[text](url)'],
    ['![alt', ''],
    ['![alt]', ''],
    ['![alt](url', ''],
    ['![alt][ref', ''],
  ])('补全或隐藏未闭合的链接和图片：%s', (source, expected) => {
    expect(completeUnclosedInlineSyntax(source)).toBe(expected);
  });

  it.each([String.raw`\[literal`, String.raw`\![alt`, String.raw`\!`])('不处理转义语法：%s', (source) => {
    expect(completeUnclosedInlineSyntax(source)).toBe(source);
  });

  it.each([
    ['!', ''],
    ['text !', 'text '],
    ['你好!', '你好!'],
  ])('流式阶段区分图片起始符与普通末尾感叹号：%s', (source, expected) => {
    expect(completeUnclosedInlineSyntax(source)).toBe(expected);
  });

  it.each(['`!`', '`[text`', '`![alt`', '``**code``'])('不处理行内代码中的语法：%s', (source) => {
    expect(completeUnclosedInlineSyntax(source)).toBe(source);
  });

  it.each([
    ['[inline](https://example.com)', {}],
    ['![inline](https://example.com/image.png)', {}],
    ['[id]', { id: { href: 'https://example.com' } }],
    ['![id]', { id: { href: 'https://example.com/image.png' } }],
    ['[text][id]', { id: { href: 'https://example.com' } }],
    ['![alt][id]', { id: { href: 'https://example.com/image.png' } }],
    ['[text][pending]', {}],
    ['![alt][pending]', {}],
  ])('不修改完整内联语法和引用式语法：%s', (source, links) => {
    expect(completeUnclosedInlineSyntax(source, links)).toBe(source);
  });

  it.each([
    ['`code', '`code`'],
    ['``code', '``code``'],
    ['``code`', '``code``'],
    ['`code``', '`code`` `'],
  ])('使用等长反引号补全行内代码：%s', (source, expected) => {
    expect(completeUnclosedInlineSyntax(source)).toBe(expected);
  });

  it('忽略已闭合代码围栏中的反引号', () => {
    const source = ['```js', 'const value = `code`;', '```', 'plain text'].join('\n');
    expect(completeUnclosedInlineSyntax(source)).toBe(source);
  });
});
