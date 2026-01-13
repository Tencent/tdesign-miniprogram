import utils from '../common/utils.wxs';

export function getRowStyles(gutter, customStyle) {
  let _style = '';
  if (gutter) {
    _style = utils._style({
      'margin-right': utils.addUnit(-gutter / 2),
      'margin-left': utils.addUnit(-gutter / 2),
    });
  }

  return utils._style([customStyle]) + _style;
}
