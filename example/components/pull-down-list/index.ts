const itemHeight = 56 * 2;

Component({
  data: {
    childBoxHeight: 0,
    childIconColor: 'rgba(0, 0, 0, 0.4)',
  },
  externalClasses: ['t-class'],
  properties: {
    defaultOpen: {
      type: Boolean,
      value: false,
    },
    name: {
      type: String,
      value: '',
    },
    icon: {
      type: String,
      value: '',
    },
    childArr: {
      type: Array,
      value: [],
      observer(childArr: any[]) {
        this.setData({
          childBoxHeight: this.data.defaultOpen ? itemHeight * childArr.length : 0,
        });
      },
    },
  },
  methods: {
    switchHandle() {
      const { childArr, childBoxHeight } = this.data;
      this.setData({
        childBoxHeight: childBoxHeight > 0 ? 0 : childArr.length * itemHeight,
      });
    },
    tapChild(e: any) {
      this.triggerEvent('click', e.target.dataset);
    },
  },
  lifetimes: {
    attached() {
      const { theme } = wx.getSystemInfoSync();
      if (theme === 'dark') {
        this.setData({ childIconColor: 'rgba(255, 255, 255, 35%)' });
      }
    },
  },
});
