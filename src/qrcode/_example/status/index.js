Component({
  data: {
    status: [
      { value: 'expired', label: 'expired', checked: true },
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
  },
});
