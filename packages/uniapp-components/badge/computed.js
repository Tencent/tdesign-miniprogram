export const getBadgeValue = function (props) {
  if (props.dot) {
    return '';
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(props.count) || isNaN(props.maxCount)) {
    return props.count;
  }
  return parseInt(props.count, 10) > props.maxCount ? `${props.maxCount}+` : props.count;
};

export const hasUnit = function (unit) {
  return (
    unit.indexOf('px') > 0
    || unit.indexOf('rpx') > 0
    || unit.indexOf('em') > 0
    || unit.indexOf('rem') > 0
    || unit.indexOf('%') > 0
    || unit.indexOf('vh') > 0
    || unit.indexOf('vm') > 0
  );
};

export const getBadgeStyles = function (props) {
  let styleStr = '';
  if (props.color) {
    styleStr += `background:${props.color};`;
  }
  if (props.offset?.[0]) {
    styleStr
      += `left: calc(100% + ${hasUnit(props.offset[0].toString()) ? props.offset[0] : `${props.offset[0]}px`});`;
  }
  if (props.offset?.[1]) {
    styleStr += `top:${hasUnit(props.offset[1].toString()) ? props.offset[1] : `${props.offset[1]}px`};`;
  }
  return styleStr;
};


export const getBadgeInnerClass = function (props) {
  const baseClass = props.classPrefix;
  const classNames = [
    `${baseClass}--basic`,
    props.dot ? `${baseClass}--dot` : '',
    `${baseClass}--${props.size}`,
    `${baseClass}--${props.shape}`,
    !props.dot ? `${baseClass}--count` : '',
  ];
  return classNames.join(' ');
};

export const isShowBadge = function (props) {
  if (props.dot) {
    return true;
  }
  // eslint-disable-next-line no-restricted-globals
  if (!props.showZero && !isNaN(props.count) && parseInt(props.count, 10) === 0) {
    return false;
  }
  if (props.count == null) return false;
  return true;
};

