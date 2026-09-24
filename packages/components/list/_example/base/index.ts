const BASE_ONCE_LOAD_NUM = 20;
const BASE_MAX_DATA_LEN = 60;

Component({
  data: {
    list: [] as string[],
    loading: '',
  },

  lifetimes: {
    attached() {
      this.onLoad();
    },
  },

  methods: {
    loadData(isRefresh = false) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          const { list } = this.data;
          const nextList = isRefresh ? [] : [...list];

          for (let i = 0; i < BASE_ONCE_LOAD_NUM; i += 1) {
            nextList.push(`${nextList.length + 1}`);
          }

          this.setData({ list: nextList });
          resolve();
        }, 1000);
      });
    },

    onLoad(isRefresh = false) {
      const { list, loading } = this.data;
      if ((list.length >= BASE_MAX_DATA_LEN && !isRefresh) || loading) return;

      this.setData({ loading: 'loading' });
      this.loadData(isRefresh).then(() => {
        this.setData({ loading: '' });
      });
    },

    onScroll(event: WechatMiniprogram.CustomEvent) {
      const { bottomDistance } = event.detail;
      if (bottomDistance < 50) {
        this.onLoad();
      }
    },
  },
});
