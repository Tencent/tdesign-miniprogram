const useCustomNavbarBehavior = Behavior({
  properties: {
    usingCustomNavbar: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    distanceTop: 0,
  },

  lifetimes: {
    attached() {
      if (this.properties.usingCustomNavbar) {
        this.calculateCustomNavbarDistanceTop();
      }
    },
  },

  methods: {
    calculateCustomNavbarDistanceTop() {
      const { statusBarHeight } = wx.getSystemInfoSync();
      const menuButton = wx.getMenuButtonBoundingClientRect();
      const distanceTop = menuButton.top + menuButton.bottom - statusBarHeight;

      this.setData({
        distanceTop,
      });
    },
  },
});

export default useCustomNavbarBehavior;
