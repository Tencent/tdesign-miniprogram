Component({
  data: {
    curFormat: 'CSS',
    formatList: ['CSS', 'HEX', 'RGB', 'HSL', 'HSV', 'CMYK'].map((item) => ({
      label: `${item} 模式`,
      value: item,
    })),
    color: '#7bd60b',
  },
  methods: {
    onChangeRadio(e) {
      this.setData({
        curFormat: e.detail.value,
      });
    },
    onChange(e) {
      console.log('change', e.detail);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e.detail);
    },
  },
});
