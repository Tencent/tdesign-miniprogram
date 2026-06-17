/**
 * Icon 组件的类型契约
 *
 * 这些类型同时被：
 *  - vue3 SFC（icon.vue，单测 + H5 端）
 *  - uts SFC（t-icon.uvue，uni-app x App 端）共享
 *
 * 命名遵循 TDesign 现有约定（name/color/size/prefix）。
 */

export interface IconProps {
  /** 图标名称或图片链接 */
  name: string;
  /** 图标颜色 */
  color?: string;
  /** 自定义图标前缀 */
  prefix?: string;
  /** 图标大小, 如 `20`, `20px`, `48rpx`, 默认单位是 `px` */
  size?: string | number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface IconEmits {
  (e: 'click', event: MouseEvent): void;
}
