Page({
  data: {
    demoCheckbox1: ['checkbox2', 'checkbox3'],
    demoCheckbox2: ['checkbox2', 'checkbox3'],
    demoCheckboxMax: ['checkbox1', 'checkbox2'],
    demoCheckbox3: ['checkbox2', 'checkbox4'],
    controledData: [],
    checked: true,
    checked1: true,
    options: [{ label: '全选', checkAll: true }, '多选1', '多选2', { label: '多选3', value: '多选3' }],
    checkAllValues: ['多选1', '多选2', ''],
    activeImage: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox-checked.png',
    inActiveImage: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox.png',
    check5: true,
    checkAll1: ['checkbox1'],
  },
  handleGroupChange(event) {
    console.log('group', event.detail.value);
    this.setData({
      demoCheckbox1: event.detail.value,
    });
  },
  onChange(event) {
    console.log('checkbox', event.detail.value);
  },
  onCheckAllChange(event) {
    console.log('checkbox', event.detail.value);
    this.setData({
      checkAllValues: event.detail,
    });
  },
  toggle5(e) {
    console.log('checkbox', e.detail.value);
    this.setData({
      check5: e.detail.value,
    });
  },
  handleControled() {
    const data = !this.data.controledData.length
      ? ['checkbox1', 'checkbox3', 'checkbox2', 'checkbox4', 'checkbox5']
      : [];
    this.setData({
      controledData: data,
    });
  },
  testControll(val) {
    console.log(val.detail);
  },
  // 受控
  controlledHandler(e) {
    console.log(e.detail.value);
    this.setData({
      checked1: e.detail.checked,
    });
  },
  buttonControl() {
    console.log(!this.data.checked1);
    this.setData({
      checked1: !this.data.checked1,
    });
  },
  changeChecked(e) {
    this.setData({
      checked: e.detail.checked,
    });
  },
});
