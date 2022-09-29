import { getDateRect, isSameDate, getMonthDateRect, isValidDate, getDate } from '../date';

import type { TDate, TDateType, TCalendarType } from './type';

export default class TCalendar {
  firstDayOfWeek: number;
  value: TDate;
  type: TCalendarType = 'single';
  minDate: Date;
  maxDate: Date;
  format: (day: TDate) => TDate;

  constructor(options) {
    Object.assign(this, options);
    if (!this.minDate) this.minDate = getDate();
    if (!this.maxDate) this.maxDate = getDate(6);
  }

  getTrimValue() {
    const { value, type } = this;
    if (type === 'single') return isValidDate(value) ? value : new Date();

    if (type === 'multiple') {
      if (Array.isArray(value)) {
        return value.every((item) => isValidDate(item)) ? value : [];
      }
      return [];
    }

    if (type === 'range') {
      if (Array.isArray(value) && value.length === 2) {
        return value.every((item) => isValidDate(item)) ? value : [];
      }
      return [];
    }
  }

  getDays() {
    const raw = '日一二三四五六';
    const ans = [];
    let i = this.firstDayOfWeek % 7;

    while (ans.length < 7) {
      ans.push(raw[i]);
      i = (i + 1) % 7;
    }

    return ans;
  }

  getMonths(selectedDate) {
    const ans = [];
    const { minDate, maxDate, type, format } = this;
    let { year: minYear, month: minMonth } = getDateRect(minDate);
    const { year: maxYear, month: maxMonth } = getDateRect(maxDate);
    const calcType = (year: number, month: number, date: number): TDateType => {
      const curDate = new Date(year, month, date, 23, 59, 59);

      if (type === 'single') {
        if (isSameDate({ year, month, date }, selectedDate)) return 'selected';
      }
      if (type === 'multiple') {
        const hit = selectedDate.some((item: Date) => isSameDate({ year, month, date }, item));
        if (hit) {
          return 'selected';
        }
      }
      if (type === 'range') {
        if (Array.isArray(selectedDate)) {
          const [startDate, endDate] = selectedDate;

          if (startDate && isSameDate({ year, month, date }, startDate)) return 'start';
          if (endDate && isSameDate({ year, month, date }, endDate)) return 'end';
          if (startDate && endDate && curDate.getTime() > startDate.getTime() && curDate.getTime() < endDate.getTime())
            return 'centre';
        }
      }

      const minCurDate = new Date(year, month, date, 0, 0, 0);
      if (curDate.getTime() < minDate.getTime() || minCurDate.getTime() > maxDate.getTime()) {
        return 'disabled';
      }
      return '';
    };

    while (minYear < maxYear || (minYear === maxYear && minMonth <= maxMonth)) {
      const target = getMonthDateRect(new Date(minYear, minMonth, 1));
      const months: TDate[] = [];
      for (let i = 1; i <= 31; i++) {
        if (i > target.lastDate) break;
        const dateObj: TDate = {
          date: new Date(minYear, minMonth, i),
          day: i,
          type: calcType(minYear, minMonth, i),
        };
        months.push(format ? format(dateObj) : dateObj);
      }
      ans.push({
        year: minYear,
        month: minMonth,
        months,
        weekdayOfFirstDay: target.weekdayOfFirstDay,
      });
      const curDate = getDateRect(new Date(minYear, minMonth + 1, 1));
      minYear = curDate.year;
      minMonth = curDate.month;
    }

    return ans;
  }
}
