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

  properties = {
    ...props,
    customValue: {
      // 用于自定义选中值，优先级高于value，用于弥补value为[]场景
      type: null,
      value: null,
    },
  };

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
      const { options, value, defaultValue, customValue, multiple, keys } = this.data;
      const treeOptions = [];

      let level = -1;
      let node = { children: options };

      if (options.length === 0) return;

      while (node && node.children) {
        level += 1;
        const list = node.children.map((item: TreeOptionData) => ({
          label: item[keys?.label || 'label'],
          value: item[keys?.value || 'value'],
          children: item.children,
        }));
        const thisValue = customValue?.[level] || value?.[level];

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
        const finalValue = customValue || value || defaultValue;
        if (finalValue[leafLevel] != null && !Array.isArray(finalValue[leafLevel])) {
          throw TypeError('应传入数组类型的 value');
        }
      }

      this.setData({
        innerValue:
          customValue ||
          treeOptions?.map((ele, idx) => {
            const v = idx === treeOptions.length - 1 && multiple ? [ele[0].value] : ele[0].value;
            return value?.[idx] || v;
          }),
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
