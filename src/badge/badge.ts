import TComponent from '../common/component';

TComponent({
  properties: {
    size: {
      type: String,
      value: 'middle', // 尺寸，支持 'medium', 'small'
      observer(val: string) {
        // this.setData({ fontSize })
      },
    },
    customStyle: String,
    color: {
      type: String,
      value: '',
    },
  },
  computed: {
    showBadge() {
      const { content, showZero, count } = this.data;
      return content || showZero || count !== 0;
    },
  },
  data: {},
});
