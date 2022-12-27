import { wxComponent, SuperComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-steps`;

@wxComponent()
export default class Steps extends SuperComponent {
  relations: RelationsOptions = {
    './step-item': {
      type: 'descendant',
      linked(child) {
        this.updateChildren();

        const { readonly } = this.data;

        child.setData({
          readonly,
        });
      },
      unlinked() {
        this.updateLastChid();
      },
    },
  };

  externalClasses = [`${prefix}-class`];

  properties = props;

  controlledProps = [
    {
      key: 'current',
      event: 'change',
    },
  ];

  // 组件的内部数据
  data = {
    prefix,
    classPrefix: name,
  };

  observers = {
    current() {
      this.updateChildren();
    },
  };

  methods = {
    updateChildren() {
      const { current, currentStatus, readonly, theme, layout } = this.data;
      const items = this.$children;

      items.forEach((item, index) => {
        item.updateStatus(current, currentStatus, index, theme, layout, items, readonly);
      });
    },
    updateLastChid() {
      const items = this.$children;

      items.forEach((child, index) => child.setData({ isLastChild: index === items.length - 1 }));
    },
    handleClick(index) {
      if (!this.data.readonly) {
        const preIndex = this.data.current;
        this._trigger('change', {
          previous: preIndex,
          current: index,
        });
      }
    },
  };
}
