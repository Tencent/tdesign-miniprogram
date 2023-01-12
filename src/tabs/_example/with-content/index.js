Component({
  data: {
    tabPanelstyle: 'display:flex;justify-content:center;align-items:center;min-height: 120px',
  },
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },
  },
});
