Component({
  /**
   * 组件的初始数据
   */
  data: {
    demoCheckbox2: ['checkbox2', 'checkbox3'],
    activeImage: 'https://tdesign.gtimg.com/miniprogram/checkbox-checked.png',
    inActiveImage: 'https://tdesign.gtimg.com/miniprogram/checkbox.png',
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
