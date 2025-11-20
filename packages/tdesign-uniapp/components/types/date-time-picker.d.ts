import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdDateTimePickerProps } from '../date-time-picker/type';

export type DateTimePickerProps = ExtractNonOnProps<TdDateTimePickerProps>;
export type DateTimePickerEmits = TransformEventHandlers<TdDateTimePickerProps, true>;
declare const DateTimePickerComponent: import('vue').DefineComponent<DateTimePickerProps, {}, {}, {}, {}, {}, {}, DateTimePickerEmits, any>;
export default DateTimePickerComponent;
