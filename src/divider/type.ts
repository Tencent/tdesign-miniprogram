/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdDividerProps {
  /**
   * 文本位置（仅在水平分割线有效）
   * @default center
   */
  align?: {
    type: StringConstructor;
    value?: 'left' | 'right' | 'center';
  };
  /**
   * 子元素
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否虚线（仅在水平分割线有效）
   * @default false
   */
  dashed?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层类名、分隔线类名 等
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-line', 't-class-content'];
  };
  /**
   * 分隔线类型有两种：水平和垂直
   * @default horizontal
   */
  layout?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
  };
}
