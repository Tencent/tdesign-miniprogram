Page({
  data: {
    check5: false,
    activeImage: 'https://0729-75822.gzc.vod.tencent-cloud.com/site_doc/tdesign-logo.png',
    inActiveImage: 'https://cdn-we-retail.ym.tencent.com/miniapp/articleFooter/logo-icon.png',
    options: [
      '字符串',
      // 'string22',
      // 100,
      '数字',
      // { label: 'object1', value: 'value1', disabled: true },
      { label: '对象', value: 'value2' },
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
