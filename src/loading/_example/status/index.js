Component({
  data: {
    isCheck: false,
  },
  methods: {
    switchChange() {
      const { isCheck } = this.data;
      this.setData({ isCheck: !isCheck });
    },
  },
});
