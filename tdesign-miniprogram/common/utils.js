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
        if (!arg)
            return;
        const argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        }
        else if (Array.isArray(arg) && arg.length) {
            const inner = classNames(...arg);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (argType === 'object') {
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
export const requestAnimationFrame = function (cb) {
    return wx
        .createSelectorQuery()
        .selectViewport()
        .boundingClientRect()
        .exec(() => {
        cb();
    });
};
const isDef = function (value) {
    return value !== undefined && value !== null;
};
export const isNumber = function (value) {
    return /^\d+(\.\d+)?$/.test(value);
};
export const addUnit = function (value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? `${value}px` : value;
};
/**
 * 计算字符串字符的长度并可以截取字符串。
 * @param str 传入字符串
 * @param maxCharacter 规定最大字符串长度
 * @returns 当没有传入maxCharacter时返回字符串字符长度，当传入maxCharacter时返回截取之后的字符串和长度。
 */
export const getCharacterLength = (str, maxCharacter) => {
    const hasMaxCharacter = typeof maxCharacter === 'number';
    if (!str || str.length === 0) {
        if (hasMaxCharacter) {
            return {
                length: 0,
                characters: str,
            };
        }
        return {
            length: 0,
            characters: '',
        };
    }
    let len = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < str.length; i++) {
        let currentStringLength = 0;
        if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
            currentStringLength = 2;
        }
        else {
            currentStringLength = 1;
        }
        if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
            return {
                length: len,
                characters: str.slice(0, i),
            };
        }
        len += currentStringLength;
    }
    if (hasMaxCharacter) {
        return {
            length: len,
            characters: str,
        };
    }
    return {
        length: len,
        characters: '',
    };
};

//# sourceMappingURL=utils.js.map
