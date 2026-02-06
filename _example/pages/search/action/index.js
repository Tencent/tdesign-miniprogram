Component({
  data: {
    value: '',
    actionText: '',
  },

  methods: {
    changeHandle(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },

    focusHandle() {
      this.setData({
        actionText: '取消',
      });
    },

    blurHandle() {
      this.setData({
        actionText: '',
      });
    },

    actionHandle() {
      this.setData({
        value: '',
        actionText: '',
      });
    },
  },
});
