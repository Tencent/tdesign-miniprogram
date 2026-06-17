/**
 * Tag 组件的类型契约
 *
 * 这些类型同时被：
 *  - vue3 SFC（tag.vue，单测 + H5 端）
 *  - uts SFC（t-tag.uvue，uni-app x App 端）共享
 *
 * 命名遵循 TDesign 现有约定（theme/variant/shape/size）。
 */

export type TagTheme = 'default' | 'primary' | 'warning' | 'danger' | 'success';

export type TagVariant = 'dark' | 'light' | 'outline' | 'light-outline';

export type TagShape = 'square' | 'round' | 'mark';

export type TagSize = 'small' | 'medium' | 'large' | 'extra-large';

export interface TagProps {
  /** 组件风格（颜色） */
  theme?: TagTheme;
  /** 风格变体（背景 + 边框组合） */
  variant?: TagVariant;
  /** 形状 */
  shape?: TagShape;
  /** 尺寸 */
  size?: TagSize;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否可关闭（展示关闭按钮） */
  closable?: boolean;
  /** 标签最大宽度，超出省略号；示例：'80px' / 80（默认 px） */
  maxWidth?: string | number;
  /** 标签内容文本（也可用默认插槽） */
  content?: string;
  /** 透传额外类名 */
  customClass?: string;
}

export interface TagEmits {
  (e: 'click', event: MouseEvent): void;
  (e: 'close', event: MouseEvent): void;
}
