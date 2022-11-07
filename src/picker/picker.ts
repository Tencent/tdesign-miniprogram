import { SuperComponent, wxComponent, RelationsOptions } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-picker`;

@wxComponent()
export default class Picker extends SuperComponent {
  /**
   * Component properties
   */
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

  /**
   * Component initial data
   */
  data = {
    prefix,
    classPrefix: name,
  };

  /**
   * Component methods
   */
  methods = {
    getPickerColumns() {
      const pickerColumns = this.getRelationNodes('./picker-item');
      if (Array.isArray(pickerColumns)) {
        return pickerColumns;
      }
      return [];
    },

    updateChildren() {
      const { value } = this.properties;
      const pickerColumns = this.getPickerColumns();

      if (!pickerColumns?.length) {
        return;
      }

      pickerColumns.forEach((child, index) => {
        child.setData({
          value: value?.[index] || '',
        });
        child.update();
      });
    },

    getSelectedValue() {
      const pickerColumns = this.getPickerColumns();
      const value = pickerColumns.map((item) => item._selectedValue);
      const label = pickerColumns.map((item) => item._selectedLabel);
      return [value, label];
    },

    getColumnIndexes() {
      const pickerColumns = this.getPickerColumns();
      const columns = pickerColumns.map((pickerColumn, columnIndex) => {
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
    const columns = this.getPickerColumns();
    columns.map((column, index) => (column.columnIndex = index));
  }
}
