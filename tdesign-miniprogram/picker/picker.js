var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-picker`;
let Picker = class Picker extends SuperComponent {
    constructor() {
        super(...arguments);
        /**
         * Component properties
         */
        this.properties = props;
        this.externalClasses = ['t-class', 't-class-confirm', 't-class-cancel', 't-class-title'];
        this.options = {
            multipleSlots: true,
        };
        this.relations = {
            './picker-column': {
                type: 'child',
            },
        };
        /**
         * Component initial data
         */
        this.data = {
            classPrefix: name,
        };
        /**
         * Component methods
         */
        this.methods = {
            getPickerColumns() {
                const pickerColumns = this.getRelationNodes('./picker-column');
                if (Array.isArray(pickerColumns)) {
                    return pickerColumns;
                }
                return [];
            },
            getSelectedValues() {
                const pickerColumns = this.getPickerColumns();
                if ((pickerColumns === null || pickerColumns === void 0 ? void 0 : pickerColumns.length) === 0) {
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
    }
    // 给 column 打标 标识顺序
    ready() {
        const columns = this.getPickerColumns();
        columns.map((column, index) => (column.columnIndex = index));
    }
};
Picker = __decorate([
    wxComponent()
], Picker);
export default Picker;

//# sourceMappingURL=picker.js.map
