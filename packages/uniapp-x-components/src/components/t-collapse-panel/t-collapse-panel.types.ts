/**
 * CollapsePanel 组件类型契约
 */

export type CollapsePanelPlacement = 'bottom' | 'top';

export interface CollapsePanelProps {
  /** 折叠面板内容 */
  content?: string;
  /** 禁止当前面板展开（null 时跟随父级） */
  disabled?: boolean | null;
  /** 是否显示展开图标（null 时跟随父级） */
  expandIcon?: boolean | null;
  /** 面板头内容 */
  header?: string;
  /** 面板头左侧图标 URL */
  headerLeftIcon?: string;
  /** 面板头的右侧区域 */
  headerRightContent?: string;
  /** 选项卡内容的位置 */
  placement?: CollapsePanelPlacement;
  /** 当前面板唯一标识 */
  value?: string | number;
  /** 透传额外类名 */
  customClass?: string;
}
