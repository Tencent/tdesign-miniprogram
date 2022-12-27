import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';
import { setIcon } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-result`;

const THEME_ICON = {
  default: 'error-circle',
  success: 'check-circle',
  warning: 'error-circle',
  error: 'close-circle',
};

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
      this.initIcon();
    },
  };

  observers = {
    'icon, theme'() {
      this.initIcon();
    },
  };

  methods = {
    initIcon() {
      const { icon, theme } = this.properties;
      const obj = setIcon('icon', icon, THEME_ICON[theme]);
      this.setData({
        ...obj,
      });
    },
  };
}
