import { getRegExp } from '../common/runtime/wxs-polyfill';

export function getClass(classPrefix, size, shape, bordered) {
  const hasPx = (size || '').indexOf('px') > -1;
  const borderSize = hasPx ? 'medium' : size;
  const classNames = [
    classPrefix,
    classPrefix + (shape === 'round' ? '--round' : '--circle'),
    bordered ? `${classPrefix}--border ${classPrefix}--border-${borderSize}` : '',
    hasPx ? '' : `${classPrefix}--${size}`,
  ];
  return classNames.join(' ');
}

export function getSize(size = 'medium', windowWidth) {
  const res = getRegExp('^([0-9]+)(px|rpx)$').exec(size);

  if (res && res.length >= 3) {
    let px = res[1];
    if (res[2] === 'rpx') {
      px = Math.floor((windowWidth * res[1]) / 750);
    }

    return `width:${size};height:${size};font-size:${(px / 8) * 3 + 2}px`;
  }
}

export function  getStyles(isShow) {
  return isShow ? '' : 'display: none;';
}
