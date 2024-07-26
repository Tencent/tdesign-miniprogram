import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import { rpx2px } from '../common/utils';
import config from '../common/config';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';

const { prefix } = config;
const name = `${prefix}-picker`;

@wxComponent()
export default class Picker extends SuperComponent {
  behaviors = [useCustomNavbar];

  properties = props;

  externalClasses = [`${prefix}-class`, `${prefix}-class-confirm`, `${prefix}-class-cancel`, `${prefix}-class-title`];

  options = {
    multipleSlots: true,
  };

  relations: RelationsOptions = {
    '../picker-item/picker-item': {
      type: 'child',
      linked(this: Picker) {
        this.updateChildren();
      },
    },
  };

  observers = {
    'value, visible'() {
      this.updateChildren();
    },
    keys(obj) {
      this.setData({
        labelAlias: obj?.label || 'label',
        valueAlias: obj?.value || 'value',
      });
    },
  };

  lifetimes = {
    attached() {
      this.setData({
        pickItemHeight: rpx2px(this.properties.itemHeight),
      });
    },
  };

  data = {
    prefix,
    classPrefix: name,
    labelAlias: 'label',
    valueAlias: 'value',
    defaultPopUpProps: {},
    defaultPopUpzIndex: 11500,
    pickItemHeight: 0,
  };

  methods = {
    updateChildren() {
      const { pickItemHeight } = this.data;
      const { value, defaultValue } = this.properties;

      this.$children.forEach((child, index) => {
        child.setData({
          value: value?.[index] ?? defaultValue?.[index] ?? '',
          columnIndex: index,
          pickItemHeight,
        });
        child.update();
      });
    },

    getSelectedValue() {
      const value = this.$children.map((item) => item._selectedValue);
      const label = this.$children.map((item) => item._selectedLabel);
      return [value, label];
    },

    getColumnIndexes() {
      const columns = this.$children.map((pickerColumn, columnIndex) => {
        return {
          column: columnIndex,
          index: pickerColumn._selectedIndex,
        };
      });
      return columns;
    },

    onConfirm() {
      const [value, label] = this.getSelectedValue();
      const columns = this.getColumnIndexes();

      this.close('confirm-btn');
      this.triggerEvent('change', { value, label, columns });
      this.triggerEvent('confirm', { value, label, columns });
    },

    triggerColumnChange({ column, index }) {
      const [value, label] = this.getSelectedValue();
      this.triggerEvent('pick', { value, label, column, index });
    },

    onCancel() {
      this.close('cancel-btn');
      this.triggerEvent('cancel');
    },

    onPopupChange(e) {
      const { visible } = e.detail;

      this.close('overlay');
      this.triggerEvent('visible-change', { visible });
    },

    close(trigger) {
      if (this.data.autoClose) {
        this.setData({ visible: false });
      }
      this.triggerEvent('close', { trigger });
    },
  };

  ready() {
    this.$children.map((column, index) => (column.columnIndex = index));
  }
}
