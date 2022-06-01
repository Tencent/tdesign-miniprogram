import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-pull-down-refresh`;

@wxComponent()
export default class PullDownRefresh extends SuperComponent {
  pixelRatio = 1; // 像素比(rpx与px在此设备上的比值)

  startPoint: { pageX: number; pageY: number } | null = null; // 下拉开始的起点，主要用于计算下拉高度

  isPulling = false; // 是否下拉中

  maxBarHeight: number = 0; // 最大下拉高度，单位 rpx

  // 触发刷新的下拉高度，单位rpx
  // 松开时下拉高度大于这个值即会触发刷新，触发刷新后松开，会恢复到这个高度并保持，直到刷新结束
  loadingBarHeight = 200;

  /** 开始刷新 - 刷新成功/失败 最大间隔时间setTimeout句柄 */
  maxRefreshAnimateTimeFlag = 0;

  /** 关闭动画耗时setTimeout句柄 */
  closingAnimateTimeFlag = 0;

  externalClasses = [`${prefix}-class`, `${prefix}-class-loading`, `${prefix}-class-tex`, `${prefix}-class-indicator`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    barHeight: 0,
    refreshStatus: -1,
    loosing: false,
    enableToRefresh: true,
  };

  lifetimes = {
    attached() {
      const { screenWidth } = wx.getSystemInfoSync();
      const { maxBarHeight, loadingBarHeight } = this.properties;

      this.pixelRatio = 750 / screenWidth;

      if (maxBarHeight) {
        this.maxBarHeight = this.toRpx(maxBarHeight);
      }

      if (loadingBarHeight) {
        this.setData({
          computedLoadingBarHeight: this.toRpx(loadingBarHeight),
        });
        this.loadingBarHeight = this.toRpx(loadingBarHeight);
      }
    },

    detached() {
      clearTimeout(this.maxRefreshAnimateTimeFlag);
      clearTimeout(this.closingAnimateTimeFlag);
    },
  };

  observers = {
    value(val) {
      if (!val) {
        clearTimeout(this.maxRefreshAnimateTimeFlag);
        this.setData({ refreshStatus: 3 });
        this.close();
      }
    },
    maxBarHeight(val) {
      this.maxBarHeight = this.toRpx(val);
    },
    loadingBarHeight(val) {
      this.setData({
        computedLoadingBarHeight: this.toRpx(val),
      });
      this.loadingBarHeight = this.toRpx(val);
    },
  };

  methods = {
    onScrollToTop() {
      this.setData({
        enableToRefresh: true,
      });
    },
    onScroll(e) {
      this.setData({
        enableToRefresh: e.detail.scrollTop === 0,
      });
    },
    onTouchStart(e: WechatMiniprogram.Component.TrivialInstance) {
      if (this.isPulling || !this.data.enableToRefresh) return;
      const { touches } = e;
      if (touches.length !== 1) return;
      const { pageX, pageY } = touches[0];

      this.setData({ loosing: false });
      this.startPoint = { pageX, pageY };
      this.isPulling = true;
    },

    onTouchMove(e: WechatMiniprogram.Component.TrivialInstance) {
      if (!this.startPoint) return;

      const { touches } = e;

      if (touches.length !== 1) return;

      const { pageY } = touches[0];
      const offset = pageY - this.startPoint.pageY;
      const barHeight = this.toRpx(offset);

      if (barHeight > 0) {
        if (barHeight > this.maxBarHeight) {
          // 限高
          this.setRefreshBarHeight(this.maxBarHeight);
          // this.startPoint.pageY = pageY - this.toPx(this.maxBarHeight); // 限高的同时修正起点，避免触摸点上移时无效果
        } else {
          this.setRefreshBarHeight(barHeight);
        }
      }
    },

    onTouchEnd(e: WechatMiniprogram.Component.TrivialInstance) {
      if (!this.startPoint) return;
      const { changedTouches } = e;
      if (changedTouches.length !== 1) return;
      const { pageY } = changedTouches[0];

      const barHeight = this.toRpx(pageY - this.startPoint.pageY);
      this.startPoint = null; // 清掉起点，之后将忽略touchMove、touchEnd事件

      this.setData({ loosing: true });

      // 松开时高度超过阈值则触发刷新
      if (barHeight > this.loadingBarHeight) {
        this.setData({
          barHeight: this.loadingBarHeight,
          refreshStatus: 2,
        });

        this.triggerEvent('change', { value: true });
        this.triggerEvent('refresh');
        this.maxRefreshAnimateTimeFlag = setTimeout(() => {
          this.maxRefreshAnimateTimeFlag = null;

          if (this.data.refreshStatus === 2) {
            // 超时回调
            this.triggerEvent('timeout');
            this.close(); // 超时仍未被回调，则直接结束下拉
          }
        }, this.properties.refreshTimeout as any) as any as number;
      } else {
        this.close();
      }
    },

    toRpx(v: number | string): number {
      if (typeof v === 'number') return v * this.pixelRatio;
      return parseInt(v, 10);
    },

    toPx(v: number) {
      return v / this.pixelRatio;
    },

    setRefreshBarHeight(barHeight: number) {
      const data: Record<string, any> = { barHeight };
      if (barHeight >= this.loadingBarHeight) {
        data.refreshStatus = 1;
      } else {
        data.refreshStatus = 0;
      }
      return new Promise((resolve) => {
        this.setData(data, () => resolve(barHeight));
      });
    },

    close() {
      const animationDuration = 240;

      this.setData({ barHeight: 0 });
      this.triggerEvent('change', { value: false });
      this.closingAnimateTimeFlag = setTimeout(() => {
        this.closingAnimateTimeFlag = null;
        this.setData({ refreshStatus: -1 });
        this.isPulling = false; // 退出下拉状态
      }, animationDuration) as any as number;
    },
  };
}
