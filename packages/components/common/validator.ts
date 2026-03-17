export function isFunction(val: unknown): val is Function {
  return typeof val === 'function';
}

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

export const isNull = <T>(value: T | null): value is null => {
  return value === null;
};

export const isUndefined = <T>(value: T | undefined): value is undefined => value === undefined;

export function isDef(value: unknown): boolean {
  return !isUndefined(value) && !isNull(value);
}

export function isInteger(value: unknown): boolean {
  return Number.isInteger(value);
}

export function isNumeric(value: unknown): boolean {
  return !Number.isNaN(Number(value));
}

export function isNumber(value: unknown): boolean {
  return typeof value === 'number';
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isObject(x: unknown): x is Record<string, unknown> {
  const type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

export function isPlainObject(val: unknown): val is Record<string, unknown> {
  return val !== null && typeof val === 'object' && Object.prototype.toString.call(val) === '[object Object]';
}

export function isEmpty(val: unknown): boolean {
  if (val === null || val === undefined) return true;
  if (typeof val === 'string' || Array.isArray(val)) return val.length === 0;
  if (val instanceof Map || val instanceof Set) return val.size === 0;
  if (typeof val === 'object') return Object.keys(val as Record<string, unknown>).length === 0;
  return true;
}

/**
 * 验证是否为有效日期
 * 参考 validator.js 的 isDate 实现
 * 支持字符串格式（YYYY/MM/DD、YYYY-MM-DD 等）和 Date 对象
 */
export function isDate(
  input: unknown,
  options?: { format?: string; delimiters?: string[]; strictMode?: boolean },
): boolean {
  const defaultOptions = {
    format: 'YYYY/MM/DD',
    delimiters: ['/', '-'],
    strictMode: false,
  };
  const opts = { ...defaultOptions, ...options };

  if (typeof input === 'string') {
    // 确定分隔符
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

    // 补零
    if (month.length === 1) month = `0${month}`;
    if (day.length === 1) day = `0${day}`;

    // 两位年份转四位
    if (year.length === 2) {
      const currentYearSuffix = new Date().getFullYear() % 100;
      year = Number(year) <= currentYearSuffix ? `20${year}` : `19${year}`;
    }

    const date = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
    return (
      date.getUTCFullYear() === Number(year) &&
      date.getUTCMonth() + 1 === Number(month) &&
      date.getUTCDate() === Number(day)
    );
  }

  if (!opts.strictMode) {
    if (Object.prototype.toString.call(input) === '[object Date]' && Number.isFinite((input as Date).getTime())) {
      return true;
    }
  }

  return false;
}

/**
 * 验证是否为有效邮箱地址
 * 参考 validator.js 的 isEmail 实现
 */
export function isEmail(str: unknown): boolean {
  if (typeof str !== 'string') return false;

  // 邮箱最大长度 254
  if (str.length > 254) return false;

  const parts = str.split('@');
  if (parts.length !== 2) return false;

  const [user, domain] = parts;

  // 本地部分最长 64 字节
  if (!user || user.length > 64) return false;
  // 域名部分不能为空
  if (!domain) return false;

  // 域名不能以 - 或 . 开头/结尾
  if (/^[-.]/.test(domain) || /[-.]$/.test(domain)) return false;
  // 域名格式校验：允许字母、数字、连字符、点
  if (!/^[a-zA-Z0-9.-]+$/.test(domain)) return false;
  // 域名至少有一个点（需要顶级域名）
  if (!domain.includes('.')) return false;
  // 顶级域名至少两个字符
  const tld = domain.split('.').pop();
  if (!tld || tld.length < 2) return false;

  // 本地部分允许字母、数字和 .!#$%&'*+/=?^_`{|}~-
  const emailUserReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
  return emailUserReg.test(user);
}

/**
 * 验证是否为有效 URL
 * 参考 validator.js 的 isURL 实现
 */
export function isURL(
  str: unknown,
  options?: {
    protocols?: string[];
    require_tld?: boolean;
    require_protocol?: boolean;
    require_host?: boolean;
    allow_protocol_relative_urls?: boolean;
  },
): boolean {
  if (typeof str !== 'string') return false;
  if (str.length === 0 || /\s/.test(str)) return false;
  // 最大长度限制
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

  // 检查协议
  const protocolRegex = /^([a-z][a-z0-9+\-.]*):\/\//i;
  const protocolMatch = url.match(protocolRegex);
  if (protocolMatch) {
    const protocol = protocolMatch[1].toLowerCase();
    if (!opts.protocols.includes(protocol)) return false;
    url = url.slice(protocolMatch[0].length);
  } else if (opts.require_protocol) {
    // 协议相对 URL
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

  // 分离路径、查询、片段
  const [hostPart] = url.split(/[/?#]/);
  if (!hostPart && opts.require_host) return false;

  // 分离认证信息
  let host = hostPart;
  if (host.includes('@')) {
    host = host.split('@').pop() || '';
  }

  // 分离端口
  let hostname = host;
  const portMatch = host.match(/:(\d+)$/);
  if (portMatch) {
    const port = Number(portMatch[1]);
    if (port < 0 || port > 65535) return false;
    hostname = host.slice(0, host.lastIndexOf(':'));
  }

  if (!hostname) return false;

  // 检查是否为 IP 地址
  const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const ipv4Match = hostname.match(ipv4Regex);
  if (ipv4Match) {
    return ipv4Match.slice(1).every((part) => Number(part) >= 0 && Number(part) <= 255);
  }

  // IPv6 简单检查
  if (hostname.startsWith('[') && hostname.endsWith(']')) {
    return true;
  }

  // FQDN 检查
  const domainParts = hostname.split('.');
  if (opts.require_tld && domainParts.length < 2) return false;
  // 每段不能为空，且只能包含字母、数字、连字符
  const hasInvalidPart = domainParts.some((part) => {
    if (!part || part.length > 63) return true;
    if (!/^[a-zA-Z0-9-]+$/.test(part)) return true;
    if (part.startsWith('-') || part.endsWith('-')) return true;
    return false;
  });
  if (hasInvalidPart) return false;
  // TLD 不能全是数字
  if (opts.require_tld) {
    const tld = domainParts[domainParts.length - 1];
    if (/^\d+$/.test(tld)) return false;
  }

  return true;
}
