Page({
  data: {
    value: 40,
    value1: 10,
    value2: 10,
    value3: 10,
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
  },
  onLoad() {},
  valueChange1(e: any) {
    console.log('带数值滑动选择器', e.detail.value);
  },
  valueChange2(e: any) {
    console.log('起始非零滑动选择器', e.detail.value);
  },
  valueChange3(e: any) {
    console.log('区间滑动选择器', e.detail.value);
  },
});
