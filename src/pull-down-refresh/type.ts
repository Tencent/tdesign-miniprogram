/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { LoadingProps } from '../loading/index';

export interface TdPullDownRefreshProps {
  /**
   * 是否禁用下拉刷新
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向。自 2.27.3 版本开始，若非显式设置为 false，则在显示尺寸大于屏幕 90% 时自动开启
   * @default true
   */
  enableBackToTop?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 开启 passive 特性，能优化一定的滚动性能
   * @default false
   */
  enablePassive?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 加载loading样式
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-loading', 't-class-text', 't-class-indicator'];
  };
  /**
   * 加载中下拉高度，如果值为数字则单位是：'px'
   * @default 50
   */
  loadingBarHeight?: {
    type: null;
    value?: string | number;
  };
  /**
   * 加载loading样式
   */
  loadingProps?: {
    type: ObjectConstructor;
    value?: LoadingProps;
  };
  /**
   * 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成']
   * @default []
   */
  loadingTexts?: {
    type: ArrayConstructor;
    value?: string[];
  };
  /**
   * 距底部/右边多远时，触发 scrolltolower 事件
   * @default 50
   */
  lowerThreshold?: {
    type: null;
    value?: string | number;
  };
  /**
   * 最大下拉高度，如果值为数字则单位是：'px'
   * @default 80
   */
  maxBarHeight?: {
    type: null;
    value?: string | number;
  };
  /**
   * 刷新超时时间
   * @default 3000
   */
  refreshTimeout?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
   * @default ''
   */
  scrollIntoView?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 滚动条显隐控制 (同时开启 enhanced 属性后生效)
   * @default true
   */
  showScrollbar?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 距顶部/左边多远时，触发 scrolltoupper 事件
   * @default 50
   */
  upperThreshold?: {
    type: null;
    value?: string | number;
  };
  /**
   * 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态
   * @default false
   */
  value?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态，非受控属性
   * @default false
   */
  defaultValue?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
