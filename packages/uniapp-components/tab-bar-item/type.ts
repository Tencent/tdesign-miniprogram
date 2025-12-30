/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdBadgeProps as BadgeProps } from '../badge/type';

export interface TdTabBarItemProps {
  /**
   * 图标右上角提示信息
   * @default {}
   */
  badgeProps?: BadgeProps;
  /**
   * 图标名称。传入对象时透传至 Icon 组件
   */
  icon?: string | object;
  /**
   * 二级菜单
   */
  subTabBar?: SubTabBarItem[];
  /**
   * 标识符
   */
  value?: string | number;
}

export interface SubTabBarItem {
  value: string;
  label: string;
}
