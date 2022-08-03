Component({
  /**
   * 组件的初始数据
   */
  data: {
    demoCheckbox2: ['checkbox2', 'checkbox3'],
    activeImage: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox-checked.png',
    inActiveImage: 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/miniprogram/checkbox.png',
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
