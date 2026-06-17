/**
 * CountDown 组件类型契约
 */

export type CountDownTheme = 'default' | 'round' | 'square';

export type CountDownSize = 'small' | 'medium' | 'large';

export interface CountDownTimeDetail {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export interface CountDownProps {
  /** 是否自动开始倒计时 */
  autoStart?: boolean;
  /** 最终倒计时的展示内容，'default'=使用默认格式 */
  content?: string;
  /** 时间格式 DD-日, HH-时, mm-分, ss-秒, SSS-毫秒 */
  format?: string;
  /** 是否开启毫秒级渲染 */
  millisecond?: boolean;
  /** 倒计时尺寸 */
  size?: CountDownSize;
  /** 是否使用时间单位分割 */
  splitWithUnit?: boolean;
  /** 倒计时风格 */
  theme?: CountDownTheme;
  /** 倒计时时长，单位毫秒 */
  time: number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface CountDownEmits {
  (e: 'change', detail: CountDownTimeDetail): void;
  (e: 'finish'): void;
}
