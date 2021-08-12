Page({
  data: {
    tCellItems: ['a', 'b'],
    checkboxValues1: ['checkbox1', 'checkbox2'],
    check5: false,
    options: [
      'string11',
      // 'string22',
      // 100,
      101,
      // { label: 'object1', value: 'value1', disabled: true },
      { label: 'object2', value: 'value2' },
    ],
  },
  onChange(event) {
    console.log('radio', event.detail);
  },
  toggle5() {
    this.setData({
      check5: !this.data.check5,
    });
  },
});
