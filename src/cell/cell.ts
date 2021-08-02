import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
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
    't-class-description',
    't-class-note',
    't-class-hover',
    't-class-thumb',
    't-class-left',
    't-class-right',
  ];
  options = {
    multipleSlots: true,
  };
  properties = props;

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
  jumpLink(urlKey = 'url', link = 'jumpType') {
    const url = this.data[urlKey];
    const jumpType = this.data[link];
    if (url) {
      wx[jumpType]({ url });
      // wx.navigateTo({ url });
    }
  }
}
