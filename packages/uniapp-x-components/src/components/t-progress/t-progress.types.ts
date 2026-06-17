/**
 * Progress 组件类型契约
 */

export type ProgressTheme = 'line' | 'plump' | 'circle';

export type ProgressStatus = 'success' | 'error' | 'warning' | 'active';

/** uts 端只支持 string 单色（不支持渐变 / 数组 / 对象） */
export type ProgressColor = string;

export type ProgressLabel = boolean | string;

export type ProgressSize = 'default' | 'micro' | string | number;

export interface ProgressProps {
  /** 进度条颜色 */
  color?: ProgressColor;
  /** 标签：true=百分比；false=不显示；string=自定义文本 */
  label?: ProgressLabel;
  /** 进度百分比 0-100 */
  percentage?: number;
  /** 仅环形有效：default(112px) / micro(24px) / 自定义 */
  size?: ProgressSize;
  /** 进度条状态 */
  status?: ProgressStatus | '';
  /** 进度条线宽 */
  strokeWidth?: string | number;
  /** 进度条风格 */
  theme?: ProgressTheme;
  /** 未完成部分颜色 */
  trackColor?: string;
  /** 透传额外类名 */
  customClass?: string;
}
