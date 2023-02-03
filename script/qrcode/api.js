const { get, post } = require('./httpRequest');

/**
 * 获取access_token， 网页调试工具：https://mp.weixin.qq.com/debug/cgi-bin/apiinfo?t=index&type=%E5%9F%BA%E7%A1%80%E6%94%AF%E6%8C%81&form=%E8%8E%B7%E5%8F%96access_token%E6%8E%A5%E5%8F%A3%20/token&token=&lang=zh_CN
 * @api https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET
 * @method GET
 * @parameter grant_type
 * @parameter appid
 * @parameter secret
 * @return Object
 */
const getAccessToken = (appId, appSecret) => {
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`;
  return get(url);
};

/**
 * 获取小程序码，适用于需要的码数量极多的业务场景。通过该接口生成的小程序码，永久有效，数量暂无限制。
 * @api https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=ACCESS_TOKEN
 * @method POST
 * @parameter access_token
 * @parameter body
 * @parameter scene //跳转带参
 * @parameter path  //跳转页面
 * @return 二成功时返回的是 Buffer ，失败时返回 JSON
 */
const getUnlimitedQRCode = (token, parameter, config) => {
  const url = `https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${token}`;
  return post(url, parameter, config);
};

module.exports = {
  getAccessToken,
  getUnlimitedQRCode,
};
