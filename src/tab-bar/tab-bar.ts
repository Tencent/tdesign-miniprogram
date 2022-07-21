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

  data = {
    prefix,
    classPrefix,
    defaultNameIndex: -1,
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
        items.forEach((item) => {
          if (item.properties.currentName === value) {
            item.showSpread();
          }
        });
      }
    },
    updateChildren() {
      const items = this.getRelationNodes('./tab-bar-item');
      const len = items.length;
      const { value } = this.data;

      if (len > 0) {
        items.forEach((item) => {
          item.checkActive(value);
        });
      }
    },
    updateValue(value) {
      this._trigger('change', { value });
    },
    changeOtherSpread(value) {
      const items = this.getRelationNodes('./tab-bar-item');

      items.forEach((item) => {
        if (item.properties.currentName !== value) {
          item.closeSpread();
        }
      });
    },
    /**
     * 对于没有 name 的 item 生成一个 name
     */
    initName() {
      const nameIndex = this.data.defaultNameIndex + 1;

      this.setData({
        defaultNameIndex: nameIndex,
      });
      return nameIndex;
    },
  };
}
