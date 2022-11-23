Component({
  data: {
    demoCheckbox1: ['checkbox1', 'checkbox2'],
  },

  methods: {
    handleGroupChange(event) {
      console.log('group', event.detail.value);
      this.setData({
        demoCheckbox1: event.detail.value,
      });
    },
  },
});
