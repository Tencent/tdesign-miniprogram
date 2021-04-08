export const debounce = function (func, wait = 500) {
  let timerId;
  return function (...rest) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.apply(this, rest);
    }, wait);
  };
};

export const classNames = function (...args) {
  const hasOwn = {}.hasOwnProperty;
  const classes = [];

  args.forEach((arg) => {
    // for (let i = 0; i < args.length; i++) {
    // eslint-disable-next-line
    // const arg = args[i]
    if (!arg) return;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      classes.push(arg);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classNames(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === 'object') {
      // eslint-disable-next-line
      for (const key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(' ');
};

export const styles = function (styleObj) {
  return Object.keys(styleObj)
    .map(styleKey => `${styleKey}: ${styleObj[styleKey]}`)
    .join('; ');
};

export const requestAnimationFrame = function (cb: Function) {
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb();
    });
};
