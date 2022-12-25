import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './tab-bar-item-props';
import { getRect } from '../common/utils';

const { prefix } = config;
const classPrefix = `${prefix}-tab-bar-item`;

@wxComponent()
export default class TabBarItem extends SuperComponent {
  parent = null;

  relations: RelationsOptions = {
    './tab-bar': {
      type: 'ancestor',
      linked(parent) {
        const { theme, split, shape } = parent.data;
        this.parent = parent;

        this.setData({
          theme,
          split,
          shape,
          currentName: this.properties.value ? this.properties.value : parent.initName(),
        });
        parent.updateChildren();
      },
    },
  };

  options = {
    multipleSlots: true,
  };

  data = {
    prefix,
    classPrefix,
    isSpread: false,
    isChecked: false,
    hasChildren: false,
    currentName: '',
    split: true,
    iconOnly: false,
    theme: '',
    crowded: false,
    shape: 'normal',
  };

  properties = props;

  observers = {
    subTabBar(value: Record<string, any>[]) {
      this.setData({
        hasChildren: value.length > 0,
      });
    },
  };

  lifetimes = {
    async attached() {
      const res = await getRect(this, `.${classPrefix}__text`);

      this.setData({ iconOnly: res.height === 0 });
    },
  };

  methods = {
    showSpread() {
      this.setData({
        isSpread: true,
      });
    },
    toggle() {
      const { parent } = this;
      const { currentName, hasChildren, isSpread } = this.data;

      if (hasChildren) {
        this.setData({
          isSpread: !isSpread,
        });
      }
      parent.updateValue(currentName);
      parent.changeOtherSpread(currentName);
    },
    selectChild(event) {
      const { parent } = this;
      const { value } = event.target.dataset;

      parent.updateValue(value);
      this.setData({
        isSpread: false,
      });
    },
    checkActive(value) {
      const { currentName, subTabBar } = this.data;
      const isChecked = subTabBar?.some((item) => item.value === value) || currentName === value;

      this.setData({
        isChecked,
      });
    },
    closeSpread() {
      this.setData({
        isSpread: false,
      });
    },
  };
}
