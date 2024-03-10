Component({
  data: {
    value: 4,
    texts: ['Very bad', 'Bad', 'Good', 'Very Goot', 'Excellent'],
  },
  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },
  },
});
