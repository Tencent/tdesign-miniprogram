import { type ErrorCorrectionLevel } from '../../../common/shared/qrcode/types';

export interface TdQRCodeProps {
  /** 二维码内容 */
  value?: string;
  /** 中心图标路径 */
  icon?: string;
  /** 二维码大小（单位rpx） */
  size?: number;
  /** 中心图标大小（单位px） */
  iconSize?: null;
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
