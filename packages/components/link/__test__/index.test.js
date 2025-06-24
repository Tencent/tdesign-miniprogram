import path from 'path';
import simulate from 'miniprogram-simulate';

describe('link', () => {
  const link = load(path.resolve(__dirname, `../link`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-link class="link" style="{{style}}" customStyle="{{customStyle}}"></t-link>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },

      usingComponents: {
        't-link': link,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $link = comp.querySelector('.link >>> .t-link');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($link.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($link.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });
});
