/*
 * @Author: shiyanzhang
 * @Date: 2021-08-24 15:56:07
 * @Description:
 * @FilePath: /tdesign-miniprogram/example/pages/empty/empty.ts
 */
Page({
  data: {
    image: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/empty__demo-image.png',
  },
  goEmptyPage() {
    wx.navigateTo({ url: './empty-page' });
  },
});
