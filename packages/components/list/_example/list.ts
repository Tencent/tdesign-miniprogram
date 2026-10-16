Page({
  data: {
    currentTab: 'info',
  },

  onChangeTab(event: WechatMiniprogram.CustomEvent) {
    const { tab } = event.currentTarget.dataset;
    this.setData({ currentTab: tab });
  },
});
