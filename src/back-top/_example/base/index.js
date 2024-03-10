Component({
  properties: {
    scrollTop: { type: Number, value: 0 },
  },
  data: {
    backTopTheme: 'round',
    backTopText: 'Top',
  },
  methods: {
    onToTop(e) {
      console.log('backToTop', e);
    },
  },
});
