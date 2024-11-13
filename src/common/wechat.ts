export const getObserver = (context, selector: string) => {
  return new Promise((resolve, reject) => {
    context
      .createIntersectionObserver(context)
      .relativeToViewport()
      .observe(selector, (res) => {
        resolve(res);
      });
  });
};

/**
 * 背景：单页模式下, getWindowInfo、getAppBaseInfo、getDeviceInfo 等接口均返回 undefined。
 * 复现路径：分享到朋友圈，再打开单页模式的该页面，wx.getWindowInfo() 等接口返回 undefined
 * 代码片段：https://developers.weixin.qq.com/s/mzvZ8FmH7vVW
 */

export const getWindowInfo = () => {
  return wx.getWindowInfo && wx.getWindowInfo() ? wx.getWindowInfo() : wx.getSystemInfoSync();
};

export const getAppBaseInfo = () => {
  return wx.getAppBaseInfo && wx.getAppBaseInfo() ? wx.getAppBaseInfo() : wx.getSystemInfoSync();
};

export const getDeviceInfo = () => {
  return wx.getDeviceInfo && wx.getDeviceInfo() ? wx.getDeviceInfo() : wx.getSystemInfoSync();
};
