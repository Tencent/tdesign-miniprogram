const options = [
  {
    label: '广东省',
    value: 'gd',
    children: [
      {
        label: '深圳市',
        value: 'sz',
        children: [
          {
            label: '南山区',
            value: 'ns',
          },
          {
            label: '福田区',
            value: 'ft',
          },
        ],
      },
      {
        label: '广州市',
        value: 'gz',
        children: [
          {
            label: '白云区',
            value: 'by',
          },
          {
            label: '海珠区',
            value: 'hz',
          },
        ],
      },
    ],
  },
  {
    label: '福建省',
    value: 'fj',
    children: [
      {
        label: '厦门市',
        value: 'xm',
      },
      {
        label: '泉州市',
        value: 'qz',
      },
    ],
  },
];
Component({
  data: {
    options,
    note: '请选择地址',
    visible: false,
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
