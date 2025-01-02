/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdColorPickerProps } from './type';
const props: TdColorPickerProps = {
  /** 自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible */
  autoClose: {
    type: Boolean,
    value: true,
  },
  /** 是否开启透明通道 */
  enableAlpha: {
    type: Boolean,
    value: false,
  },
  /** 如果 color-picker 是在一个 `position:fixed` 的区域，需要显示指定属性 fixed 为 true */
  fixed: {
    type: Boolean,
    value: false,
  },
  /** 格式化色值。`enableAlpha` 为真时，`RGBA/HSLA/HSVA` 等值有效 */
  format: {
    type: String,
    value: 'RGB',
  },
  /** popupProps透传 */
  popupProps: {
    type: Object,
    value: {},
  },
  /** 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色 */
  swatchColors: {
    type: Array,
  },
  /** 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容 */
  type: {
    type: String,
    value: 'base',
  },
  /** 是否使用弹出层包裹颜色选择器 */
  usePopup: {
    type: Boolean,
    value: false,
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
  /** 是否显示颜色选择器。`usePopup` 为 true 时有效 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
