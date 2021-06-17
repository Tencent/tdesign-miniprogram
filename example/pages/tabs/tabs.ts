Page({
  data: {},
  onTabsChange(event: any) {
    console.log(event.detail);
  },
  onTabsDisabled({ detail: { title } }) {
    wx.showToast({
      title: `${title} 已禁用`,
      icon: 'none',
    });
  },
});
