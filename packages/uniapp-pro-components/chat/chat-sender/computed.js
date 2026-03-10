import utils from '@tdesign/uniapp/common/utils.wxs';
import { getRegExp } from '@tdesign/uniapp/common/runtime/wxs-polyfill';


export function textareaStyle(autosize) {
  if (autosize && typeof autosize === 'object') {
    return utils._style({
      'min-height': addUnit(autosize.minHeight),
      'max-height': addUnit(autosize.maxHeight),
    });
  }
  return '';
}

function addUnit(value) {
  const REGEXP = getRegExp('^-?\\d+(.\\d+)?$');
  if (value == null) {
    return undefined;
  }
  return REGEXP.test(`${value}`) ? `${value}rpx` : value;
}

