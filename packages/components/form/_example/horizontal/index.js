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
    gridConfig: {
      column: 3,
    },
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
      name: [
        { required: true, message: '用户名不能为空' },
        { maxLength: 3, message: '用户名不能超过3个字符' },
      ],
      password: [{ required: true, message: '密码不能为空' }],
      gender: [{ required: true, message: '性别不能为空' }],
      birth: [{ required: true, message: '生日不能为空' }],
      age: [{ required: true, message: '年限不能为空' }],
      place: [{ required: true, message: '籍贯不能为空' }],
      description: [{ required: true, message: '分数不能为空' }],
      resume: [{ required: true, message: '简介不能为空' }],
      photo: [{ required: true, message: '上传照片不能为空' }],
    },
  },

  methods: {
    onReset(e) {
      this.setData({
        formData: e.detail.formData,
      });
    },

    onSubmit(e) {
      console.log('===onSubmit', e);
    },

    submit() {
      const form = this.selectComponent('#form');
      form.submit();
    },
    reset() {
      const form = this.selectComponent('#form');
      form.reset();
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

    groupChangeFn(e) {
      console.log('groupChange:', e.detail.value);
    },

    onCascaderVisibleChange(e) {
      this.setData({ visibleCascader: e.detail.visible });
    },

    onChangeCascader(e) {
      const { options } = e.detail;
      const placeText = options?.map((item) => item.label).join('/');
      this.setData({
        'formData.place': placeText,
        visibleCascader: false,
      });
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
      const { files } = e.detail;
      this.setData({
        'formData.photo': [...files],
      });
    },

    onRemove(e) {
      const { index } = e.detail;
      const { photo } = this.data.formData;
      photo.splice(index, 1);
      this.setData({
        'formData.photo': photo,
      });
    },
  },
});
