export const getObserver = (context, selector) => new Promise((resolve) => {
  uni
    .createIntersectionObserver(context, {
      nativeMode: true,
    })
    .relativeToViewport()
    .observe(selector, (res) => {
      resolve(res);
    });
});

/**
 * 背景：单页模式下, getWindowInfo、getAppBaseInfo、getDeviceInfo 等接口均返回 undefined。
 * 复现路径：分享到朋友圈，再打开单页模式的该页面，uni.getWindowInfo() 等接口返回 undefined
 * 代码片段：https://developers.weixin.qq.com/s/mzvZ8FmH7vVW
 */

export const getWindowInfo = () => (uni.getWindowInfo ? uni.getWindowInfo() || uni.getSystemInfoSync() : uni.getSystemInfoSync());

export const getAppBaseInfo = () => (uni.getAppBaseInfo ? uni.getAppBaseInfo() || uni.getSystemInfoSync() : uni.getSystemInfoSync());

export const getDeviceInfo = () => (uni.getDeviceInfo ? uni.getDeviceInfo() || uni.getSystemInfoSync() : uni.getSystemInfoSync());
