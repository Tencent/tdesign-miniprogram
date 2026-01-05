import utils from '../common/utils.wxs';

export function getColStyles(gutter, customStyle) {
  let _style = '';
  if (gutter) {
    _style = utils._style({
      'padding-right': utils.addUnit(gutter / 2),
      'padding-left': utils.addUnit(gutter / 2),
    });
  }

  return utils._style([customStyle]) + _style;
}

