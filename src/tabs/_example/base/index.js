Component({
  data: {
    stickyProps: {
      zIndex: 2,
    },
    items: [1, 2, 3],
  },
  lifetimes: {
    ready() {
      setTimeout(() => {
        this.setData({ items: [1, 2] });
      }, 2000);
    },
  },
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },

    onStickyScroll(event) {
      console.log(event.detail);
    },
  },
});
