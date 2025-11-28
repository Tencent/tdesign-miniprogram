export function getStyles(top, zIndex) {
  const topStyle = top ? `top:${top}px;` : '';
  const zIndexStyle = zIndex ? `z-index:${zIndex};` : '';
  return topStyle + zIndexStyle;
}

