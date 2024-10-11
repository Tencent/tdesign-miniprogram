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

export const getWindowInfo = () => {
  return wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
};

export const getAppBaseInfo = () => {
  return wx.getAppBaseInfo ? wx.getAppBaseInfo() : wx.getSystemInfoSync();
};

export const getDeviceInfo = () => {
  return wx.getDeviceInfo ? wx.getDeviceInfo() : wx.getSystemInfoSync();
};
