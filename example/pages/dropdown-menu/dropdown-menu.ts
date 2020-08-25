const emptyArr = new Array(20).fill(null);
const numberArr = emptyArr.map((_, i) => ({
  title: `选项 ${i + 1}`,
  value: `option_${i + 1}`,
}));

Page({
  data: {
    optionsS: numberArr,
    selectedS: null
  }
});
