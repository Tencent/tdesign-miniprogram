import { TdQRCodeProps } from './type';

export default {
  value: {
    type: String,
    value: '' as TdQRCodeProps['value'],
  },
  icon: {
    type: String,
    value: '' as TdQRCodeProps['icon'],
  },
  size: {
    type: Number,
    value: 160 as TdQRCodeProps['size'],
  },
  iconSize: {
    type: null,
    value: 40 as unknown as TdQRCodeProps['iconSize'],
  },
  level: {
    type: String,
    value: 'M' as TdQRCodeProps['level'],
  },
  bgColor: {
    type: String,
    value: '#ffffff' as TdQRCodeProps['bgColor'],
  },
  color: {
    type: String,
    value: '#000000' as TdQRCodeProps['color'],
  },
  includeMargin: {
    type: Boolean,
    value: true as TdQRCodeProps['includeMargin'],
  },
  marginSize: {
    type: Number,
    value: 6 as TdQRCodeProps['marginSize'],
  },
};
