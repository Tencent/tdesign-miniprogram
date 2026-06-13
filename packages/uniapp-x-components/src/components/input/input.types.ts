/**
 * Input 组件类型契约
 */

export type InputType = 'text' | 'number' | 'password' | 'tel' | 'email' | 'search';

export type InputSize = 'small' | 'medium' | 'large';

export type InputStatus = 'default' | 'success' | 'warning' | 'error';

export interface InputProps {
  /** v-model 值 */
  modelValue?: string;
  /** 占位文本 */
  placeholder?: string;
  /** 输入类型 */
  type?: InputType;
  /** 尺寸 */
  size?: InputSize;
  /** 校验状态 */
  status?: InputStatus;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readonly?: boolean;
  /** 是否显示清除按钮 */
  clearable?: boolean;
  /** 最大长度（<=0 不限制） */
  maxlength?: number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface InputEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'clear'): void;
  (e: 'enter', value: string): void;
}
