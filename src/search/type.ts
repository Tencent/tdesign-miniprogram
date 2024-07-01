/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSearchProps {
  /**
   * 自定义右侧操作按钮文字
   * @default ''
   */
  action?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   * @default false
   */
  alwaysEmbed?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 是否启用清除控件
   * @default true
   */
  clearable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   * @default false
   */
  confirmHold?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)
   * @default search
   */
  confirmType?: {
    type: StringConstructor;
    value?: 'send' | 'search' | 'next' | 'go' | 'done';
  };
  /**
   * 指定 focus 时的光标位置
   */
  cursor: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 搜索框聚焦时底部与键盘的距离
   * @default 0
   */
  cursorSpacing?: {
    type: NumberConstructor;
    value?: number;
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
   * 是否聚焦
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
   * 左侧图标
   * @default 'search'
   */
  leftIcon?: {
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
   * 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用
   * @default -1
   */
  maxlength?: {
    type: NumberConstructor;
    value?: number;
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
   * 指定 placeholder 的样式类
   * @default input-placeholder
   */
  placeholderClass?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 指定 placeholder 的样式
   * @default ''
   */
  placeholderStyle: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 预览结果列表
   * @default []
   */
  resultList?: {
    type: ArrayConstructor;
    value?: Array<string>;
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
   * 搜索框形状
   * @default 'square'
   */
  shape?: {
    type: StringConstructor;
    value?: 'square' | 'round';
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
   * 拉起键盘的类型
   * @default 'text'
   */
  type?: {
    type: StringConstructor;
    value?: 'text' | 'number' | 'idcard' | 'digit' | 'nickname';
  };
  /**
   * 值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
}
