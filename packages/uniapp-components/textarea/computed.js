import utils from '../common/utils.wxs';


export function textareaStyle(autosize) {
  if (autosize && typeof autosize === 'object') {
    return utils._style({
      'min-height': utils.addUnit(autosize.minHeight),
      'max-height': utils.addUnit(autosize.maxHeight),
    });
  }
  return '';
}


