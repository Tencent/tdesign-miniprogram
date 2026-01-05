import { getRegExp } from '../common/runtime/wxs-polyfill';

const REGEXP = getRegExp('[$][{value}]{7}');

export function getValue(label, value) {
  if (label && label === 'true') return value;
  if (REGEXP.test(label)) return label.replace(REGEXP, value);
}

