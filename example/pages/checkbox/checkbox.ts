Page({
  data: {
    options: [
      { label: '全选', checkAll: true },
      'string11',
      100,
      { label: 'object1', value: 'object1' },
    ],
    checkAllValues: ['string11'],
    activeImage:
      'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox-checked.png',
    inActiveImage:
      'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox.png',
    checkboxValues1: ['checkbox1'],
    check5: true,
    checkAll1: ['checkbox1'],
  },
  handleGroupChange(event) {
    console.log('group', event.detail);
  },
  onChange(event) {
    console.log('checkbox', event.detail);
    this.setData({
      checkAllValues: event.detail,
    });
  },
  toggle5(e) {
    console.log('checkbox', e.detail);
    this.setData({
      check5: e.detail,
    });
  },
});
