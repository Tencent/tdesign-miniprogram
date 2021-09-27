import { isObject, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-grid`;

@wxComponent()
export default class Grid extends SuperComponent {
  /**
   * Component properties
   */
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

  /**
   * Component initial data
   */
  data = {
    classPrefix: name,
    contentStyle: '',
    gridStyle: '',
  };

  observers = {
    'justifyContent,border,gutter'() {
      this.updateChildren();
      this.updateGridStyle();
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

  updateGridStyle() {
    const { justifyContent } = this.properties;
    const gridStyles = [];
    gridStyles.push(`justify-content:${justifyContent}`);
    this.setData({
      gridStyle: gridStyles.join(';'),
    });
  }

  updateContentStyle() {
    const { justifyContent } = this.properties;
    const contentStyles = [];
    const borderStyle = this.getContentBorder();
    const marginStyle = this.getContentMargin();
    contentStyles.push(`justify-content:${justifyContent}`);
    borderStyle && contentStyles.push(borderStyle);
    contentStyles.push(`width:${this.getContentWidth()}`);
    marginStyle && contentStyles.push(marginStyle);

    this.setData({
      contentStyle: contentStyles.join(';'),
    });
  }

  // 判断content的宽度
  getContentWidth() {
    const { justifyContent } = this.properties;
    if (
      // 如果justifyContent的值是around或者between
      (justifyContent as any) === 'space-between' ||
      (justifyContent as any) === 'space-around'
    )
      return '100%';
    return 'auto';
  }

  // 判断border在grid上的css属性,用border-right来填充最后一个grid-item的右侧border
  getContentBorder() {
    const { justifyContent, gutter } = this.properties;
    let { border } = this.properties;
    if (!border) return ''; // 如果border的值没传或者是border的值为false
    if (!isObject(border)) border = {} as any;
    const { color = 'black', width = 10, style = 'solid' } = border as any;
    if (
      // 如果justifyContent的值是around或者between
      (justifyContent as any) === 'space-between' ||
      (justifyContent as any) === 'space-around'
    ) {
      if (!this.isNext) return ''; // 如果没有接壤就不需要在gird上加border
      return `border-right:${width}rpx ${style} ${color};`;
    }
    if (gutter) return '';
    return `border-right:${width}rpx ${style} ${color};`;
  }

  // 判断需不需要在content上加负margin以实现gutter间距
  getContentMargin() {
    const { gutter, justifyContent } = this.properties;
    if (
      !gutter ||
      (justifyContent as any) === 'space-between' ||
      (justifyContent as any) === 'space-around'
    )
      return ''; // 如果没有gutter或者不是end,start,center布局就不需要这个负margin
    return `margin-left:-${gutter}rpx`;
  }

  // 判断grid内部中的grid-item是否挨着
  isChildrenNextToEachOther() {
    return new Promise((resolve) => {
      let childrenWidthSum = 0;
      this.children.forEach((item) => {
        const query = item.createSelectorQuery();
        query.select(`.${prefix}-grid-item`).boundingClientRect();
        query.exec((res) => {
          childrenWidthSum += res[0].width;
        });
      });
      const query = this.createSelectorQuery();
      let gridWidth = 0;
      query
        .select(`.${prefix}-grid`)
        .boundingClientRect()
        .exec((res) => {
          gridWidth += res[0].width;
          this.isNext = gridWidth <= childrenWidthSum;
          resolve(this.isNext);
        });
    });
  }

  updateChildren() {
    // 由于linked的时候会多次调用此方法，造成性能问题，所以加上延时节流控制
    if (this.updateTimer) clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(() => {
      this.children = this.getRelationNodes('./grid-item');
      this.isChildrenNextToEachOther().then(() => {
        this.updateContentStyle();
        this.children.forEach(function (item: WechatMiniprogram.Component.TrivialInstance) {
          item.updateStyle();
        });
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
