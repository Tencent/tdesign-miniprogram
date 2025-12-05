import utils from '../common/utils.wxs';

const STATUS = ['success', 'error', 'warning'];
const STATUS_TEXT = ['success', 'error', 'warning', 'active'];

const PRO_THEME = {
  LINE: 'line',
  PLUMP: 'plump',
  CIRCLE: 'circle',
};

const STATUS_COLOR = {
  success: '#00a870',
  error: '#e34d59',
  warning: '#ed7b2f',
};

const LINE_STATUS_ICON = {
  success: 'check-circle-filled',
  error: 'error-circle-filled',
  warning: 'error-circle-filled',
};

const CIRCLE_STATUS_ICON = {
  success: 'check',
  error: 'close',
  warning: 'error',
};

/**
 *
 * 1. getIOSAriaLabel， getAndroidAriaLabel 两个函数的初衷是处理progress异常情况的文案识别。
 * 2. iOS可以识别%，而安卓不会识别%，如 80， iOS可以识别成 80%， 而安卓只会80，因此android部分做了一个% 拼接，后续看是否有更好的方案去解决。
 * 3. 安卓 talkback 版本为 8.1.0.278818032 ，只会读一次 80， 最新版本talkback 会读 80.0, 80。（目前也是一个痛点，啰嗦了）
 *
 */

function getIOSAriaLabel(status) {
  if (status === 'error') {
    return '进度失败';
  }
  if (status === 'warning') {
    return '进度异常';
  }
  return '';
}

function getAndroidAriaLabel(status) {
  if (status === 'error') {
    return '%' + '，进度失败';
  }
  if (status === 'warning') {
    return '%' + '，进度异常';
  }
  return '%';
}

function getCircleStyle(size, strokeWidth) {
  const styles = {
    '--td-progress-stroke-circle-width': utils.addUnit(strokeWidth),
  };

  if (!utils.includes(['default', 'micro'], size)) {
    styles['--td-progress-circle-width'] = utils.addUnit(size);
  }

  return utils._style(styles);
}

export {
  STATUS,
  STATUS_TEXT,
  PRO_THEME,

  STATUS_COLOR,
  LINE_STATUS_ICON,
  CIRCLE_STATUS_ICON,
  getAndroidAriaLabel,
  getIOSAriaLabel,
  getCircleStyle,
};
