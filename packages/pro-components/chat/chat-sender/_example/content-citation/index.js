Page({
  data: {
    value: '',
    loading: false,
    disabled: false,
    fileList: [],
    visible: false,
    placeholder: '请输入消息...',
    textareaProps: {
      autosize: {
        maxHeight: 264,
        minHeight: 48, // 设置为0时，用自动计算height的高度
      }, // 默认为false
    },
    attachmentsProps: {
      items: [],
      removable: true,
      imageViewer: true,
      addable: false,
    },
    renderPresets: [
      {
        name: 'send',
        type: 'icon',
      },
    ],
    deepThinkActive: false,
    netSearchActive: false,
    headerText:
      '牛顿第一定律并不适用于所有参考系，它只适用于惯性参考系。在质点不受外力作用时，能够判断出质点静止或作匀速直线运动的参考系一定是惯性参考系，因此只有在惯性参考系中牛顿第一定律才适用。',
  },

  // 发送消息
  onSend(e) {
    const { value } = e.detail;
    console.log('发送消息:', value);

    if (!value.trim()) {
      wx.showToast({
        title: '请输入消息内容',
        icon: 'none',
      });
      return;
    }

    // 模拟发送状态
    this.setData({ loading: true });

    setTimeout(() => {
      if (this.data.loading) {
        this.setData({
          loading: false,
          value: '', // 清空输入框
        });
        wx.showToast({
          title: '发送成功',
          icon: 'success',
        });
      }
    }, 3000);
  },

  // 停止发送
  onStop(e) {
    const { value } = e.detail;
    console.log('停止发送:', value);

    this.setData({ loading: false });
    wx.showToast({
      title: '已停止发送',
      icon: 'none',
    });
  },

  // 输入框聚焦
  onFocus(e) {
    const { value, context } = e.detail;
    console.log('输入框聚焦:', value, context);
  },

  // 输入框失焦
  onBlur(e) {
    const { value, context } = e.detail;
    console.log('输入框失焦:', value, context);
  },

  // 输入内容变化
  onChange(e) {
    const { value } = e.detail;
    console.log('输入内容变化:', value);
    this.setData({ value });
  },

  // 点击上传按钮
  onUploadClick() {
    console.log('点击上传按钮');
  },

  // 点击文件
  onFileClick(e) {
    const { file } = e.detail;
    console.log('点击文件:', file);
    wx.showToast({
      title: `点击了文件: ${file.name}`,
      icon: 'none',
    });
  },

  // 删除文件
  onFileDelete(e) {
    const { file } = e.detail;
    console.log('删除文件:', file);
    wx.showToast({
      title: '文件删除成功',
      icon: 'success',
    });
  },

  // 文件列表变化
  onFileChange(e) {
    console.log(e, 'e----');

    const { files } = e.detail;
    console.log('文件列表变化:', files);
    this.setData({ fileList: files });
  },

  // 添加文件
  onFileAdd() {
    console.log('添加文件');
  },

  // 选择文件
  onFileSelect(e) {
    const { name, files } = e.detail;
    console.log('选择文件:', name, files);

    wx.showToast({
      title: `选择了${files.length}个文件`,
      icon: 'success',
    });
  },

  // 上传面板显示状态变化
  onUpdateVisible(e) {
    const visible = e.detail;
    console.log('上传面板显示状态:', visible);
    this.setData({ visible });
  },

  // 键盘高度变化
  onKeyboardHeightChange(e) {
    console.log('键盘高度变化:', e.detail);
  },

  // 切换禁用状态
  toggleDisabled() {
    this.setData({ disabled: !this.data.disabled });
  },

  // 切换加载状态
  toggleLoading() {
    this.setData({ loading: !this.data.loading });
  },

  // 清空输入框
  clearInput() {
    this.setData({ value: '' });
  },

  onDeepThinkTap() {
    this.setData({ deepThinkActive: !this.data.deepThinkActive });
  },

  onNetSearchTap() {
    this.setData({ netSearchActive: !this.data.netSearchActive });
  },

  handleCLoseCite() {
    this.setData({ headerText: '' });
  },
});
