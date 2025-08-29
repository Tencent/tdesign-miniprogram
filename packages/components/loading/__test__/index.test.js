import path from 'path';
import simulate from 'miniprogram-simulate';

describe('loading', () => {
  const loading = load(path.resolve(__dirname, `../loading`));

  describe('props', () => {
    it(`: style && customStyle`, async () => {
      const id = simulate.load({
        template: `<t-loading class="loading" style="{{style}}" customStyle="{{customStyle}}"></t-loading>`,
        usingComponents: {
          't-loading': loading,
        },
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $loading = comp.querySelector('.loading >>> .class');
      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect(
          $loading.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($loading.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(`: loading`, async () => {
      const id = simulate.load({
        template: `<t-loading class="base" loading="{{loading}}" delay="{{delay}}"></t-loading>`,
        data: {
          loading: true,
          delay: 0,
        },
        methods: {},
        usingComponents: {
          't-loading': loading,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      await simulate.sleep(10);
      comp.setData({ loading: true, delay: 0 });

      await simulate.sleep(10);
      comp.setData({ loading: true, delay: 1 });

      // loading = `false`, 判断 show = false
      await simulate.sleep(10);
      comp.setData({ loading: false });
      expect(comp.data.show).not.toBeTruthy();

      const $loading = comp.querySelector('.base >>> .t-loading');
      expect($loading.dom.style.display).toBe('none');
    });

    it(`: theme`, () => {
      const id = simulate.load({
        template: `
        <t-loading class="base" theme="{{theme}}" loading="{{loading}}"></t-loading>
        `,
        data: {
          theme: 'circular',
          loading: true,
        },
        methods: {},
        usingComponents: {
          't-loading': loading,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // 结构检测断言
      // theme = `circular`
      const indicator = comp.querySelector('.base >>> .t-class-indicator ');
      expect(indicator.dom.getAttribute('class').includes('t-loading__spinner--circular')).toBeTruthy();

      // theme = `error`, 判断 t-loading__bar 模块是否按预期不存在
      comp.setData({ theme: 'error' });
      const loadingBar = comp.querySelector('.base >>> .t-loading__bar');
      expect(loadingBar).toBeUndefined();
    });

    it(`: size`, () => {
      const id = simulate.load({
        template: `
        <t-loading class="base" size="{{size}}" loading="{{loading}}"></t-loading>
        `,
        data: {
          size: '44rpx',
          loading: true,
        },
        methods: {},
        usingComponents: {
          't-loading': loading,
        },
      });

      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));

      // 样式检测断言
      // 判断 indicator size是否按预期为20px
      comp.setData({ size: '20px' });
      const indicator = comp.querySelector('.base >>> .t-class-indicator ');
      expect(window.getComputedStyle(indicator.dom).width).toBe('20px');
    });
  });
});
