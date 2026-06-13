/**
 * Button 组件的类型契约
 *
 * 这些类型同时被：
 *  - vue3 SFC（button.vue，单测 + H5 端）
 *  - uts SFC（button.uvue，uni-app x App 端）共享
 *
 * 命名遵循 TDesign 现有约定（variant/theme/size/disabled/loading/...）。
 */

export type ButtonVariant = 'base' | 'outline' | 'dashed' | 'text';

export type ButtonTheme = 'default' | 'primary' | 'danger' | 'warning' | 'success';

export type ButtonSize = 'extra-small' | 'small' | 'medium' | 'large';

export type ButtonShape = 'rectangle' | 'square' | 'round' | 'circle';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  size?: ButtonSize;
  shape?: ButtonShape;
  type?: ButtonType;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ghost?: boolean;
  /** 透传额外类名 */
  customClass?: string;
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void;
}
