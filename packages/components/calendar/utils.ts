export function getMonthByOffset(date: Date, offset: number) {
  const _date = new Date(date);
  _date.setMonth(_date.getMonth() + offset);
  _date.setDate(1);
  return _date;
}

export function getYearByOffset(date: Date, offset: number) {
  const _date = new Date(date);
  _date.setFullYear(_date.getFullYear() + offset);
  _date.setDate(1);
  return _date;
}

export const getPrevMonth = (date: Date) => getMonthByOffset(date, -1);
export const getNextMonth = (date: Date) => getMonthByOffset(date, 1);
export const getPrevYear = (date: Date) => getYearByOffset(date, -1);
export const getNextYear = (date: Date) => getYearByOffset(date, 1);
