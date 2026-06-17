/**
 * TabBarItem 组件类型契约
 *
 * 与 @tdesign/uniapp 的 tab-bar-item props 视觉与 API 全面对齐
 */

import type { IconConfig } from '../../utils';

export interface SubTabBarItem {
  value: string | number;
  label: string;
}

export interface TabBarItemBadgeProps {
  /** 是否为红点 */
  dot?: boolean;
  /** 徽标内容 */
  count?: string | number;
  /** 封顶值 */
  maxCount?: number;
  /** 偏移 [x, y] px */
  offset?: number[];
}

export interface TabBarItemProps {
  /** 图标右上角徽标信息 */
  badgeProps?: TabBarItemBadgeProps;
  /** 图标名称或对象配置 ({ name, size, color, prefix }) */
  icon?: string | IconConfig;
  /** 二级菜单 */
  subTabBar?: SubTabBarItem[];
  /** 标识符 */
  value?: string | number;
  /** 透传额外类名 */
  customClass?: string;
}
