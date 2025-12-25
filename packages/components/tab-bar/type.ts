/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdTabBarProps {
  /**
   * 是否显示外边框
   * @default true
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否固定在底部
   * @default true
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 固定在底部时是否开启占位
   * @default false
   */
  placeholder?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否开启底部安全区适配
   * @default true
   */
  safeAreaInsetBottom?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标签栏的形状
   * @default normal
   */
  shape?: {
    type: StringConstructor;
    value?: 'normal' | 'round';
  };
  /**
   * 是否需要分割线
   * @default true
   */
  split?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选项风格
   * @default normal
   */
  theme?: {
    type: StringConstructor;
    value?: 'normal' | 'tag';
  };
  /**
   * 当前选中标签的索引
   */
  value?: {
    type: null;
    value?: string | number | Array<string | number>;
  };
  /**
   * 当前选中标签的索引，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: string | number | Array<string | number>;
  };
  /**
   * 标签栏层级
   * @default 1
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}
