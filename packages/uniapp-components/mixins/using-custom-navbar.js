import { systemInfo } from '../common/utils';
const useCustomNavbarBehavior = {
  data() {
    return {
      distanceTop: 0,
    };
  },
  props: {
    usingCustomNavbar: {
      type: Boolean,
      default: false,
    },
    customNavbarHeight: {
      type: Number,
      default: 0,
    },
  },
  created() {
    if (this.usingCustomNavbar) {
      this.calculateCustomNavbarDistanceTop();
    }
  },
  methods: {
    calculateCustomNavbarDistanceTop() {
      const { statusBarHeight } = systemInfo;
      let distance = 0;
      // #ifndef H5
      // #ifndef APP-PLUS
      const menuButton = uni.getMenuButtonBoundingClientRect();
      distance = menuButton.top + menuButton.bottom - statusBarHeight;
      // #endif
      // #endif

      this.distanceTop = Math.max(distance, this.customNavbarHeight + statusBarHeight);
    },
  },
};
export default useCustomNavbarBehavior;
