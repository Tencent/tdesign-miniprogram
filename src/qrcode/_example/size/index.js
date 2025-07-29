Component({
  data: {
    size: 160,
    minSize: 80,
  },
  lifetimes: {
    attached() {
      const query = wx.createSelectorQuery().in(this);
      query
        .select('.show-container')
        .boundingClientRect((rect) => {
          if (rect) {
            const containerWidth = rect.width;
            this.setData({
              maxSize: containerWidth, // 将最大尺寸设置为父容器的宽度
            });
          }
        })
        .exec();
    },
  },

  methods: {
    increaseSize() {
      if (this.data.size < this.data.maxSize) {
        this.setData({
          size: this.data.size + 10,
        });
      } else {
        this.setData({
          size: this.data.maxSize,
        });
      }
    },
    decreaseSize() {
      if (this.data.size > this.data.minSize) {
        this.setData({
          size: this.data.size - 10,
        });
      } else {
        this.setData({
          size: this.data.minSize,
        });
      }
    },
  },
});
