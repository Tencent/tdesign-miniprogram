import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-result`;

@wxComponent()
export default class extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-image`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
  ];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  lifetimes = {
    ready() {
      this.setIcon();
    },
  };

  methods = {
    setIcon() {
      const { icon, theme } = this.properties;
      // 固定值
      if (icon) {
        this.setData({
          iconName: icon !== 'null' ? `${icon}` : '',
        });
      } else {
        const themeResult = {
          default: 'error-circle',
          success: 'check-circle',
          warning: 'error-circle',
          error: 'close-circle',
        };
        this.setData({ iconName: themeResult[theme] });
      }
    },
  };
}
