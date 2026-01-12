export default {
  // 二维码状态
  status: {
    type: String,
    default: 'active',
    validator: (value: string) => ['active', 'expired', 'loading', 'scanned'].includes(value),
  },
  // 本地化文本配置
  locale: {
    type: Object,
    default: () => ({
      expiredText: '二维码过期',
      refreshText: '点击刷新',
      scannedText: '已扫描',
    }),
  },
  // 是否启用自定义渲染
  statusRender: {
    type: Boolean,
    default: false,
  },
};
