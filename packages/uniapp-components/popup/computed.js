function hasMaxWidth(placement, maxWidth) {
  return (
    (placement === 'top' || placement === 'bottom') && maxWidth !== null && maxWidth !== undefined && maxWidth !== ''
  );
}

function getPopupStyles({ zIndex, distanceTop, placement, duration, maxWidth }) {
  let zIndexStyle = zIndex ? `z-index:${zIndex};` : '';
  if ((placement === 'top' || placement === 'left' || placement === 'right') && distanceTop) {
    zIndexStyle = `${zIndexStyle}top:${distanceTop}px;--td-popup-distance-top:${distanceTop}px;`;
  }
  if (duration) {
    zIndexStyle = `${zIndexStyle}--td-popup-transition:all ${duration}ms ease;`;
  }
  if (hasMaxWidth(placement, maxWidth)) {
    zIndexStyle = `${zIndexStyle}max-width:${typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth};`;
  }
  return zIndexStyle;
}

export default {
  hasMaxWidth,
  getPopupStyles,
};
