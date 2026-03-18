Component({
  data: {
    value: '',
    resultList: [],
  },
  methods: {
    onChangeValue(e) {
      const { value } = e.detail;
      const list = [
        'tdesign-vue',
        'tdesign-react',
        'tdesign-miniprogram',
        'tdesign-angular',
        'tdesign-mobile-vue',
        'tdesign-mobile-react',
      ];
      this.setData({
        resultList: value ? list.filter((v) => v.includes(value)) : [],
      });
    },
  },
});
