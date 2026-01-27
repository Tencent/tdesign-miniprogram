import { goBackOrGoHome } from '@tdesign/uniapp/common/route';

const SHARE_INFO = {
  title: 'TDesign UI',
};


export default {
  onShareAppMessage() {
    return SHARE_INFO;
  },
  onShareTimeline() {
    return SHARE_INFO;
  },
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
  mounted() {
    // 检查分享功能是否可用
    // #ifdef MP-WEIXIN
    if (typeof wx.showShareMenu === 'function') {
      wx.showShareMenu({
        success: () => {
        },
        fail: () => {
        },
      });
    }
    // #endif
  },
  methods: {
    onDemoGoBack() {
      goBackOrGoHome();
    },
  },
};
