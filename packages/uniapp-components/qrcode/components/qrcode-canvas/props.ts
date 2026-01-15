export default {
  // 二维码内容
  value: {
    type: String,
    default: '',
  },
  // 中心图标路径
  icon: {
    type: String,
    default: '',
  },
  // 二维码大小（单位rpx）
  size: {
    type: Number,
    default: 160,
  },
  // 中心图标大小（单位px）
  iconSize: {
    type: [Number, Object],
    default: 40,
  },
  // 纠错等级
  level: {
    type: String,
    default: 'M',
    validator: (value: string) => ['L', 'M', 'Q', 'H'].includes(value),
  },
  // 背景色
  bgColor: {
    type: String,
    default: '#FFFFFF',
  },
  // 二维码颜色
  color: {
    type: String,
    default: '#000000',
  },
  // 是否包含边距
  includeMargin: {
    type: Boolean,
    default: false,
  },
  // 边距大小（单位rpx）
  marginSize: {
    type: Number,
    default: 0,
  },
};
