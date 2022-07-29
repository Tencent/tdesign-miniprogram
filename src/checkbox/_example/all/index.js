Component({
  /**
   * 组件的初始数据
   */
  data: {
    options: [{ label: '全选', checkAll: true }, '多选1', '多选2', { label: '多选3', value: '多选3' }],
    checkAllValues: ['多选1', '多选2', ''],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCheckAllChange(event) {
      console.log('checkbox', event.detail.value);
      this.setData({
        checkAllValues: event.detail,
      });
    },
  },
});
