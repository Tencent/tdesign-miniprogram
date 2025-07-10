const data = {
  areaList: [
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
};

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
      age: 2,
      description: 3,
      resume: '',
    },
    buttonGroupStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16rpx',
      marginTop: '16rpx',
    },
    rules: {
      name: [
        { required: true, message: '请输入用户名', type: 'error' },
        { min: 2, message: '至少需要2个字符', type: 'error' },
        { max: 10, message: '不能超过10个字符', type: 'error' },
      ],
      password: [
        { required: true, message: '请输入密码', type: 'error' },
        { min: 6, message: '至少需要6个字符', type: 'error' },
        { max: 20, message: '不能超过20个字符', type: 'error' },
      ],
      gender: [{ required: true, message: '请选择性别', type: 'error' }],
      birth: [{ required: true, message: '请选择生日', type: 'error' }],
      place: [{ required: true, message: '请选择籍贯', type: 'error' }],
      age: [{ required: true, message: '请输入年限', type: 'error' }],
      description: [{ required: true, message: '请选择自我评价', type: 'error' }],
      resume: [{ required: true, message: '请输入个人简介', type: 'error' }],
    },
    visible: false,
    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
    monthText: '',
    visibleCascader: false,
    options: data.areaList,
    address: '',
    rateGap: 4,
    action: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo',
    showPassword: false,
  },
  methods: {
    onNameChange(e) {
      this.setData({
        'formData.name': e.detail.value,
      });
    },
    onPasswordChange(e) {
      this.setData({
        'formData.password': e.detail.value,
      });
    },
    onGenderChange(e) {
      this.setData({
        'formData.gender': e.detail.value,
      });
    },
    onAgeChange(e) {
      this.setData({
        'formData.age': e.detail.value,
      });
    },
    onRateChange(e) {
      this.setData({
        'formData.description': e.detail.value,
      });
    },
    onResumeChange(e) {
      this.setData({
        'formData.resume': e.detail.value,
      });
    },
    showDatePicker() {
      this.setData({
        visible: true,
      });
    },
    onCloseDatePicker() {
      this.setData({
        visible: false,
      });
    },
    onDateChange(e) {
      console.log('onDateChange', e);
    },
    onDatePick(e) {
      console.log('onDatePick', e);
    },
    onDateConfirm(e) {
      this.setData({
        'formData.birth': e.detail.value,
        visible: false,
      });
    },
    onDateCancel() {
      this.setData({
        visible: false,
      });
    },
    showCascader() {
      this.setData({
        visibleCascader: true,
      });
    },
    onCloseCascader() {
      this.setData({
        visibleCascader: false,
      });
    },
    onCascaderChange(e) {
      const { selectedOptions, value } = e.detail;
      const text = selectedOptions.map((item) => item.label).join('-');
      this.setData({
        address: value,
        'formData.place': text,
        visibleCascader: false,
      });
    },
    onFail(e) {
      console.log('onFail', e);
    },
    onProgress(e) {
      console.log('onProgress', e);
    },
    onPreview(e) {
      console.log('onPreview', e);
    },
    onSuccess(e) {
      console.log('onSuccess', e);
    },
    onRemove(e) {
      console.log('onRemove', e);
    },
    onSelectChange(e) {
      console.log('onSelectChange', e);
    },
    hidePicker() {
      this.setData({
        visible: false,
      });
    },
    onConfirm(e) {
      const { value } = e.detail;
      this.setData({
        monthText: value,
        'formData.birth': value,
      });

      this.hidePicker();
    },
    onBrowseOff() {
      this.setData({
        showPassword: !this.data.showPassword,
      });
    },
    // 表单事件
    onSubmit(e) {
      const { validateResult, firstError } = e.detail;
      if (validateResult === true) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
        });
      } else {
        wx.showToast({
          title: firstError || '表单验证失败',
          icon: 'error',
        });
      }
    },

    onReset(e) {
      this.setData({
        formData: e.detail.formData,
      });
      wx.showToast({
        title: '表单已重置',
        icon: 'success',
      });
    },
  },
});
