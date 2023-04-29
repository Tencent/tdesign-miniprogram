import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-picker`;

@wxComponent()
export default class Picker extends SuperComponent {
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
    value() {
      this.updateChildren();
    },
    keys(obj) {
      this.setData({
        labelAlias: obj.label || 'label',
        valueAlias: obj.value || 'value',
      });
    },
  };

  data = {
    prefix,
    classPrefix: name,
    labelAlias: 'label',
    valueAlias: 'value',
  };

  methods = {
    updateChildren() {
      const { value } = this.properties;

      this.$children.forEach((child, index) => {
        child.setData({
          value: value?.[index] ?? '',
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
