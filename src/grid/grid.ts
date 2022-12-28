import { isObject, SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-grid`;

@wxComponent()
export default class Grid extends SuperComponent {
  externalClasses = ['t-class'];

  relations: RelationsOptions = {
    './grid-item': {
      type: 'descendant',
    },
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    contentStyle: '',
  };

  observers = {
    'column,hover,align'() {
      this.updateContentStyle();
    },
    'gutter,border'() {
      this.updateContentStyle();
      this.doForChild((child) => child.updateStyle());
    },
  };

  lifetimes = {
    attached() {
      this.updateContentStyle();
    },
  };

  methods = {
    doForChild(action: (item: WechatMiniprogram.Component.TrivialInstance) => void) {
      this.$children.forEach(action);
    },
    updateContentStyle() {
      const contentStyles = [];
      const marginStyle = this.getContentMargin();
      marginStyle && contentStyles.push(marginStyle);
      this.setData({
        contentStyle: contentStyles.join(';'),
      });
    },

    // 判断需不需要在content上加负margin以实现gutter间距
    getContentMargin() {
      const { gutter } = this.properties;
      let { border } = this.properties;

      if (!border) return `margin-left:-${gutter}rpx; margin-top:-${gutter}rpx`;
      if (!isObject(border)) border = {} as any;
      const { width = 2 } = border as any;
      return `margin-left:-${width}rpx; margin-top:-${width}rpx`;
    },
  };
}
