export function getBackgroundColor(color) {
  if (typeof color === 'string') {
    return color;
  }
  if (Array.isArray(color)) {
    if (color[0] && color[0][0] === '#') {
      color.unshift('90deg');
    }
    return `linear-gradient( ${color.join(',')} )`;
  }
  const { from, to, direction = 'to right', ...rest } = color;
  let keys = Object.keys(rest);
  if (keys.length) {
    keys = keys.sort((a, b) => parseFloat(a.substr(0, a.length - 1)) - parseFloat(b.substr(0, b.length - 1)));
    const tempArr = keys.map(key => `${rest[key]} ${key}`);
    return `linear-gradient(${direction}, ${tempArr.join(',')})`;
  }
  return `linear-gradient(${direction}, ${from}, ${to})`;
}
