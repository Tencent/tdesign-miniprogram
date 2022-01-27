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
      linked() {
        this.updateChildren();
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
      const items = this.getRelationNodes('./step-item');
      const len = items.length;
      const { current } = this.data;

      if (len > 0) {
        items.forEach((item, index) => {
          item.updateStatus(current, index, this.data.theme, this.data.layout, items);
        });
      }
    },
    handleClick(index) {
      if (this.data.layout === 'vertical') {
        return;
      }
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
