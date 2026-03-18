import pageScrollMixin from 'tdesign-miniprogram/mixins/page-scroll';

Component({
  behaviors: [pageScrollMixin()],
  data: {
    scrolling: false,
    timer: null,
  },
  methods: {
    handleClick(e) {
      console.log('handleClick: ', e);
    },
    handleDragStart(e) {
      console.log('handleDragStart: ', e);
    },
    handleDragEnd(e) {
      console.log('handleDragEnd: ', e);
    },
    onScroll() {
      clearTimeout(this.timer);
      this.setData({
        scrolling: true,
      });
      this.timer = setTimeout(() => {
        this.setData({
          scrolling: false,
        });
      }, 100);
    },
  },
});
