import path from 'path';
import simulate from 'miniprogram-simulate';

// 因 popup 复用 transition，这里不重复测试 transition 逻辑
describe('popup', () => {
  const popupId = load(path.resolve(__dirname, '../../popup/popup'), 't-popup');

  describe('props', () => {
    it(':position', () => {
      const popupComp = simulate.render(popupId, { visible: true, placement: 'left' });
      popupComp.attach(document.createElement('parent-wrapper'));
      const [popupDom] = popupComp.dom.children;

      expect(popupDom.className.match(/--left/)).toBeTruthy();
    });

    it(':overlay', async () => {
      const fn = jest.fn();
      const compId = simulate.load({
        usingComponents: {
          't-popup': popupId,
        },
        template:
          '<t-popup id="popup" showOverlay="{{ showOverlay }}" visible="{{ visible }}" bind:visible-change="onClose">content</t-popup>',
        data: {
          visible: true,
          showOverlay: true,
        },
        methods: {
          onClose: fn,
        },
      });
      const comp = simulate.render(compId);
      comp.attach(document.createElement('parent-wrapper'));

      const $overlay = comp.querySelector('#popup >>> #popup-overlay');

      $overlay.dispatchEvent('tap');
      await simulate.sleep(0);
      expect(fn).toHaveBeenCalledTimes(1);

      comp.setData({ showOverlay: false });
      expect(comp.querySelector('#popup >>> #popup-overlay')).toBeUndefined();
    });

    // it(':customClass', () => {
    //   const popupComp = simulate.render(popupId, { customClass: 'foo' });
    //   popupComp.attach(document.createElement('parent-wrapper'));
    //   const [popupDom] = popupComp.dom.children[0].children;

    //   expect(popupDom.className.match(/foo/)).toBeTruthy();
    // });

    it(':transition', () => {
      jest.useFakeTimers();
      const transitionProps = {
        name: 'foo',
        durations: 3000,
      };

      const popupComp = simulate.render(popupId, { visible: true, ...transitionProps });
      popupComp.attach(document.createElement('parent-wrapper'));
      const [popupDom] = popupComp.dom.children;

      // popupComp.setData({ visible: true });

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
    it('@overlay close', async () => {
      const fn = jest.fn();
      const compId = simulate.load({
        usingComponents: {
          't-popup': popupId,
        },
        template:
          '<t-popup id="popup" closeOnOverlayClick="{{closeOnOverlayClick}}" visible="{{ visible }}" bind:visible-change="onClose">content</t-popup>',
        data: {
          visible: true,
          closeOnOverlayClick: true,
        },
        methods: {
          onClose: fn,
        },
      });
      const comp = simulate.render(compId);
      comp.attach(document.createElement('parent-wrapper'));

      const $overlay = comp.querySelector('#popup >>> #popup-overlay');

      $overlay.dispatchEvent('tap');

      await simulate.sleep(0);

      expect(fn).toHaveBeenCalledTimes(1);

      // test closeOnOverlayClick
      comp.setData({ closeOnOverlayClick: false });

      await simulate.sleep(0);

      $overlay.dispatchEvent('tap');

      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('@close-btn close', async () => {
      const fn = jest.fn();
      let visible = true;
      const compId = simulate.load({
        usingComponents: {
          't-popup': popupId,
        },
        template:
          '<t-popup visible id="popup" closeBtn="{{ closeBtn }}" bind:visible-change="onClose">content</t-popup>',
        data: {
          closeBtn: true,
        },
        methods: {
          onClose(e) {
            fn();
            visible = e.detail.visible;
          },
        },
      });
      const comp = simulate.render(compId);
      comp.attach(document.createElement('parent-wrapper'));

      const $closeBtn = comp.querySelector('#popup >>> .t-popup__close');

      $closeBtn.dispatchEvent('tap');

      await simulate.sleep(10);

      expect(fn).toHaveBeenCalledTimes(1);
      expect(visible).toBeFalsy();
    });
  });
});
