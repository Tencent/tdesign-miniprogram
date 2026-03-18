module.exports = Behavior({
  data: {
    skylineRender: false,
  },
  lifetimes: {
    created() {
      this.setData({ skylineRender: this.renderer === 'skyline' });
    },
  },
});
