import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const classPrefix = `${prefix}-tab-bar`;

@wxComponent()
export default class Tabbar extends SuperComponent {
  relations: RelationsOptions = {
    './tab-bar-item': {
      type: 'descendant',
      linked() {
        // this.updateChildren();
      },
      // linkChanged() {
      //   this.updateChildren();
      // },
      // unlinked() {
      //   this.updateChildren();
      // },
    },
  };
  data = {
    classPrefix,
    defaultNameIndex: -1,
  };
  properties = {
    value: {
      type: Number,
      optionalTypes: [Array, String],
      value: 0,
      observer: 'updateChildren',
    },
    border: {
      type: Boolean,
      value: true,
    },
    fixed: {
      type: Boolean,
      value: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true,
    },
    color: {
      type: String,
      value: 'rgba(0, 0, 0, .6)',
    },
    activeColor: {
      type: String,
      value: '#0052D9',
    },
  };
  methods = {
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
      this.setData(
        {
          value,
        },
        () => {
          this.updateChildren();
        },
      );
      this.triggerEvent('change', value);
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
