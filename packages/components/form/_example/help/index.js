Component({
  properties: {
    labelAlign: {
      type: String,
      value: 'top',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    formData: {
      name: 'Abcdefgh',
      password: 'Abcdefgh',
      gender: 'man',
      birth: '2022-08-10',
    },
    dateVisible: false,
  },

  methods: {
    onInputChange(e) {
      const { field } = e.currentTarget.dataset;
      this.setData({
        [`formData.${field}`]: e.detail.value,
      });
    },

    onRadioChange(e) {
      this.setData({
        'formData.gender': e.detail.value,
      });
    },

    showDatePicker() {
      this.setData({ dateVisible: true });
    },

    onDatePickerConfirm(e) {
      const { value } = e.detail;
      this.setData({
        'formData.birth': value,
        dateVisible: false,
      });
    },

    onDatePickerClose() {
      this.setData({
        dateVisible: false,
      });
    },
  },
});
