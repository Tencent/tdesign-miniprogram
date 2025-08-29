import path from 'path';
import simulate from 'miniprogram-simulate';

describe('result', () => {
  const result = load(path.resolve(__dirname, `../result`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-result class="result" style="{{style}}" customStyle="{{customStyle}}"></t-result>`,
      usingComponents: {
        't-result': result,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $result = comp.querySelector('.result >>> .t-result');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($result.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($result.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
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
