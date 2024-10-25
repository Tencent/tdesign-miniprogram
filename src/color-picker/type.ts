/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdColorPickerProps {
  /**
   * 是否开启透明通道
   * @default false
   */
  enableAlpha?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 格式化色值。`enableAlpha` 为真时，`RGBA/HSLA/HSVA` 等值有效
   * @default RGB
   */
  format?: {
    type: StringConstructor;
    value?: 'RGB' | 'RGBA' | 'HSL' | 'HSLA' | 'HSB' | 'HSV' | 'HSVA' | 'HEX' | 'CMYK' | 'CSS';
  };
  /**
   * 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色
   */
  swatchColors?: {
    type: ArrayConstructor;
    value?: Array<string> | null;
  };
  /**
   * 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容。
   * @default base
   */
  type?: {
    type: StringConstructor;
    value?: TypeEnum;
  };
  /**
   * 色值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 色值，非受控属性
   * @default ''
   */
  defaultValue?: {
    type: StringConstructor;
    value?: string;
  };
}

export type TypeEnum = 'base' | 'multiple';

export interface Coordinate {
  x: number;
  y: number;
}

export type ColorPickerChangeTrigger =
  | 'palette-saturation-brightness'
  | 'palette-saturation'
  | 'palette-brightness'
  | 'palette-hue-bar'
  | 'palette-alpha-bar'
  | 'preset';
