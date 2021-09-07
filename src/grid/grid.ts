import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { addUnit } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-grid`;

@wxComponent()
export default class Grid extends SuperComponent {
  /**
   * Component properties
   */
  externalClasses = ['t-class'];

  relations = {
    '../grid-item/grid-item': {
      type: 'descendant' as 'descendant',
      linked(this: Grid) {
        // this.children.push(target);
        // push target 的方式仅适用于每次变动的都是末尾grid item，用以下方式替代
        this.children = this.getRelationNodes('../grid-item/grid-item');
        this.updateChildren();
      },
      unlinked(this: Grid) {
        // this.children = this.children.filter(item => item !== target);
        this.children = this.getRelationNodes('../grid-item/grid-item');
        this.updateChildren();
      },
    },
  };

  properties = {
    square: {
      type: Boolean,
      observer(this: Grid) {
        this.updateChildren();
      },
    },
    gutter: {
      type: [Number, String],
      value: 0,
      observer(this: Grid) {
        this.updateChildren();
        this.updateGutter();
      },
    },
    gutterType: {
      type: String,
      value: 'around', // 'between' or 'around'
    },
    hover: {
      type: Boolean,
      observer(this: Grid) {
        this.updateChildren();
      },
    },
    columnNum: {
      type: Number,
      observer(this: Grid) {
        this.updateChildren();
      },
      value: 4,
    },
    center: {
      type: Boolean,
      value: true,
      observer(this: Grid) {
        this.updateChildren();
      },
    },
    border: {
      type: Boolean,
      value: true,
      observer(this: Grid) {
        this.updateChildren();
      },
    },
  };

  /**
   * Component initial data
   */
  data = {
    classPrefix: name,
    viewStyle: '',
  };

  created() {
    this.children = [];
  }

  detached() {
    this.destroyed();
  }

  /**
   * Component methods
   */
  updateGutter() {
    const gutter = (this.properties.gutter as any) as string | number;
    if (gutter) {
      let viewStyle = `padding-left: ${addUnit(gutter)}`; // 每个子项都会留出右边距来实现gutter，这里在左侧留出同等的左边距以保持两端间距相等
      if (((this.properties.gutterType as any) as string) === 'between') {
        viewStyle = `margin-right: -${addUnit(gutter)}`; // 右侧设置负值外边距，以补偿最右侧子项的右边距，以保持两端没有边距
      }
      this.setData({ viewStyle });
    }
  }

  updateChildren() {
    // 由于linked的时候会多次调用此方法，造成性能问题，所以加上延时节流控制
    if (this.updateTimer) clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(() => {
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
