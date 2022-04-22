Page({
  data: {
    animation: { duration: 2 },
  },

  onTabsChange(event: any) {
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },

  onTabsClick(event: any) {
    console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
  },
});
