/** axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
const axios = require('axios');

// axios.defaults.timeout = 10000; // 超时抛出异常
// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'; // post请求头
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // 默认异步请求

// 请求拦截
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.error(error),
);
// 响应拦截
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error.response.status) {
      return Promise.reject(error.response);
    }
  },
);

/**
 * @description get请求
 * @parameter {String} url [请求的url地址]
 * @parameter {Object} parameter [请求时携带的参数]
 * @parameter {Object} config [其他配置信息]
 */
const get = (url, parameter, config) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, parameter, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
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
    axios
      .post(url, parameter, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
};

module.exports = {
  get,
  post,
};
