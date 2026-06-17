/**
 * SideBar 组件类型契约
 *
 * 与 @tdesign/uniapp 的 side-bar props 视觉与 API 全面对齐
 */

export type SideBarValue = string | number;

export interface SideBarProps {
  /** 当前选中项 value */
  value?: SideBarValue;
  /** 默认选中项 value */
  defaultValue?: SideBarValue;
  /** 透传额外类名 */
  customClass?: string;
}

export interface SideBarEmits {
  (e: 'change', payload: { value: SideBarValue; label: string }): void;
  (e: 'click', payload: { value: SideBarValue; label: string }): void;
}
