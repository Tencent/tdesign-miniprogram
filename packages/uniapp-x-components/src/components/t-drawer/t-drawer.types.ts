/**
 * Drawer 组件类型契约
 *
 * 与 @tdesign/uniapp 的 drawer props 视觉与 API 全面对齐
 *
 * 实现差异（uniapp x）：
 *  - 不依赖 t-popup（uniapp-x-components 暂未实现），自实现 overlay + 滑入动画
 *  - usingCustomNavbar / customNavbarHeight 透传仅做样式预留
 */

import type { IconConfig } from '../../utils';

export type DrawerPlacement = 'left' | 'right';

export interface DrawerItem {
  /** 列表项标题 */
  title: string;
  /** 图标名称或图标配置对象 */
  icon?: string | IconConfig;
}

export interface DrawerOverlayProps {
  /** 自定义遮罩颜色 */
  color?: string;
}

export interface DrawerProps {
  closeOnOverlayClick?: boolean;
  destroyOnClose?: boolean;
  items?: DrawerItem[];
  overlayProps?: DrawerOverlayProps;
  placement?: DrawerPlacement;
  showOverlay?: boolean;
  title?: string;
  visible?: boolean;
  zIndex?: number;
  customClass?: string;
}

export interface DrawerEmits {
  (e: 'update:visible', visible: boolean): void;
  (e: 'close', payload: { trigger: string }): void;
  (e: 'overlay-click', payload: { visible: boolean }): void;
  (e: 'item-click', payload: { index: number; item: DrawerItem }): void;
}
