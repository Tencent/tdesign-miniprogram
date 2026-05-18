import { getRegExp } from './runtime/wxs-polyfill';
/* utils */

/**
 * addUnit */
// 为 css 添加单位
function addUnit(value) {
  const REGEXP = getRegExp('^-?\\d+(.\\d+)?$');
  if (value == null) {
    return undefined;
  }
  return REGEXP.test(`${value}`) ? `${value}px` : value;
}

function isString(string) {
  return typeof string === 'string';
}

function isArray(array) {
  return Array.isArray(array);
}

function isObject(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

const isNoEmptyObj = function (obj) {
  return isObject(obj) && JSON.stringify(obj) !== '{}';
};

function includes(arr, value) {
  if (!arr || !isArray(arr)) return false;

  let i = 0;
  const len = arr.length;

  for (; i < len; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

function cls(base, arr) {
  const res = [base];
  let i = 0;
  for (let size = arr.length; i < size; i++) {
    const item = arr[i];

    if (item && Array.isArray(item)) {
      const key = arr[i][0];
      const value = arr[i][1];

      if (value) {
        res.push(`${base}--${key}`);
      }
    } else if (typeof item === 'string' || typeof item === 'number') {
      if (item) {
        res.push(`${base}--${item}`);
      }
    }
  }
  return res.join(' ');
}

function getBadgeAriaLabel(options) {
  const maxCount = options.maxCount || 99;
  if (options.dot) {
    return '有新的消息';
  }
  if (options.count === '...') {
    return '有很多消息';
  }
  if (isNaN(options.count)) {
    return options.count;
  }
  const str1 = `有${maxCount}+条消息`;
  const str2 = `有${options.count}条消息`;
  return Number(options.count) > maxCount ? str1 : str2;
}

function endsWith(str, endStr) {
  return str.slice(-endStr.length) === endStr ? str : str + endStr;
}

function keys(obj) {
  return JSON.stringify(obj)
    .replace(getRegExp('{|}|"', 'g'), '')
    .split(',')
    .map(item => item.split(':')[0]);
}

function kebabCase(str) {
  return str
    .replace(getRegExp('[A-Z]', 'g'), ele => `-${ele}`)
    .toLowerCase();
}

// eslint-disable-next-line no-underscore-dangle
function _style(styles) {
  if (isArray(styles)) {
    return styles
      .filter(item => item != null && item !== '')
      .map(item => ((isArray(item) || isObject(item)) ? _style(item) : endsWith(item, ';')))
      .join(' ');
  }

  if (isObject(styles)) {
    return keys(styles)
      .filter(key => styles[key] != null && styles[key] !== '')
      .map(key => [kebabCase(key), [styles[key]]].join(':'))
      .join(';');
  }

  return styles;
}

function isValidIconName(str) {
  // prettier-ignore
  return getRegExp('^[A-Za-z0-9-_]+$').test(str);
}

export default {
  addUnit,
  isString,
  isArray,
  isObject,
  isBoolean,
  isNoEmptyObj,
  includes,
  cls,
  getBadgeAriaLabel,
  _style,
  isValidIconName,
};
