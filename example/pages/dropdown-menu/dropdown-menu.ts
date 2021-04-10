const emptyArr = new Array(20).fill(null);
const numberArr = [...emptyArr].map((_, i) => ({
  title: `选项 ${i + 1}`,
  value: `option_${i + 1}`,
}));

const disabledArr = [...emptyArr].map((_, i) => ({
  title: `选项 ${i + 1}`,
  value: `option_${i + 1}`,
  disabled: (i + 1) % 3 === 0,
}));

Page({
  data: {
    tab: 0,
    optionsS: numberArr,
    selectedS: 'option_2',
    optionsM: numberArr,
    selectedM: ['option_1', 'option_3'],
    optionsD: disabledArr,
    selectedD: 'option_1',
  },
  multiSelected(e) {
    this.setData({
      selectedM: e.detail.selected,
    });
  },
  switchTab(e) {
    this.setData({
      tab: e.currentTarget.dataset.tab,
    });
  },
});
