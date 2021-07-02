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
    'title-class',
    'label-class',
    'value-class',
    'right-icon-class',
    'hover-class',
  ];
  options = {
    multipleSlots: true,
  };

  properties = {
    iconColor: {
      type: String,
      value: '',
    },
    iconSize: {
      type: String,
      value: '',
    },
    title: null,
    value: null,
    leftIcon: String,
    rightIcon: String,
    size: {
      type: String,
      default: 'small',
    },
    label: String,
    center: {
      type: Boolean,
      value: false,
    },
    isLink: Boolean,
    required: Boolean,
    clickable: Boolean,
    titleWidth: String,
    customStyle: String,
    useLabelSlot: Boolean,
    bordered: {
      type: Boolean,
      value: true,
    },
    url: String,
    linkType: {
      type: String,
      value: 'navigateTo',
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
  jumpLink(urlKey = 'url') {
    const url = this.data[urlKey];
    if (url) {
      // wx[this.linkType]({ url });
      wx.navigateTo({ url });
    }
  }
}
