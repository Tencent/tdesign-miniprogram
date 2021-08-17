Page({
  data: {
    options: [
      { label: '全选', checkAll: true },
      'string11',
      // 'string22',
      100,
      // 101,
      { label: 'object1', value: 'value1' },
      // { label: 'object2', value: 'value2' },
    ],
    activeImage: 'https://0729-75822.gzc.vod.tencent-cloud.com/site_doc/tdesign-logo.png',
    inActiveImage: 'https://cdn-we-retail.ym.tencent.com/miniapp/articleFooter/logo-icon.png',
    checkboxValues1: ['checkbox1'],
    check5: true,
  },
  handleGroupChange(event) {
    console.log('group', event.detail);
  },
  onChange(event) {
    console.log('checkbox', event.detail);
  },
  toggle5(e) {
    console.log('checkbox', e.detail);
    this.setData({
      check5: e.detail,
    });
  },
});
