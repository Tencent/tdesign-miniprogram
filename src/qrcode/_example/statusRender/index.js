Component({
  data: {
    status: [
      { value: 'expired', label: 'expired', checked: true },
      { value: 'loading', label: 'loading' },
      { value: 'scanned', label: 'scanned' },
    ],
    currentStatus: 'expired',
    locale: {
      expiredText: '二维码过期啦',
      refreshText: '请点击刷新',
      scannedText: '扫描完成',
    },
  },
  methods: {
    handleStatusChange(e) {
      console.log('触发状态变化了');
      const selectedValue = e.detail.value;
      this.setData({
        currentStatus: selectedValue,
        levels: this.data.status.map((item) => ({
          ...item,
          checked: item.value === selectedValue,
        })),
      });
    },
  },
});
