/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-21 18:21:58
 * */

export interface TdInputProps {
  /**
   * 是否可清空
   * @default false
   */
  clearable?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 是否存在错误提示消息
   * @default false
   */
  error?: {
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
   * 用户最多可以输入的文本长度
   * @default 140
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
   * 是否密码类型
   * @default false
   */
  password?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 是否必填
   * @default false
   */
  required?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 输入框尺寸
   * @default small
   */
  size?: {
    type: StringConstructor;
    value?: TSizeValue;
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
    value?: TTypeValue;
  };
  /**
   * 输入框的值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
}
