Component({
  data: {
    status: [
      { value: 'active', label: 'acgtive' },
      { value: 'expired', label: 'expired' },
      { value: 'loading', label: 'loading' },
      { value: 'scanned', label: 'scanned' },
    ],
    currentStatus: 'expired',
  },

  methods: {
    handleStatusChange(e) {
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
