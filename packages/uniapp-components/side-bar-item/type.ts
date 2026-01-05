/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdBadgeProps as BadgeProps } from '../badge/type';

export interface TdSideBarItemProps {
  /**
   * 透传至 Badge 组件
   */
  badgeProps?: BadgeProps;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 图标，传对象则透传至 Icon
   */
  icon?: string | object;
  /**
   * 展示的标签
   * @default ''
   */
  label?: string;
  /**
   * 当前选项的值
   */
  value?: string | number;
}
