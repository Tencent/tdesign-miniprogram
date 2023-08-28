import path from 'path';
import simulate from 'miniprogram-simulate';

describe('pull-down-refresh', () => {
  const pullDownRefresh = load(path.resolve(__dirname, `../pull-down-refresh`), 't-pull-down-refresh');

  describe('props', () => {
    it(`:style`, async () => {
      const id = simulate.load({
        template: `<t-pull-down-refresh class="pull-down-refresh" style="{{style}}" customStyle="{{customStyle}}"></t-pull-down-refresh>`,
        usingComponents: {
          't-pull-down-refresh': pullDownRefresh,
        },
        data: {
          style: 'color: red',
          customStyle: 'font-size: 9px',
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      const $pullDownRefresh = comp.querySelector('.pull-down-refresh >>> .t-pull-down-refresh');
      // expect(comp.toJSON()).toMatchSnapshot();
      if (VIRTUAL_HOST) {
        expect(
          $pullDownRefresh.dom.getAttribute('style').includes(`${comp.data.style}; ${comp.data.customStyle}`),
        ).toBeTruthy();
      } else {
        expect($pullDownRefresh.dom.getAttribute('style').includes(`${comp.data.customStyle}`)).toBeTruthy();
      }
    });

    it(':maxBarHeight', async () => {
      const id = simulate.load({
        template: `<t-pull-down-refresh
          id="t-pull-down-refresh"
          value="{{value}}"
          refresh-timeout="{{refreshTimeout}}"
          loading-bar-height="{{loadingBarHeight}}"
          max-bar-height="{{maxBarHeight}}"
          loadingProps="{{loadingProps}}"
          loadingTexts="{{['下拉刷新', '松手刷新', '正在刷新', '刷新完成']}}"
        ></t-pull-down-refresh>`,
        usingComponents: {
          't-pull-down-refresh': pullDownRefresh,
        },
        data: {
          refreshTimeout: 40,
          loadingBarHeight: 20,
          maxBarHeight: 80,
          value: false,
          loadingProps: {
            size: '50rpx',
          },
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      await simulate.sleep(240); // 等待 close 执行完毕
      const $pullDownRefresh = comp.querySelector('#t-pull-down-refresh');
      const $tips = $pullDownRefresh.querySelector('.t-pull-down-refresh__tips');
      expect($tips.dom.getAttribute('style').includes(`${comp.data.loadingBarHeight}px`)).toBeTruthy();
      // expect(comp.toJSON()).toMatchSnapshot();
    });
  });
  describe('event', () => {
    it(':change', async () => {
      const handleRefresh = jest.fn();
      const handleTimeout = jest.fn();
      const handleChange = jest.fn();
      const id = simulate.load({
        template: `<t-pull-down-refresh
          id="t-pull-down-refresh"
          value="{{value}}"
          refresh-timeout="{{refreshTimeout}}"
          loading-bar-height="{{loadingBarHeight}}"
          max-bar-height="{{maxBarHeight}}"
          loadingProps="{{loadingProps}}"
          loadingTexts="{{['下拉刷新', '松手刷新', '正在刷新', '刷新完成']}}"
          bind:refresh="handleRefresh"
          bind:timeout ="handleTimeout"
          bind:change="handleChange"
        />`,
        usingComponents: {
          't-pull-down-refresh': pullDownRefresh,
        },
        data: {
          refreshTimeout: 40,
          loadingBarHeight: 25,
          maxBarHeight: 80,
          value: false,
          loadingProps: {
            size: '50rpx',
          },
        },
        methods: {
          handleRefresh,
          handleTimeout,
          handleChange,
        },
      });
      const comp = simulate.render(id);
      comp.attach(document.createElement('parent-wrapper'));
      await simulate.sleep(240);
      const $pullDownRefresh = comp.querySelector('#t-pull-down-refresh');
      const $scrollView = $pullDownRefresh.querySelector('.t-pull-down-refresh');

      // scroll
      simulate.scroll($scrollView, 10, 1);
      await simulate.sleep();
      expect($scrollView.dom.scrollTop).toEqual(10);
      $scrollView.dispatchEvent('touchstart');

      // onScrollToTop
      $scrollView.dispatchEvent('scrolltoupper');
      await simulate.sleep();
      $scrollView.dispatchEvent('touchstart');

      const move1 = async () => {
        $scrollView.dispatchEvent('touchstart', {
          touches: [{ x: 0, y: 10 }],
        });
        $scrollView.dispatchEvent('touchmove', {
          touches: [{ x: 0, y: 30 }],
        });
        $scrollView.dispatchEvent('touchend', {
          changedTouches: [{ x: 0, y: 30 }],
        });
      };
      move1();
      await simulate.sleep(300);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleRefresh).toHaveBeenCalledTimes(1);
      expect(handleTimeout).toHaveBeenCalledTimes(0);

      comp.setData({
        maxBarHeight: 10,
        loadingBarHeight: 30,
      });
      await simulate.sleep(240);
      // to next
      const move2 = () => {
        $scrollView.dispatchEvent('touchstart', {
          touches: [{ x: 0, y: 10 }],
        });
        $scrollView.dispatchEvent('touchmove', {
          touches: [{ x: 0, y: 30 }],
        });
        $scrollView.dispatchEvent('touchend');
      };
      move2();
      await simulate.sleep(300);
      expect(handleChange).toHaveBeenCalledTimes(1);

      const move3 = () => {
        $scrollView.dispatchEvent('touchstart');
        $scrollView.dispatchEvent('touchmove');
        $scrollView.dispatchEvent('touchend');
      };
      move3();
      await simulate.sleep(300);

      const move4 = () => {
        $scrollView.dispatchEvent('touchstart', { touches: [] });
        $scrollView.dispatchEvent('touchmove', { touches: [] });
        $scrollView.dispatchEvent('touchend', { changedTouches: [] });
      };
      move4();
      await simulate.sleep(300);
      expect(handleChange).toHaveBeenCalledTimes(1);

      comp.detach();
    });
  });
});
