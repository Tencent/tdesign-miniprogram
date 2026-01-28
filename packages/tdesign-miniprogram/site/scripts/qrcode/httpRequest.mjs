/** https 封装
 */
import https from 'https';
import http from 'http';
import { URL } from 'url';

// 默认请求头配置
const defaultHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest',
};

/**
 * 处理响应数据
 */
const handleResponse = (response, responseType) => {
  return new Promise((resolve, reject) => {
    const chunks = [];

    response.on('data', (chunk) => {
      chunks.push(chunk);
    });

    response.on('end', () => {
      const data = Buffer.concat(chunks);

      if (response.statusCode === 200) {
        // 根据 responseType 返回不同格式的数据
        if (responseType === 'arraybuffer') {
          // 返回 Buffer
          resolve(data);
        } else {
          // 默认返回字符串
          resolve(data.toString('utf-8'));
        }
      } else {
        const error = new Error(`HTTP ${response.statusCode}`);
        error.statusCode = response.statusCode;
        error.data = data.toString('utf-8');
        reject(error);
      }
    });

    response.on('error', (error) => {
      reject(error);
    });
  });
};

/**
 * @description get请求
 * @parameter {String} url [请求的url地址]
 * @parameter {Object} parameter [请求时携带的参数]
 * @parameter {Object} config [其他配置信息]
 */
const get = (url, parameter, config) => {
  return new Promise((resolve, reject) => {
    try {
      // 处理参数，拼接到 URL 上
      let requestUrl = url;
      if (parameter) {
        const urlObj = new URL(url);
        const params = new URLSearchParams(parameter);
        urlObj.search += (urlObj.search ? '&' : '') + params.toString();
        requestUrl = urlObj.toString();
      }
      const parsedUrl = new URL(requestUrl);
      const isHttps = parsedUrl.protocol === 'https:';
      const requestLib = isHttps ? https : http;

      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (isHttps ? 443 : 80),
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        headers: {
          ...defaultHeaders,
          ...(config?.headers || {}),
        },
      };

      const req = requestLib.request(options, (res) => {
        handleResponse(res, config?.responseType).then(resolve).catch(reject);
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.end();
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * @description post请求
 * @parameter {String} url [请求的url地址]
 * @parameter {Object} parameter [请求时携带的参数]
 * @parameter {Object} config [其他配置信息]
 */
const post = (url, parameter, config) => {
  return new Promise((resolve, reject) => {
    try {
      const parsedUrl = new URL(url);
      const isHttps = parsedUrl.protocol === 'https:';
      const requestLib = isHttps ? https : http;

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

      if (postData) {
        headers['Content-Length'] = Buffer.byteLength(postData);
      }

      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || (isHttps ? 443 : 80),
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'POST',
        headers,
      };

      const req = requestLib.request(options, (res) => {
        handleResponse(res, config?.responseType).then(resolve).catch(reject);
      });

      req.on('error', (error) => {
        reject(error);
      });

      if (postData) {
        req.write(postData);
      }

      req.end();
    } catch (error) {
      reject(error);
    }
  });
};

export { get, post };
