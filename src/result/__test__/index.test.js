import simulate from 'miniprogram-simulate';
import path from 'path';

describe('result', () => {
  const result = simulate.load(path.resolve(__dirname, `../result`), {
    less: true,
    rootPath: path.resolve(__dirname, '../..'),
  });

  it(':props', () => {
    const id = simulate.load({
      template: `<t-result class="result" title="{{title}}" theme="{{theme}}" description="{{description}}"></t-result>`,
      data: {
        description: 'This is a description',
      },
      usingComponents: {
        't-result': result,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    expect(comp.querySelector('.result').data.description).toBe('This is a description');
    comp.setData({ theme: 'success' });
    expect(comp.querySelector('.result').data.theme).toBe('success');
    comp.setData({ title: 'This is title' });
    expect(comp.querySelector('.result').data.title).toBe('This is title');
  });
});
