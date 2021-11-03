import path from 'path';
import simulate from 'miniprogram-simulate';

// 因 popup 复用 transition，这里不重复测试 transition 逻辑
describe('popup', () => {
  let popupId;
  beforeAll(() => {
    popupId = simulate.load(path.resolve(__dirname, '../popup'), {});
  });

  describe('props', () => {
    it(':position', () => {
      const popupComp = simulate.render(popupId, { position: 'left' });
      popupComp.attach(document.createElement('parent-wrapper'));
      const [popupDom] = popupComp.dom.children[0].children;

      expect(popupDom.className.match(/--position-left/)).toBeTruthy();
    });
    it(':maskTransparent', () => {
      const popupComp = simulate.render(popupId, { maskTransparent: true });
      popupComp.attach(document.createElement('parent-wrapper'));
      const [popupDom] = popupComp.dom.children[0].children;

      expect(popupDom.className.match(/--mask-transparent/)).toBeTruthy();
    });
    it(':maskClosable', async () => {
      const fn = jest.fn();
      const compId = simulate.load({
        usingComponents: {
          't-popup': popupId,
        },
        template:
          '<t-popup maskClosable="{{ maskClosable }}" visible="{{ visible }}" bind:close="onClose">content</t-popup>',
        data: {
          visible: true,
          maskClosable: true,
        },
        methods: {
          onClose: fn,
        },
      });
      const comp = simulate.render(compId);
      comp.attach(document.createElement('parent-wrapper'));

      const maskDom = comp.dom.querySelector('.main--t-popup__mask');

      comp.dispatchEvent.call({ dom: maskDom }, 'tap');
      await simulate.sleep(0);
      expect(fn).toHaveBeenCalledTimes(1);

      comp.setData({ maskClosable: false });
      comp.dispatchEvent.call({ dom: maskDom }, 'tap');
      await simulate.sleep(0);
      expect(fn).toHaveBeenCalledTimes(1);
    });
    it(':customClass', () => {
      const popupComp = simulate.render(popupId, { customClass: 'foo' });
      popupComp.attach(document.createElement('parent-wrapper'));
      const [popupDom] = popupComp.dom.children[0].children;

      expect(popupDom.className.match(/foo/)).toBeTruthy();
    });
    it(':transitionProps', () => {
      jest.useFakeTimers();
      const transitionProps = {
        name: 'foo',
        durations: 3000,
      };

      const popupComp = simulate.render(popupId, { transitionProps });
      popupComp.attach(document.createElement('parent-wrapper'));
      const [popupDom] = popupComp.dom.children[0].children;

      popupComp.setData({ visible: true });

      expect(popupDom.className.match(/foo-enter\s?/)).toBeTruthy();
      expect(popupDom.className.match(/foo-enter-active\s?/)).toBeTruthy();

      jest.advanceTimersByTime(30);
      expect(popupDom.className.match(/foo-enter-to\s?/)).toBeTruthy();

      jest.advanceTimersByTime(2999);
      expect(popupDom.className.match(/foo-enter-to\s?/)).toBeTruthy();

      jest.advanceTimersByTime(1);
      expect(popupDom.className.match(/foo-enter-to\s?/)).toBeFalsy();
      jest.useRealTimers();
    });
  });

  describe('event', () => {
    it('@close', async () => {
      const fn = jest.fn();
      const compId = simulate.load({
        usingComponents: {
          't-popup': popupId,
        },
        template: '<t-popup visible="{{ visible }}" bind:close="onClose">content</t-popup>',
        data: {
          visible: true,
          maskClosable: true,
        },
        methods: {
          onClose: fn,
        },
      });
      const comp = simulate.render(compId);
      comp.attach(document.createElement('parent-wrapper'));

      const maskDom = comp.dom.querySelector('.main--t-popup__mask');

      comp.dispatchEvent.call({ dom: maskDom }, 'tap');
      await simulate.sleep(0);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });
});
