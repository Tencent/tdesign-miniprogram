Component({
  data: {
    textPassword: '123456',
    phoneError: false,
    phoneNumber: '17600600600',
    priceError: false,
  },

  methods: {
    onPhoneInput(e) {
      const { phoneError } = this.data;
      const isPhoneNumber = /^[1][3,4,5,7,8,9][0-9]{9}$/.test(e.detail.value);
      if (phoneError === isPhoneNumber) {
        this.setData({
          phoneError: !isPhoneNumber,
        });
      }
    },

    onPriceInput(e) {
      const { priceError } = this.data;
      const isNumber = /^\d+(\.\d+)?$/.test(e.detail.value);
      if (priceError === isNumber) {
        this.setData({
          priceError: !isNumber,
        });
      }
    },
  },
});
