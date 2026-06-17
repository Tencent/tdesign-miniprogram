/**
 * SideBarItem 组件类型契约
 *
 * 与 @tdesign/uniapp 的 side-bar-item props 视觉与 API 全面对齐
 */

import type { IconConfig } from '../../utils';

export interface SideBarItemBadgeProps {
  dot?: boolean;
  count?: string | number;
  maxCount?: number;
}

export interface SideBarItemProps {
  /** 透传至 Badge */
  badgeProps?: SideBarItemBadgeProps;
  /** 是否禁用 */
  disabled?: boolean;
  /** 图标，支持字符串名称或对象配置 ({ name, size, color, prefix }) */
  icon?: string | IconConfig;
  /** 展示的标签 */
  label?: string;
  /** 当前选项的值 */
  value?: string | number;
  /** 透传额外类名 */
  customClass?: string;
}

export interface SideBarItemEmits {
  (e: 'click'): void;
}
