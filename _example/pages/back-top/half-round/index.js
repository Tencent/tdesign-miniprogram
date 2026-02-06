Component({
  properties: {
    scrollTop: { type: Number, value: 0 },
  },
  data: {
    backTopTheme: 'half-round-dark',
    backTopText: '返回顶部',
  },
  methods: {
    onToTop(e) {
      this.triggerEvent('to-top', e);
    },
  },
});
