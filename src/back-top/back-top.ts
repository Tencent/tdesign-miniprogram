import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-back-top`;

@wxComponent()
export default class BackTop extends SuperComponent {
  /**
   * Component properties
   */
  externalClasses = ['t-class'];

  properties = {
    show: {
      type: Boolean,
      value: false,
    },
    type: String,
    fixed: {
      type: Boolean,
      value: true,
    },
    text: {
      type: String,
      value: '',
    },
    icon: {
      type: String,
      value: 'arrow-up', // 默认为 ‘^’
    },
    classPrefix: {
      type: String,
      value: 't',
    },
    iconColor: String,
    iconSize: String,
    textSize: String,
    textColor: String,
  };

  /**
   * Component initial data
   */
  data = {
    className: name,
  };
  /**
   * Component methods
   */

  toTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300,
    });
  }
}
