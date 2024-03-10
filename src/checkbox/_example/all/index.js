Component({
  data: {
    options: [
      { label: 'Check All', checkAll: true },
      { label: 'Checkbox1', value: 1 },
      { label: 'Checkbox2', value: 2 },
      {
        label: 'Checkbox3',
        value: 3,
        content:
          'description information.description information.description information.description information.description information.description information.description information.',
      },
    ],
    checkAllValues: [1, 2, 3, ''],
  },

  methods: {
    onCheckAllChange(event) {
      console.log('checkbox', event.detail.value);
      this.setData({
        checkAllValues: event.detail,
      });
    },
  },
});
