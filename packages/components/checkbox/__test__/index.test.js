import path from 'path';
import simulate from 'miniprogram-simulate';

describe('Checkbox', () => {
  const id = load(path.resolve(__dirname, './index'));

  describe('with group', () => {
    it(`: style && customStyle`, async () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const group = comp.querySelector('.group >>> .t-checkbox-group');
      const a = comp.querySelector('.a >>> .t-checkbox');

      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect(group.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
        expect(a.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        expect(group.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
        expect(a.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(':checked', async () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const group = comp.querySelector('.group');
      const a = comp.querySelector('.a');

      expect(a.data.checked).toBeTruthy();

      const b = comp.querySelector('.b >>> .t-checkbox__content');

      b.dispatchEvent('tap');

      await simulate.sleep(10);

      expect(group.data.value.length).toBe(2);

      b.dispatchEvent('tap');

      await simulate.sleep(10);

      expect(group.data.value.length).toBe(1);
    });

    it(':max', async () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      comp.setData({ max: 1 });

      const b = comp.querySelector('.b >>> .t-checkbox__content');

      b.dispatchEvent('tap');

      await simulate.sleep(10);

      expect(comp.data.value.length).toBe(1);
    });

    it(':checkall', async () => {
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      const d = comp.querySelector('.d >>> .t-checkbox__content');

      d.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(comp.data.value.length).toBe(4);

      d.dispatchEvent('tap');
      await simulate.sleep(10);
      expect(comp.data.value.length).toBe(0);
    });
  });
});
