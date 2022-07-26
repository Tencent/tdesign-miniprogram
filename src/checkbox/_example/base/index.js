Component({
  /**
   * 组件的初始数据
   */
  data: {
    demoCheckbox1: ['checkbox2', 'checkbox3'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleGroupChange(event) {
      console.log('group', event.detail.value);
      this.setData({
        demoCheckbox1: event.detail.value,
      });
    },
  },
});
