import { QRCodeStatusProps } from './type';

export default {
  status: {
    type: String,
    value: '' as QRCodeStatusProps['status'],
  },
  locale: {
    type: Object,
    value: {
      expiredText: '二维码过期',
      refreshText: '点击刷新',
      scannedText: '已扫描',
    } as QRCodeStatusProps['locale'],
  },
  statusRender: {
    type: Boolean,
    value: false as QRCodeStatusProps['statusRender'],
  },
  refresh: {
    type: null,
    value: null,
  },
};
