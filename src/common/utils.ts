import { prefix } from './config';

const systemInfo = wx.getSystemInfoSync();

type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

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
    .map((styleKey) => `${styleKey}: ${styleObj[styleKey]}`)
    .join('; ');
};

export const getAnimationFrame = function (cb: Function) {
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb();
    });
};

export const getRect = function (context: any, selector: string, needAll: boolean = false) {
  return new Promise<any>((resolve, reject) => {
    wx.createSelectorQuery()
      .in(context)
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

const isDef = function (value: any): boolean {
  return value !== undefined && value !== null;
};

export const isNumber = function (value) {
  return /^\d+(\.\d+)?$/.test(value);
};

export const addUnit = function (value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
  return isNumber(value) ? `${value}px` : value;
};

/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串（maxcharacter条件下，一个汉字表示两个字符）
 * @param max 规定最大字符串长度
 * @returns 当没有传入maxCharacter/maxLength 时返回字符串字符长度，当传入maxCharacter/maxLength时返回截取之后的字符串和长度。
 */
export const getCharacterLength = (type: string, str: string, max?: number) => {
  if (!str || str.length === 0) {
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
  } else if (type === 'maxlength') {
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

export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

export const getInstance = function (context?: Context, selector?: string) {
  if (!context) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    context = page.$$basePage || page;
  }
  const instance = context ? context.selectComponent(selector) : null;
  if (!instance) {
    console.warn('未找到组件,请检查selector是否正确');
    return null;
  }
  return instance;
};

export const unitConvert = (value: number | string): number => {
  if (typeof value === 'string') {
    if (value.includes('rpx')) {
      return (parseInt(value, 10) * (systemInfo?.screenWidth ?? 750)) / 750;
    }
    return parseInt(value, 10);
  }
  return value;
};

export const setIcon = (iconName, icon, defaultIcon) => {
  if (icon) {
    if (typeof icon === 'string') {
      return {
        [`${iconName}Name`]: icon,
        [`${iconName}Data`]: {},
      };
    } else if (typeof icon === 'object') {
      return {
        [`${iconName}Name`]: '',
        [`${iconName}Data`]: icon,
      };
    } else {
      return {
        [`${iconName}Name`]: defaultIcon,
        [`${iconName}Data`]: {},
      };
    }
  }
  return {
    [`${iconName}Name`]: '',
    [`${iconName}Data`]: {},
  };
};

export const isObject = (val) => typeof val === 'object' && val != null;

export const isString = (val) => typeof val === 'string';

export const toCamel = (str) => str.replace(/-(\w)/g, (match, m1) => m1.toUpperCase());

export const getCurrentPage = function <T>() {
  const pages = getCurrentPages();
  return pages[pages.length - 1] as T & WechatMiniprogram.Page.TrivialInstance;
};

export const uniqueFactory = (compName) => {
  let number = 0;
  return () => `${prefix}_${compName}_${number++}`;
};

export const calcIcon = (icon: string | Record<string, any>) => {
  if (typeof icon === 'string') {
    return { name: icon };
  }
  if (isObject(icon)) {
    return icon;
  }
  return null;
};
