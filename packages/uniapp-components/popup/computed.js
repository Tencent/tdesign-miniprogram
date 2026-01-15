function getPopupStyles(zIndex, distanceTop, placement) {
  let zIndexStyle = zIndex ? `z-index:${zIndex};` : '';
  if ((placement === 'top' || placement === 'left' || placement === 'right') && distanceTop) {
    zIndexStyle = `${zIndexStyle}top:${distanceTop}px;` + `--td-popup-distance-top:${distanceTop}px;`;
  }
  return zIndexStyle;
}

export default {
  getPopupStyles,
};
