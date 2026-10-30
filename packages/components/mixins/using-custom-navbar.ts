import { systemInfo } from '../common/utils';

const useCustomNavbarBehavior = Behavior({
  properties: {
    usingCustomNavbar: {
      type: Boolean,
      value: false,
    },
    customNavbarHeight: {
      type: Number,
      value: 0,
    },
  },
  data: {
    distanceTop: 0,
  },

  observers: {
    usingCustomNavbar(value) {
      if (value) {
        this.calculateCustomNavbarDistanceTop();
      } else {
        this.setData({ distanceTop: 0 });
      }
    },
  },

  methods: {
    calculateCustomNavbarDistanceTop() {
      const { statusBarHeight } = systemInfo;
      const menuButton = wx.getMenuButtonBoundingClientRect();
      const distance = menuButton.top + menuButton.bottom - statusBarHeight;

      this.setData({
        distanceTop: Math.max(distance, this.properties.customNavbarHeight + statusBarHeight),
      });
    },
  },
});

export default useCustomNavbarBehavior;
