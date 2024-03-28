Component({
  lifetimes: {
    created() {
      this.setData({ skylineRender: this.renderer === 'skyline' });
    },
  },
});
