/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-27 17:32:54
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
   * 自动聚焦
   * @default false
   */
  autofocus?: {
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
   * 错误提示文本
   * @default ''
   */
  errorMessage?: {
    type: StringConstructor;
    value?: string;
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
   * 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度
   */
  maxcharacter?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 用户最多可以输入的文本长度。值小于等于 0 的时候，则不限制输入长度
   */
  maxlength?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 名称
   * @default ''
   */
  name?: {
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
   * 输入框尺寸
   * @default small
   */
  size?: {
    type: StringConstructor;
    value?: 'medium' | 'small';
  };
  /**
   * 后置文本内容
   * @default ''
   */
  suffix?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件后置图标
   */
  suffixIcon?: {
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
    optionalTypes: Array<StringConstructor | NumberConstructor>;
    value?: InputValue;
  };
}

export type InputValue = string | number;
