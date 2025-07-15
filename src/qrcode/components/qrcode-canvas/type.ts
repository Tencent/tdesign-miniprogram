import { ErrorCorrectionLevel } from '../../utils/type';

export interface TdQRCodeProps {
  /** 二维码内容 */
  value?: string;
  /** 中心图标路径 */
  icon?: string;
  /** 二维码大小（单位rpx） */
  size?: number;
  /** 中心图标大小（单位px） */
  iconSize?: number;
  /** 纠错等级 */
  level?: ErrorCorrectionLevel;
  /** 背景色 */
  bgColor?: string;
  /** 二维码颜色 */
  color?: string;
  /** 是否包含边距 */
  includeMargin?: boolean;
  /** 边距大小（单位rpx） */
  marginSize?: number;
}

export interface QRCodeEvents {
  /** 绘制完成事件 */
  drawCompleted: boolean;
  /** 绘制错误事件 */
  drawError: { error: any };
  /** 点击事件 */
  qrcodeTouch: WechatMiniprogram.TouchEvent;
}

export interface QRCodeMethods {
  /** 初始化画布 */
  initCanvas: () => Promise<void>;
  /** 绘制二维码 */
  drawQrcode: (canvas: WechatMiniprogram.Canvas, ctx: WechatMiniprogram.CanvasContext) => Promise<void>;
  /** 绘制中心图标 */
  drawCenterIcon: (canvas: WechatMiniprogram.Canvas, ctx: WechatMiniprogram.CanvasContext, size: number, numCells: number) => Promise<void>;
  /** 处理触摸事件 */
  handleTouch: (e: WechatMiniprogram.TouchEvent) => void;
}