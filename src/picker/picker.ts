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
    './picker-item': {
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
  };

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    updateChildren() {
      const { value } = this.properties;

      this.$children.forEach((child, index) => {
        child.setData({
          value: value?.[index] || '',
          siblingCount: this.$children.length,
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

      this.close();
      this.triggerEvent('change', { value, label, columns });
      this.triggerEvent('confirm', { value, label, columns });
    },

    triggerColumnChange({ column, index }) {
      const [value, label] = this.getSelectedValue();
      this.triggerEvent('pick', { value, label, column, index });
    },

    onCancel() {
      this.close();
      this.triggerEvent('cancel');
    },

    onPopupChange(e) {
      const { visible } = e.detail;

      this.close();
      this.triggerEvent('visible-change', { visible });
    },

    close() {
      if (this.data.autoClose) {
        this.setData({ visible: false });
      }
    },
  };

  ready() {
    this.$children.map((column, index) => (column.columnIndex = index));
  }
}
