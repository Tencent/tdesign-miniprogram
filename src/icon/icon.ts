import TComponent from '../common/component';
const sizeKeywordMap = {
  xs: '12px',
  small: '14px',
  middle: '16px',
  large: '18px',
  xl: '20px',
};
TComponent({
  properties: {
    name: {
      type: String,
    },
    size: {
      type: String,
      value: 'middle', // 图标尺寸，支持 'xs', 'small', 'middle', 'large', 'xl'，'35px', '3em' 等，默认值为 middle
      observer(val: string) {
        let fontSize = 'inherit';
        // 如果是关键词需要转换成对应尺寸
        if (Object.prototype.hasOwnProperty.call(sizeKeywordMap, val)) {
          fontSize = sizeKeywordMap[val];
        }
        this.setData({ fontSize });
      },
    },
    customStyle: String,
    color: {
      type: String,
      value: 'initial',
    },
  },
  data: {
    fontSize: 'inherit',
  },
  methods: {
    onTap() {
      this.triggerEvent('tap');
    },
  },
});
