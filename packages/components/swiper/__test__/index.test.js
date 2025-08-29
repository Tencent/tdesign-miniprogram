import path from 'path';
import simulate from 'miniprogram-simulate';

describe('swiper', () => {
  const swiperComplex = load(path.resolve(__dirname, `./base/index`), 't-swiper-complex');

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const comp = simulate.render(swiperComplex);
      comp.attach(document.createElement('parent-wrapper'));

      // expect(comp.toJSON()).toMatchSnapshot();

      const $swiper = comp.querySelector('#swiper1 >>> .t-swiper');
      if (VIRTUAL_HOST) {
        expect($swiper.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`)).toBeTruthy();
      } else {
        expect($swiper.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(':navigation', async () => {
      const comp = simulate.render(swiperComplex);
      comp.attach(document.createElement('parent-wrapper'));
      // link
      await simulate.sleep();
      const $swiperItems = comp.querySelectorAll('#swiper1 >>> .t-swiper__item');
      const swiperItemLength = $swiperItems.length;
      expect(swiperItemLength).toBe(comp.data.swiperList.length);

      expect(comp.querySelector('#swiper1 >>> .t-swiper-nav__fraction').dom.textContent.trim()).toBe(
        `${comp.data.current + 1}/${swiperItemLength}`,
      );

      comp.setData({
        navigation: {
          type: '',
          showControls: true,
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

    it(':nav-btn', async () => {
      const comp = simulate.render(swiperComplex);
      comp.attach(document.createElement('parent-wrapper'));
      const $btnPrev = comp.querySelector('#swiper2 >>> #customNav >>> .t-swiper-nav__btn--prev');
      const $btnNext = comp.querySelector('#swiper2 >>> #customNav >>> .t-swiper-nav__btn--next');

      $btnPrev.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(0); // 首项

      $btnNext.dispatchEvent('tap');
      await simulate.sleep();
      expect(comp.data.current).toBe(1); // 最后一项
    });
  });

  describe('slot', () => {
    it(':navigation', async () => {
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
