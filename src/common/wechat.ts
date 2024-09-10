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
