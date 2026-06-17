/**
 * Grid 组件类型契约
 */

export type GridAlign = 'left' | 'center';

export type GridTheme = 'default' | 'card';

export interface GridProps {
  /** 内容对齐方式 */
  align?: GridAlign;
  /** 边框，默认不显示 */
  border?: boolean | object;
  /** 每一行的列数；为 0 时等于固定大小 */
  column?: number;
  /** 间隔大小 */
  gutter?: number;
  /** 是否开启点击反馈 */
  hover?: boolean;
  /** 宫格风格 */
  theme?: GridTheme;
  /** 透传额外类名 */
  customClass?: string;
}
