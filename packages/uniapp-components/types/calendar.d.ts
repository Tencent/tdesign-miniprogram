import type { TdCalendarProps } from '../calendar/type';
import type { TransformEventHandlers, ExtractNonOnProps } from '../common/common';

export type CalendarProps = ExtractNonOnProps<TdCalendarProps>;
export type CalendarEmits = TransformEventHandlers<TdCalendarProps, true>;
declare const CalendarComponent: import('vue').DefineComponent<CalendarProps, {}, {}, {}, {}, {}, {}, CalendarEmits, any>;
export default CalendarComponent;
