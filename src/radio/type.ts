/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdRadioProps<T = RadioValue> {
  /**
   * 复选框和内容相对位置
   * @default left
   */
  placement?: {
    type: StringConstructor;
    value?: 'left' | 'right';
  };
  /**
   * 是否允许取消选中
   * @default false
   */
  allowUncheck?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否为块级元素
   * @default true
   */
  block?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否选中
   * @default false
   */
  checked?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否选中，非受控属性
   * @default false
   */
  defaultChecked?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 单选内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否禁用组件内容（content）触发选中
   * @default false
   */
  contentDisabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 只读状态
   * @default false
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否为禁用态
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层、单选图标、主文案、内容 等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border'];
  };
  /**
   * 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 circle 表示图标为填充型图标，值为 line 表示图标为描边型图标
   * @default 'circle'
   */
  icon?: {
    type: null;
    value?: 'circle' | 'line' | Array<string>;
  };
  /**
   * 主文案
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 内容最大行数限制
   * @default 5
   */
  maxContentRow?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 主文案最大行数限制
   * @default 3
   */
  maxLabelRow?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * HTML 元素原生属性
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 单选按钮的值
   * @default false
   */
  value?: {
    type: null;
    value?: T;
  };
}

export type RadioValue = string | number | boolean;
