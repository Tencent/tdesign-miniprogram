import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './tab-bar-item-props';

const { prefix } = config;
const classPrefix = `${prefix}-tab-bar-item`;

@wxComponent()
export default class TabbarItem extends SuperComponent {
  relations: RelationsOptions = {
    './tab-bar': {
      type: 'ancestor',
      linked(parent) {
        const [activeColor, color] = parent.data.color;
        this.setData({
          parent,
          color,
          activeColor,
          currentName: this.properties.value ? this.properties.value : parent.initName(),
        });
        parent.updateChildren();
      },
    },
  };
  data = {
    prefix,
    classPrefix,
    isSpread: false,
    isChecked: false,
    parent: null,
    hasChildren: false,
    currentName: '',
    color: '',
    activeColor: '',
  };
  properties = props;
  observers = {
    subTabBar(value: Record<string, any>[]) {
      this.setData({
        hasChildren: value.length > 0,
      });
    },
  };
  methods = {
    toggle() {
      const { parent, currentName, isSpread, hasChildren } = this.data;

      if (hasChildren) {
        this.setData({
          isSpread: !isSpread,
        });
        if (Array.isArray(parent.value) && parent.value[0] === currentName) {
          parent.updateValue([currentName]);
        }
      }
      parent.updateValue(currentName);
    },
    selectChild(event) {
      const { parent, currentName } = this.data;
      const childName = event.target.dataset.name;

      if (!(Array.isArray(parent.value) && parent.value[1] === childName)) {
        parent.updateValue([currentName, childName]);
      }
      this.setData({
        isSpread: false,
      });
    },
    checkActive(value) {
      const { currentName, hasChildren } = this.data;
      const isChecked =
        currentName === value ||
        (hasChildren && this.properties.subTabBar.some((item) => item.name === value));

      if (hasChildren && Array.isArray(value)) {
        return value.indexOf(currentName) > -1;
      }
      this.setData({
        isChecked,
        isSpread: isChecked,
      });
    },
  };
}
