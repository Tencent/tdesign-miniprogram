Component({
  data: {
    curFormat: 'CSS',
    color: '#7bd60b',
  },
  methods: {
    onChange(e) {
      console.log('change', e.detail);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e.detail);
    },
    clickFormat(e) {
      this.setData({
        curFormat: e.target.dataset.format,
      });
    },
  },
});
