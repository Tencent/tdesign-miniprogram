Component({
  data: {
    status: [
      { value: 'expired', label: 'expired', checked: true },
      { value: 'loading', label: 'loading' },
      { value: 'scanned', label: 'scanned' },
    ],
    currentStatus: 'expired',
    locale: {
      expiredText: '二维码过期',
      refreshText: '点击刷新',
      scannedText: '已扫描',
    },
  },
  methods: {
    handleStatusChange(e) {
      console.log('状态变化');
      const selectedValue = e.detail.value;
      this.setData({
        currentStatus: selectedValue,
        levels: this.data.status.map((item) => ({
          ...item,
          checked: item.value === selectedValue,
        })),
      });
    },
    handleRefresh() {
      console.log('点击刷新');
    },
  },
});
