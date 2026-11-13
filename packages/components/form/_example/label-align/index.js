Component({
  properties: {
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    formData: {
      name: 'Abcdefgh',
      age: 3,
    },
  },

  methods: {
    onInputChange(e) {
      this.setData({
        'formData.name': e.detail.value,
      });
    },

    onChangeStepper(e) {
      this.setData({
        'formData.age': e.detail.value,
      });
    },
  },
});
