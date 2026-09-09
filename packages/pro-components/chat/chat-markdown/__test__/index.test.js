import path from 'path';
import simulate from 'miniprogram-simulate';

jest.mock('marked', () => ({
  Lexer: class {
    lex(source) {
      const marker = '\uE000TD_CHAT_CODE_0\uE001';
      if (source.includes(marker)) {
        return [
          {
            type: 'paragraph',
            raw: source,
            text: source,
            tokens: [
              {
                type: 'strong',
                raw: `**${marker}**`,
                text: marker,
                tokens: [{ type: 'text', raw: marker, text: marker }],
              },
            ],
          },
        ];
      }
      return [
        {
          type: 'paragraph',
          raw: source,
          text: source,
          tokens: [
            { type: 'text', raw: 'a**', text: 'a**', escaped: false },
            { type: 'codespan', raw: '`code`', text: 'code' },
            { type: 'text', raw: '**', text: '**', escaped: false },
          ],
        },
      ];
    }
  },
}));

const chatMarkdown = load(path.resolve(__dirname, '../chat-markdown'));
const content = 'a**`code`**';

function render(streaming) {
  const id = simulate.load({
    template: '<t-chat-markdown id="markdown" content="{{content}}" streaming="{{streaming}}" />',
    data: { content, streaming },
    usingComponents: { 't-chat-markdown': chatMarkdown },
  });
  const container = simulate.render(id);
  container.attach(document.createElement('parent-wrapper'));
  return container.querySelector('#markdown');
}

function getStrongCodeToken(component) {
  const strong = component.data.nodes[0].tokens.find((token) => token.type === 'strong');
  return strong?.tokens?.[0];
}

describe('ChatMarkdown compatibility', () => {
  it.each([undefined, { hasNextChunk: true, tail: false }, { hasNextChunk: true, tail: false, completeSyntax: false }])(
    '无论是否开启 completeSyntax 都修正强调语法中的行内代码：%p',
    (streaming) => {
      expect(getStrongCodeToken(render(streaming))).toBeTruthy();
    },
  );

  it('无 streaming 的无动画模式正常渲染粗体', () => {
    expect(getStrongCodeToken(render(undefined))).toEqual({ type: 'codespan', raw: '`code`', text: 'code' });
  });

  it('光标注入粗体中的最后一个 codespan', () => {
    expect(getStrongCodeToken(render({ hasNextChunk: true, tail: { content: '...' }, completeSyntax: false }))).toEqual(
      {
        type: 'codespan',
        raw: '`code`',
        text: 'code',
        isTail: true,
        tailContent: '...',
      },
    );
  });
});
