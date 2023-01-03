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
    ariaActive: '',
    disabled: false,
  };

  ready() {
    let ariaActive;
    if (this.data.active) {
      ariaActive = '已选定';
    }
    this.setData({
      ariaActive,
    });
  }

  methods = {
    updateActive(value) {
      const active = value === this.data.value;
      this.setData({
        active,
      });
    },
    handleClick() {
      if (this.data.disabled) return;
      const { value, label } = this.data;

      this.parent?.doChange({ value, label });
    },
  };
}
