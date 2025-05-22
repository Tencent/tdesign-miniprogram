const chineseNumber = '一二三四五六七八九十'.split('');

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
    doubleColumnsTree: {
      options: generateTree(1),
      value: ['0', '0-0'],
    },
    tripleColumnsTree: {
      options: generateTree(2),
      value: ['0', '0-0', ['0-0-0', '0-0-1']],
    },
  },

  methods: {
    handleTreeSelect(e) {
      this.setData({
        'doubleColumnsTree.value': e.detail.value,
      });
    },
  },
});
