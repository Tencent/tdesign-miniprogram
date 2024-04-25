Component({
  options: {
    styleIsolation: 'apply-shared',
  },
});
Component({
  data: {
    skylineRender: false,
  },
  lifetimes: {
    created() {
      this.setData({ skylineRender: this.renderer === 'skyline' });
    },
  },
});
