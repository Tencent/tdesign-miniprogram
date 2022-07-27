Component({
  properties: {
    disabled: Boolean,
    disabledColor: Array,
  },
  data: {
    value: 50,
    /** 滑动条的颜色 */
    colors: ['#0052D9', '#E7E7E7'],
  },

  methods: {
    handleChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});
