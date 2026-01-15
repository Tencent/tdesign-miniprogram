import { getDate } from 'tdesign-uniapp/common/runtime/wxs-polyfill';

function getDateByTimestamp(val) {
  const date = getDate(val);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [date.getFullYear(), month < 10 ? `0${month}` : month, day < 10 ? `0${day}` : day].join('-');
}

export function formatTimestamp(val) {
  if (!val) return '';

  let i = 0;
  if (Array.isArray(val)) {
    let _str = '';
    for (let len = val.length; i < len; i++) {
      _str += `${getDateByTimestamp(val[i])}、`;
    }
    return _str;
  }

  return getDateByTimestamp(val);
}

