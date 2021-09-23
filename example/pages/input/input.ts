Page({
  data: {
    textPassword: '123456',
    phoneError: false,
    phoneNumber: '17600600600',
  },

  onClear() {
    this.setData({
      textPassword: '',
    });
  },
  onInput(e) {
    const { phoneError } = this.data;
    const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.detail.value);
    if (phoneError === isPhoneNumber) {
      this.setData({
        phoneError: !isPhoneNumber,
      });
    }
  },
});
