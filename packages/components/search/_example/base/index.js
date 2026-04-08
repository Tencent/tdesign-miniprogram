const allList = [
  'tdesign-vue',
  'tdesign-react',
  'tdesign-miniprogram',
  'tdesign-angular',
  'tdesign-mobile-vue',
  'tdesign-mobile-react',
];

Component({
  data: {
    resultList: allList,
  },
  methods: {
    onChangeValue(e) {
      const { value } = e.detail;
      this.setData({
        resultList: value ? allList.filter((v) => v.includes(value)) : allList,
      });
    },
  },
});
