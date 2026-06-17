/**
 * Footer 组件类型契约
 */

export interface FooterLink {
  /** 链接名称 */
  name: string;
  /** 链接地址 */
  url?: string;
  /** 跳转方式：navigate-to / redirect-to / switch-tab / relaunch */
  openType?: 'navigate-to' | 'redirect-to' | 'switch-tab' | 'relaunch';
}

export interface FooterLogo {
  /** 图标链接 */
  icon?: string;
  /** 标题文本 */
  title?: string;
  /** 标题点击链接 */
  url?: string;
}

export interface FooterProps {
  /** 链接列表 */
  links?: FooterLink[];
  /** 图标配置 */
  logo?: FooterLogo | null;
  /** 版权信息 */
  text?: string;
  /** 透传额外类名 */
  customClass?: string;
}

export interface FooterEmits {
  (e: 'link-click', payload: { item: FooterLink; index: number }): void;
  (e: 'logo-click', payload: FooterLogo): void;
}
