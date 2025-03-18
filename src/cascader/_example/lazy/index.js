import Toast, { hideToast } from 'tdesign-miniprogram/toast/index';

const data = {
  areaList: [
    {
      label: '北京市',
      value: '110000',
      children: [],
    },
  ],
};

Component({
  data: {
    options: data.areaList,
    note: '请选择地址',
    visible: false,
    value: '',
  },
  methods: {
    showCascader() {
      this.setData({ visible: true });
    },
    onPick(e) {
      console.log(e.detail);
      const { value, index } = e.detail;
      const { options } = this.properties;
      if (options[index] && value === options[index].value && options[index].children?.length === 0) {
        Toast({
          context: this,
          selector: '#t-toast',
          theme: 'loading',
          message: '加载中...',
          direction: 'column',
          duration: 500,
          preventScrollThrough: true,
        });
        // 模拟数据请求
        setTimeout(() => {
          options[0].children = [{ value: '110100', label: '北京市', children: [] }];
          this.setData({
            options,
          });
          hideToast({
            context: this,
            selector: '#t-toast',
          });
        }, 500);
      } else if (
        options[index]?.children[index] &&
        value === options[index]?.children[index].value &&
        options[index].children[index].children?.length === 0
      ) {
        Toast({
          context: this,
          selector: '#t-toast',
          theme: 'loading',
          message: '加载中...',
          direction: 'column',
          duration: 500,
          preventScrollThrough: true,
        });
        // 模拟数据请求
        setTimeout(() => {
          options[0].children[0].children = [
            { value: '110101', label: '东城区' },
            { value: '110102', label: '西城区' },
            { value: '110105', label: '朝阳区' },
            { value: '110106', label: '丰台区' },
            { value: '110107', label: '石景山区' },
            { value: '110108', label: '海淀区' },
            { value: '110109', label: '门头沟区' },
            { value: '110111', label: '房山区' },
            { value: '110112', label: '通州区' },
            { value: '110113', label: '顺义区' },
            { value: '110114', label: '昌平区' },
            { value: '110115', label: '大兴区' },
            { value: '110116', label: '怀柔区' },
            { value: '110117', label: '平谷区' },
            { value: '110118', label: '密云区' },
            { value: '110119', label: '延庆区' },
          ];
          this.setData({
            options,
          });
          hideToast({
            context: this,
            selector: '#t-toast',
          });
        }, 500);
      }
    },
    onChange(e) {
      const { selectedOptions, value } = e.detail;

      this.setData({
        value,
        note: selectedOptions.map((item) => item.label).join('/'),
      });
    },
  },
});
