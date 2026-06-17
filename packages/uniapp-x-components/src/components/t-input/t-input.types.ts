/**
 * Input 组件类型契约
 *
 * 与 @tdesign/uniapp 的 input 组件 API 对齐：
 * https://tdesign.tencent.com/uniapp/components/input
 */

/** 输入框类型 */
export type InputType =
  | 'text'
  | 'number'
  | 'idcard'
  | 'digit'
  | 'safe-password'
  | 'password'
  | 'nickname';

/** 校验状态（影响 tips 文字色） */
export type InputStatus = 'default' | 'success' | 'warning' | 'error';

/** 文字对齐 */
export type InputAlign = 'left' | 'center' | 'right';

/** 标签布局 */
export type InputLayout = 'horizontal' | 'vertical';

/** 清除图标触发方式 */
export type InputClearTrigger = 'always' | 'focus';

/** 键盘右下角按钮文字 */
export type InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

/** change 事件参数 */
export interface InputChangePayload {
  value: string;
  cursor?: number;
  keyCode?: number;
}

/** click 事件参数 */
export interface InputClickPayload {
  /** 触发来源 */
  trigger: 'input' | 'suffix' | 'suffix-icon';
}

/** 格式化函数 */
export type InputFormatFn = (value: string) => string;

export interface InputProps {
  /** v-model 同步值（受控） */
  modelValue?: string;
  /** 与 modelValue 同义，兼容 uniapp 版的 `value` 命名 */
  value?: string;
  /** 占位符 */
  placeholder?: string;
  /** 输入框类型 */
  type?: InputType;
  /** 文本对齐方式 */
  align?: InputAlign;
  /** 标签 */
  label?: string;
  /** 输入框下方提示文本（受 status 影响色彩） */
  tips?: string;
  /** 后置文本（位于 suffix-icon 之前） */
  suffix?: string;
  /** 前置图标名（字符串）；如需更复杂结构请使用 prefix-icon slot */
  prefixIcon?: string;
  /** 后置图标名（字符串）；如需更复杂结构请使用 suffix-icon slot */
  suffixIcon?: string;
  /** 标签 + 输入框布局 */
  layout?: InputLayout;
  /** 是否无下边框 */
  borderless?: boolean;
  /** 校验状态 */
  status?: InputStatus;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readonly?: boolean;
  /** 是否显示清除按钮 */
  clearable?: boolean;
  /** 清除按钮触发条件 */
  clearTrigger?: InputClearTrigger;
  /** 最大长度；-1 不限制 */
  maxlength?: number;
  /** 最大字符数（一个汉字算 2）；-1 不限制；与 maxlength 二选一 */
  maxcharacter?: number;
  /** 超出 maxlength/maxcharacter 是否仍允许继续输入 */
  allowInputOverMax?: boolean;
  /** 自动获取焦点 */
  focus?: boolean;
  /** 键盘右下角按钮文字 */
  confirmType?: InputConfirmType;
  /** 点击键盘右下角按钮时是否保持键盘不收起 */
  confirmHold?: boolean;
  /** 键盘弹起时是否自动上推页面 */
  adjustPosition?: boolean;
  /** 占位符样式类 */
  placeholderClass?: string;
  /** 占位符样式 */
  placeholderStyle?: string;
  /** 格式化函数（失焦时执行） */
  format?: InputFormatFn;
  /** 透传额外类名 */
  customClass?: string;
  /** 指定 focus 时的光标位置 */
  cursor?: number;
  /** 光标颜色 */
  cursorColor?: string;
  /** 指定光标与键盘的距离 */
  cursorSpacing?: number;
  /** 安全键盘加密公钥的路径 */
  safePasswordCertPath?: string;
  /** 安全键盘计算 hash 的算法表达式 */
  safePasswordCustomHash?: string;
  /** 安全键盘输入密码长度 */
  safePasswordLength?: number;
  /** 安全键盘加密盐值 */
  safePasswordNonce?: string;
  /** 安全键盘计算 hash 盐值 */
  safePasswordSalt?: string;
  /** 安全键盘加密时间戳 */
  safePasswordTimeStamp?: number;
  /** 光标结束位置 */
  selectionEnd?: number;
  /** 光标起始位置 */
  selectionStart?: number;
  /** 强制 input 处于同层状态 */
  alwaysEmbed?: boolean;
  /** 自动聚焦（即将废弃，请直接使用 focus） */
  autoFocus?: boolean;
  /** focus时，点击页面的时候不收起键盘 */
  holdKeyboard?: boolean;
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'update:value', value: string): void;
  (e: 'change', payload: InputChangePayload): void;
  (e: 'focus', payload: { value: string }): void;
  (e: 'blur', payload: { value: string; cursor?: number }): void;
  (e: 'clear', payload: { value: string }): void;
  (e: 'enter', payload: { value: string }): void;
  (e: 'click', payload: InputClickPayload): void;
  (e: 'keyboardheightchange', payload: { height: number; duration: number }): void;
  (e: 'nicknamereview', payload: { pass: boolean; timeout: boolean }): void;
}