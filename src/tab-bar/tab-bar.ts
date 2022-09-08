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

  backupValue: 0;

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

  /**
   * value设置为多层级标签，需要展开
   */
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
