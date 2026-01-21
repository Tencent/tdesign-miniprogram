export function getMonthByOffset(date, offset) {
  const _date = new Date(date);
  _date.setMonth(_date.getMonth() + offset);
  _date.setDate(1);
  return _date;
}

export function getYearByOffset(date, offset) {
  const _date = new Date(date);
  _date.setFullYear(_date.getFullYear() + offset);
  _date.setDate(1);
  return _date;
}

export const getPrevMonth = date => getMonthByOffset(date, -1);
export const getNextMonth = date => getMonthByOffset(date, 1);
export const getPrevYear = date => getYearByOffset(date, -1);
export const getNextYear = date => getYearByOffset(date, 1);
