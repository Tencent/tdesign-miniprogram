const chineseNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const generateTree = function (deep = 0, count = 10, prefix) {
  const ans = [];

  for (let i = 0; i < count; i += 1) {
    const value = prefix ? `${prefix}-${i}` : `${i}`;
    const rect = {
      label: `Option${chineseNumber[i]}`,
      value,
    };

    if (deep > 0) {
      rect.children = generateTree(deep - 1, 10, value);
    }
    ans.push(rect);
  }

  return ans;
};

Component({
  data: {
    options: generateTree(1),
    value: ['0', '0-0'],
  },

  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
