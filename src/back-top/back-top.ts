import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-back-top`;

@wxComponent()
export default class BackTop extends SuperComponent {
  /**
   * Component properties
   */
  externalClasses = [`${prefix}-class`, `${prefix}-class-icon`, `${prefix}-class-text`];

  properties = props;

  /**
   * Component initial data
   */
  data = {
    prefix,
    classPrefix: name,
  };

  /**
   * Component methods
   */
  toTop() {
    this.triggerEvent('to-top');
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300,
    });
  }
}
