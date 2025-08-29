/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdTextareaProps {
  /**
   * 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 超出maxlength或maxcharacter之后是否还允许输入
   * @default false
   */
  allowInputOverMax?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自动聚焦，拉起键盘
   * @default false
   */
  autofocus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否自动增高，值为 true 时，style.height 不生效。支持传入对象，如 { maxHeight: 120, minHeight: 20 }
   * @default false
   */
  autosize?: {
    type: null;
    value?: boolean | { maxHeight?: number; minHeight?: number };
  };
  /**
   * 是否显示外边框
   * @default false
   */
  bordered?: {
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
   * @default return
   */
  confirmType?: {
    type: StringConstructor;
    value?: 'return' | 'send' | 'search' | 'next' | 'go' | 'done';
  };
  /**
   * 指定 focus 时的光标位置
   * @default -1
   */
  cursor?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 【试验性】光标颜色，仅在 Skyline 下有效
   * @default #0052d9
   */
  cursorColor?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离
   * @default 0
   */
  cursorSpacing?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否去掉 iOS 下的默认内边距
   * @default false
   */
  disableDefaultPadding?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用文本框
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 如果 textarea 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true
   * @default false
   */
  fixed?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * focus时，点击页面的时候不收起键盘
   * @default false
   */
  holdKeyboard?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 显示文本计数器，如 0/140。当 `maxlength < 0 && maxcharacter < 0` 成立时， indicator无效
   * @default false
   */
  indicator?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 左侧文本
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度
   */
  maxcharacter?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 用户最多可以输入的字符个数，值为 -1 的时候不限制最大长度
   * @default -1
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
   * 指定 placeholder 的样式类，目前仅支持color,font-size和font-weight
   * @default textarea-placeholder
   */
  placeholderClass?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight
   * @default ''
   */
  placeholderStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 只读状态
   */
  readonly?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用
   * @default -1
   */
  selectionEnd?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
   * @default -1
   */
  selectionStart?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否显示键盘上方带有”完成“按钮那一栏
   * @default true
   */
  showConfirmBar?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 文本框值
   */
  value?: {
    type: null;
    value?: TextareaValue;
  };
  /**
   * 文本框值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: TextareaValue;
  };
}

export type TextareaValue = string | number;
