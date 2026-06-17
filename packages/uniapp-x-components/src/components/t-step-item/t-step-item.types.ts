/**
 * StepItem 组件类型契约
 */

export type StepItemStatus = 'default' | 'process' | 'finish' | 'error';

export interface StepItemProps {
  /** 步骤描述 */
  content?: string;
  /** 步骤条自定义内容（右侧附加信息） */
  extra?: string;
  /** 图标（图片 URL；uts 端不支持 slot 字符串占位） */
  icon?: string;
  /** 状态 */
  status?: StepItemStatus;
  /** 标题 */
  title?: string;
  /** 唯一标识（不传则使用挂载顺序） */
  value?: string | number | null;
  /** 透传额外类名 */
  customClass?: string;
}
