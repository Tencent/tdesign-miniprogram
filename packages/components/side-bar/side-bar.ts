import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-side-bar`;

@wxComponent()
export default class SideBar extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  children = [];

  relations: RelationsOptions = {
    '../side-bar-item/side-bar-item': {
      type: 'child',
      linked(child) {
        this.children.push(child);
      },
      unlinked(child) {
        const index = this.children.findIndex((item) => item === child);
        this.children.splice(index, 1);
      },
    },
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  properties = props;

  observers = {
    value(v) {
      const sideBarItems = this.$children;
      sideBarItems.forEach((item, index) => {
        item.updateActive(v);
        item.setData({
          isFirstChild: index === 0,
          isLastChild: index === sideBarItems.length - 1,
        });
      });
    },
  };

  data = {
    classPrefix: name,
    prefix,
  };

  methods = {
    doChange({ value, label }) {
      this._trigger('change', { value, label });
    },
  };
}
