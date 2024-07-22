Component({
  data: {
    current: -1,
    steps: [],
  },
  lifetimes: {
    attached() {
      this.setData({
        current: 0,
        steps: [
          {
            element: () =>
              new Promise((resolve) =>
                this.createSelectorQuery()
                  .select('.main-title')
                  .boundingClientRect((rect) => resolve(rect))
                  .exec(),
              ),
            placement: 'center',
          },
          {
            element: () =>
              new Promise((resolve) =>
                this.createSelectorQuery()
                  .select('.label-field')
                  .boundingClientRect((rect) => resolve(rect))
                  .exec(),
              ),
            placement: 'bottom',
            highlightPadding: 0,
          },
          {
            element: () =>
              new Promise((resolve) =>
                this.createSelectorQuery()
                  .select('.action')
                  .boundingClientRect((rect) => resolve(rect))
                  .exec(),
              ),
            placement: 'bottom-right',
          },
        ],
      });
    },
  },
  methods: {
    close() {
      this.triggerEvent('close');
    },
    skip() {
      this.setData({ current: -1 });
      this.close();
    },
    back() {
      this.setData({ current: 0 });
    },
    next() {
      this.setData({ current: this.data.current + 1 });
    },
    finish() {
      this.setData({ current: -1 });
      this.close();
    },
  },
});
