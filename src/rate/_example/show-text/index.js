Component({
  data: {
    value: [3, 3, 0],
    texts: ['1 star', '2 stars', '3 stars', '4 stars', '5 stars'],
  },

  methods: {
    onChange(e) {
      const { index } = e.currentTarget.dataset;
      const { value } = e.detail;
      this.setData({
        [`value[${index}]`]: value,
      });
    },
  },
});
