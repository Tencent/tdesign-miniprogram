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
});
