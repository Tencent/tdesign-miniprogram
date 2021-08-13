Page({
  data: {
    tCellItems: ['a', 'b'],
    checkboxValues1: ['checkbox1', 'checkbox2'],
    check5: false,
    activeImage: 'https://0729-75822.gzc.vod.tencent-cloud.com/site_doc/tdesign-logo.png',
    inActiveImage: 'https://cdn-we-retail.ym.tencent.com/miniapp/articleFooter/logo-icon.png',
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
  toggle5(checked) {
    this.setData({
      check5: checked,
    });
  },
});
