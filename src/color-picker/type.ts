/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdColorPickerProps {
  /**
   * 自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible
   * @default true
   */
  autoClose?: {
    type: BooleanConstructor;
    value?: boolean;
  };
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
   * 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容
   * @default base
   */
  type?: {
    type: StringConstructor;
    value?: TypeEnum;
  };
  /**
   * 是否使用弹出层包裹颜色选择器
   * @default false
   */
  usePopup?: {
    type: BooleanConstructor;
    value?: boolean;
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
  /**
   * 是否显示颜色选择器。`usePopup` 为 true 时有效
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export type TypeEnum = 'base' | 'multiple';
