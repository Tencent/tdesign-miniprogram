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
            title: '用户引导标题',
            body: '用户引导的说明文案',
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
            title: '用户引导标题',
            placement: 'bottom',
            mode: 'dialog',
          },
          {
            element: () =>
              new Promise((resolve) =>
                this.createSelectorQuery()
                  .select('.action')
                  .boundingClientRect((rect) => resolve(rect))
                  .exec(),
              ),
            title: '用户引导标题',
            body: '用户引导的说明文案',
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
  },
});
