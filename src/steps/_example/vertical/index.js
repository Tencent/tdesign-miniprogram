Component({
  options: {
    styleIsolation: 'apply-shared',
  },

  data: {
    first: 1,
    second: 1,
    third: 1,
  },

  methods: {
    onFirstChange(e) {
      this.setData({ first: e.detail.current });
    },
    onSecondChange(e) {
      this.setData({ second: e.detail.current });
    },
    onThirdChange(e) {
      this.setData({ third: e.detail.current });
    },
  },
});
