Component({
  /**
   * 组件的初始数据
   */
  data: {
    demoCheckboxMax: ['checkbox1', 'checkbox2'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      console.log('checkbox', event.detail.value);
    },
  },
});
