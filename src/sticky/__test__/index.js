Component({
  data: {
    container: null,
  },
  lifetimes: {
    ready: function () {
      this.setData({
        container: () => this.createSelectorQuery().select('.wrapper'),
      });
    },
  },
  methods: {
    handleScroll(e) {
      console.log(e.target);
      // console.log('Scroll', e);
    },
  },
});
