Component({
  data: {
    value: 1,
    marks: {
      0: '7%',
      1: '15%',
      2: '25%',
      3: '35%',
    },
    currentLevel: 'M',
  },

  methods: {
    handleSliderChange(e) {
      const { value } = e.detail;
      const levels = ['L', 'M', 'Q', 'H'];
      this.setData({
        value: value,
        currentLevel: levels[value],
      });
    },
  },
});
