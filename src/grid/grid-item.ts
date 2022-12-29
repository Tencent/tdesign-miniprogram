import { SuperComponent, wxComponent, isObject, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './grid-item-props';
import { uniqueFactory, setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-grid-item`;
const getUniqueID = uniqueFactory('grid_item');

enum LinkTypes {
  'redirect-to' = 'redirectTo',
  'switch-tab' = 'switchTab',
  'relaunch' = 'reLaunch',
  'navigate-to' = 'navigateTo',
}

@wxComponent()
export default class GridItem extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-image`,
    `${prefix}-class-text`,
    `${prefix}-class-description`,
  ];

  options = {
    multipleSlots: true,
    // virtualHost: true,
  };

  relations: RelationsOptions = {
    './grid': {
      type: 'ancestor',
      linked(target) {
        this.parent = target;
        this.updateStyle();
        this.setData({
          column: target.data.column,
        });
      },
    },
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    gridItemStyle: '',
    gridItemWrapperStyle: '',
    gridItemContentStyle: '',
    align: 'center',
    layout: 'vertical',
    column: 0,
    labelID: '',
  };

  observers = {
    icon(icon) {
      const obj = setIcon('icon', icon, '');
      this.setData({
        ...obj,
      });
    },
  };

  lifetimes = {
    ready() {
      this.setData({
        labelID: getUniqueID(),
      });
    },
  };

  updateStyle() {
    const { hover, align } = this.parent.properties;
    const { customStyle } = this.properties;
    const gridItemStyles = [];
    const gridItemWrapperStyles = [];
    const gridItemContentStyles = [];
    const widthStyle = this.getWidthStyle();
    const paddingStyle = this.getPaddingStyle();
    const borderStyle = this.getBorderStyle();
    widthStyle && gridItemStyles.push(widthStyle);
    paddingStyle && gridItemWrapperStyles.push(paddingStyle);
    borderStyle && gridItemContentStyles.push(borderStyle);
    this.setData({
      gridItemStyle: `${gridItemStyles.join(';')}${customStyle ? `;${customStyle}` : ''}`,
      gridItemWrapperStyle: gridItemWrapperStyles.join(';'),
      gridItemContentStyle: gridItemContentStyles.join(';'),
      hover,
      layout: this.properties.layout,
      align: align,
    });
  }

  // 判断应该加在gridItem上的宽度
  getWidthStyle() {
    const { column } = this.parent.properties;
    return column > 0 ? `width:${(1 / column) * 100}%` : '';
  }

  // 获取应该加在gridWrap上的padding
  getPaddingStyle() {
    const { gutter } = this.parent.properties;
    if (gutter) return `padding-left:${gutter}rpx;padding-top:${gutter}rpx`;
    return '';
  }

  // 判断border在grid-item-content上的css属性
  getBorderStyle() {
    const { gutter } = this.parent.properties;
    let { border } = this.parent.properties;
    if (!border) return ''; // 如果border的值没传或者是border的值为false
    if (!isObject(border)) border = {} as any;
    const { color = '#266FE8', width = 2, style = 'solid' } = border as any;
    if (gutter) return `border:${width}rpx ${style} ${color}`;
    return `border-top:${width}rpx ${style} ${color};border-left:${width}rpx ${style} ${color}`;
  }

  onClick(e) {
    const { item } = e.currentTarget.dataset;
    this.triggerEvent('click', item);
    this.jumpLink();
  }

  jumpLink() {
    const { url, jumpType } = this.properties;
    if (url && jumpType) {
      if (LinkTypes[jumpType as any]) {
        wx[LinkTypes[jumpType as any]]({ url });
      }
    }
  }
}
