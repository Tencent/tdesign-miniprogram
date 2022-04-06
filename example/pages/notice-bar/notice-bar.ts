Page({
  data: {
    visible: true,
    marquee1: {
      speed: 80,
      loop: 2,
      delay: 0,
    },
    marquee2: {
      speed: 60,
      loop: -1,
      delay: 0,
    },
  },

  onReady() {
    /**
     * notice-bar组件的滚动动画依赖自身样式数据。
     * 页面中有多个滚动notice-bar时，建议用wx:if手动控制，需要显示时渲染组件，保证组件能够成功初始化。
     * */
  },

  handleExtreText(e) {
    console.log('click extre text', e);
  },

  handleSuffixIconCloseDemo(e) {
    console.log('click suffix-icon close', e);
    this.setData({
      visible: false,
    });
  },

  handleSuffixIconClose(e) {
    console.log('click suffix-icon close', e);
  },

  handleSuffixIconLink(e) {
    console.log('click suffix-icon link', e);
  },

  clickDetail() {
    console.log('click detail text');
  },
});
