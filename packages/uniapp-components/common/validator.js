export function isFunction(val) {
  return typeof val === 'function';
}

export const isString = val => typeof val === 'string';

export const isNull = value => value === null;

export const isUndefined = value => value === undefined;

export function isDef(value) {
  return !isUndefined(value) && !isNull(value);
}

export function isInteger(value) {
  return Number.isInteger(value);
}

export function isNumeric(value) {
  return !Number.isNaN(Number(value));
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isBoolean(value) {
  return typeof value === 'boolean';
}

export function isObject(x) {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function isPlainObject(val) {
  return val !== null && typeof val === 'object' && Object.prototype.toString.call(val) === '[object Object]';
}

export function isEmpty(val) {
  if (val === null || val === undefined) return true;
  if (typeof val === 'string' || Array.isArray(val)) return val.length === 0;
  if (val instanceof Map || val instanceof Set) return val.size === 0;
  if (typeof val === 'object') return Object.keys(val).length === 0;
  return true;
}

/**
 * 验证是否为有效日期
 * 支持字符串格式（YYYY/MM/DD、YYYY-MM-DD 等）和 Date 对象
 */
export function isDate(input, options) {
  const defaultOptions = {
    format: 'YYYY/MM/DD',
    delimiters: ['/', '-'],
    strictMode: false,
  };
  const opts = { ...defaultOptions, ...options };

  if (typeof input === 'string') {
    const delimiter = opts.delimiters.find((d) => opts.format.includes(d));
    if (!delimiter) return false;

    const formatParts = opts.format.split(delimiter);
    const dateParts = input.split(delimiter);
    if (formatParts.length !== dateParts.length) return false;

    let year = '';
    let month = '';
    let day = '';
    for (let i = 0; i < formatParts.length; i += 1) {
      const fmt = formatParts[i].toUpperCase();
      const val = dateParts[i];
      if (fmt.includes('Y')) year = val;
      else if (fmt.includes('M')) month = val;
      else if (fmt.includes('D')) day = val;
    }

    if (month.length === 1) month = `0${month}`;
    if (day.length === 1) day = `0${day}`;

    if (year.length === 2) {
      const currentYearSuffix = new Date().getFullYear() % 100;
      year = Number(year) <= currentYearSuffix ? `20${year}` : `19${year}`;
    }

    const date = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    return (
      date.getUTCFullYear() === Number(year)
      && date.getUTCMonth() + 1 === Number(month)
      && date.getUTCDate() === Number(day)
    );
  }

  if (!opts.strictMode) {
    if (Object.prototype.toString.call(input) === '[object Date]' && Number.isFinite(input.getTime())) {
      return true;
    }
  }

  return false;
}

/**
 * 验证是否为有效邮箱地址
 */
export function isEmail(str) {
  if (typeof str !== 'string') return false;
  if (str.length > 254) return false;

  const parts = str.split('@');
  if (parts.length !== 2) return false;

  const [user, domain] = parts;
  if (!user || user.length > 64) return false;
  if (!domain) return false;

  if (/^[-.]/.test(domain) || /[-.]$/.test(domain)) return false;
  if (!/^[a-zA-Z0-9.-]+$/.test(domain)) return false;
  if (!domain.includes('.')) return false;

  const tld = domain.split('.').pop();
  if (!tld || tld.length < 2) return false;

  const emailUserReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
  return emailUserReg.test(user);
}

/**
 * 验证是否为有效 URL
 */
export function isURL(str, options) {
  if (typeof str !== 'string') return false;
  if (str.length === 0 || /\s/.test(str)) return false;
  if (str.length > 2084) return false;

  const defaultOpts = {
    protocols: ['http', 'https', 'ftp'],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    allow_protocol_relative_urls: false,
  };
  const opts = { ...defaultOpts, ...options };

  let url = str;

  const protocolRegex = /^([a-z][a-z0-9+\-.]*):\/\//i;
  const protocolMatch = url.match(protocolRegex);
  if (protocolMatch) {
    const protocol = protocolMatch[1].toLowerCase();
    if (!opts.protocols.includes(protocol)) return false;
    url = url.slice(protocolMatch[0].length);
  } else if (opts.require_protocol) {
    if (opts.allow_protocol_relative_urls && str.startsWith('//')) {
      url = url.slice(2);
    } else {
      return false;
    }
  } else if (str.startsWith('//')) {
    if (!opts.allow_protocol_relative_urls) return false;
    url = url.slice(2);
  }

  if (!url && opts.require_host) return false;

  const [hostPart] = url.split(/[/?#]/);
  if (!hostPart && opts.require_host) return false;

  let host = hostPart;
  if (host.includes('@')) {
    host = host.split('@').pop() || '';
  }

  let hostname = host;
  const portMatch = host.match(/:(\d+)$/);
  if (portMatch) {
    const port = Number(portMatch[1]);
    if (port < 0 || port > 65535) return false;
    hostname = host.slice(0, host.lastIndexOf(':'));
  }

  if (!hostname) return false;

  const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const ipv4Match = hostname.match(ipv4Regex);
  if (ipv4Match) {
    return ipv4Match.slice(1).every((part) => Number(part) >= 0 && Number(part) <= 255);
  }

  if (hostname.startsWith('[') && hostname.endsWith(']')) {
    return true;
  }

  const domainParts = hostname.split('.');
  if (opts.require_tld && domainParts.length < 2) return false;
  const hasInvalidPart = domainParts.some((part) => {
    if (!part || part.length > 63) return true;
    if (!/^[a-zA-Z0-9-]+$/.test(part)) return true;
    if (part.startsWith('-') || part.endsWith('-')) return true;
    return false;
  });
  if (hasInvalidPart) return false;
  if (opts.require_tld) {
    const tld = domainParts[domainParts.length - 1];
    if (/^\d+$/.test(tld)) return false;
  }

  return true;
}
