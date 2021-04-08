const dom = Behavior({
  methods: {
    gettingBoundingClientRect(selector: string, all: boolean) {
      return new Promise((resolve, reject) => {
        try {
          wx.createSelectorQuery()
            .in(this)
            [all ? 'selectAll' : 'select'](selector)
            .boundingClientRect((rect) => {
              if (all && Array.isArray(rect) && rect.length) {
                resolve(rect);
              } else if (!all && rect) {
                resolve(rect);
              } else {
                reject();
              }
            })
            .exec();
        } catch (err) {
          reject(err);
        }
      });
    },
  },
});
export default dom;
