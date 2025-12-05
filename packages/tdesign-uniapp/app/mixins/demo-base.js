export default {
  computed: {
    gCustomNavbarHeight() {
      let result = 0;
      // #ifdef H5 || APP-PLUS
      result = 48;
      // #endif
      return result;
    },
    isH5() {
      let result = false;
      // #ifdef H5
      result = true;
      // #endif
      return result;
    },
    isMP() {
      let result = false;
      // #ifdef MP
      result = true;
      // #endif
      return result;
    },
    isMPAlipay() {
      let result = false;
      // #ifdef MP-ALIPAY
      result = true;
      // #endif
      return result;
    },
  },
};
