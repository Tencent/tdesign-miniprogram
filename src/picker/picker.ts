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
    getSelectedValues() {
      const pickerColumns = this.getPickerColumns();
      if (pickerColumns?.length === 0) {
        return { index: undefined, value: undefined };
      }

      const selectedValues = {
        index: pickerColumns.map((pickerColumn) => pickerColumn._selectedIndex),
        value: pickerColumns.map((pickerColumn) => pickerColumn._selectedValue),
      };

      return selectedValues;
    },
    onConfirm() {
      this.triggerEvent('confirm', this.getSelectedValues());
    },
    onCancel() {
      this.triggerEvent('cancel');
    },
    triggerChange({ column, index, value }) {
      this.triggerEvent('change', { column, index, value });
    },
  };

  // 给 column 打标 标识顺序
  ready() {
    const columns = this.getPickerColumns();
    columns.map((column, index) => (column.columnIndex = index));
  }
}
