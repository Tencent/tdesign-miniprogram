/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPullDownRefreshProps } from './type';
const props: TdPullDownRefreshProps = {
  /** 是否禁用下拉刷新 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启 */
  enableBackToTop: {
    type: Boolean,
    value: true,
  },
  /** 开启 passive 特性，能优化一定的滚动性能 */
  enablePassive: {
    type: Boolean,
    value: false,
  },
  /** 加载loading样式 */
  externalClasses: {
    type: Array,
  },
  /** 加载中下拉高度，如果值为数字则单位是：'px' */
  loadingBarHeight: {
    type: null,
    value: 50,
  },
  /** 加载loading样式 */
  loadingProps: {
    type: Object,
  },
  /** 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'] */
  loadingTexts: {
    type: Array,
    value: [],
  },
  /** 距底部/右边多远时，触发 scrolltolower 事件 */
  lowerThreshold: {
    type: null,
    value: 50,
  },
  /** 最大下拉高度，如果值为数字则单位是：'px' */
  maxBarHeight: {
    type: null,
    value: 80,
  },
  /** 刷新超时时间 */
  refreshTimeout: {
    type: Number,
    value: 3000,
  },
  /** 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 */
  scrollIntoView: {
    type: String,
    value: '',
  },
  /** 滚动条显隐控制 (同时开启 enhanced 属性后生效) */
  showScrollbar: {
    type: Boolean,
    value: true,
  },
  /** 距顶部/左边多远时，触发 scrolltoupper 事件 */
  upperThreshold: {
    type: null,
    value: 50,
  },
  /** 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态 */
  value: {
    type: Boolean,
    value: null,
  },
  /** 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态，非受控属性 */
  defaultValue: {
    type: Boolean,
    value: false,
  },
};

export default props;
