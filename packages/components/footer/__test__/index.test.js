import path from 'path';
import simulate from 'miniprogram-simulate';

describe('Footer', () => {
  const footer = load(path.resolve(__dirname, `../footer`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-footer class="footer" style="{{style}}" customStyle="{{customStyle}}"></t-footer>`,
      usingComponents: {
        't-footer': footer,
      },
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $footer = comp.querySelector('.footer >>> .t-footer');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($footer.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($footer.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });

  it(':base', () => {
    const id = simulate.load({
      template: `<t-footer></t-footer>`,
      usingComponents: {
        't-footer': footer,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    expect(comp.toJSON()).toMatchSnapshot();
  });
});
