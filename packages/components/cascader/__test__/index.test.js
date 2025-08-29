import path from 'path';
import simulate from 'miniprogram-simulate';

describe('cascader', () => {
  const cascader = load(path.resolve(__dirname, `../cascader`));

  it(`: style && customStyle`, async () => {
    const id = simulate.load({
      template: `<t-cascader class="cascader" style="{{style}}" customStyle="{{customStyle}}"></t-cascader>`,
      data: {
        style: 'color: red',
        customStyle: 'font-size: 9px',
      },

      usingComponents: {
        't-cascader': cascader,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));
    const $cascader = comp.querySelector('.cascader >>> .t-cascader');
    // expect(comp.toJSON()).toMatchSnapshot();
    if (VIRTUAL_HOST) {
      expect($cascader.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
    } else {
      expect($cascader.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
    }
  });
});
