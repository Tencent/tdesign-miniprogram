Component({
  methods: {
    onChange(e) {
      console.log('change', e.detail);
    },

    handlePopup() {
      this.setData({ visible: true });
    },
    onPaletteBarChange(e) {
      console.log('onPaletteBarChange', e.detail);
    },
  },
});
