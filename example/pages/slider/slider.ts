Page({
  data: {
    value: 40,
    value1: 10,
    value2: 10,
    valueRange: [50, 50],
    valueRange2: [0, 90],
  },
  onLoad() {
  },
  onDefaultSliderValueChange(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  onSliderValueChange(e) {
    this.setData({
      value1: e.detail.value,
    });
  },
  onSliderValueChange2(e) {
    this.setData({
      value2: e.detail.value,
    });
  },
  onSliderValueChangeRange(e) {
    this.setData({
      valueRange: e.detail.value,
    });
  },
  onSliderValueChangeRange2(e) {
    this.setData({
      valueRange2: e.detail.value,
    });
  },
  onsliderchanging(e) {
    console.log(e);
    this.setData({
      value: e.detail.value,
    });
  },
});
