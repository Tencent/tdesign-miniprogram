/*
 * @Author: shiyanzhang
 * @Date: 2021-09-26 15:06:16
 * @Description:
 * @FilePath: /tdesign-miniprogram/example/pages/indexes/display.ts
 */
import { letter, number } from './data.js';

Page({
  data: {
    list: letter,
    barHeight: null as any,
  },
  onLoad(options) {
    const { type } = options;
    let list = letter;
    if (type === 'number') {
      list = number;
    }

    this.setData({ list });
  },
  onReady() {
    this.getTopHeight().then((res: any) => {
      const { windowHeight } = wx.getSystemInfoSync();
      this.setData({
        barHeight: windowHeight - res.top,
      });
    });
  },
  onShow() {},
  getTopHeight() {
    return new Promise((resolve) => {
      const query = wx.createSelectorQuery();
      query
        .select('#bar')
        .boundingClientRect((res) => {
          resolve(res);
        })
        .exec();
    });
  },
  tapShowLetter() {
    this.setData({ list: letter });
  },
  tapShowNumber() {
    this.setData({ list: number });
  },
  onSelect(e) {
    const { indexes } = e.detail;
    if (indexes.length < 2) {
      console.warn('需要两个index才能确定city');
      return;
    }
    const group = this.data.list[indexes[0]];
    const city = group.children[indexes[1]];
    wx.showToast({
      icon: 'none',
      title: `你选择了: ${group.title}>${city.title}`,
    });
  },
});
