import { getRegExp } from '../common/runtime/wxs-polyfill';


export function getDateLabel(monthItem, dateItem) {
  const weekdayText = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = (monthItem.weekdayOfFirstDay + dateItem.day - 1) % 7;
  let label = `${monthItem.month + 1}月${dateItem.day}日, 星期${weekdayText[weekday]}`;
  if (dateItem.type === 'start') {
    label = `开始日期：${label}`;
  }
  if (dateItem.type === 'end') {
    label = `结束日期：${label}`;
  }
  if (isDateSelected(dateItem)) {
    label = `已选中, ${label}`;
  }
  if (dateItem.prefix) {
    label += `, ${dateItem.prefix}`;
  }
  if (dateItem.suffix) {
    label += `, ${dateItem.suffix}`;
  }
  return label;
}

export function isDateSelected(dateItem) {
  return ['start', 'end', 'selected', 'centre'].indexOf(dateItem.type) >= 0;
}

export function getMonthTitle(year, month, pattern = '') {
  // prettier-ignore
  const REGEXP = getRegExp('\\{year\\}|\\{month\\}', 'g');

  return pattern.replace(REGEXP, (match) => {
    const replacements = {
      '{year}': year,
      '{month}': month < 10 ? `0${month}` : month,
    };
    return replacements[match] || match;
  });
}

