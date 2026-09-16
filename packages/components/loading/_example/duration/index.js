Component({
  data: {
    duration: 800,
  },
  methods: {
    durationChange(e) {
      this.setData({ duration: e.detail.value });
    },
  },
});
