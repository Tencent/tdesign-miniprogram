/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { BadgeProps } from '../badge/index';

export interface TdTabBarItemProps {
  /**
   * 图标右上角提示信息
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: BadgeProps;
  };
  /**
   * 图标名称。传入对象时透传至 Icon 组件
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 二级菜单
   */
  subTabBar?: {
    type: ArrayConstructor;
    value?: SubTabBarItem[];
  };
  /**
   * 标识符
   */
  value?: {
    type: null;
    value?: string | number;
  };
}

export interface SubTabBarItem {
  value: string;
  label: string;
}
