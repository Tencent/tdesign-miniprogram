import { RelationsOptions, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import menuProps from '../dropdown-menu/props';
import type { TdDropdownItemProps } from './type';
import { getRect } from '../common/utils';

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
    computedLabel: '',
    firstCheckedValue: '', // 用于多选再次打开自动定位到首个选项
  };

  relations: RelationsOptions = {
    '../dropdown-menu/dropdown-menu': {
      type: 'parent',
      linked(target) {
        const { zIndex, duration, showOverlay } = target.properties;

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
          computedLabel: target[labelAlias],
        });
      }
    },
    'label, computedLabel'() {
      this.$parent?.getAllItems();
    },
    show(visible) {
      if (visible) {
        this.getParentBottom(() => {
          this.setData({ wrapperVisible: true });
        });
      }
    },
  };

  methods = {
    closeDropdown() {
      this.$parent?.setData({
        activeIdx: -1,
      });
      this.setData({
        show: false,
      });
      this.triggerEvent('close');
    },

    getParentBottom(cb) {
      getRect(this.$parent, `#${prefix}-bar`).then((rect) => {
        this.setData(
          {
            top: rect.bottom,
            maskHeight: rect.top,
          },
          cb,
        );
      });
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
      } else {
        const firstChecked = this.data.options.find((item) => value.includes(item.value));
        if (firstChecked) {
          this.data.firstCheckedValue = firstChecked.value;
        }
      }
    },

    handleMaskClick() {
      if (this.$parent?.properties.closeOnClickOverlay) {
        this.closeDropdown();
      }
    },

    handleReset() {
      this._trigger('change', { value: [] });
      this._trigger('reset');
    },

    handleConfirm() {
      this._trigger('confirm', { value: this.data.value });
      this.closeDropdown();
      // 在关闭popup后才自动滚动到首个选项
      this.setData({ firstCheckedValue: this.data.firstCheckedValue });
    },

    onLeaved() {
      this.setData({ wrapperVisible: false });
    },
  };
}
