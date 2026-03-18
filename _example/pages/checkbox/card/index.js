Component({
  /**
   * 组件的初始数据
   */
  data: {
    checked: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeChecked(e) {
      this.setData({
        checked: e.detail.checked,
      });
    },
  },
});
