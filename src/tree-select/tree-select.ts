import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

import type { TreeOptionData } from '../common/common';

const { prefix } = config;
const name = `${prefix}-tree-select`;

@wxComponent()
export default class TreeSelect extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  data = {
    prefix,
    classPrefix: name,
  };

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    'value, options, keys, multiple'() {
      this.buildTreeOptions();
    },
  };

  methods = {
    buildTreeOptions() {
      const { options, value, multiple, keys } = this.data;
      const treeOptions = [];
      let level = -1;
      let node = { children: options };

      if (options.length === 0 || (Array.isArray(value) && value.length === 0)) return;

      while (node && node.children) {
        level += 1;
        const list = node.children.map((item: TreeOptionData) => ({
          label: item[keys?.label || 'label'],
          value: item[keys?.value || 'value'],
          children: item.children,
        }));
        const thisValue = value?.[level];

        treeOptions.push([...list]);

        if (thisValue == null) {
          const [firstChild] = list;
          node = firstChild;
        } else {
          const child = list.find((child) => child.value === thisValue);
          node = child ?? list[0];
        }
      }

      const leafLevel = Math.max(0, level);

      if (multiple) {
        const finalValue = this.data.value || this.data.defaultValue;
        if (finalValue[leafLevel] != null && !Array.isArray(finalValue[leafLevel])) {
          throw TypeError('应传入数组类型的 value');
        }
      }

      this.setData({
        leafLevel,
        treeOptions,
      });
    },

    onRootChange(e) {
      const { value } = this.data;
      const { value: itemValue } = e.detail;

      value[0] = itemValue;

      this._trigger('change', { value, level: 0 });
    },

    handleTreeClick(e) {
      const { level, value: itemValue } = e.currentTarget.dataset;
      const { value } = this.data;

      value[level] = itemValue;
      this._trigger('change', { value, level: 1 });
    },

    handleRadioChange(e) {
      const { value } = this.data;
      const { value: itemValue } = e.detail;
      const { level } = e.target.dataset;

      value[level] = itemValue;

      this._trigger('change', { value, level });
    },
  };
}
