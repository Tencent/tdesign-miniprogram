Component({
  data: {
    container: null,
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },
  lifetimes: {
    ready: function () {
      this.setData({
        container: () => this.createSelectorQuery().select('.wrapper'),
      });
    },
  },
  methods: {
    handleScroll() {},
  },
});
