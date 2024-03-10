Component({
  properties: {
    scrollTop: { type: Number, value: 0 },
  },
  data: {
    backTopTheme: 'half-round-dark',
    backTopText: 'Top',
  },
  methods: {
    onToTop(e) {
      console.log('backToTop', e);
    },
  },
});
