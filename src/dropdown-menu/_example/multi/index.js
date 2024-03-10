const chineseNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const singleSelectOptions = new Array(8).fill(null).map((_, i) => ({
  label: `Option ${chineseNumber[i]}`,
  value: `option_${i + 1}`,
  disabled: false,
}));

singleSelectOptions.push({
  label: 'Disabled',
  value: 'disabled',
  disabled: true,
});

const doubleColumnsOptions = [
  ...singleSelectOptions,
  {
    label: 'Disabled',
    value: 'disabled',
    disabled: true,
  },
];

const tripleColumnsOptions = [
  ...doubleColumnsOptions,
  {
    label: 'Disabled',
    value: 'disabled',
    disabled: true,
  },
];

tripleColumnsOptions.splice(8, 0, {
  label: `Option ${chineseNumber[8]}`,
  value: `option_${9}`,
  disabled: false,
});

Component({
  data: {
    multipleSelect: {
      value: ['option_1'],
      options: singleSelectOptions,
    },
    doubleColumnsOptions,
    tripleColumnsOptions,
  },

  methods: {
    handleMultipleSelect(e) {
      this.setData({
        'multipleSelect.value': e.detail.value,
      });
    },
  },
});
