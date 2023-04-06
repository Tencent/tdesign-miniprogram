import path from 'path';
import simulate from 'miniprogram-simulate';

describe('transition', () => {
  const transitionId = load(path.resolve(__dirname, '../../transition/transition'), 't-transition');
  beforeAll(() => {
    jest.useFakeTimers();
  });

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const comp = simulate.render(transitionId);
      comp.attach(document.createElement('parent-wrapper'));

      const [transitionDom] = comp.dom.children;

      // enter
      comp.setData({
        visible: true,
        style: 'color: red',
        customStyle: 'font-size: 9px',
      });
      expect(transitionDom.style.display).toEqual('');
      // expect(comp.toJSON()).toMatchSnapshot();

      const $transition = comp.querySelector('.t-transition');

      if (VIRTUAL_HOST) {
        expect(
          $transition.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($transition.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(':visible', () => {
      const transitionComp = simulate.render(transitionId);
      transitionComp.attach(document.createElement('parent-wrapper'));

      const [transitionDom] = transitionComp.dom.children;

      // enter
      transitionComp.setData({ visible: true });
      expect(transitionDom.style.display).toEqual('');
      expect(transitionDom.className.match(/fade-enter\s/)).toBeTruthy();
      expect(transitionDom.className.match(/fade-enter-active/)).toBeTruthy();

      // enter to
      jest.runAllTimers();
      expect(transitionDom.className.match(/fade-enter-to/)).toBeTruthy();

      // enter finished
      transitionComp.instance.onTransitionEnd();
      expect(transitionDom.className.match(/fade-(enter|enter-to|enter-active)/)).toBeFalsy();

      // leave
      transitionComp.setData({ visible: false });
      expect(transitionDom.className.match(/leave\s/)).toBeTruthy();
      expect(transitionDom.className.match(/leave-active/)).toBeTruthy();

      // leave to
      jest.runAllTimers();
      expect(transitionDom.className.match(/leave-to/)).toBeTruthy();

      // leave finished
      transitionComp.instance.onTransitionEnd();
      expect(transitionDom.style.display).toEqual('none');
      expect(transitionDom.className.match(/(leave|leave-to|leave-active)/)).toBeFalsy();
    });

    it(':name', () => {
      const transitionComp = simulate.render(transitionId, { name: 'foo' });
      transitionComp.attach(document.createElement('parent-wrapper'));
      const [transitionDom] = transitionComp.dom.children;

      transitionComp.setData({ visible: true });
      jest.runAllTimers();
      expect(transitionDom.className.match(/foo-enter/)).toBeTruthy();
      expect(transitionDom.className.match(/foo-enter-active/)).toBeTruthy();
      expect(transitionDom.className.match(/foo-enter-to/)).toBeTruthy();
    });

    // it(':destroyOnHide', () => {
    //   const transitionComp = simulate.render(transitionId, { destroyOnHide: true });
    //   transitionComp.attach(document.createElement('parent-wrapper'));

    //   transitionComp.setData({ visible: false });
    //   jest.runAllTimers();
    //   transitionComp.instance.onTransitionEnd();

    //   expect(transitionComp.dom.innerHTML).toEqual('');
    // });

    it(':appear', () => {
      const transitionComp = simulate.render(transitionId, { visible: true, appear: true });
      transitionComp.attach(document.createElement('parent-wrapper'));
      const [transitionDom] = transitionComp.dom.children;
      expect(transitionDom.className.match(/enter\s/)).toBeTruthy();
      expect(transitionDom.className.match(/enter-active/)).toBeTruthy();
      jest.runAllTimers();
      expect(transitionDom.className.match(/enter-to/)).toBeTruthy();
    });

    it(':durations', () => {
      const transitionComp = simulate.render(transitionId, { durations: 3000 });
      transitionComp.attach(document.createElement('parent-wrapper'));
      const [transitionDom] = transitionComp.dom.children;

      transitionComp.setData({ visible: true });
      expect(transitionDom.className.match(/enter\s/)).toBeTruthy();
      expect(transitionDom.className.match(/enter-active/)).toBeTruthy();

      jest.advanceTimersByTime(30);
      expect(transitionDom.className.match(/enter-to/)).toBeTruthy();

      jest.advanceTimersByTime(2999);
      expect(transitionDom.className.match(/enter-to/)).toBeTruthy();
      jest.advanceTimersByTime(3000);
      expect(transitionDom.className.match(/enter-to/)).toBeFalsy();
    });
  });
});
