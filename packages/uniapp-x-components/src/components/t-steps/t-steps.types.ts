/**
 * Steps 组件类型契约
 */

export type StepsTheme = 'default' | 'dot';

export type StepsLayout = 'horizontal' | 'vertical';

export type StepsSequence = 'positive' | 'reverse';

export type StepsCurrentStatus = 'default' | 'process' | 'finish' | 'error';

export interface StepsProps {
  /** 当前步骤；可传下标或自定义 value，'FINISH' 表示全部完成 */
  current?: string | number | null;
  /** 当前步骤（非受控） */
  defaultCurrent?: string | number | null;
  /** current 指向步骤的状态 */
  currentStatus?: StepsCurrentStatus;
  /** 步骤条方向 */
  layout?: StepsLayout;
  /** 只读 */
  readonly?: boolean | null;
  /** 顺序 */
  sequence?: StepsSequence;
  /** 风格 */
  theme?: StepsTheme;
  /** 透传额外类名 */
  customClass?: string;
}

export interface StepsEmits {
  (e: 'change', current: string | number, prev: string | number): void;
  (e: 'update:current', current: string | number): void;
}
