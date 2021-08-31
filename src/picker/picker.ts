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

  externalClasses = ['t-class'];

  options = {
    multipleSlots: true,
  };

  relations = {
    './picker-column': {
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
      const pickerColumns = this.getRelationNodes('./picker-column');
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

      const isMulti = pickerColumns?.length > 1;
      if (isMulti) {
        return selectedValues;
      }
      return {
        index: selectedValues.index[0],
        value: selectedValues.value[0],
      };
    },
    onConfirm() {
      this.triggerEvent('confirm', this.getSelectedValues());
    },
    onCancel() {
      this.triggerEvent('cancel');
      // 取消事件 触发重置 先不做重置 保留用户操作
      // const columns = this.getPickerColumns();
      // columns?.map((column) => {
      //   column.methods.resetOrigin.call(column);
      // });
    },
    triggerChange({ column, index, value }) {
      const isMulti = this.getPickerColumns().length > 1;
      this.triggerEvent('change', isMulti ? { column, index, value } : { index, value });
    },
  };

  // 给 column 打标 标识顺序
  ready() {
    const columns = this.getPickerColumns();
    columns.map((column, index) => (column.columnIndex = index));
  }
}
