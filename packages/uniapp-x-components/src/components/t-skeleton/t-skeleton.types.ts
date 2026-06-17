/**
 * Skeleton 组件类型契约
 */

export type SkeletonAnimation = 'gradient' | 'flashed' | 'none';

export type SkeletonTheme = 'avatar' | 'image' | 'text' | 'paragraph';

/** 单个骨架图列配置 */
export interface SkeletonRowCol {
  /** 类型 */
  type?: 'text' | 'rect' | 'circle';
  /** 宽度，默认单位 px */
  width?: string | number;
  /** 高度，默认单位 px */
  height?: string | number;
  /** 行间距 */
  marginRight?: string | number;
  /** size，仅圆形/方形使用 */
  size?: string | number;
  /** 占位列数 */
  flex?: number;
}

export interface SkeletonProps {
  /** 动画效果 */
  animation?: SkeletonAnimation;
  /** 延迟显示加载效果的时间（毫秒） */
  delay?: number;
  /** 是否为加载状态 */
  loading?: boolean;
  /** 行列高级配置 */
  rowCol?: any[];
  /** 风格 */
  theme?: SkeletonTheme;
  /** 透传额外类名 */
  customClass?: string;
}
