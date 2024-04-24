const themeChangeBehavior = Behavior({
  data: {
    theme: 'light',
  },

  attached() {
    this._initTheme();
  },

  methods: {
    _initTheme() {
      const that = this;
      wx.getSystemInfo({
        success(res) {
          that.setData({
            theme: res.theme,
          });
        },
      });

      wx.onThemeChange((res) => {
        that.setData({
          theme: res.theme,
        });
      });
    },
  },
});

export default themeChangeBehavior;
