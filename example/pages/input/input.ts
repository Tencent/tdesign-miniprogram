Page({
  data: {
    text3: '',
    text4: '一段错误填写的内容',
    textPassword: '123456',
  },
  onInput(event) {
    console.log('123', event);
  },

  onClear() {
    this.setData({
      textPassword: '',
    });
  },

  onInput3(event) {
    this.setData({
      text3: event.detail.value,
    });
  },

  onInput4(event) {
    this.setData({
      text4: event.detail.value,
    });
  },
});
