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

  ready() {
    this.showChildren();
  }

  methods = {
    showChildren() {
      const items = this.getRelationNodes('./tab-bar-item');
      const len = items.length;
      const { value } = this.data;
      if (len > 0) {
        items.forEach((child) => {
          if (child.properties.value === value) {
            child.showSpread();
            child.setData({ crowded: len > 3 });
          }
        });
      }
    },
    updateChildren() {
      const items = this.getRelationNodes('./tab-bar-item');
      const len = items.length;
      const { value } = this.data;

      if (len > 0) {
        items.forEach((child) => {
          child.checkActive(value);
        });
      }
    },
    updateValue(value) {
      this._trigger('change', { value });
    },
    changeOtherSpread(value) {
      const items = this.getRelationNodes('./tab-bar-item');

      items.forEach((child) => {
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
