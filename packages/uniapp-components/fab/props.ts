/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdFabProps } from './type';
export default {
  /** 透传至 Button 组件 */
  buttonProps: {
    type: Object,
  },
  /** 是否可拖拽。`true` / `'all'`可拖动<br>`'vertical'`可垂直拖动<br>`'horizontal'`可水平拖动<br>`false`禁止拖动 */
  draggable: {
    type: [String, Boolean],
    default: false as TdFabProps['draggable'],
  },
  /** 图标 */
  icon: {
    type: String,
    default: '',
  },
  /** 悬浮按钮的样式，常用于调整位置（即将废弃，建议使用 `style`） */
  style: {
    type: String,
    default: 'right: 16px; bottom: 32px;',
  },
  /** 文本内容 */
  text: {
    type: String,
    default: '',
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 设置垂直方向边界限制，示例：[48, 48] 或 ['96px', 80] */
  yBounds: {
    type: Array,
  },
  /** 悬浮按钮点击事件 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
  /** 结束拖拽时触发 */
  onDragEnd: {
    type: Function,
    default: () => ({}),
  },
  /** 开始拖拽时触发 */
  onDragStart: {
    type: Function,
    default: () => ({}),
  },
};
