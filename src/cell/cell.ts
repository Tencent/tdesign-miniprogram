import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-cell`;

@wxComponent()
export default class Cell extends SuperComponent {
  /**
   * Component properties
   */
  externalClasses = [
    't-class',
    't-class-title',
    't-class-label',
    't-class-content',
    't-class-hover',
    't-class-left',
    't-class-right',
  ];
  options = {
    multipleSlots: true,
  };

  properties = {
    title: {
      type: String,
      value: '',
    },
    content: {
      type: String,
      value: '',
    },
    label: {
      type: String,
      value: '',
    },
    align: {
      type: String,
      value: 'middle', // 'top' | 'middle' | 'bottom'
    },
    required: {
      type: Boolean,
      value: false,
    },
    hover: {
      type: Boolean,
      value: false,
    },
    useLabelSlot: {
      type: Boolean,
      value: false,
    },
    bordered: {
      type: Boolean,
      value: true,
    },
    url: {
      type: String,
      value: '',
    },
    linkType: {
      type: String,
      value: 'navigateTo', // 'navigateTo' | 'redirectTo' | 'switchTab' | 'reLaunch'
    },
  };

  /**
   * Component initial data
   */
  data = {
    classPrefix: name,
  };
  /**
   * Component methods
   */

  onClick(e) {
    this.triggerEvent('click', e.detail);
    this.jumpLink();
  }
  jumpLink(urlKey = 'url', link = 'linkType') {
    const url = this.data[urlKey];
    const linkType = this.data[link];
    if (url) {
      wx[linkType]({ url });
      // wx.navigateTo({ url });
    }
  }
}
