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

const generateTree = function (deep = 0, count = 10, prefix) {
  const ans = [];

  for (let i = 0; i < count; i += 1) {
    const value = prefix ? `${prefix}-${i}` : `${i}`;
    const rect = {
      label: `选项${chineseNumber[i]}`,
      value,
    };

    if (deep > 0) {
      rect.options = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }

  return ans;
};

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
    doubleColumnsTree: {
      options: generateTree(1),
      value: ['0', '0-0'],
    },
    closeOnClickOverlay: true,
  },
  methods: {
    handleSingleSelect(e) {
      this.setData({
        'singleSelect.value': e.detail.value,
      });
    },
    handleTreeSelect(e) {
      this.setData({
        'doubleColumnsTree.value': e.detail.value,
      });
    },
  },
});
