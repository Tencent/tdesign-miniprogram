Component({
  data: {
    value: '',
    resultList: [],
  },
  methods: {
    onChangeValue(e) {
      const { value } = e.detail;

      this.setData({
        resultList: value
          ? Array.from({ length: 3 }).map((v, i) => {
              return `预览结果：${i}`;
            })
          : [],
      });
    },
  },
});
