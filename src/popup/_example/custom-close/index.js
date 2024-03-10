Component({
  data: {
    cur: {},
    position: [
      { value: 'top', text: 'Pop in the top' },
      { value: 'left', text: 'pop in the left' },
      { value: 'center', text: 'Pop in the middle' },
      { value: 'bottom', text: 'Pop in the bottom' },
      { value: 'right', text: 'Pop in the right' },
    ],
  },
  methods: {
    handlePopup(e) {
      const { item } = e.currentTarget.dataset;

      this.setData(
        {
          cur: item,
        },
        () => {
          this.setData({ visible: true });
        },
      );
    },
    onVisibleChange(e) {
      this.setData({
        visible: e.detail.visible,
      });
    },
    onClose() {
      this.setData({
        visible: false,
      });
    },
  },
});
