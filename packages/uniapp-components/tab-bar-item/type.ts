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
   * 页面跳转类型
   * @default redirectTo
   */
  linkType?: 'redirectTo' | 'switchTab' | 'reLaunch' | 'navigateTo';
  /**
   * 二级菜单
   */
  subTabBar?: SubTabBarItem[];
  /**
   * 点击后跳转的页面路径, 需要以 `/` 开头
   * @default ''
   */
  url?: string;
  /**
   * 标识符
   */
  value?: string | number;
}

export interface SubTabBarItem {
  value: string;
  label: string;
}
