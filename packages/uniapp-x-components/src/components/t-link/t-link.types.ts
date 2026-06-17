/**
 * Link 组件类型契约
 *
 * 行为契约对齐 uniapp-components/link：
 *  - uts 端不在组件内执行小程序路由跳转，仅触发 click 事件由业务处理
 *  - prefixIcon / suffixIcon 仅支持 string（图片 URL）
 *  - navigatorProps 保留类型（不实现透传）
 */

export type LinkSize = 'small' | 'medium' | 'large';

export type LinkTheme = 'default' | 'primary' | 'danger' | 'warning' | 'success';

export interface LinkProps {
  /** 链接内容 */
  content?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否开启点击反馈 */
  hover?: boolean;
  /** 透传至 navigator 的属性（uts 端暂不实现） */
  navigatorProps?: Record<string, any> | null;
  /** 前置图标（图片 URL） */
  prefixIcon?: string;
  /** 尺寸 */
  size?: LinkSize;
  /** 后置图标（图片 URL） */
  suffixIcon?: string;
  /** 风格 */
  theme?: LinkTheme;
  /** 是否显示下划线 */
  underline?: boolean;
  /** 透传额外类名 */
  customClass?: string;
}

export interface LinkEmits {
  (e: 'click', event: UniMouseEvent): void;
}
