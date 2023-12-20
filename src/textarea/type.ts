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
   * 自动聚焦，拉起键盘
   * @default false
   */
  autofocus?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否自动增高，值为 autosize 时，style.height 不生效
   * @default false
   */
  autosize?: {
    type: null;
    value?: boolean | object;
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
   * 指定光标与键盘的距离。取textarea距离底部的距离和cursor-spacing指定的距离的最小值作为光标与键盘的距离
   * @default 0
   */
  cursorSpacing?: {
    type: NumberConstructor;
    value?: number;
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
   * 是否禁用文本框
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，分别用于表示组件外层元素、输入框、占位符、标签名等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-textarea', 't-class-label'];
  };
  /**
   * 如果 textarea 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true
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
   * 用户最多可以输入的字符个数。默认为 -1，不限制输入长度
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
   * 指定 placeholder 的样式，目前仅支持 color ,font-size和font-weight
   */
  placeholderStyle: {
    type: StringConstructor;
    value: string;
  };
  /**
   * 文本框值
   * @default null
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 文本框值，非受控属性
   * @default ''
   */
  defaultValue?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否显示外边框
   * @default true
   */
  bordered?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 显示文本计数器，如 0/140。当 `maxlength < 0 && maxcharacter < 0` 成立时， indicator无效
   */
  indicator?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 指定focus时的光标位置
   * @default -1
   */
  cursor: {
    type: NumberConstructor;
    value?: number;
  };
  /** 是否显示键盘上方带有”完成“按钮那一栏
   * @default true
   */
  showConfirmBar: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 光标起始位置，自动聚集时有效，需与selection-end搭配使用
   * @default -1
   */
  selectionStart?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 光标结束位置，自动聚集时有效，需与selection-start搭配使用
   * @default -1
   */
  selectionEnd?: {
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
   * focus时，点击页面的时候不收起键盘
   * @default false
   */
  holdKeyboard?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
