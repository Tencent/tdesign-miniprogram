import path from 'path';
import simulate from 'miniprogram-simulate';

describe('popover', () => {
  const popoverId = load(path.resolve(__dirname, '../popover'), 't-popover');

  it('renders content slot & toggles visible', async () => {
    const id = simulate.load({
      template: `<t-popover id="p" placement="top"><view slot="content">content</view>trigger</t-popover>`,
      usingComponents: { 't-popover': popoverId },
    });

    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    if (!VIRTUAL_HOST) {
      // 初始不可见
      expect(comp.querySelector('#p >>> .t-popover__content')).toBeUndefined();
      // 点击触发
      const $trigger = comp.querySelector('#p >>> .t-popover__wrapper');
      $trigger.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(comp.querySelector('#p >>> .t-popover__content')).toBeTruthy();
    }
  });

  it('close on outside tap', async () => {
    const fn = jest.fn();
    const id = simulate.load({
      template: '<t-popover id="p" visible="{{ visible }}" bind:visible-change="onClose">content</t-popover>',
      usingComponents: {
        't-popover': popoverId,
      },
      data: {
        visible: true,
      },
      methods: {
        onClose: fn,
      },
    });
    const comp = simulate.render(id);
    comp.attach(document.createElement('parent-wrapper'));

    if (!VIRTUAL_HOST) {
      const $trigger = comp.querySelector('#p >>> .t-popover__wrapper');
      $trigger.dispatchEvent('tap');
      await simulate.sleep(0);

      const $overlay = comp.querySelector('#p >>> #popover-overlay');
      expect($overlay).toBeTruthy();

      $overlay.dispatchEvent('tap');
      await simulate.sleep(0);

      expect(fn).toHaveBeenCalledTimes(1);
      comp.setData({ visible: false });
      expect(comp.querySelector('#p >>> .t-popover__content')).toBeUndefined();
    }
  });
});
