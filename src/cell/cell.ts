import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-cell`;

@wxComponent()
export default class Cell extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
    `${prefix}-class-note`,
    `${prefix}-class-hover`,
    `${prefix}-class-image`,
    `${prefix}-class-left`,
    `${prefix}-class-left-icon`,
    `${prefix}-class-center`,
    `${prefix}-class-right`,
    `${prefix}-class-right-icon`,
  ];

  relations: RelationsOptions = {
    '../cell-group/cell-group': {
      type: 'parent',
    },
  };

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    isLastChild: false,
  };

  onClick(e) {
    this.triggerEvent('click', e.detail);
    this.jumpLink();
  }

  jumpLink(urlKey = 'url', link = 'jumpType') {
    const url = this.data[urlKey];
    const jumpType = this.data[link];
    if (url) {
      wx[jumpType]({ url });
      // wx.navigateTo({ url });
    }
  }
}
