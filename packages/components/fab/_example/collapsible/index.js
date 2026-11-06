import pageScrollMixin from 'tdesign-miniprogram/mixins/page-scroll';

const COLLAPSE_DELAY = 3000;

Component({
  behaviors: [pageScrollMixin()],
  data: {
    collapsed: false,
  },
  lifetimes: {
    attached() {
      this.startCollapseTimer();
    },
    detached() {
      this.clearCollapseTimer();
    },
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
      this.startCollapseTimer();
    },
    onExpand() {
      if (!this.data.collapsed) return;
      this.setData({ collapsed: false });
      this.startCollapseTimer();
    },
    clearCollapseTimer() {
      if (!this.timer) return;
      clearTimeout(this.timer);
      this.timer = null;
    },
    startCollapseTimer() {
      this.clearCollapseTimer();
      this.timer = setTimeout(() => {
        this.setData({ collapsed: true });
        this.timer = null;
      }, COLLAPSE_DELAY);
    },
  },
});
