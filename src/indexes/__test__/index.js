Component({
  data: {
    height: 600,
  },
  methods: {
    onSelect(e) {
      this.setData({
        active: e.detail.index,
      });
    },
  },
});
