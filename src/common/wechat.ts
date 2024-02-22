export const getObserver = (context, selector: string) => {
  return new Promise((resolve, reject) => {
    const observer = wx.createIntersectionObserver(context)
      .relativeToViewport();    
    observer.observe(selector, (res) => {
        observer.disconnect()
        resolve(res);
      });
  });
};
