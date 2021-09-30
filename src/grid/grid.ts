import { isObject, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-grid`;

@wxComponent()
export default class Grid extends SuperComponent {
  externalClasses = ['t-class'];

  relations = {
    './grid-item': {
      type: 'descendant' as 'descendant',
      linked(this: Grid) {
        this.updateChildren();
      },
      unlinked(this: Grid) {
        this.updateChildren();
      },
    },
  };

  properties = props;

  data = {
    classPrefix: name,
    contentStyle: '',
  };

  observers = {
    'justifyContent,border,gutter'() {
      this.updateChildren();
    },
  };

  lifetimes = {
    attached() {
      this.updateChildren();
    },
    detached() {
      this.destroyed();
    },
    created() {
      this.children = [];
    },
  };

  updateContentStyle() {
    const contentStyles = [];
    const marginStyle = this.getContentMargin();
    marginStyle && contentStyles.push(marginStyle);
    this.setData({
      contentStyle: contentStyles.join(';'),
    });
  }

  // 判断需不需要在content上加负margin以实现gutter间距
  getContentMargin() {
    const { gutter } = this.properties;
    let { border } = this.properties;
    if (!border) return ''; // 如果border的值没传或者是border的值为false
    if (!isObject(border)) border = {} as any;
    const { width = 2 } = border as any;
    if (gutter) return `margin-left:-${gutter}rpx; margin-top:-${gutter}rpx`;
    return `margin-left:-${width}rpx; margin-top:-${width}rpx`;
  }

  updateChildren() {
    // 由于linked的时候会多次调用此方法，造成性能问题，所以加上延时节流控制
    if (this.updateTimer) clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(() => {
      this.children = this.getRelationNodes('./grid-item');
      this.updateContentStyle();
      this.children.forEach(function (item: WechatMiniprogram.Component.TrivialInstance) {
        item.updateStyle();
      });
    }, 100);
  }

  destroyed() {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
      this.updateTimer = null;
    }
  }
}
