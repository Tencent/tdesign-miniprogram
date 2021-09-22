Page({
  data: {
    textPassword: '123456',
  },

  onClear() {
    this.setData({
      textPassword: '',
    });
  },
});
