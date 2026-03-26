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
    const delimiter = opts.delimiters.find(d => opts.format.includes(d));
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
 * 检查主机名是否匹配黑/白名单
 */
function checkHost(host, list) {
  if (!list || !list.length) return false;
  return list.some((item) => {
    if (item instanceof RegExp) return item.test(host);
    return host === item;
  });
}

/**
 * 计算字符串的字节长度（UTF-8 编码）
 */
function byteLength(str) {
  return encodeURI(str).split(/%..|./).length - 1;
}

/**
 * 检查是否为 FQDN（完全限定域名）
 */
function isFQDN(str, options = {}) {
  const opts = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    ...options,
  };

  let domain = str;
  if (opts.allow_trailing_dot && domain[domain.length - 1] === '.') {
    domain = domain.substring(0, domain.length - 1);
  }

  const parts = domain.split('.');
  const tld = parts[parts.length - 1];

  if (opts.require_tld) {
    if (parts.length < 2) return false;
    if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    if (/\s/.test(tld)) return false;
  }

  if (/^\d+$/.test(tld)) return false;

  return parts.every((part) => {
    if (part.length > 63) return false;
    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) return false;
    // 禁止全角字符
    if (/[\uff01-\uff5e]/.test(part)) return false;
    // 不能以连字符开头或结尾
    if (/^-|-$/.test(part)) return false;
    if (!opts.allow_underscores && /_/.test(part)) return false;
    return true;
  });
}

/**
 * 检查是否为有效的 IPv4 或 IPv6 地址
 */
function isIP(ipAddress, version) {
  const IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
  const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
  const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);
  const IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
  const IPv6AddressRegExp = new RegExp('^('
    + `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|`
    + `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|`
    + `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|`
    + `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|`
    + `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|`
    + `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|`
    + `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|`
    + `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))`
    + ')(%[0-9a-zA-Z.]{1,})?$');

  const v = version ? version.toString() : '';
  if (!v) {
    return isIP(ipAddress, 4) || isIP(ipAddress, 6);
  }
  if (v === '4') return IPv4AddressRegExp.test(ipAddress);
  if (v === '6') return IPv6AddressRegExp.test(ipAddress);
  return false;
}

/**
 * 验证是否为有效邮箱地址
 * 参考 validator.js 的 isEmail 实现，支持 options 参数
 * @param {string} str - 待校验字符串
 * @param {object} [options] - 校验选项
 * @param {boolean} [options.allow_display_name=false] - 是否允许显示名称格式
 * @param {boolean} [options.require_display_name=false] - 是否要求必须包含显示名称
 * @param {boolean} [options.allow_utf8_local_part=true] - 是否允许 UTF8 本地部分
 * @param {boolean} [options.require_tld=true] - 是否要求顶级域名
 * @param {boolean} [options.ignore_max_length=false] - 是否忽略最大长度限制
 * @param {boolean} [options.allow_ip_domain=false] - 是否允许 IP 地址作为域名
 * @param {boolean} [options.domain_specific_validation=false] - 是否启用域名特定校验（如 Gmail）
 * @param {boolean} [options.allow_underscores=false] - 是否允许下划线
 * @param {Array} [options.host_blacklist] - 域名黑名单
 * @param {Array} [options.host_whitelist] - 域名白名单
 * @param {string} [options.blacklisted_chars] - 拒绝包含的字符
 */
export function isEmail(str, options) {
  if (typeof str !== 'string') return false;

  let email = str;

  const defaultOpts = {
    allow_display_name: false,
    allow_underscores: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: '',
    ignore_max_length: false,
    host_blacklist: [],
    host_whitelist: [],
  };
  const opts = { ...defaultOpts, ...options };

  // 处理 Display Name 格式，如 "John" <john@example.com>
  // eslint-disable-next-line no-control-regex
  const splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
  if (opts.require_display_name || opts.allow_display_name) {
    const displayEmail = email.match(splitNameAddress);
    if (displayEmail) {
      let displayName = displayEmail[1];
      email = email.replace(displayName, '').replace(/(^<|>$)/g, '');
      if (displayName.endsWith(' ')) {
        displayName = displayName.slice(0, -1);
      }
      // 简单校验 display name
      const nameWithoutQuotes = displayName.replace(/^"(.+)"$/, '$1');
      if (!nameWithoutQuotes.trim()) return false;
      if (/[.";<>]/.test(nameWithoutQuotes) && nameWithoutQuotes === displayName) return false;
    } else if (opts.require_display_name) {
      return false;
    }
  }

  if (!opts.ignore_max_length && email.length > 254) return false;

  const parts = email.split('@');
  const domain = parts.pop();
  const user = parts.join('@');

  if (!user || !domain) return false;

  const lowerDomain = domain.toLowerCase();

  // 域名黑名单
  if (opts.host_blacklist.length > 0 && checkHost(lowerDomain, opts.host_blacklist)) {
    return false;
  }
  // 域名白名单
  if (opts.host_whitelist.length > 0 && !checkHost(lowerDomain, opts.host_whitelist)) {
    return false;
  }

  // Gmail 特殊校验
  if (opts.domain_specific_validation && (lowerDomain === 'gmail.com' || lowerDomain === 'googlemail.com')) {
    const username = user.toLowerCase().split('+')[0];
    if (byteLength(username.replace(/\./g, '')) < 6 || byteLength(username.replace(/\./g, '')) > 30) {
      return false;
    }
    const gmailUserPart = /^[a-z\d]+$/;
    const gmailParts = username.split('.');
    for (let i = 0; i < gmailParts.length; i++) {
      if (!gmailUserPart.test(gmailParts[i])) return false;
    }
  }

  // 字节长度校验
  if (!opts.ignore_max_length && (byteLength(user) > 64 || byteLength(domain) > 254)) {
    return false;
  }

  // 域名校验：先尝试 FQDN，再尝试 IP
  if (!isFQDN(domain, { require_tld: opts.require_tld, allow_underscores: opts.allow_underscores })) {
    if (!opts.allow_ip_domain) return false;
    if (!isIP(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) return false;
      const noBracketDomain = domain.slice(1, -1);
      if (!noBracketDomain || !isIP(noBracketDomain)) return false;
    }
  }

  // 黑名单字符
  if (opts.blacklisted_chars && new RegExp(`[${opts.blacklisted_chars}]+`, 'g').test(user)) {
    return false;
  }

  // 引号包裹的用户名
  if (user[0] === '"' && user[user.length - 1] === '"') {
    const innerUser = user.slice(1, user.length - 1);
    /* eslint-disable no-control-regex */
    if (opts.allow_utf8_local_part) {
      return /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i.test(innerUser);
    }
    return /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i.test(innerUser);
    /* eslint-enable no-control-regex */
  }

  // 用户名逐段校验（按 . 分割）
  /* eslint-disable no-useless-escape */
  const pattern = opts.allow_utf8_local_part
    ? /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A1-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i
    : /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  /* eslint-enable no-useless-escape */
  const userParts = user.split('.');
  for (let i = 0; i < userParts.length; i++) {
    if (!pattern.test(userParts[i])) return false;
  }

  return true;
}

/**
 * 验证是否为有效 URL
 * 参考 validator.js 的 isURL 实现，支持完整 options 参数
 * @param {string} str - 待校验字符串
 * @param {object} [options] - 校验选项
 * @param {string[]} [options.protocols=['http','https','ftp']] - 允许的协议
 * @param {boolean} [options.require_tld=true] - 是否要求顶级域名
 * @param {boolean} [options.require_protocol=false] - 是否要求协议
 * @param {boolean} [options.require_host=true] - 是否要求主机名
 * @param {boolean} [options.require_port=false] - 是否要求端口
 * @param {boolean} [options.require_valid_protocol=true] - 是否要求有效协议
 * @param {boolean} [options.allow_underscores=false] - 是否允许下划线
 * @param {Array} [options.host_whitelist] - 主机名白名单
 * @param {Array} [options.host_blacklist] - 主机名黑名单
 * @param {boolean} [options.allow_trailing_dot=false] - 是否允许末尾的点
 * @param {boolean} [options.allow_protocol_relative_urls=false] - 是否允许协议相对 URL
 * @param {boolean} [options.disallow_auth=false] - 是否禁止认证信息
 * @param {boolean} [options.allow_fragments=true] - 是否允许片段（hash）
 * @param {boolean} [options.allow_query_components=true] - 是否允许查询参数
 * @param {boolean} [options.validate_length=true] - 是否校验长度
 * @param {number|false} [options.max_allowed_length=2084] - 最大允许长度
 */
export function isURL(str, options) {
  if (typeof str !== 'string') return false;
  if (!str || /[\s<>]/.test(str)) return false;
  if (str.indexOf('mailto:') === 0) return false;

  const defaultOpts = {
    protocols: ['http', 'https', 'ftp'],
    require_tld: true,
    require_protocol: false,
    require_host: true,
    require_port: false,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false,
    allow_fragments: true,
    allow_query_components: true,
    disallow_auth: false,
    validate_length: true,
    max_allowed_length: 2084,
  };
  const opts = { ...defaultOpts, ...options };

  if (opts.validate_length && opts.max_allowed_length && str.length > opts.max_allowed_length) {
    return false;
  }

  if (!opts.allow_fragments && str.includes('#')) {
    return false;
  }

  if (!opts.allow_query_components && (str.includes('?') || str.includes('&'))) {
    return false;
  }

  let url = str;
  let protocol;

  // 协议解析
  const protocolRegex = /^([a-z][a-z0-9+\-.]*):\/\//i;
  const protocolMatch = url.match(protocolRegex);
  if (protocolMatch) {
    protocol = protocolMatch[1].toLowerCase();
    if (opts.require_valid_protocol && !opts.protocols.includes(protocol)) return false;
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

  if (url === '') return false;

  // 分离片段和查询参数
  let split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();

  // 分离路径
  split = url.split('/');
  url = split.shift();

  if (url === '' && !opts.require_host) return true;

  // 分离认证信息
  split = url.split('@');
  if (split.length > 1) {
    if (opts.disallow_auth) return false;
    const auth = split.shift();
    if (auth === '') return false;
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) return false;
    const [authUser, authPassword] = auth.split(':');
    if (authUser === '' && authPassword === '') return false;
  }

  const hostname = split.join('@');
  let portStr = null;
  let ipv6 = null;
  let host;

  // IPv6 包裹格式 [::1]:port
  const wrappedIpv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;
  const ipv6Match = hostname.match(wrappedIpv6);
  if (ipv6Match) {
    host = '';
    [, ipv6] = ipv6Match;
    portStr = ipv6Match[2] || null;
  } else {
    const hostSplit = hostname.split(':');
    [host] = hostSplit;
    const restParts = hostSplit.slice(1);
    if (restParts.length) {
      portStr = restParts.join(':');
    }
  }

  // 端口校验
  if (portStr !== null && portStr.length > 0) {
    const port = parseInt(portStr, 10);
    if (!/^[0-9]+$/.test(portStr) || port <= 0 || port > 65535) return false;
  } else if (opts.require_port) {
    return false;
  }

  // 白名单优先
  if (opts.host_whitelist && opts.host_whitelist.length) {
    return checkHost(host, opts.host_whitelist);
  }

  if (host === '' && !opts.require_host) return true;

  // 域名校验
  if (!isIP(host) && !isFQDN(host, {
    require_tld: opts.require_tld,
    allow_underscores: opts.allow_underscores,
    allow_trailing_dot: opts.allow_trailing_dot,
  }) && (!ipv6 || !isIP(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  // 黑名单
  if (opts.host_blacklist && opts.host_blacklist.length && checkHost(host, opts.host_blacklist)) {
    return false;
  }

  return true;
}
