/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdLoadingProps as LoadingProps } from '../loading/type';

export interface TdPullDownRefreshProps {
  /**
   * 是否禁用下拉刷新
   * @default false
   */
  disabled?: boolean;
  /**
   * iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启
   * @default true
   */
  enableBackToTop?: boolean;
  /**
   * 开启 passive 特性，能优化一定的滚动性能
   * @default false
   */
  enablePassive?: boolean;
  /**
   * 加载中下拉高度，如果值为数字则单位是：'px'
   * @default 50
   */
  loadingBarHeight?: string | number;
  /**
   * 加载loading样式
   * @default {}
   */
  loadingProps?: LoadingProps;
  /**
   * 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成']
   * @default []
   */
  loadingTexts?: string[];
  /**
   * 距底部/右边多远时，触发 scrolltolower 事件
   * @default 50
   */
  lowerThreshold?: string | number;
  /**
   * 最大下拉高度，如果值为数字则单位是：'px'
   * @default 80
   */
  maxBarHeight?: string | number;
  /**
   * 刷新超时时间
   * @default 3000
   */
  refreshTimeout?: number;
  /**
   * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
   * @default ''
   */
  scrollIntoView?: string;
  /**
   * 滚动条显隐控制 (同时开启 enhanced 属性后生效)
   * @default true
   */
  showScrollbar?: boolean;
  /**
   * 刷新成功提示展示时长，单位 'ms'
   * @default 500
   */
  successDuration?: string | number;
  /**
   * 距顶部/左边多远时，触发 scrolltoupper 事件
   * @default 50
   */
  upperThreshold?: string | number;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态
   * @default false
   */
  value?: boolean;
  /**
   * 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态，非受控属性
   * @default false
   */
  defaultValue?: boolean;
  /**
   * 下拉或收起时触发，用户手势往下滑动触发下拉状态，手势松开触发收起状态
   */
  onChange?: (context: { value: boolean }) => void;
  /**
   * 滑动结束事件
   */
  onDragend?: (context: TouchEvent) => void;
  /**
   * 滑动事件
   */
  onDragging?: (context: TouchEvent) => void;
  /**
   * 滑动开始事件
   */
  onDragstart?: (context: TouchEvent) => void;
  /**
   * 结束下拉时触发
   */
  onRefresh?: () => void;
  /**
   * 滚动到页面底部时触发
   */
  onScrolltolower?: () => void;
  /**
   * 刷新超时触发
   */
  onTimeout?: () => void;
}
