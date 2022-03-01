Page({
  data: {
    value: 40,
    value1: 10,
    value2: 10,
    value3: 50,
    valueStep: 24,
    valueRange: [],
    valueRange2: [],
    mask1: [0, 50, 100],
    mask2: {
      0: '￥0',
      50: '￥50',
      100: '￥100',
    },
    mask3: {
      0: '小',
      50: '中',
      100: '大',
    },
    /** 滑动条的颜色 */
    colors: ['#0052D9', '#E7E7E7'],
    /** 禁用状态滑动条的颜色） */
    disabledColor: ['#BBD3FB', '#E7E7E7'],
  },
  handleChange(e) {
    this.setData({
      value3: e.detail.value,
    });
  },
  handleChange2(e) {
    console.log(e);
  },
});
