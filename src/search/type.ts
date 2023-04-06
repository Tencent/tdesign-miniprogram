/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSearchProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义右侧操作按钮文字
   * @default ''
   */
  action?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否居中
   * @default false
   */
  center?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-input', 't-class-input-container', 't-class-cancel', 't-class-left', 't-class-right'];
  };
  /**
   * 是否聚焦
   * @default false
   */
  focus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 左侧文本
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 左侧图标
   * @default 'search'
   */
  leftIcon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 占位符
   * @default ''
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 右侧图标
   * @default 'close'
   */
  rightIcon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 搜索框形状
   * @default 'square'
   */
  shape?: {
    type: StringConstructor;
    value?: 'square' | 'round';
  };
  /**
   * 值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否启用清除控件
   * @default true
   */
  clearable: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 可以控制拉起的键盘类型
   * @default 'text'
   */
  type: {
    type: StringConstructor;
    value?: string;
  };
}
