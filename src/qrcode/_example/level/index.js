Component({
  data: {
    value: 1, // 默认选中 L（0 对应 L，1 对应 M，2 对应 Q，3 对应 H）
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
