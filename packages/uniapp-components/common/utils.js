import { prefix } from './config';
import { isString, isNumeric, isDef, isBoolean, isObject } from './validator';
import { getWindowInfo, getAppBaseInfo, getDeviceInfo } from './wechat';

export { getWindowInfo };

export const systemInfo = getWindowInfo();

export const appBaseInfo = getAppBaseInfo();

export const deviceInfo = getDeviceInfo();


/**
 * 多参数空值合并函数
 * @param {...any} args - 任意数量的参数
 * @returns {any} 第一个非null/undefined的参数值
 */
export function coalesce(...args) {
  // 遍历所有参数
  for (let i = 0; i < args.length; i += 1) {
    // 返回第一个非null且非undefined的值
    if (args[i] !== null && args[i] !== undefined) {
      return args[i];
    }
  }
  // 如果所有参数都是null/undefined，返回最后一个参数
  return args[args.length - 1];
}


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

export const throttle = (func, wait = 100, options = null) => {
  let previous = 0;
  let timerid = null;

  if (!options) {
    options = {
      leading: true,
    };
  }

  return function (...args) {
    const now = Date.now();

    if (!previous && !options.leading) previous = now;

    const remaining = wait - (now - previous);
    const context = this;

    if (remaining <= 0) {
      if (timerid) {
        clearTimeout(timerid);
        timerid = null;
      }
      previous = now;
      func.apply(context, args);
    }
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

export const getAnimationFrame = function (context, cb) {
  return uni
    .createSelectorQuery()
    .in(context)
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb();
    });
};

export const getRect = function (context, selector, needAll = false, useH5Origin = false) {
  let result;
  // #ifdef H5
  if (useH5Origin) {
    result = document[needAll ? 'querySelectorAll' : 'querySelector'](selector)?.getBoundingClientRect();
  }
  // #endif
  if (result) {
    return result;
  }

  return new Promise((resolve, reject) => {
    uni
      .createSelectorQuery()
      .in(context)
      // eslint-disable-next-line no-unexpected-multiline
      [needAll ? 'selectAll' : 'select'](selector)
      .boundingClientRect((rect) => {
        if (rect) {
          resolve(rect);
        } else {
          reject(rect);
        }
      })
      .exec();
  });
};


export const getTreeDepth = (tree, key) => tree.reduce((maxDepth, node) => {
  const keyName = coalesce(key, 'children');
  if (node[keyName] && node[keyName].length > 0) {
    return Math.max(maxDepth, getTreeDepth(node[keyName], key) + 1);
  }
  return Math.max(maxDepth, 1);
}, 0);

export const isIOS = function () {
  return !!(deviceInfo?.system?.toLowerCase().search('ios') + 1);
};

/**
 * 判断是否是为企微环境
 * 企微环境 wx.getSystemInfoSync() 接口会额外返回 environment 字段（微信中不返回）
 * https://developer.work.weixin.qq.com/document/path/91511
 */
export const isWxWork = deviceInfo?.environment === 'wxwork';

export const isPC = ['mac', 'windows'].includes(deviceInfo?.platform);

export const addUnit = function (value) {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
};

/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param char 传入字符串（maxcharacter条件下，一个汉字表示两个字符）
 * @param max 规定最大字符串长度
 * @returns 当没有传入maxCharacter/maxLength 时返回字符串字符长度，当传入maxCharacter/maxLength时返回截取之后的字符串和长度。
 */
export const getCharacterLength = (type, char, max) => {
  const str = String(coalesce(char, ''));

  if (str.length === 0) {
    return {
      length: 0,
      characters: '',
    };
  }

  if (type === 'maxcharacter') {
    let len = 0;
    for (let i = 0; i < str.length; i += 1) {
      let currentStringLength = 0;
      if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
        currentStringLength = 2;
      } else {
        currentStringLength = 1;
      }
      if (len + currentStringLength > max) {
        return {
          length: len,
          characters: str.slice(0, i),
        };
      }
      len += currentStringLength;
    }
    return {
      length: len,
      characters: str,
    };
  }

  if (type === 'maxlength') {
    const length = str.length > max ? max : str.length;
    return {
      length,
      characters: str.slice(0, length),
    };
  }

  return {
    length: str.length,
    characters: str,
  };
};

export const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));


const getPageContext = () => {
  const pages = getCurrentPages();
  const page = pages[pages.length - 1];
  return (page).$$basePage || page;
};


const findInstance = (context, pageContext, pureSelector) => {
  if (context && context.$refs[pureSelector]) {
    return context.$refs[pureSelector];
  }
  if (pageContext && pageContext.$refs[pureSelector]) {
    return pageContext.$refs[pureSelector];
  }
  return null;
};

export const getInstance = function (context, selector) {
  const pageContext = getPageContext();
  const pureSelector = /^[.#]/.test(selector) ? selector.slice(1) : selector;
  const instance = findInstance(context, pageContext, pureSelector);

  if (!instance) {
    console.warn('未找到组件,请检查 selector 是否正确');
    return null;
  }
  return instance;
};

export const unitConvert = (value) => {
  if (typeof value === 'string') {
    if (value.includes('rpx')) {
      return (parseInt(value, 10) * (coalesce(systemInfo?.screenWidth, 750))) / 750;
    }
    return parseInt(value, 10);
  }
  return coalesce(value, 0);
};

export const setIcon = (iconName, icon, defaultIcon) => {
  if (icon) {
    if (typeof icon === 'string') {
      return {
        [`${iconName}Name`]: icon,
        [`${iconName}Data`]: {},
      };
    }
    if (typeof icon === 'object') {
      return {
        [`${iconName}Name`]: '',
        [`${iconName}Data`]: icon,
      };
    }
    return {
      [`${iconName}Name`]: defaultIcon,
      [`${iconName}Data`]: {},
    };
  }
  return {
    [`${iconName}Name`]: '',
    [`${iconName}Data`]: {},
  };
};

export const toCamel = str => str.replace(/-(\w)/g, (match, m1) => m1.toUpperCase());
export const toPascal = name => name
  .split('-')
  .map(part => part.charAt(0).toUpperCase() + part.slice(1))
  .join('');

export function hyphenate(str) {
  const hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}
export const getCurrentPage = function () {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
};

export const uniqueFactory = (compName) => {
  let number = 0;
  return () => {
    const uniqueId = `${prefix}_${compName}_${number}`;
    number += 1;
    return uniqueId;
  };
};

export const calcIcon = (icon, defaultIcon) => {
  if (icon && ((isBoolean(icon) && defaultIcon) || isString(icon))) {
    return { name: isBoolean(icon) ? defaultIcon : icon };
  }
  if (isObject(icon)) {
    return icon;
  }
  return null;
};

export const isOverSize = (size, sizeLimit) => {
  if (!sizeLimit) return false;

  const base = 1000;
  const unitMap = {
    B: 1,
    KB: base,
    MB: base * base,
    GB: base * base * base,
  };
  const computedSize = typeof sizeLimit === 'number'
    ? sizeLimit * base
    : sizeLimit?.size * unitMap[coalesce(sizeLimit?.unit, 'KB')]; // 单位 KB

  return size > computedSize;
};

export const rpx2px = rpx => Math.floor((systemInfo.windowWidth * rpx) / 750);

export const nextTick = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 33);
});

