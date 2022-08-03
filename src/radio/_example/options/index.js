Component({
  /**
   * 组件的初始数据
   */
  data: {
    options: [
      'string', // => { label: 'string', value: 'string', disabled: false }
      'number', // => { label: 'number', value: 'number', disabled: false }
      { label: '对象', value: 'object', disabled: true },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    },
  },
});
