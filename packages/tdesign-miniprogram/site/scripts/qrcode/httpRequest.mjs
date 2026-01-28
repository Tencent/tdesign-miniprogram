import { URL } from 'url';

// 默认请求头配置
const defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
};

/**
 * @description get请求
 * @parameter {String} url [请求的url地址]
 * @parameter {Object} parameter [请求时携带的参数]
 * @parameter {Object} config [其他配置信息]
 */
const get = async (url, parameter, config) => {
  // 处理参数，拼接到 URL 上
  let requestUrl = url;
  if (parameter) {
    const urlObj = new URL(url);
    const params = new URLSearchParams(parameter);
    urlObj.search += (urlObj.search ? '&' : '') + params.toString();
    requestUrl = urlObj.toString();
  }

  const res = await fetch(requestUrl, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      ...(config?.headers || {}),
    },
  });

  if (!res.ok) {
    const error = new Error(`HTTP ${res.status}`);
    error.statusCode = res.status;
    error.data = await res.text();
    throw error;
  }

  // 根据 responseType 返回不同格式的数据
  if (config?.responseType === 'arraybuffer') {
    const buffer = await res.arrayBuffer();
    return Buffer.from(buffer);
  }

  return res.text();
};

/**
 * @description post请求
 * @parameter {String} url [请求的url地址]
 * @parameter {Object} parameter [请求时携带的参数]
 * @parameter {Object} config [其他配置信息]
 */
const post = async (url, parameter, config) => {
  let postData = '';
  let contentType = 'application/x-www-form-urlencoded; charset=UTF-8';

  if (parameter) {
    if (typeof parameter === 'string') {
      postData = parameter;
      // 检查是否是 JSON 字符串
      try {
        JSON.parse(parameter);
        contentType = 'application/json';
      } catch {
        // 不是 JSON，保持默认的 form-urlencoded
      }
    } else {
      // 对象类型，转换为 URLSearchParams
      postData = new URLSearchParams(parameter).toString();
    }
  }

  const headers = {
    ...defaultHeaders,
    'Content-Type': contentType,
    ...(config?.headers || {}),
  };

  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: postData,
  });

  if (!res.ok) {
    const error = new Error(`HTTP ${res.status}`);
    error.statusCode = res.status;
    error.data = await res.text();
    throw error;
  }

  // 根据 responseType 返回不同格式的数据
  if (config?.responseType === 'arraybuffer') {
    const buffer = await res.arrayBuffer();
    return Buffer.from(buffer);
  }

  return res.text();
};

export { get, post };
