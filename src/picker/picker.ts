import { SuperComponent, wxComponent } from '../common/src/index';
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

  externalClasses = ['t-class', 't-class-confirm', 't-class-cancel', 't-class-title'];

  options = {
    multipleSlots: true,
  };

  relations = {
    './picker-item': {
      type: 'child' as 'child',
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
      this.triggerEvent('change', { value, label, columns });
      this.triggerEvent('confirm', { value, label, columns });
    },

    triggerColumnChange({ column, index }) {
      const [value, label] = this.getSelectedValue();
      this.triggerEvent('pick', { value, label, column, index });
    },

    onCancel() {
      this.triggerEvent('cancel');
    },
  };

  ready() {
    const columns = this.getPickerColumns();
    columns.map((column, index) => (column.columnIndex = index));
  }
}
