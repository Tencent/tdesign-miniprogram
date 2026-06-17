/**
 * QRCode 变体配置
 */

import { cva } from '../../utils/cva';

export const qrcodeVariants = cva('t-qrcode', {
  variants: {
    borderless: {
      true: 't-qrcode--borderless',
    },
  },
  defaultVariants: {},
});
