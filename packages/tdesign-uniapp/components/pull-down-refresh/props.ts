/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdPullDownRefreshProps } from './type';
export default {
  /** 是否禁用下拉刷新 */
  disabled: Boolean,
  /** iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启 */
  enableBackToTop: {
    type: Boolean,
    default: true,
  },
  /** 开启 passive 特性，能优化一定的滚动性能 */
  enablePassive: Boolean,
  /** 加载中下拉高度，如果值为数字则单位是：'px' */
  loadingBarHeight: {
    type: [String, Number],
    default: 50 as TdPullDownRefreshProps['loadingBarHeight'],
  },
  /** 加载loading样式 */
  loadingProps: {
    type: Object,
    default: () => ({}),
  },
  /** 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'] */
  loadingTexts: {
    type: Array,
    default: (): TdPullDownRefreshProps['loadingTexts'] => [],
  },
  /** 距底部/右边多远时，触发 scrolltolower 事件 */
  lowerThreshold: {
    type: [String, Number],
    default: 50 as TdPullDownRefreshProps['lowerThreshold'],
  },
  /** 最大下拉高度，如果值为数字则单位是：'px' */
  maxBarHeight: {
    type: [String, Number],
    default: 80 as TdPullDownRefreshProps['maxBarHeight'],
  },
  /** 刷新超时时间 */
  refreshTimeout: {
    type: Number,
    default: 3000,
  },
  /** 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 */
  scrollIntoView: {
    type: String,
    default: '',
  },
  /** 滚动条显隐控制 (同时开启 enhanced 属性后生效) */
  showScrollbar: {
    type: Boolean,
    default: true,
  },
  /** 刷新成功提示展示时长，单位 'ms' */
  successDuration: {
    type: [String, Number],
    default: 500 as TdPullDownRefreshProps['successDuration'],
  },
  /** 距顶部/左边多远时，触发 scrolltoupper 事件 */
  upperThreshold: {
    type: [String, Number],
    default: 50 as TdPullDownRefreshProps['upperThreshold'],
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态 */
  value: {
    type: Boolean,
    default: undefined,
  },
  /** 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态，非受控属性 */
  defaultValue: Boolean,
  /** 下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 滑动结束事件 */
  onDragend: {
    type: Function,
    default: () => ({}),
  },
  /** 滑动事件 */
  onDragging: {
    type: Function,
    default: () => ({}),
  },
  /** 滑动开始事件 */
  onDragstart: {
    type: Function,
    default: () => ({}),
  },
  /** 结束下拉时触发 */
  onRefresh: {
    type: Function,
    default: () => ({}),
  },
  /** 滚动到页面底部时触发 */
  onScrolltolower: {
    type: Function,
    default: () => ({}),
  },
  /** 刷新超时触发 */
  onTimeout: {
    type: Function,
    default: () => ({}),
  },
};
