/**
 * Avatar 组件的类型契约
 *
 * 行为契约对齐 uniapp-components/avatar：theme=size、shape；尺寸支持自定义 px。
 * uts 端不实现 badgeProps / imageProps / icon Object 透传 —— 仅 string 形式（图片 URL）。
 */

export type AvatarShape = 'circle' | 'round';

export type AvatarSize = 'small' | 'medium' | 'large' | string;

export interface AvatarProps {
  /** 头像替换文本，仅当图片加载失败时有效 */
  alt?: string;
  /** 加载失败时隐藏图片 */
  hideOnLoadFailed?: boolean;
  /** 图标。值为字符串表示图标图片地址（uts 端不支持 Object 透传） */
  icon?: string;
  /** 图片地址 */
  image?: string;
  /** 形状。默认 circle */
  shape?: AvatarShape;
  /** 尺寸：small/medium/large 或自定义如 '64px' */
  size?: AvatarSize;
  /** 透传额外类名 */
  customClass?: string;
}

export interface AvatarEmits {
  (e: 'error', event: UniEvent): void;
}
