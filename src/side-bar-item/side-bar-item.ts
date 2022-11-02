import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-side-bar-item`;

@wxComponent()
export default class SideBarItem extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  properties = props;

  relations: RelationsOptions = {
    '../side-bar/side-bar': {
      type: 'parent',
      linked(parent) {
        this.parent = parent;
        this.updateActive(parent.data.value);
      },
    },
  };

  observers = {};

  data = {
    classPrefix: name,
    prefix,
    active: false,
    isPre: false,
    isNext: false,
  };

  methods = {
    updateActive(value) {
      const active = value === this.data.value;
      this.setData({
        active,
      });
      if (active && this.parent?.childs.length > 0) {
        const { childs } = this.parent;
        const index = childs.findIndex((item) => item.data.value === value);
        if (index > 0) {
          childs[index - 1].setData({ isPre: true });
        }
        if (index + 1 < childs.length) {
          childs[index + 1].setData({ isNext: true });
        }
      }
    },
    handleClick() {
      if (this.data.disabled) return;

      this.parent?.updateChild(this.data.value);
    },
  };
}
