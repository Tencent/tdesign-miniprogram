import { injectTailToTokens, resolveTailContent } from '../utils/tail-cursor';

describe('tail cursor', () => {
  it('解析默认及自定义光标内容', () => {
    expect(resolveTailContent()).toBeNull();
    expect(resolveTailContent(false)).toBeNull();
    expect(resolveTailContent(true)).toBe('▋');
    expect(resolveTailContent({ content: '' })).toBe('▋');
    expect(resolveTailContent({ content: '...' })).toBe('...');
  });

  it('将光标注入最后一个可见的 codespan', () => {
    const tokens = [
      { type: 'text', raw: 'prefix ', text: 'prefix ' },
      { type: 'codespan', raw: '`code`', text: 'code' },
    ];

    expect(injectTailToTokens(tokens, '...')).toBe(true);
    expect(tokens).toEqual([
      { type: 'text', raw: 'prefix ', text: 'prefix ' },
      { type: 'codespan', raw: '`code`', text: 'code', isTail: true, tailContent: '...' },
    ]);
  });

  it('将列表 text 包装节点的光标注入可见子节点', () => {
    const tokens = [
      {
        type: 'text',
        raw: 'item',
        text: 'item',
        tokens: [{ type: 'text', raw: 'item', text: 'item' }],
      },
    ];

    expect(injectTailToTokens(tokens, '...')).toBe(true);
    expect(tokens[0].isTail).toBeUndefined();
    expect(tokens[0].tokens[0]).toMatchObject({ isTail: true, tailContent: '...' });
  });

  it('第三个参数继续作为递归深度使用', () => {
    const tokens = [
      {
        type: 'paragraph',
        tokens: [{ type: 'text', raw: 'nested', text: 'nested' }],
      },
    ];

    expect(injectTailToTokens(tokens, '...', 2)).toBe(true);
    expect(tokens[0].tokens[0]).toMatchObject({ isTail: true, tailContent: '...' });
  });

  it('将光标注入代码块', () => {
    const tokens = [{ type: 'code', raw: 'code', text: 'code' }];

    injectTailToTokens(tokens, '...');

    expect(tokens[0]).toEqual({ type: 'code', raw: 'code', text: 'code', isTail: true, tailContent: '...' });
  });
});
