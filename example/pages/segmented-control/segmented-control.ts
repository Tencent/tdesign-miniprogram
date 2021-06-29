Page({
  data: {
    list1: [{ text: '项目一' }, { text: '项目二' }],
    list2: [
      { text: '项目A', value: 'item_1' },
      { text: '项目B', value: 'item_2' },
    ],
    currentValue: -1,
    currentValue2: '',
  },
  onChange(event) {
    console.log(`点击: ${event.detail}`);
    this.setData({ currentValue: event.detail });
  },
  onChange2(event) {
    console.log(`点击: ${event.detail}`);
    this.setData({ currentValue2: event.detail });
  },
});
