Component({
  methods: {
    onChange(e) {
      console.log('change', e.detail);
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e.detail);
    },
  },
});
