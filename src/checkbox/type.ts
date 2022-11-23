/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCheckboxProps {
  /**
   * 多选框和内容相对位置
   * @default left
   */
  align?: {
    type: StringConstructor;
    value?: 'left' | 'right';
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
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否禁用组件
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
   * 自定义选中图标和非选中图标。使用 Array 时表示：`[选中态图标，非选中态图标]`。使用 String 时，值为 circle 表示填充圆形图标、值为 line 表示描边型图标、值为 rectangle 表示填充矩形图标
   * @default circle
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
    value?: string | number;
  };
}

export interface TdCheckboxGroupProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 支持最多选中的数量
   */
  max?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 统一设置内部复选框 HTML 属性
   * @default ''
   */
  name?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<CheckboxOption>;
  };
  /**
   * 选中值
   * @default []
   */
  value?: {
    type: ArrayConstructor;
    value?: CheckboxGroupValue;
  };
  /**
   * 选中值，非受控属性
   * @default []
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: CheckboxGroupValue;
  };
}

export type CheckboxOption = string | number | CheckboxOptionObj;

export interface CheckboxOptionObj {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  checkAll?: true;
}

export type CheckboxGroupValue = Array<string | number>;
