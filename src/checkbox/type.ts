/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCheckboxProps {
  /**
   * 是否为块级元素
   * @default true
   */
  block?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否开启无边框模式
   * @default false
   */
  borderless?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用
   * @default false
   */
  checkAll?: {
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
   * 多选框内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否禁用组件内容（content）触发选中
   */
  contentDisabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。优先级：Checkbox.disabled > CheckboxGroup.disabled > Form.disabled
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，分别用于设置 组件外层、多选框图标、主文案、内容 等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-icon', 't-class-label', 't-class-content', 't-class-border'];
  };
  /**
   * 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标，半选中态图标]`。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标
   * @default 'circle'
   */
  icon?: {
    type: null;
    value?: 'circle' | 'line' | 'rectangle' | string[];
  };
  /**
   * 是否为半选
   * @default false
   */
  indeterminate?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 多选框和内容相对位置
   * @default left
   */
  placement?: {
    type: StringConstructor;
    value?: 'left' | 'right';
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
   * 多选框的值
   */
  value?: {
    type: null;
    value?: string | number | boolean;
  };
}
