/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { LoadingProps } from '../loading/index';

export interface TdPullDownRefreshProps {
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
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
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
   * 最大下拉高度，如果值为数字则单位是：'px'
   * @default 80
   */
  maxBarHeight?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
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
