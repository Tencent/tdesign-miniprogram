const chineseNumber = '一二三四五六七八九十'.split('');

const singleSelectOptions = new Array(8).fill(null).map((_, i) => ({
  label: `选项${chineseNumber[i]}`,
  value: `option_${i + 1}`,
  disabled: false,
}));

singleSelectOptions.push({
  label: '禁用选项',
  value: 'disabled',
  disabled: true,
});

Component({
  data: {
    keys: {},
    singleSelect: {
      value: 'option_3',
      options: singleSelectOptions,
    },
    multipleSelect: {
      value: ['option_3'],
      options: singleSelectOptions,
    },
    closeOnClickOverlay: true,
  },
  methods: {
    handleSingleSelect(e) {
      this.setData({
        'singleSelect.value': e.detail.value,
      });
    },
  },
});
