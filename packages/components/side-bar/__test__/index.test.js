import path from 'path';
import simulate from 'miniprogram-simulate';

describe('side-bar', () => {
  const sideBarExample = load(path.resolve(__dirname, `./base/index`), 'side-bar-example');

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const comp = simulate.render(sideBarExample);
      comp.attach(document.createElement('parent-wrapper'));

      // expect(comp.toJSON()).toMatchSnapshot();

      const $sideBar = comp.querySelector('#base >>> .t-side-bar');
      const $sideBarItem = comp.querySelector('#base >>> .t-side-bar-item');
      if (VIRTUAL_HOST) {
        expect(
          $sideBar.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
        expect(
          $sideBarItem.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($sideBar.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
        expect($sideBarItem.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });
  });
});
