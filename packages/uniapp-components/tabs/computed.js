import utils from '../common/utils.wxs';

export function animate(options) {
  if (options.duration) {
    return utils._style({
      'transition-duration': `${options.duration}s`,
      transform: `translate3d( ${-100 * options.currentIndex}%,0, 0)`,
    });
  }
  return '';
}

export function trackStyle(options) {
  if (options.distance || options.lineWidth) {
    return utils._style({
      '-webkit-transform': `translateX(${options.distance}px)`,
      transform: `translateX(${options.distance}px)`,
      'transition-duration': options.isInit ? '0' : '0.3s',
      width: `${options.lineWidth}px`,
      opacity: 1,
    });
  }

  return '';
}

