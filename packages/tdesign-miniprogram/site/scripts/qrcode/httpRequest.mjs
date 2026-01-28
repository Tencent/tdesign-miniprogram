import { URL } from 'url';

// 默认请求头配置
const defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
};

// 处理响应错误
const handleResponseError = async (res) => {
  const error = new Error(`HTTP ${res.status}`);
  error.statusCode = res.status;
  error.data = await res.text();
  throw error;
};

// 处理响应数据
const handleResponse = async (res, config) => {
  if (!res.ok) {
    await handleResponseError(res);
  }

  if (config?.responseType === 'arraybuffer') {
    const buffer = await res.arrayBuffer();
    return Buffer.from(buffer);
  }

  return res.text();
};

// 处理 POST 数据
const processPostData = (parameter) => {
  if (!parameter) return { data: '', contentType: 'application/x-www-form-urlencoded; charset=UTF-8' };

  if (typeof parameter === 'string') {
    try {
      JSON.parse(parameter);
      return { data: parameter, contentType: 'application/json' };
    } catch {
      return { data: parameter, contentType: 'application/x-www-form-urlencoded; charset=UTF-8' };
    }
  }

  return {
    data: new URLSearchParams(parameter).toString(),
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
  };
};

/**
 * @description get请求
 * @parameter {String} url [请求的url地址]
 * @parameter {Object} parameter [请求时携带的参数]
 * @parameter {Object} config [其他配置信息]
 */
const get = async (url, parameter, config) => {
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

  return handleResponse(res, config);
};

/**
 * @description post请求
 * @parameter {String} url [请求的url地址]
 * @parameter {Object} parameter [请求时携带的参数]
 * @parameter {Object} config [其他配置信息]
 */
const post = async (url, parameter, config) => {
  const { data: postData, contentType } = processPostData(parameter);

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

  return handleResponse(res, config);
};

export { get, post };
