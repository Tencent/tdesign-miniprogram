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
    updateChildren() {
      const items = this.getRelationNodes('./step-item');
      const len = items.length;
      const { current, readonly } = this.data;

      if (len > 0) {
        items.forEach((item, index) => {
          item.updateStatus(current, index, this.data.theme, this.data.layout, items, readonly);
        });

        // 检测step完成态：判断子步骤是否全部完成，检查当前step的status状态
        let _current = current;
        for (let i = 0; i < items.length; i += 1) {
          const childList = items[i].data.childStepData;
          const stepStatus = items[i].data.status;
          if (
            (childList.length && childList.every((itemChild) => itemChild.status === 'finish')) ||
            stepStatus === 'finish'
          ) {
            items[i].data.status = 'finish';
            _current = i + 1;
          }
        }
        // 更新current，开启下一个step
        if (current !== _current) {
          this.setData({
            current: _current,
          });
        }
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
