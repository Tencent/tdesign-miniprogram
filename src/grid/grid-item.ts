import { SuperComponent, wxComponent, isObject } from '../common/src/index';
import config from '../common/config';
// import { addUnit } from '../common/utils';
import props from './grid-item-props';

const { prefix } = config;
const name = `${prefix}-grid-item`;
const LinkTypes = ['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'];
// "redirect-to" | "switch-tab" | "relaunch" | "navigate-to"
// enum LinkTypes{
//   "redirect-to"="redirectTo"
// }

@wxComponent()
export default class GridItem extends SuperComponent {
  /**
   * Component properties
   */
  externalClasses = ['t-class', 't-class-image', 't-class-text', 't-class-description'];

  options = {
    multipleSlots: true,
  };

  relations = {
    './grid': {
      type: 'ancestor' as 'ancestor',
      linked(this: GridItem, target: WechatMiniprogram.Component.TrivialInstance) {
        this.parent = target;
      },
    },
  };

  properties = props;

  /**
   * Component initial data
   */
  data = {
    classPrefix: name,
    gridItemStyle: '',
  };

  // ready() {
  //   this.updateStyle();
  // }

  /**
   * Component methods
   */
  updateStyle() {
    const { hover } = this.parent.properties;
    const gridItemStyles = [];
    const borderStyle = this.getBorderStyle();
    const marginStyle = this.getMarginStyle();
    const justifyContentStyle = this.getAlignItemsStyle();
    borderStyle && gridItemStyles.push(borderStyle);
    marginStyle && gridItemStyles.push(marginStyle);
    justifyContentStyle && gridItemStyles.push(justifyContentStyle);
    this.setData({
      gridItemStyle: gridItemStyles.join(';'),
      hover,
    });
  }

  // 判断border在grid-item上的css属性
  getBorderStyle() {
    const { gutter, justifyContent } = this.parent.properties;
    let { border } = this.parent.properties;
    if (!border) return ''; // 如果border的值没传或者是border的值为false
    if (!isObject(border)) border = {} as any;
    const { color = 'black', width = 10, style = 'solid' } = border as any;
    if (
      // 如果justifyContent的值是around或者between
      (justifyContent as any) === 'space-between' ||
      (justifyContent as any) === 'space-around'
    ) {
      if (!this.parent.isNext) return `border:${width}rpx ${style} ${color}`; // 如果没有接壤就不考虑双倍border的情况
      return `border:${width}rpx ${style} ${color};border-right:0rpx`;
    }
    if (gutter) return `border:${width}rpx ${style} ${color}`;
    return `border:${width}rpx ${style} ${color};border-right:0rpx`;
  }

  // 通过gutter的值判断item的margin
  getMarginStyle() {
    const { gutter, justifyContent } = this.parent.properties;
    if (
      // 如果justifyContent的值是around或者between
      (justifyContent as any) === 'space-between' ||
      (justifyContent as any) === 'space-around' ||
      !gutter
    )
      return '';
    return `margin-left:${gutter}rpx`;
  }

  getAlignItemsStyle() {
    const { align } = this.parent.properties;
    if (align === 'center' || !align) return 'align-items:center';
    return 'align-items:flex-start';
  }

  onClick(e) {
    const { item } = e.currentTarget.dataset;
    this.triggerEvent('click', item);
    this.jumpLink();
  }

  jumpLink() {
    const { url, jumpType } = this.properties;
    if (url && jumpType) {
      if (LinkTypes.indexOf(jumpType as any) > -1) {
        wx[jumpType as any]({ url });
      }
    }
  }
}
