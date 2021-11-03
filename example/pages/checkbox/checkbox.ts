Page({
  data: {
    demoCheckbox1: ['checkbox2', 'checkbox3'],
    demoCheckbox2: ['checkbox2', 'checkbox3'],
    demoCheckboxMax: ['checkbox1', 'checkbox2'],
    demoCheckbox3: ['checkbox2', 'checkbox4'],
    options: [
      { label: '全选', checkAll: true },
      '多选1',
      '多选2',
      { label: '多选3', value: '多选3' },
    ],
    checkAllValues: ['多选1', '多选2', '多选3'],
    activeImage:
      'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox-checked.png',
    inActiveImage:
      'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox.png',
    check5: true,
    checkAll1: ['checkbox1'],
  },
  handleGroupChange(event) {
    console.log('group', event.detail);
  },
  onChange(event) {
    console.log('checkbox', event.detail);
  },
  onCheckAllChange(event) {
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
