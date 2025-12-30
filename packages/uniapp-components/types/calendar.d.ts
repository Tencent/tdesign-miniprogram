import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';
import type { TdCalendarProps } from '../calendar/type';

export type CalendarProps = ExtractNonOnProps<TdCalendarProps>;
export type CalendarEmits = TransformEventHandlers<TdCalendarProps, true>;
declare const CalendarComponent: import('vue').DefineComponent<CalendarProps, {}, {}, {}, {}, {}, {}, CalendarEmits, any>;
export default CalendarComponent;
