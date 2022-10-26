import simulate from 'miniprogram-simulate';
import path from 'path';

describe('swiper', () => {
  const swiperComplex = load(path.resolve(__dirname, `./base/index`), 't-swiper-complex');

  const createSelectorQuery = {
    in() {
      return this;
    },
    select() {
      return this;
    },
    boundingClientRect(fn) {
      fn({ width: 375, height: 200 });
      return this;
    },
    exec() {
      return this;
    },
  };
  const mockFn = jest.spyOn(wx, 'createSelectorQuery');

  mockFn.mockImplementation(() => createSelectorQuery);

  describe('props', () => {
    it(': navigation', async () => {
      const comp = simulate.render(swiperComplex);
      comp.attach(document.createElement('parent-wrapper'));
      // link
      await simulate.sleep();
      const $swiperItems = comp.querySelectorAll('#swiper1 >>> .t-swiper-item');
      const swiperItemLength = $swiperItems.length;
      expect(swiperItemLength).toBe(comp.data.swiperList.length);

      const $swiperNav = comp.querySelector('#swiper1 >>> #swiperNav >>> .t-swiper-nav');
      expect($swiperNav).toBeDefined();

      expect(comp.querySelector('#swiper1 >>> .t-swiper-nav__fraction').dom.textContent.trim()).toBe(
        `${comp.data.current + 1}/${swiperItemLength}`,
      );

      comp.setData({
        navigation: {
          type: '',
          hasNavBtn: true,
        },
      });

      const $btnPrev = comp.querySelector('#swiper1 >>> .t-swiper-nav__btn--prev');
      const $btnNext = comp.querySelector('#swiper1 >>> .t-swiper-nav__btn--next');

      $btnNext.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(2);
      $btnPrev.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(1);
    });

    it(': direction', async () => {
      const comp = simulate.render(swiperComplex);
      comp.attach(document.createElement('parent-wrapper'));
      await simulate.sleep();
      comp.setData({
        direction: 'vertical',
        autoplay: true,
      });
      expect(comp.toJSON()).toMatchSnapshot();
      const $swiperItems = comp.querySelectorAll('#swiper1 >>> .t-swiper-item');
      $swiperItems.forEach((item, index) => {
        expect(item.dom.getAttribute('style')).toContain(`transform: translate(0px, ${100 * index}%) translateZ(0px);`);
      });
    });

    it(': unlink', async () => {
      const comp = simulate.render(swiperComplex);
      comp.attach(document.createElement('parent-wrapper'));
      await simulate.sleep();
      expect(comp.querySelectorAll('#swiper1 >>> .t-swiper-item').length).toBe(comp.data.swiperList.length);

      comp.setData({
        autoplay: true,
        interval: 80,
        navigation: {
          type: '',
          hasNavBtn: true,
        },
        swiperList: comp.data.swiperList2, // item更新后，current 为 0
      });

      await simulate.sleep(80);
      expect(comp.querySelectorAll('#swiper1 >>> .t-swiper-item').length).toBe(comp.data.swiperList2.length);

      const $btnPrev = comp.querySelector('#swiper1 >>> .t-swiper-nav__btn--prev');
      const $btnNext = comp.querySelector('#swiper1 >>> .t-swiper-nav__btn--next');
      $btnPrev.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(comp.data.swiperList2.length - 1); // 最后一项
      $btnNext.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(0); // 首项
    });
  });

  describe('slot', () => {
    it(': navigation', async () => {
      const comp = simulate.render(swiperComplex);
      comp.attach(document.createElement('parent-wrapper'));
      await simulate.sleep();

      const $swiperNav = comp.querySelector('#swiper2 >>> #customNav');
      expect($swiperNav).toBeDefined();

      const $btnPrev = comp.querySelector('#swiper2 >>> .t-swiper-nav__btn--prev');
      $btnPrev.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(0);
      $btnPrev.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(comp.data.swiperList2.length - 1);
    });
  });
});
