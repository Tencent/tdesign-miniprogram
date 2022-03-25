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

        const { readonly, layout } = this.data;
        let isLarge = false;

        if (!readonly && layout === 'horizontal') {
          isLarge = !!child.data.icon;
        }

        child.setData({
          readonly,
          isLarge,
        });
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
    formatTagTreeData(data, index) {
      data.tag = `${index + 1}`;
      data.subStep &&
        data.subStep.length &&
        data.subStep.forEach((subItem, subIndex) => {
          subItem.tag = `${index + 1}.${subIndex + 1}`;
        });
    },

    jugdeStatus(data, current, currentStatus, firstStep) {
      if (Number(data.tag) === firstStep || data.tag === current) {
        data._status = currentStatus;
      } else if (Number(data.tag) < current) {
        data._status = 'finish';
      } else if (Number(data.tag) > current) {
        data._status = 'default';
      }
      return data;
    },

    updateChildren() {
      const items = this.getRelationNodes('./step-item');
      const len = items.length;
      const { current, currentStatus, readonly } = this.data;
      const firstStep = Math.floor(Number(current));

      if (len) {
        // 1. 给数组 按层级打上tag
        items.forEach((item, index) => {
          this.formatTagTreeData(item.data, index);
        });

        // 2. 遍历 判断每个节点的状态
        items.forEach((item) => {
          this.jugdeStatus(item.data, current, currentStatus, firstStep);
          item.data.subStep &&
            item.data.subStep.length &&
            item.data.subStep.forEach((subItem) => {
              this.jugdeStatus(subItem, current, currentStatus, firstStep);
            });
        });

        // 3. 检测currentStatus层级的status状态是否为finish，若是，则更新current: current=firstStep+1
        let _current = '';
        items.forEach((item, index) => {
          if (index === firstStep - 1) {
            if (item.data._status === 'finish') {
              // 更新current，开启下一个step和子步骤，状态为process
              item.data.subStep && item.data.subStep.length
                ? (_current = `${firstStep + 1}`)
                : (_current = `${firstStep + 1}.${1}`);
              this.setData({
                current: _current,
                currentStatus: 'process',
              });
            }
          }
        });

        items.forEach((item, index) => {
          item.updateStatus(current, currentStatus, index, this.data.theme, this.data.layout, items, item, readonly);
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
          current: index + 1,
        });
      }
    },
  };
}
