import Toast from 'tdesign-miniprogram/toast/index';

Component({
  data: {
    visible: false,
    showIndex: false,
    closeBtn: false,
    deleteBtn: false,
    images: [],
  },
  methods: {
    onClick() {
      this.setData({
        images: [
          'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
          'https://tdesign.gtimg.com/mobile/demos/swiper2.png',
        ],
        showIndex: true,
        visible: true,
      });
    },
    onChange(e) {
      const { index } = e.detail;

      console.log('change', index);
    },

    onDelete(e) {
      const { index } = e.detail;

      Toast({
        context: this,
        selector: '#t-toast',
        message: `删除第${index + 1}个`,
      });
    },

    onClose(e) {
      const { trigger } = e.detail;
      console.log(trigger);
      this.setData({
        visible: false,
      });
    },
  },
});
