Component({
  data: {
    backTopTheme: 'half-round-dark',
    backTopText: '返回顶部',
  },
  methods: {
    onToTop(e) {
      console.log('backToTop', e);
    },
  },
});
