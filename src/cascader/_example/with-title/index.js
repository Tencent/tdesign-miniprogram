const data = {
  areaList: [
    {
      label: 'Beijing',
      value: '110000',
      children: [
        {
          value: '110100',
          label: 'Beijing',
          children: [
            { value: '110101', label: 'Dongcheng' },
            { value: '110102', label: 'Xicheng' },
            { value: '110105', label: 'Zhaoyang' },
            { value: '110106', label: 'Fengtai' },
            { value: '110107', label: 'Shijingshan' },
            { value: '110108', label: 'Haibin' },
            { value: '110109', label: 'Mentougou' },
            { value: '110111', label: 'Fangshan' },
            { value: '110112', label: 'Tongzhou' },
            { value: '110113', label: 'Shunyi' },
            { value: '110114', label: 'Changping' },
            { value: '110115', label: 'Daxing' },
            { value: '110116', label: 'Huairou' },
            { value: '110117', label: 'Pinggu' },
            { value: '110118', label: 'Miyun' },
            { value: '110119', label: 'Yanqing' },
          ],
        },
      ],
    },
    {
      label: 'Tianjin',
      value: '120000',
      children: [
        {
          value: '120100',
          label: 'Tianjin',
          children: [
            { value: '120101', label: 'Heping' },
            { value: '120102', label: 'Hedong' },
            { value: '120103', label: 'Hexi' },
            { value: '120104', label: 'Nankai' },
            { value: '120105', label: 'Hebei' },
            { value: '120106', label: 'Hongqiao' },
            { value: '120110', label: 'Doneli' },
            { value: '120111', label: 'Xiqing' },
            { value: '120112', label: 'Jinnan' },
            { value: '120113', label: 'Beichen' },
            { value: '120114', label: 'Wuqing' },
            { value: '120115', label: 'Baodi' },
            { value: '120116', label: 'Binhai' },
            { value: '120117', label: 'Ninghe' },
            { value: '120118', label: 'Jinhai' },
            { value: '120119', label: 'Jizhou' },
          ],
        },
      ],
    },
  ],
};

Component({
  data: {
    options: data.areaList,
    note: 'Select Area',
    visible: false,
    subTitles: ['Select Province', 'Select City', 'Select County'],
  },
  methods: {
    showCascader() {
      this.setData({ visible: true });
    },
    onChange(e) {
      const { selectedOptions } = e.detail;

      this.setData({
        note: selectedOptions.map((item) => item.label).join('/'),
      });
    },
  },
});
