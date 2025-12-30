/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdDropdownMenuProps } from './type';
export default {
  /** 自定义箭头图标 */
  arrowIcon: {
    type: [String, Object],
    default: 'caret-down-small' as TdDropdownMenuProps['arrowIcon'],
  },
  /** 是否在点击遮罩层后关闭菜单 */
  closeOnClickOverlay: {
    type: Boolean,
    default: true,
  },
  /** 动画时长 */
  duration: {
    type: [String, Number],
    default: 200 as TdDropdownMenuProps['duration'],
  },
  /** 是否显示遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 菜单栏 z-index 层级 */
  zIndex: {
    type: Number,
    default: 11600,
  },
  /** 菜单关闭时触发 */
  onClose: {
    type: Function,
    default: () => ({}),
  },
  /** 菜单展开时触发 */
  onOpen: {
    type: Function,
    default: () => ({}),
  },
};
