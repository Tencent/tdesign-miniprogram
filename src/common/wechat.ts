export const getObserver = (context, selector: string) => {
  return new Promise((resolve, reject) => {
    wx.createIntersectionObserver(context)
      .relativeToViewport()
      .observe(selector, (res) => {
        resolve(res);
      });
  });
};
