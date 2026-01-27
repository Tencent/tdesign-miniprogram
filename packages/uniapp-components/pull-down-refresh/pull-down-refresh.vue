<template>
  <scroll-view
    :style="tools._style([customStyle, 'max-height: calc(100vh - ' + distanceTop + 'px)'])"
    :class="classPrefix + ' ' + tClass"
    type="list"
    :scroll-top="scrollTop"
    scroll-y
    :enable-back-to-top="enableBackToTop"
    :enable-passive="enablePassive"
    :lower-threshold="lowerThreshold"
    :upper-threshold="upperThreshold"
    :scroll-into-view="scrollIntoView"
    :show-scrollbar="showScrollbar"
    enhanced
    scroll-with-animation
    :bounces="false"
    :throttle="false"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @scroll="onScroll"
    @scrolltoupper="onScrollToTop"
    @scrolltolower="onScrollToBottom"
  >
    <slot name="header" />
    <view
      :class="classPrefix + '__track ' + (classPrefix + '__track--' + (loosing ? 'loosing' : ''))"
      :style="barHeight > 0 ? 'transform: translate3d(0, ' + barHeight + 'px, 0);' : ''"
    >
      <view
        :class="classPrefix + '__tips ' + (classPrefix + '__tips--' + (loosing ? 'loosing' : ''))"
        :style="'height: ' + tipsHeight + 'px'"
        aria-live="polite"
      >
        <t-loading
          v-if="refreshStatus === REFRESH_STATUS_MAP.LOADING"
          :delay="loadingProps.delay || 0"
          :duration="loadingProps.duration || 800"
          :indicator="loadingProps.indicator || true"
          :layout="loadingProps.layout || 'horizontal'"
          :loading="loadingProps.loading || true"
          :pause="loadingProps.pause || false"
          :progress="loadingProps.progress || 0"
          :reverse="loadingProps.reverse || false"
          :size="loadingProps.size || '50rpx'"
          :text="loadingProps.text || dataLoadingTexts[refreshStatus]"
          :theme="loadingProps.theme || 'circular'"
          :t-class-indicator="tClassIndicator"
          :t-class="tClassLoading"
        />
        <view
          v-else-if="refreshStatus > REFRESH_STATUS_MAP.INITIAL"
          :class="classPrefix + '__text ' + tClassText"
        >
          {{ dataLoadingTexts[refreshStatus] }}
        </view>
      </view>
      <slot />
    </view>
  </scroll-view>
</template>
<script>
import TLoading from '../loading/loading';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getRect, systemInfo, unitConvert } from '../common/utils';
import tools from '../common/utils.wxs';
import { getObserver } from '../common/wechat';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-pull-down-refresh`;
const defaultLoadingTexts = ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'];
const REFRESH_STATUS_MAP = {
  INITIAL: -1,
  PULLING: 0,
  LOSING: 1,
  LOADING: 2,
  SUCCESS: 3,
};


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-loading`,
    `${prefix}-class-text`,
    `${prefix}-class-indicator`,
  ],
  mixins: [
    ParentMixin(RELATION_MAP.BackTop),
  ],
  components: {
    TLoading,
  },
  props: {
    ...props,
  },
  emits: [
    'scrolltolower',
    'scroll',
    'change',
    'refresh',
    'dragstart',
    'dragging',
    'dragend',
    'timeout',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      distanceTop: 0,
      barHeight: 0,
      tipsHeight: 0,
      refreshStatus: REFRESH_STATUS_MAP.INITIAL,
      loosing: false,
      enableToRefresh: true,
      scrollTop: 0,
      _maxBarHeight: 0,
      _loadingBarHeight: 0,

      pixelRatio: 1,
      startPoint: null,
      isPulling: false,
      maxRefreshAnimateTimeFlag: 0,
      closingAnimateTimeFlag: 0,
      refreshStatusTimer: null,

      tools,
      REFRESH_STATUS_MAP,
    };
  },
  computed: {
    touchEnable() {
      return this.refreshStatus !== REFRESH_STATUS_MAP.LOADING
        && this.refreshStatus !== REFRESH_STATUS_MAP.SUCCESS
        && !this.disabled;
    },
  },
  watch: {
    value(val) {
      if (!val) {
        clearTimeout(this.maxRefreshAnimateTimeFlag);

        if (this.refreshStatus > REFRESH_STATUS_MAP.PULLING) {
          this.refreshStatus = REFRESH_STATUS_MAP.SUCCESS;
        }

        clearTimeout(this.successTimer);

        this.successTimer = setTimeout(() => {
          this.barHeight = 0;
          this.refreshStatus = REFRESH_STATUS_MAP.INITIAL;
        }, unitConvert(this.successDuration));
      } else {
        this.doRefresh();
      }
    },

    barHeight(val) {
      this.resetTimer();
      if (val === 0 && this.refreshStatus !== REFRESH_STATUS_MAP.INITIAL) {
        this.refreshStatusTimer = setTimeout(() => {
          this.refreshStatus = REFRESH_STATUS_MAP.INITIAL;
        }, 240);
      }

      this.tipsHeight = Math.min(val, this._loadingBarHeight);
    },

    maxBarHeight(v) {
      this._maxBarHeight = unitConvert(v);
    },

    loadingBarHeight(v) {
      this._loadingBarHeight = unitConvert(v);
    },
  },
  mounted() {
    const { screenWidth } = systemInfo;
    const { loadingTexts, maxBarHeight, loadingBarHeight } = this;
    const isCustomLoadingTexts = Array.isArray(loadingTexts) && loadingTexts.length >= 4;

    this._maxBarHeight = unitConvert(maxBarHeight);
    this._loadingBarHeight = unitConvert(loadingBarHeight);
    this.dataLoadingTexts = isCustomLoadingTexts ? loadingTexts : defaultLoadingTexts;

    this.pixelRatio = 750 / screenWidth;

    this.updateDistanceTop();
  },

  beforeUnMount() {
    clearTimeout(this.maxRefreshAnimateTimeFlag);
    clearTimeout(this.closingAnimateTimeFlag);
    this.resetTimer();
  },
  methods: {
    updateDistanceTop() {
      const update = (top) => {
        this.distanceTop = top;
      };

      getRect(this, `.${name}`).then((rect) => {
        if (rect.top) {
          update(rect.top);
          return;
        }

        getObserver(this, `.${name}`).then((res) => {
          if (res.intersectionRatio > 0) {
            update(res.boundingClientRect.top);
          }
        });
      });
    },

    resetTimer() {
      if (this.refreshStatusTimer) {
        clearTimeout(this.refreshStatusTimer);
        this.refreshStatusTimer = null;
      }
    },

    onScrollToBottom() {
      this.$emit('scrolltolower');
    },

    onScrollToTop() {
      this.enableToRefresh = true;
    },

    onScroll(e) {
      const { scrollTop } = e.detail;

      this.enableToRefresh = scrollTop === 0;
      this.$emit('scroll', { scrollTop });
    },

    onTouchStart(e) {
      if (this.isPulling || !this.enableToRefresh || !this.touchEnable) return;

      const { touches } = e;
      this.$emit('dragstart', e);

      if (touches.length !== 1) return;
      const { pageX, pageY } = touches[0];

      this.loosing = false;
      this.startPoint = { pageX, pageY };
      this.isPulling = true;
    },

    onTouchMove(e) {
      if (!this.startPoint || !this.touchEnable) return;


      const { touches } = e;

      if (touches.length !== 1) return;

      const { pageY } = touches[0];
      const offset = pageY - this.startPoint.pageY;

      if (offset > 0) {
        this.setRefreshBarHeight(offset);
      }
      this.$emit('dragging', e);
    },

    onTouchEnd(e) {
      if (!this.startPoint || this.disabled) return;
      const { changedTouches } = e;
      if (changedTouches.length !== 1) return;
      const { pageY } = changedTouches[0];

      const barHeight = pageY - this.startPoint.pageY;
      this.startPoint = null; // 清掉起点，之后将忽略touchMove、touchEnd事件
      this.isPulling = false;

      this.loosing = true;

      // 松开时高度超过阈值则触发刷新
      if (barHeight > this._loadingBarHeight) {
        this._trigger('change', { value: true });
        this.$emit('refresh');
      } else {
        this.barHeight = 0;
      }

      this.$emit('dragend', e);
    },

    doRefresh() {
      if (this.disabled) return;
      this.barHeight = this._loadingBarHeight;
      this.refreshStatus = REFRESH_STATUS_MAP.LOADING;
      this.loosing = true;

      this.maxRefreshAnimateTimeFlag = setTimeout(() => {
        this.maxRefreshAnimateTimeFlag = null;

        if (this.refreshStatus === REFRESH_STATUS_MAP.LOADING) {
          // 超时回调
          this.$emit('timeout');
          this._trigger('change', { value: false });
        }
      }, this.refreshTimeout);
    },

    setRefreshBarHeight(value) {
      const barHeight = Math.min(value, this._maxBarHeight);
      const data = { barHeight };

      if (barHeight >= this._loadingBarHeight) {
        data.refreshStatus = REFRESH_STATUS_MAP.LOSING;
      } else {
        data.refreshStatus = REFRESH_STATUS_MAP.PULLING;
      }
      return new Promise((resolve) => {
        Object.keys(data).forEach((key) => {
          this[key] = data[key];
        });
        setTimeout(() => {
          resolve(barHeight);
        }, 20);
      });
    },

    setScrollTop(scrollTop) {
      this.scrollTop = scrollTop;
    },

    scrollToTop() {
      let parsed = false;

      // #ifdef APP-PLUS || MP
      this.scrollTop = 0;
      setTimeout(() => {
        this.scrollTop = 0.01;
      });
      parsed = true;
      // #endif

      // #ifdef H5
      // https://yuanbao.tencent.com/chat/naQivTmsDa/c10ae37f-c66f-4489-ac4e-e72710a3f65a
      this.scrollTop = this.scrollTop === 0 ? 0.01 : 0;
      parsed = true;
      // #endif

      if (!parsed) {
        this.setScrollTop(0);
      }
    },
  },
});
</script>
<style scoped>
@import './pull-down-refresh.css';
</style>
