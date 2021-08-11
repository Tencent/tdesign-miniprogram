Page({
  data: {
    options: [
      'string11',
      'string22',
      100,
      101,
      { label: 'object1', value: 'value1', disabled: true },
      { label: 'object2', value: 'value2' },
      { label: '全选', checkAll: true },
    ],
    tCellItems: ['a', 'b'],
    activeImage: 'https://0729-75822.gzc.vod.tencent-cloud.com/site_doc/tdesign-logo.png',
    inActiveImage:
      'https://cdn-we-retail.ym.tencent.com/miniapp/goods/noGoods.png?imageMogr2/format/webp/thumbnail/100x100!/strip',
    checkboxValues1: ['checkbox1'],
    check5: false,
  },
  handleGroupChange(event) {
    console.log('group', event.detail);
  },
  onChange(event) {
    console.log('checkbox', event.detail);
  },
  toggle5() {
    this.setData({
      check5: !this.data.check5,
    });
  },
});
