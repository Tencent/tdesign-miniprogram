const childrenMap = {
  CN: [{ label: '广东省', value: '440000', children: true }],
  440000: [
    { label: '广州市', value: '440100' },
    { label: '深圳市', value: '440300' },
  ],
};

Component({
  data: {
    options: [{ label: '中国', value: 'CN', children: true }],
    value: '440300',
    visible: false,
    note: '中国/广东省/深圳市',
    load(node) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(childrenMap[node.value] || []), 500);
      });
    },
  },
  methods: {
    showCascader() {
      this.setData({ visible: true });
    },
    onChange(e) {
      const { value, selectedOptions } = e.detail;
      this.setData({
        value,
        note: selectedOptions.map((item) => item.label).join('/'),
      });
    },
  },
});
