/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdColorPickerProps } from './type';
export default {
  /** 自动关闭。在点击遮罩层时自动关闭，不需要手动设置 visible */
  autoClose: {
    type: Boolean,
    default: true,
  },
  /** 是否开启透明通道 */
  enableAlpha: Boolean,
  /** 如果 color-picker 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true */
  fixed: Boolean,
  /** 格式化色值。`enableAlpha` 为真时，`HEX8/RGBA/HSLA/HSVA` 有效 */
  format: {
    type: String,
    default: 'RGB' as TdColorPickerProps['format'],
    validator(val: TdColorPickerProps['format']): boolean {
      if (!val) return true;
      return ['HEX', 'HEX8', 'RGB', 'RGBA', 'HSL', 'HSLA', 'HSV', 'HSVA', 'CMYK', 'CSS'].includes(val);
    },
  },
  /** 透传 Popup 组件全部属性 */
  popupProps: {
    type: Object,
    default: () => ({}),
  },
  /** 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色 */
  swatchColors: {
    type: Array,
    default: undefined as TdColorPickerProps['swatchColors'],
  },
  /** 颜色选择器类型。（base 表示仅展示系统预设内容; multiple 表示展示色板和系统预设内容 */
  type: {
    type: String,
    default: 'base' as TdColorPickerProps['type'],
    validator(val: TdColorPickerProps['type']): boolean {
      if (!val) return true;
      return ['base', 'multiple'].includes(val);
    },
  },
  /** 是否使用弹出层包裹颜色选择器 */
  usePopup: Boolean,
  /** 色值 */
  value: {
    type: String,
    default: '',
  },
  /** 色值，非受控属性 */
  defaultValue: {
    type: String,
    default: '',
  },
  /** 是否显示颜色选择器。`usePopup` 为 true 时有效 */
  visible: Boolean,
  /** 选中的色值发生变化时触发，第一个参数 `value` 表示新色值，`context.color` 表示当前调色板控制器的色值，`context.trigger` 表示触发颜色变化的来源 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 关闭按钮时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 调色板控制器的值变化时触发，`context.color` 指调色板控制器的值 */
  onPaletteBarChange: {
    type: Function,
    default: () => ({}),
  },
};
