export type TCalendarValue = number | Date;

export type TDateType = 'selected' | 'disabled' | 'start' | 'centre' | 'end' | '';

export type TCalendarType = 'single' | 'multiple' | 'range';

export interface TDate {
  date: Date;
  day: number;
  type: TDateType;
  className?: string;
  prefix?: string;
  suffix?: string;
}
