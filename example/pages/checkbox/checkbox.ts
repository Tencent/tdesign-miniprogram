Page({
  data: {
    tCellItems: ['a', 'b'],
    checkboxValues1: ['checkbox1'],
    check5: false,
  },
  onChange(event) {
    console.log(event.detail);
  },
  toggle5() {
    this.setData({
      check5: !this.data.check5,
    });
  },
});
