/**
 * QRCode 组件类型契约
 *
 * uts 端简化：
 *  - 不在组件内绘制二维码（uniapp-x 暂无 canvas API），由业务层将 value 转为图片 URL
 *    通过 `imageUrl` 透传；保留全部 uniapp props 以便后续替换实现。
 *  - status 仍按 uniapp 实现展示遮罩（active=无遮罩 / expired / loading / scanned）
 */

export type QRCodeLevel = 'L' | 'M' | 'Q' | 'H';

export type QRCodeStatus = 'active' | 'expired' | 'loading' | 'scanned';

export interface QRCodeProps {
  /** 二维码背景颜色 */
  bgColor?: string;
  /** 是否无边框 */
  borderless?: boolean;
  /** 二维码颜色 */
  color?: string;
  /** 二维码中图片地址 */
  icon?: string;
  /** 二维码中图片大小 */
  iconSize?: number;
  /** 二维码纠错等级 */
  level?: QRCodeLevel;
  /** 二维码大小 */
  size?: number;
  /** 二维码状态 */
  status?: QRCodeStatus;
  /** 是否启用自定义渲染 */
  statusRender?: boolean;
  /** 扫描后的文本 */
  value?: string;
  /** uts 端：业务层渲染好的二维码图片 URL（必传，否则只显示占位） */
  imageUrl?: string;
  /** 透传额外类名 */
  customClass?: string;
}

export interface QRCodeEmits {
  (e: 'refresh'): void;
}
