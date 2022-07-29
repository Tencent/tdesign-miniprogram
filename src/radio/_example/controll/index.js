Component({
  /**
   * 组件的初始数据
   */
  data: {
    value: 'radio1',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      const { value } = e.detail;

      this.setData({
        value,
      });
    },
  },
});
