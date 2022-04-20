Page({
  data: {
    visible: true,
    marquee1: {
      speed: 80,
      loop: -1,
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

  click(e) {
    const { trigger } = e.detail;
    if (trigger === 'prefix-icon') {
      console.log('click prefix-icon text');
    } else if (trigger === 'content') {
      console.log('click content text');
    } else if (trigger === 'extra') {
      console.log('click extra text');
    } else if (trigger === 'suffix-icon') {
      console.log('click suffix-icon text');
    }
  },

  clickDetail() {
    console.log('click detail text');
  },
});
