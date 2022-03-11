/*
 * @Author: rileycai
 * @Date: 2022-03-04 23:00:57
 * @LastEditTime: 2022-03-10 15:15:10
 * @LastEditors: rileycai
 * @Description:
 * @FilePath: /tdesign-miniprogram/example/pages/rate/rate.ts
 */
Page({
  data: {
    value: [1, 2, 3, 3.5, 4, 5, 3, 3, 3, 3, 3, 3, 2.5],
    texts: ['1分', '2分', '3分', '4分', '5分'],
  },

  onChange(e) {
    const { index } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`value[${index}]`]: value,
    });
  },
});
