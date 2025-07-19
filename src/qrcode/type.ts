/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdQRCodeProps {
  /**
   * 二维码背景颜色
   * @default ''
   */
  bgColor?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否有边框
   * @default false
   */
  borderless?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 二维码颜色
   * @default ''
   */
  color?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 二维码中图片的地址
   * @default ''
   */
  icon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 二维码中图片的大小
   * @default 40
   */
  iconSize?: {
    type: null;
    value?: number | { width: number; height: number };
  };
  /**
   * 二维码纠错等级
   * @default M
   */
  level?: {
    type: StringConstructor;
    value?: 'L' | 'M' | 'Q' | 'H';
  };
  /**
   * 二维码大小
   * @default 160
   */
  size?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 二维码状态
   * @default active
   */
  status?: {
    type: StringConstructor;
    value?: QRStatus;
  };
  /**
   * 扫描后的文本
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
}

export type QRStatus = 'active' | 'expired' | 'loading' | 'scanned';

export type StatusRenderInfo = { status: QRStatus; onRefresh?: () => void };
