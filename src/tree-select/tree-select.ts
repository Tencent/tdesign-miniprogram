import { SuperComponent, wxComponent } from '../common/src/index';
import { isDef } from '../common/validator';
import config from '../common/config';
import props from './props';

import type { TreeOptionData } from '../common/common';

const { prefix } = config;
const name = `${prefix}-tree-select`;

@wxComponent()
export default class TreeSelect extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-left-column`,
    `${prefix}-class-left-item`,
    `${prefix}-class-middle-item`,
    `${prefix}-class-right-column`,
    `${prefix}-class-right-item`,
    `${prefix}-class-right-item-label`,
  ];

  options = {
    multipleSlots: true,
  };

  data = {
    prefix,
    classPrefix: name,
    scrollIntoView: null,
  };

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    'value, customValue, options, keys, multiple'() {
      this.buildTreeOptions();
    },
  };

  lifetimes = {
    ready() {
      this.getScrollIntoView('init');
    },
  };

  methods = {
    buildTreeOptions() {
      const { options, value, customValue, multiple, keys } = this.data;

      if (!options.length) return;

      const treeOptions: TreeOptionData[][] = [];

      let level = -1;
      let currentNode = { children: options };

      while (currentNode?.children) {
        level += 1;
        const currentLevelOptions = currentNode.children.map((item: TreeOptionData) => ({
          label: item[keys?.label || 'label'],
          value: item[keys?.value || 'value'],
          disabled: item[keys?.disabled || 'disabled'],
          children: item[keys?.children || 'children'],
        }));

        treeOptions.push(currentLevelOptions);

        const currentValue = customValue?.[level] ?? value?.[level];
        currentNode = currentValue
          ? currentLevelOptions.find((child) => child.value === currentValue) ?? currentLevelOptions[0]
          : currentLevelOptions[0];
      }

      // Ensure at least two levels (even if second is empty)
      if (treeOptions.length === 1) {
        treeOptions.push([]);
        level += 1;
      }

      const leafLevel = Math.max(0, level);
      const innerValue =
        customValue ||
        treeOptions.map((levelOptions, idx) => {
          const isLastLevel = idx === treeOptions.length - 1;
          const defaultValue = isLastLevel && multiple ? [levelOptions[0]?.value] : levelOptions[0]?.value;
          return value?.[idx] ?? defaultValue;
        });

      this.setData({
        innerValue,
        leafLevel,
        treeOptions,
      });
    },

    getScrollIntoView(status: string) {
      const { value, customValue, scrollIntoView } = this.data;
      if (status === 'init') {
        const _value = customValue || value;
        const scrollIntoView = Array.isArray(_value)
          ? _value.map((item) => {
              return Array.isArray(item) ? item[0] : item;
            })
          : [_value];
        this.setData({
          scrollIntoView,
        });
      } else {
        if (scrollIntoView === null) return;
        this.setData({
          scrollIntoView: null,
        });
      }
    },

    onRootChange(e) {
      const { innerValue } = this.data;
      const { value: itemValue } = e.detail;

      this.getScrollIntoView('none');
      innerValue[0] = itemValue;

      this._trigger('change', { value: innerValue, level: 0 });
    },

    handleTreeClick(e) {
      const { level, value: itemValue } = e.currentTarget.dataset;
      const { innerValue } = this.data;

      innerValue[level] = itemValue;
      this.getScrollIntoView('none');
      this._trigger('change', { value: innerValue, level: 1 });
    },

    handleChange(e) {
      const { innerValue } = this.data;
      const { level, type } = e.target.dataset;
      const { value } = type === 'multiple' ? e.detail.context : e.detail;

      if (type === 'multiple') {
        if (!isDef(innerValue[level])) {
          innerValue[level] = [];
        }
        const index = innerValue[level].indexOf(value);
        index === -1 ? innerValue[level].push(value) : innerValue[level].splice(index, 1);
      } else {
        innerValue[level] = value;
      }

      this.getScrollIntoView('none');
      this._trigger('change', { value: innerValue, level });
    },
  };
}
