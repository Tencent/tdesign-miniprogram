// components/privacy/privacy.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: '',
    },
    date: {
      type: String,
      value: '',
    },
    winStyle: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    win: false,
    privacy: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showPrivacyDetail() {
      this.setData({
        win: false,
        privacy: true,
      });
    },
    privacyConfirm() {
      this.setData({
        privacy: false,
        win: false,
      });
      wx.setStorageSync('TIMIShowPrivacy', true);
    },
    showPrivacyWin() {
      this.setData({
        win: true,
      });
    },
  },
  ready() {
    const TIMIShowPrivacy = wx.getStorageSync('TIMIShowPrivacy');
    if (!TIMIShowPrivacy) {
      this.setData({
        win: true,
      });
    }
  },
});
