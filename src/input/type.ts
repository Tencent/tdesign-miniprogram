/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdInputProps {
  /**
   * 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 文本内容位置，居左/居中/居右
   * @default left
   */
  align?: {
    type: StringConstructor;
    value?: 'left' | 'center' | 'right';
  };
  /**
   * 【讨论中】是否开启无边框模式
   * @default false
   */
  borderless?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否可清空
   * @default false
   */
  clearable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起点
   * @default false
   */
  confirmHold?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 设置键盘右下角按钮的文字，仅在 type='text'时生效
   * @default done
   */
  confirmType?: {
    type: StringConstructor;
    value?: 'send' | 'search' | 'next' | 'go' | 'done';
  };
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 错误提示文本，值为空不显示（废弃属性，如果需要，请更为使用 status 和 tips）
   * @default ''
   * @deprecated
   */
  errorMessage?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-input', 't-class-placeholder', 't-class-error-msg'];
  };
  /**
   * 自动聚焦
   * @default false
   */
  focus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 【开发中】指定输入框展示值的格式
   */
  format?: {
    type: null;
    value?: InputFormatType;
  };
  /**
   * 左侧文本
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用
   */
  maxcharacter?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 用户最多可以输入的文本长度，一个中文等于一个计数长度。值小于等于 0 的时候，则表示不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用
   */
  maxlength?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 占位符
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件前置图标，值为字符串则表示图标名称
   */
  prefixIcon?: {
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
   * 输入框尺寸
   * @default small
   */
  size?: {
    type: StringConstructor;
    value?: 'medium' | 'small';
  };
  /**
   * 输入框状态
   */
  status?: {
    type: StringConstructor;
    value?: 'success' | 'warning' | 'error';
  };
  /**
   * 后置图标前的后置内容
   */
  suffix?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 后置文本内容，值为字符串则表示图标名称
   */
  suffixIcon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 输入框下方提示文本，会根据不同的 `status` 呈现不同的样式
   */
  tips?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 输入框类型
   * @default text
   */
  type?: {
    type: StringConstructor;
    value?: 'text' | 'number' | 'idcard' | 'digit' | 'safe-password' | 'password';
  };
  /**
   * 输入框的值
   */
  value?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: InputValue;
  };
  /**
   * 输入框的值，非受控属性
   */
  defaultValue?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: InputValue;
  };
}

export type InputFormatType = (value: InputValue) => number | string;

export type InputValue = string | number;
