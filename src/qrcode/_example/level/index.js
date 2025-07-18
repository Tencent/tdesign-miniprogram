Component({
  data: {
    levels: [
      { value: 'L', label: 'L', checked: true },
      { value: 'M', label: 'M' },
      { value: 'Q', label: 'Q' },
      { value: 'H', label: 'H' },
    ],
    currentLevel: 'L',
  },

  methods: {
    handleLevelChange(e) {
      const selectedValue = e.detail.value;
      this.setData({
        currentLevel: selectedValue,
        levels: this.data.levels.map((item) => ({
          ...item,
          checked: item.value === selectedValue,
        })),
      });
    },
  },
});
