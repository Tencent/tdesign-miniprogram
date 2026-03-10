/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSearchProps {
  /**
   * 自定义右侧操作按钮文字
   * @default ''
   */
  action?: string;
  /**
   * 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: boolean;
  /**
   * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   * @default false
   */
  alwaysEmbed?: boolean;
  /**
   * 是否居中
   * @default false
   */
  center?: boolean;
  /**
   * 清空图标触发方式，仅在输入框有值时有效
   * @default always
   */
  clearTrigger?: 'always' | 'focus';
  /**
   * 是否启用清除控件
   * @default true
   */
  clearable?: boolean;
  /**
   * 点击键盘右下角按钮时是否保持键盘不收起
   * @default false
   */
  confirmHold?: boolean;
  /**
   * 设置键盘右下角按钮的文字，仅在type='text'时生效。<br />具体释义：<br />`send` 右下角按钮为“发送”；<br />`search` 右下角按钮为“搜索”；<br />`next` 右下角按钮为“下一个”；<br />`go` 右下角按钮为“前往”；<br />`done` 右下角按钮为“完成”。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)
   * @default search
   */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  /**
   * 指定 focus 时的光标位置
   * @default -1
   */
  cursor?: number;
  /**
   * 光标颜色。iOS 下的格式为十六进制颜色值 #000000，安卓下的只支持 default 和 green，Skyline 下无限制
   * @default #0052d9
   */
  cursorColor?: string;
  /**
   * 搜索框聚焦时底部与键盘的距离
   * @default 0
   */
  cursorSpacing?: number;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否聚焦
   * @default false
   */
  focus?: boolean;
  /**
   * focus时，点击页面的时候不收起键盘
   * @default false
   */
  holdKeyboard?: boolean;
  /**
   * 左侧图标。如果需要使用 `Slot` 进行自定义，必须将该值设置为假值
   * @default 'search'
   */
  leftIcon?: string;
  /**
   * 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度。`maxcharacter` 和 `maxlength` 二选一使用
   */
  maxcharacter?: number;
  /**
   * 用户最多可以输入的文本长度，一个中文等于一个计数长度。默认为 -1，不限制输入长度。`maxcharacter` 和 `maxlength` 二选一使用
   * @default -1
   */
  maxlength?: number;
  /**
   * 占位符
   * @default ''
   */
  placeholder?: string;
  /**
   * 指定 placeholder 的样式类
   * @default input-placeholder
   */
  placeholderClass?: string;
  /**
   * 指定 placeholder 的样式
   * @default ''
   */
  placeholderStyle?: string;
  /**
   * 只读状态
   */
  readonly?: boolean;
  /**
   * 预览结果列表
   * @default []
   */
  resultList?: Array<string>;
  /**
   * 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用
   * @default -1
   */
  selectionEnd?: number;
  /**
   * 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
   * @default -1
   */
  selectionStart?: number;
  /**
   * 搜索框形状
   * @default 'square'
   */
  shape?: 'square' | 'round';
  /**
   * 拉起键盘的类型
   * @default 'text'
   */
  type?: 'text' | 'number' | 'idcard' | 'digit' | 'nickname';
  /**
   * 值
   * @default ''
   */
  value?: string;
  /**
   * 点击右侧操作按钮文字时触发
   */
  onActionClick?: () => void;
  /**
   * 失去焦点时触发
   */
  onBlur?: (context: { value: string }) => void;
  /**
   * 值发生变化时触发
   */
  onChange?: (context: { value: string; trigger: 'input-change' | 'option-click' | 'clear' }) => void;
  /**
   * 点击清除时触发
   */
  onClear?: (context: { value: string }) => void;
  /**
   * 聚焦时触发
   */
  onFocus?: (context: { value: string }) => void;
  /**
   * 提交时触发
   */
  onSubmit?: (context: { value: string }) => void;
}
