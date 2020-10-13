import TComponent from '../common/component';
const sizeMap = {
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
        Object.keys(sizeMap).forEach((key) => {
          if (val === key) {
            fontSize = sizeMap[key];
          }
        });
        this.setData({ fontSize });
      },
    },
    customStyle: String,
    color: String,
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
