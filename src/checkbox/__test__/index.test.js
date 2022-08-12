import simulate from 'miniprogram-simulate';
import path from 'path';

describe('Checkbox', () => {
  const id = simulate.load(path.resolve(__dirname, './index'), { less: true });

  describe('with group', () => {
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
