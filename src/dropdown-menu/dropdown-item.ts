import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './dropdown-item-props';
import menuProps from './props';
import type { TdDropdownItemProps } from './type';
import { equal, clone } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-dropdown-item`;

export interface DropdownItemProps extends TdDropdownItemProps {}
@wxComponent()
export default class DropdownMenuItem extends SuperComponent {
  properties = {
    ...props,
  };

  data = {
    prefix,
    classPrefix: name,
    show: false,
    bar: null,
    top: 0,
    maskHeight: 0,
    contentClasses: '',
    leafLevel: 0,
    treeOptions: [],
    initValue: null,
    hasChanged: false,
    duration: menuProps.duration.value,
    zIndex: menuProps.zIndex.value,
    overlay: menuProps.overlay.value,
  };

  relations: RelationsOptions = {
    './dropdown-menu': {
      type: 'parent',
      linked(target) {
        const { zIndex, duration, overlay } = target.properties;

        this.getParentBottom(target);
        this.setData({
          bar: target,
          zIndex,
          duration,
          overlay,
        });
      },
    },
  };

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  observers = {
    value(v) {
      if (this.data.multiple) {
        if (!Array.isArray(v)) throw TypeError('应传入数组类型的 value');
      }

      if (this.data.optionsLayout === 'tree') {
        this.buildTreeOptions();
      }
    },
    'initValue, value'(v1, v2) {
      this.setData({
        hasChanged: !equal(v1, v2),
      });
    },
  };

  lifetimes = {
    attached() {
      const { multiple, optionsLayout, value, defaultValue } = this.data;
      const isTree = optionsLayout === 'tree';
      const contentClassesObj = {
        [`${prefix}-is-tree`]: isTree,
        [`${prefix}-is-single`]: !isTree && !multiple,
        [`${prefix}-is-multi`]: !isTree && multiple,
      };
      const contentClasses = Object.keys(contentClassesObj)
        .filter((e) => contentClassesObj[e] === true)
        .join(' ');

      this.setData({
        contentClasses,
        initValue: clone(value || defaultValue),
      });
    },
  };

  methods = {
    buildTreeOptions() {
      const { options, value, multiple } = this.data;
      const treeOptions = [];
      let level = -1;
      let node = { options };

      while (node && node.options) {
        level += 1;
        const list = node.options;
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
        if (!Array.isArray(finalValue[leafLevel])) {
          throw TypeError('应传入数组类型的 value');
        }
      }

      this.setData({
        leafLevel,
        treeOptions,
      });
    },

    closeDropdown() {
      this.data.bar.setData({
        activeIdx: -1,
      });
      this.setData({
        show: false,
      });
    },

    getParentBottom(parent) {
      const query = wx.createSelectorQuery().in(parent);
      query
        .select(`#${prefix}-bar`)
        .boundingClientRect((res) => {
          this.setData({
            top: res.bottom,
            maskHeight: res.top,
          });
        })
        .exec();
    },

    handleTreeClick(e) {
      const { level, value: itemValue } = e.currentTarget.dataset;
      const { value } = this.data;

      value[level] = itemValue;
      this._trigger('change', { value });
    },

    handleRadioChange(e) {
      let { value } = this.data;
      const { value: itemValue } = e.detail;
      const { level } = e.target.dataset;

      if (this.data.optionsLayout === 'tree') {
        value[level] = itemValue;
      } else {
        value = itemValue;
      }

      this._trigger('change', { value });
    },

    handleMaskClick() {
      const { bar } = this.data;

      if (bar && bar.properties.closeOnClickOverlay) {
        this.closeDropdown();
      }
    },

    handleReset() {
      this._trigger('change', { value: clone(this.data.initValue) });
    },

    handleConfirm() {
      this._trigger('confirm', { value: this.data.value });
      this.closeDropdown();
    },
  };
}
