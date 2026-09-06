Component({
  data: {
    listError: [] as string[],
    loading: '',
    showError: false,
  },

  lifetimes: {
    attached() {
      this.onLoadError();
    },
  },

  methods: {
    onLoadError() {
      this.setData({ loading: 'loading' });

      setTimeout(() => {
        const { listError } = this.data;
        const nextList = [...listError];
        for (let i = 0; i < 8; i += 1) {
          nextList.push(`${nextList.length + 1}`);
        }
        this.setData({ listError: nextList, showError: true, loading: '' });
      }, 1000);
    },

    onLoadMore() {
      const { listError, loading } = this.data;
      this.setData({ showError: false });
      if (listError.length >= 60 || loading) return;

      this.setData({ loading: 'loading' });
      setTimeout(() => {
        const nextList = [...this.data.listError];
        for (let i = 0; i < 15; i += 1) {
          nextList.push(`${nextList.length + 1}`);
        }
        this.setData({ listError: nextList, loading: '' });
      }, 1000);
    },
  },
});
