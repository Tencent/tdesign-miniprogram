/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TabValue } from '../tabs/type';

export interface TdTabPanelProps {
  /**
   * 透传至 Badge 组件
   * @default {}
   */
  badgeProps?: object;
  /**
   * 是否禁用当前选项卡
   * @default false
   */
  disabled?: boolean;
  /**
   * `1.0.0-rc.1`。图标，传对象则透传至 Icon
   */
  icon?: string | object;
  /**
   * 选项卡名称
   * @default ''
   */
  label?: string;
  /**
   * 是否启用选项卡懒加载
   * @default false
   */
  lazy?: boolean;
  /**
   * 用于自定义选项卡面板内容
   */
  panel?: string;
  /**
   * 选项卡的值，唯一标识
   */
  value?: TabValue;
}
