// 将rgb颜色转成hex
function rgb2Hex(color) {
  const rgb = color.split(',');
  const r = parseInt(rgb[0].split('(')[1], 10);
  const g = parseInt(rgb[1], 10);
  const b = parseInt(rgb[2].split(')')[0], 10);

  // eslint-disable-next-line no-bitwise
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  return hex;
}

// 将hex颜色转成rgb
function hex2Rgb(hex) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    // eslint-disable-next-line no-bitwise
    return `rgb(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ')})`;
  }
  throw new Error('Bad Hex');
}

module.exports = {
  rgb2Hex,
  hex2Rgb,
};
