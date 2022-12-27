import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const classPrefix = `${prefix}-tab-bar`;

@wxComponent()
export default class Tabbar extends SuperComponent {
  relations: RelationsOptions = {
    './tab-bar-item': {
      type: 'descendant',
    },
  };

  externalClasses = [`${prefix}-class`];

  backupValue = -1;

  data = {
    prefix,
    classPrefix,
  };

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    value() {
      this.updateChildren();
    },
  };

  lifetimes = {
    ready() {
      this.showChildren();
    },
  };

  methods = {
    showChildren() {
      const { value } = this.data;

      this.$children.forEach((child) => {
        if (child.properties.value === value) {
          child.showSpread();
          child.setData({ crowded: this.$children > 3 });
        }
      });
    },

    updateChildren() {
      const { value } = this.data;

      this.$children.forEach((child) => {
        child.checkActive(value);
      });
    },

    updateValue(value) {
      this._trigger('change', { value });
    },

    changeOtherSpread(value) {
      this.$children.forEach((child) => {
        if (child.properties.value !== value) {
          child.closeSpread();
        }
      });
    },

    initName() {
      return (this.backupValue += 1);
    },
  };
}
