export const isEmptyObj = function (obj) {
  return JSON.stringify(obj) === '{}';
};

const changeNumToStr = function (arr) {
  return arr.map(item => (typeof item === 'number' ? `${item}rpx` : item));
};

export const getMessageStyles = function (zIndex, offset, wrapTop) {
  const arr = changeNumToStr(offset || [0, 0]);
  const left = arr[1] || 0;
  const right = arr[1] || 0;

  const zIndexStyle = zIndex ? `z-index:${zIndex};` : '';
  let styleOffset = '';

  styleOffset += `top:${wrapTop}px;`;
  styleOffset += `left:${left};`;
  styleOffset += `right:${right};`;

  return zIndexStyle + styleOffset;
};

