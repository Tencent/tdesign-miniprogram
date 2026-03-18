const data = {
  areaList: [
    {
      name: '北京市',
      id: '110000',
      sub: [
        {
          id: '110100',
          name: '北京市',
          sub: [
            { id: '110101', name: '东城区' },
            { id: '110102', name: '西城区' },
            { id: '110105', name: '朝阳区' },
            { id: '110106', name: '丰台区' },
            { id: '110107', name: '石景山区' },
            { id: '110108', name: '海淀区' },
            { id: '110109', name: '门头沟区' },
            { id: '110111', name: '房山区' },
            { id: '110112', name: '通州区' },
            { id: '110113', name: '顺义区' },
            { id: '110114', name: '昌平区' },
            { id: '110115', name: '大兴区' },
            { id: '110116', name: '怀柔区' },
            { id: '110117', name: '平谷区' },
            { id: '110118', name: '密云区' },
            { id: '110119', name: '延庆区' },
          ],
        },
      ],
    },
    {
      name: '天津市',
      id: '120000',
      sub: [
        {
          id: '120100',
          name: '天津市',
          sub: [
            { id: '120101', name: '和平区' },
            { id: '120102', name: '河东区' },
            { id: '120103', name: '河西区' },
            { id: '120104', name: '南开区' },
            { id: '120105', name: '河北区' },
            { id: '120106', name: '红桥区' },
            { id: '120110', name: '东丽区' },
            { id: '120111', name: '西青区' },
            { id: '120112', name: '津南区' },
            { id: '120113', name: '北辰区' },
            { id: '120114', name: '武清区' },
            { id: '120115', name: '宝坻区' },
            { id: '120116', name: '滨海新区' },
            { id: '120117', name: '宁河区' },
            { id: '120118', name: '静海区' },
            { id: '120119', name: '蓟州区' },
          ],
        },
      ],
    },
  ],
};

Component({
  data: {
    options: data.areaList,
    note: '请选择地址',
    visible: false,
    keys: {
      label: 'name',
      value: 'id',
      children: 'sub',
    },
  },
  methods: {
    showCascader() {
      this.setData({ visible: true });
    },
    onChange(e) {
      const { selectedOptions } = e.detail;

      this.setData({
        note: selectedOptions.map((item) => item.name).join('/'),
      });
    },
  },
});
