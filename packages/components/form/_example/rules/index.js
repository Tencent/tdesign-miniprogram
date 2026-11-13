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
      name: 'Abcdefghijk',
      gender: '',
      birth: '',
      age: 3,
    },
    dateVisible: false,
    rules: {},
  },

  lifetimes: {
    attached() {
      this.setData({
        'rules.name': [{ validator: (val) => val.length === 8, message: '只能输入8个字符英文' }],
        'rules.gender': [{ validator: (val) => val !== '', message: '不能为空' }],
        'rules.birth': [{ validator: (val) => val !== '', message: '不能为空' }],
        'rules.age': [{ validator: (val) => val <= 2, message: '输入的数字不能大于用户所填生日对应的年龄' }],
      });
      setTimeout(() => {
        const form = this.selectComponent('#form');
        form.validate();
      });
    },
  },

  methods: {
    onReset(e) {
      this.setData({
        formData: e.detail.formData,
      });
    },

    onSubmit(e) {
      console.log('===onSubmit', e);
    },

    submit() {
      const form = this.selectComponent('#form');
      form.submit();
    },

    reset() {
      const form = this.selectComponent('#form');
      form.reset();
    },

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

    onChangeStepper(e) {
      this.setData({
        'formData.age': e.detail.value,
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
