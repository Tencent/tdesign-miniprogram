import data from './data';

Component({
  data: {
    options: data.areaList,
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
