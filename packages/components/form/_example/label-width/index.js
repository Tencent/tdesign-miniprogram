Component({
  properties: {
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    formData: {
      nickname: 'Abcdefgh',
      workAge: 3,
      label: 'Abcdefgh',
      labelAge: 3,
      longLabel: 'Abcdefgh',
      longLabelAge: 3,
    },
  },

  methods: {
    onInputChange(e) {
      const { field } = e.currentTarget.dataset;
      this.setData({
        [`formData.${field}`]: e.detail.value,
      });
    },

    onChangeStepper(e) {
      const { field } = e.currentTarget.dataset;
      this.setData({
        [`formData.${field}`]: e.detail.value,
      });
    },
  },
});
