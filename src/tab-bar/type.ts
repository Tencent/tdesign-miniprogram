/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-12 15:21:51
 * */

export interface TdTabBarProps {
  /**
   * 是否显示外边框
   * @default true
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 标签颜色设置。示例：[选中标签的颜色, 未选中的标签颜色]
   * @default ['#0052D9', 'rgba(0, 0, 0, .6)']
   */
  color?: {
    type: ArrayConstructor;
    value?: Array<string>;
    required?: boolean;
  };
  /**
   * 组件类名，用于设置外层元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
    required?: boolean;
  };
  /**
   * 是否固定在底部
   * @default true
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 是否为 iPhoneX 留出底部安全距离
   * @default true
   */
  safeAreaInsetBottom?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * 当前选中标签的索引
   * @default 0
   */
  value?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor | ArrayConstructor>;
    value?: string | number | array;
    required?: boolean;
  };
}

export interface TdTabBarItemProps {
  /**
   * null
   * @default ''
   */
  badge?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * null
   */
  children?: {
    type: ArrayConstructor;
    value?: array;
    required?: boolean;
  };
  /**
   * null
   * @default false
   */
  dot?: {
    type: BooleanConstructor;
    value?: boolean;
    required?: boolean;
  };
  /**
   * null
   * @default ''
   */
  icon?: {
    type: StringConstructor;
    value?: string;
    required?: boolean;
  };
  /**
   * null
   */
  name?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
    required?: boolean;
  };
}
