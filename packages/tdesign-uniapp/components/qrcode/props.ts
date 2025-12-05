/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdQRCodeProps } from './type';
export default {
  /** 二维码背景颜色 */
  bgColor: {
    type: String,
    default: '',
  },
  /** 是否有边框 */
  borderless: Boolean,
  /** 二维码颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 二维码中图片的地址 */
  icon: {
    type: String,
    default: '',
  },
  /** 二维码中图片的大小 */
  iconSize: {
    type: [Number, Object],
    default: 40 as TdQRCodeProps['iconSize'],
  },
  /** 二维码纠错等级 */
  level: {
    type: String,
    default: 'M' as TdQRCodeProps['level'],
    validator(val: TdQRCodeProps['level']): boolean {
      if (!val) return true;
      return ['L', 'M', 'Q', 'H'].includes(val);
    },
  },
  /** 二维码大小 */
  size: {
    type: Number,
    default: 160,
  },
  /** 二维码状态 */
  status: {
    type: String,
    default: 'active' as TdQRCodeProps['status'],
    validator(val: TdQRCodeProps['status']): boolean {
      if (!val) return true;
      return ['active', 'expired', 'loading', 'scanned'].includes(val);
    },
  },
  /** 是否启用自定义渲染 */
  statusRender: Boolean,
  /** 扫描后的文本 */
  value: {
    type: String,
    default: '',
  },
  /** 点击"点击刷新"的回调 */
  onRefresh: {
    type: Function,
    default: () => ({}),
  },
};
