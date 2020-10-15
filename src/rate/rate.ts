import TComponent from '../common/component';

TComponent({
  properties: {
    count: {
      type: Number,
      value: 5,
    },
    value: {
      type: Number,
      value: 0,
    },
    readonly: {
      type: Boolean,
      value: false,
    },
    clearable: {
      type: Boolean,
      value: false,
    },
    showText: {
      type: Boolean,
      value: false,
    },
    texts: {
      type: Array,
      value: ['极差', '失望', '一般', '满意', '惊喜'],
    },
    textColor: {
      type: String,
      value: '#BBBBBB',
    },
    size: {
      type: String,
      value: '30px',
    },
  },
  externalClasses: ['ctn-class', 'star-class', 'text-class'],
  methods: {
    /**
     * 正常状态下点击Icon的处理函数
     * @param e 事件对象
     */
    changeVal(e) {
      // 只读时返回并抛出事件
      if (this.properties.readonly) {
        this.triggerEvent('readonly');
        return;
      }

      const { target: { dataset: { val = 0 } = {} } = {} } = e;
      this.setData({
        value: val,
      });
      this.triggerEvent('change', {
        val,
        text: this.data.texts[val - 1],
      });
    },
    /**
     * 只读状态下点击Icon的处理函数
     * @param e 事件对象
     */
    clearVal(e) {
      // 不可取消时直接返回
      if (!this.properties.clearable) {
        return;
      }

      // 只读时返回并抛出事件
      if (this.properties.readonly) {
        this.triggerEvent('readonly');
        return;
      }

      const { target: { dataset: { val = 0 } = {} } = {} } = e;
      // 只处理当前最大选中元素的取消
      if (val !== this.data.value) {
        return;
      }

      const newVal = Math.max(val - 1, 0);
      this.setData({
        value: newVal,
      });
      this.triggerEvent('change', {
        val: newVal,
        text: this.data.texts[newVal - 1],
      });
    },
  },
});
