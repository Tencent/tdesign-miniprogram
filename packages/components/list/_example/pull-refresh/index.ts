const ONCE_LOAD_NUM = 20;
const MAX_DATA_LEN = 60;

Component({
  data: {
    listPull: [] as string[],
    loading: '',
    refreshing: false,
  },

  lifetimes: {
    attached() {
      this.onLoadPull();
    },
  },

  methods: {
    loadData(isRefresh = false) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          const { listPull } = this.data;
          const nextList = isRefresh ? [] : [...listPull];

          for (let i = 0; i < ONCE_LOAD_NUM; i += 1) {
            nextList.push(`${nextList.length + 1}`);
          }

          this.setData({ listPull: nextList });
          resolve();
        }, 1000);
      });
    },

    onLoadPull(isRefresh = false) {
      const { listPull, loading } = this.data;
      if ((listPull.length >= MAX_DATA_LEN && !isRefresh) || loading) return;

      this.setData({ loading: 'loading' });
      this.loadData(isRefresh).then(() => {
        this.setData({ loading: '', refreshing: false });
      });
    },

    onScroll(event: WechatMiniprogram.CustomEvent) {
      const { bottomDistance } = event.detail;
      if (bottomDistance < 50) {
        this.onLoadPull();
      }
    },

    onPullScroll(event: WechatMiniprogram.CustomEvent) {
      this.selectComponent('#pull-list')?.onScroll(event.detail);
    },

    onRefresh() {
      this.setData({ refreshing: true });
      this.onLoadPull(true);
    },
  },
});
