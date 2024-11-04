import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { unitConvert, systemInfo } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-pull-down-refresh`;

@wxComponent()
export default class PullDownRefresh extends SuperComponent {
  pixelRatio = 1; // 像素比(rpx与px在此设备上的比值)

  startPoint: { pageX: number; pageY: number } | null = null; // 下拉开始的起点，主要用于计算下拉高度

  isPulling = false; // 是否下拉中

  /** 开始刷新 - 刷新成功/失败 最大间隔时间setTimeout句柄 */
  maxRefreshAnimateTimeFlag = 0;

  /** 关闭动画耗时setTimeout句柄 */
  closingAnimateTimeFlag = 0;

  /** 恢复刷新状态句柄 */
  refreshStatusTimer = null;

  externalClasses = [`${prefix}-class`, `${prefix}-class-loading`, `${prefix}-class-text`, `${prefix}-class-indicator`];

  options = {
    multipleSlots: true,
    pureDataPattern: /^_/,
  };

  relations: RelationsOptions = {
    '../back-top/back-top': {
      type: 'descendant',
    },
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    barHeight: 0,
    tipsHeight: 0,
    refreshStatus: -1,
    loosing: false,
    enableToRefresh: true,
    scrollTop: 0,
    _maxBarHeight: 0,
    _loadingBarHeight: 0,
  };

  lifetimes = {
    attached() {
      const { screenWidth } = systemInfo;
      const { loadingTexts, maxBarHeight, loadingBarHeight } = this.properties;
      this.setData({
        _maxBarHeight: unitConvert(maxBarHeight),
        _loadingBarHeight: unitConvert(loadingBarHeight),
        loadingTexts:
          Array.isArray(loadingTexts) && loadingTexts.length >= 4
            ? loadingTexts
            : ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'],
      });
      this.pixelRatio = 750 / screenWidth;
    },

    detached() {
      clearTimeout(this.maxRefreshAnimateTimeFlag);
      clearTimeout(this.closingAnimateTimeFlag);
      this.resetTimer();
    },
  };

  observers = {
    value(val) {
      if (!val) {
        clearTimeout(this.maxRefreshAnimateTimeFlag);
        if (this.data.refreshStatus > 0) {
          this.setData({
            refreshStatus: 3,
          });
        }
        this.setData({ barHeight: 0 });
      } else {
        this.doRefresh();
      }
    },
    barHeight(val) {
      this.resetTimer();
      if (val === 0 && this.data.refreshStatus !== -1) {
        this.refreshStatusTimer = setTimeout(() => {
          this.setData({ refreshStatus: -1 });
        }, 240);
      }

      this.setData({ tipsHeight: Math.min(val, this.data._loadingBarHeight) });
    },

    maxBarHeight(v) {
      this.setData({ _maxBarHeight: unitConvert(v) });
    },

    loadingBarHeight(v) {
      this.setData({ _loadingBarHeight: unitConvert(v) });
    },
  };

  methods = {
    resetTimer() {
      if (this.refreshStatusTimer) {
        clearTimeout(this.refreshStatusTimer);
        this.refreshStatusTimer = null;
      }
    },

    onScrollToBottom() {
      this.triggerEvent('scrolltolower');
    },
    onScrollToTop() {
      this.setData({
        enableToRefresh: true,
      });
    },
    onScroll(e) {
      const { scrollTop } = e.detail;

      this.setData({
        enableToRefresh: scrollTop === 0,
      });
      this.triggerEvent('scroll', { scrollTop });
    },
    onTouchStart(e: WechatMiniprogram.Component.TrivialInstance) {
      if (this.isPulling || !this.data.enableToRefresh || this.properties.disabled) return;
      const { touches } = e;
      if (touches.length !== 1) return;
      const { pageX, pageY } = touches[0];

      this.setData({ loosing: false });
      this.startPoint = { pageX, pageY };
      this.isPulling = true;
    },

    onTouchMove(e: WechatMiniprogram.Component.TrivialInstance) {
      if (!this.startPoint || this.properties.disabled) return;

      const { touches } = e;

      if (touches.length !== 1) return;

      const { pageY } = touches[0];
      const offset = pageY - this.startPoint.pageY;

      if (offset > 0) {
        this.setRefreshBarHeight(offset);
      }
    },

    onTouchEnd(e: WechatMiniprogram.Component.TrivialInstance) {
      if (!this.startPoint || this.properties.disabled) return;
      const { changedTouches } = e;
      if (changedTouches.length !== 1) return;
      const { pageY } = changedTouches[0];

      const barHeight = pageY - this.startPoint.pageY;
      this.startPoint = null; // 清掉起点，之后将忽略touchMove、touchEnd事件
      this.isPulling = false;

      this.setData({ loosing: true });

      // 松开时高度超过阈值则触发刷新
      if (barHeight > this.data._loadingBarHeight) {
        this._trigger('change', { value: true });
        this.triggerEvent('refresh');
      } else {
        this.setData({ barHeight: 0 });
      }
    },

    onDragStart(e: WechatMiniprogram.ScrollViewDragStart) {
      const { scrollTop, scrollLeft } = e.detail;

      this.triggerEvent('dragstart', { scrollTop, scrollLeft });
    },

    onDragging(e: WechatMiniprogram.ScrollViewDragging) {
      const { scrollTop, scrollLeft } = e.detail;

      this.triggerEvent('dragging', { scrollTop, scrollLeft });
    },

    onDragEnd(e: WechatMiniprogram.ScrollViewDragEnd) {
      const { scrollTop, scrollLeft } = e.detail;

      this.triggerEvent('dragend', { scrollTop, scrollLeft });
    },

    doRefresh() {
      if (this.properties.disabled) return;
      this.setData({
        barHeight: this.data._loadingBarHeight,
        refreshStatus: 2,
        loosing: true,
      });

      this.maxRefreshAnimateTimeFlag = setTimeout(() => {
        this.maxRefreshAnimateTimeFlag = null;

        if (this.data.refreshStatus === 2) {
          // 超时回调
          this.triggerEvent('timeout');
          this._trigger('change', { value: false });
        }
      }, this.properties.refreshTimeout as any) as any as number;
    },

    setRefreshBarHeight(value: number) {
      const barHeight = Math.min(value, this.data._maxBarHeight);
      const data: Record<string, any> = { barHeight };

      if (barHeight >= this.data._loadingBarHeight) {
        data.refreshStatus = 1;
      } else {
        data.refreshStatus = 0;
      }
      return new Promise((resolve) => {
        this.setData(data, () => resolve(barHeight));
      });
    },

    setScrollTop(scrollTop: number) {
      this.setData({ scrollTop });
    },

    scrollToTop() {
      this.setScrollTop(0);
    },
  };
}
