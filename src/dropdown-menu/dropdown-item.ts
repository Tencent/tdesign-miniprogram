import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './dropdown-item-props';
import menuProps from './props';
import type { TdDropdownItemProps } from './type';

const { prefix } = config;
const name = `${prefix}-dropdown-item`;

export interface DropdownItemProps extends TdDropdownItemProps {}
@wxComponent()
export default class DropdownMenuItem extends SuperComponent {
  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-column`,
    `${prefix}-class-column-item`,
    `${prefix}-class-column-item-label`,
    `${prefix}-class-footer`,
  ];

  properties = {
    ...props,
  };

  data = {
    prefix,
    classPrefix: name,
    show: false,
    top: 0,
    maskHeight: 0,
    initValue: null,
    hasChanged: false,
    duration: menuProps.duration.value,
    zIndex: menuProps.zIndex.value,
    overlay: menuProps.showOverlay.value,
    labelAlias: 'label',
    valueAlias: 'value',
  };

  parent = null;

  relations: RelationsOptions = {
    './dropdown-menu': {
      type: 'parent',
      linked(target) {
        const { zIndex, duration, showOverlay } = target.properties;

        this.parent = target;
        this.setData({
          zIndex,
          duration,
          showOverlay,
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
    keys(obj) {
      this.setData({
        labelAlias: obj.label || 'label',
        valueAlias: obj.value || 'value',
      });
    },
    value(v) {
      const { options, labelAlias, valueAlias } = this.data;

      if (this.data.multiple) {
        if (!Array.isArray(v)) throw TypeError('应传入数组类型的 value');
      }

      const target = options.find((item) => item[valueAlias] === v);

      if (target) {
        this.setData({
          label: target[labelAlias],
        });
      }
    },
    label() {
      this.parent?.getAllItems();
    },
    show(visible) {
      if (visible) {
        this.getParentBottom(this.parent, () => {
          this.setData({ wrapperVisible: true });
        });
      }
    },
  };

  methods = {
    closeDropdown() {
      this.parent?.setData({
        activeIdx: -1,
      });
      this.setData({
        show: false,
      });
    },

    getParentBottom(parent, cb) {
      const query = wx.createSelectorQuery().in(parent);
      query
        .select(`#${prefix}-bar`)
        .boundingClientRect((res) => {
          this.setData(
            {
              top: res.bottom,
              maskHeight: res.top,
            },
            cb,
          );
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
      const { value } = e.detail;

      this._trigger('change', { value });

      if (!this.data.multiple) {
        this.closeDropdown();
      }
    },

    handleMaskClick() {
      if (this.parent?.properties.closeOnClickOverlay) {
        this.closeDropdown();
      }
    },

    handleReset() {
      this._trigger('change', { value: [] });
    },

    handleConfirm() {
      this._trigger('confirm', { value: this.data.value });
      this.closeDropdown();
    },

    onLeaved() {
      this.setData({ wrapperVisible: false });
    },
  };
}
