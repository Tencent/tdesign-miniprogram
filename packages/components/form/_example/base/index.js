Component({
  properties: {
    labelAlign: {
      type: String,
      value: 'top',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    formData: {
      name: 'Abcdefgh',
      password: 'Abcdefgh',
      gender: 'man',
      birth: '2022-08-10',
      place: '广东省 深圳市',
      age: 3,
      description: 3.5,
      resume: '本人性格开朗、稳重、细心，待人热情、真诚，工作认真负责，积极主动，勇于创新，具有很强的团队协作精神。',
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
    dateVisible: false,
    address: '440300',
    rateGap: 8,
    action: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo',
    gridConfig: {
      column: 3,
    },
    options: [
      {
        label: '广东省',
        value: '440000',
        children: [{ value: '440300', label: '深圳市' }],
      },
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
              { value: '110108', label: '海淀区' },
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
            ],
          },
        ],
      },
    ],
    rules: {},
  },

  lifetimes: {
    attached() {
      this.setData({
        'rules.name': [{ validator: (val) => val.length === 8, message: '只能输入8个字符英文' }],
        'rules.password': [{ validator: (val) => val.length > 6, message: '密码长度 6–16 位，支持字母、数字' }],
        'rules.gender': [{ validator: (val) => val !== '', message: '不能为空' }],
        'rules.birth': [{ validator: (val) => val !== '', message: '不能为空' }],
        'rules.place': [{ validator: (val) => val !== '', message: '不能为空' }],
        'rules.description': [{ validator: (val) => val > 3, message: '分数过低会影响整体评价' }],
        'rules.resume': [{ validator: (val) => val !== '', message: '不能为空' }],
      });
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

    onCascaderVisibleChange(e) {
      this.setData({ visibleCascader: e.detail.visible });
    },

    onChangeCascader(e) {
      const { selectedOptions } = e.detail;
      const placeText = selectedOptions?.map((item) => item.label).join(' ');
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

    showDatePicker() {
      this.setData({ dateVisible: true });
    },

    onDatePickerConfirm(e) {
      const { value } = e.detail;
      this.setData({
        'formData.birth': value,
        dateVisible: false,
      });
    },

    onDatePickerClose() {
      this.setData({
        dateVisible: false,
      });
    },
  },
});
