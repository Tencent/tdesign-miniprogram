Component({
  properties: {
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    formData: {
      name: '',
      password: '',
      gender: '',
      birth: '',
      place: '',
      age: 3,
      description: 2,
      resume: '',
      photo: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded2.png',
          type: 'image',
        },
      ],
    },
    visibleCascader: false,
    address: '120119',
    rateGap: 8,
    action: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo',
    options: [
      {
        label: '北京市',
        value: '110000',
        children: [
          {
            value: '110100',
            label: '北京市',
            children: [
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
            ],
          },
        ],
      },
      {
        label: '天津市',
        value: '120000',
        children: [
          {
            value: '120100',
            label: '天津市',
            children: [
              { value: '120101', label: '和平区' },
              { value: '120102', label: '河东区' },
              { value: '120103', label: '河西区' },
              { value: '120104', label: '南开区' },
              { value: '120105', label: '河北区' },
              { value: '120106', label: '红桥区' },
              { value: '120110', label: '东丽区' },
              { value: '120111', label: '西青区' },
              { value: '120112', label: '津南区' },
              { value: '120113', label: '北辰区' },
              { value: '120114', label: '武清区' },
              { value: '120115', label: '宝坻区' },
              { value: '120116', label: '滨海新区' },
              { value: '120117', label: '宁河区' },
              { value: '120118', label: '静海区' },
              { value: '120119', label: '蓟州区' },
            ],
          },
        ],
      },
    ],
    rules: {
      name: [{ validator: (val) => val.length === 8, message: '只能输入8个字符英文' }],
      password: [{ validator: (val) => val.length > 6, message: '长度大于6个字符' }],
      gender: [{ validator: (val) => val !== '', message: '不能为空' }],
      birth: [{ validator: (val) => val !== '', message: '不能为空' }],
      place: [{ validator: (val) => val !== '', message: '不能为空' }],
      description: [{ validator: (val) => val > 3, message: '分数过低会影响整体评价' }],
      resume: [{ validator: (val) => val !== '', message: '不能为空' }],
    },
  },

  methods: {
    onReset() {
      console.log('===onReset');
    },

    onSubmit(e) {
      console.log('===onSubmit', e);
    },

    onInputChange(e) {
      const { field } = e.currentTarget.dataset;
      this.setData({
        [`formData.${field}`]: e.detail.value,
      });
    },

    onRadioChange(e) {
      this.setData({
        'formData.gender': e.detail.value,
      });
    },

    onRateChange(e) {
      this.setData({
        'formData.description': e.detail.value,
      });
    },

    onTextareaChange(e) {
      this.setData({
        'formData.resume': e.detail.value,
      });
    },

    onChangeCascader(e) {
      const { options } = e.detail;
      const placeText = options?.map((item) => item.label).join('/');
      this.setData({
        'formData.place': placeText,
        visibleCascader: false,
      });
    },

    onCascaderVisibleChange(e) {
      this.setData({ visibleCascader: e.detail.visible });
    },

    showCascader() {
      this.setData({ visibleCascader: true });
    },

    onChangeStepper(e) {
      this.setData({
        'formData.age': e.detail.value,
      });
    },

    onFail(e) {
      console.log('---onFail', e);
    },

    onProgress(e) {
      console.log('---onProgress:', e);
    },

    onChangeUpload(e) {
      console.log('====onChange', e);
    },

    onPreview(e) {
      console.log('====onPreview', e);
    },

    onSuccess(e) {
      console.log('====onSuccess', e);
    },

    onRemove(e) {
      console.log('====onRemove', e);
    },

    onSelectChange(e) {
      console.log('====onSelectChange', e);
    },
  },
});
