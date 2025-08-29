import path from 'path';
import simulate from 'miniprogram-simulate';

describe('tree-select', () => {
  const treeSelect = load(path.resolve(__dirname, `../tree-select`));

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-tree-select class="tree-select" style="{{style}}" customStyle="{{customStyle}}"></t-tree-select>`,
        usingComponents: {
          't-tree-select': treeSelect,
        },
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $treeSelect = comp.querySelector('.tree-select >>> .t-tree-select');
      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect(
          $treeSelect.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($treeSelect.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });
  });
});
