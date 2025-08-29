Component({
  data: {
    height: 600,
    style: 'color: red',
    customStyle: 'font-size: 9px',
  },
  methods: {
    onSelect(e) {
      this.setData({
        active: e.detail.index,
      });
    },
  },
});
