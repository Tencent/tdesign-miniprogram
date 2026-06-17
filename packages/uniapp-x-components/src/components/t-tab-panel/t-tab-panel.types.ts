/**
 * TabPanel 组件类型契约
 *
 * 与 @tdesign/uniapp 的 tab-panel props 视觉与 API 全面对齐
 */

import type { IconConfig } from '../../utils';

export interface TabPanelBadgeProps {
  dot?: boolean;
  count?: string | number;
  maxCount?: number;
  offset?: number[];
}

export interface TabPanelProps {
  /** 透传至 Badge */
  badgeProps?: TabPanelBadgeProps;
  /** 是否禁用 */
  disabled?: boolean;
  /** 图标，支持字符串名称或对象配置 ({ name, size, color, prefix }) */
  icon?: string | IconConfig;
  /** 选项卡名称 */
  label?: string;
  /** 是否启用懒加载 */
  lazy?: boolean;
  /** 选项卡面板内容（与 slot 互补） */
  panel?: string;
  /** 唯一标识 */
  value?: string | number;
  /** 透传额外类名 */
  customClass?: string;
}
