function getPopupStyles({ zIndex, distanceTop, placement, duration }) {
  let zIndexStyle = zIndex ? `z-index:${zIndex};` : '';
  if ((placement === 'top' || placement === 'left' || placement === 'right') && distanceTop) {
    zIndexStyle = `${zIndexStyle}top:${distanceTop}px;--td-popup-distance-top:${distanceTop}px;`;
  }
  if (duration) {
    zIndexStyle = `${zIndexStyle}--td-popup-transition:all ${duration}ms ease;`;
  }
  return zIndexStyle;
}

export default {
  getPopupStyles,
};
