Component({
  data: {
    current: ['checkbox1', 'checkbox2'],
    options: [
      { label: 'Checkbox1', value: 'checkbox1' },
      { label: 'Checkbox2', value: 'checkbox2' },
      {
        label: 'checkbox3.checkbox3.checkbox3.checkbox3.checkbox3.checkbox3.checkbox3.checkbox3.checkbox3.',
        value: 'checkbox3',
        maxLabelRow: 2,
      },
      {
        label: 'Checkbox4',
        value: 'checkbox4',
        content:
          'Description information.Description information.Description information.Description information.Description information.Description information.',
        maxContentRow: 2,
      },
    ],
  },

  methods: {
    handleGroupChange(event) {
      console.log('group', event.detail.value);
      this.setData({
        current: event.detail.value,
      });
    },
  },
});
