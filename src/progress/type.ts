/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdProgressProps {
  /**
   * 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 `['#f00', '#0ff', '#f0f']` 或 `{ '0%': '#f00', '100%': '#0ff' }` 或  `{ from: '#000', to: '#000' }` 等
   * @default ''
   */
  color?: {
    type: StringConstructor;
    optionalTypes: Array<ObjectConstructor | ArrayConstructor>;
    value?: string | Array<string> | Record<string, string>;
  };
  /**
   * 进度百分比，可自定义
   * @default true
   */
  label?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 进度条百分比
   * @default 0
   */
  percentage?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 进度条状态
   */
  status?: {
    type: StringConstructor;
    value?: StatusEnum;
  };
  /**
   * 进度条线宽。宽度数值不能超过 size 的一半，否则不能输出环形进度
   */
  strokeWidth?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
  };
  /**
   * 进度条未完成部分颜色
   * @default ''
   */
  trackColor?: {
    type: StringConstructor;
    value?: string;
  };
}

export type StatusEnum = 'success' | 'error' | 'warning' | 'active';

export type ThemeEnum = 'line' | 'plump' | 'circle';
