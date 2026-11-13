Component({
  data: {
    layout: 'horizontal',
    labelAlign: 'left',
    disabled: false,
    navbarHeight: 0,
  },

  lifetimes: {
    ready() {
      this.getCustomNavbarHeight();
    },
  },

  methods: {
    getCustomNavbarHeight() {
      const query = this.createSelectorQuery().in(this);
      query.select('.custom-navbar').boundingClientRect();
      query.exec((res) => {
        const { height = 0 } = res[0] || {};
        this.setData({ navbarHeight: height });
      });
    },

    onLayoutChange(e) {
      const layout = e.detail.value;
      this.setData({
        layout,
        labelAlign: layout === 'horizontal' ? 'left' : 'top',
      });
    },

    onDisabledChange(e) {
      this.setData({
        disabled: e.detail.value,
      });
    },
  },
});
