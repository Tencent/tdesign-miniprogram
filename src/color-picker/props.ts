/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdColorPickerProps } from './type';
const props: TdColorPickerProps = {
  /** 是否开启透明通道 */
  enableAlpha: {
    type: Boolean,
    value: false,
  },
  /** 格式化色值。`enableAlpha` 为真时，`RGBA/HSLA/HSVA` 等值有效 */
  format: {
    type: String,
    value: 'RGB',
  },
  /** 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色 */
  swatchColors: {
    type: Array,
  },
  /** 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容。 */
  type: {
    type: String,
    value: 'base',
  },
  /** 色值 */
  value: {
    type: String,
    value: null,
  },
  /** 色值，非受控属性 */
  defaultValue: {
    type: String,
    value: '',
  },
};

export default props;
