Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {
    disabled: {
      type: Boolean,
      value: false,
    },
    placeholder: {
      type: String,
      value: '请输入消息...',
    },
    loading: {
      type: Boolean,
      value: false,
    },
    textareaProps: {
      type: Object,
      value: {
        autosize: {
          maxHeight: 125,
          minHeight: 0,
        },
      },
    },
    value: {
      type: String,
      value: '',
    },
    onBlur: {
      type: null,
      value: undefined,
    },
    onChange: {
      type: null,
      value: undefined,
    },
    onFocus: {
      type: null,
      value: undefined,
    },
    onSend: {
      type: null,
      value: undefined,
    },
    onStop: {
      type: null,
      value: undefined,
    },
    fileList: {
      type: Array,
      value: [],
    },
    attachmentsProps: {
      type: Object,
      value: {
        items: [],
        removable: true,
        imageViewer: true,
        addable: false,
      },
    },
    renderPresets: {
      type: Array,
      value: [
        {
          name: 'upload',
          presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'],
          type: 'popup',
          status: '',
        },
        {
          name: 'send',
          type: 'icon',
        },
      ],
    },
    visible: {
      type: Boolean,
      value: false,
    },
  },
  data: {
    // 前缀
    COMPONENT_NAME: 't-chat-sender',
    scrollViewTop: 0,
    focusFlag: false,
    isSending: false,
    UploadIcon: 'https://static.wecity.qq.com/care-uisender-icon/input-3599187fc7825950adfb520feb46a367.svg',
    Upload2Icon: 'https://static.wecity.qq.com/care-uisender-icon/input_2-c720ab6f6a60cba96b06ccfe1b4ce360.svg',
    CameraIcon: 'https://static.wecity.qq.com/care-uisender-icon/camera-6a4b78a80dae51d09d10dabaa63eb0e4.svg',
    ImageIcon: 'https://static.wecity.qq.com/care-uisender-icon/image_icon-35b12b3932f816263d4e45d1acaeba55.svg',
    WechatFileIcon: 'https://static.wecity.qq.com/care-uisender-icon/wechat_file-bde8e660b16bf0efa8783b27c99c7b10.svg',
    LocalFileIcon: 'https://static.wecity.qq.com/care-uisender-icon/local_file-56df0238cb50fac7d52ca78d1ebd0863.svg',
    files: [],
    uploadPlacement: '',
    inputStyle: '',
    uploadConfig: {
      uploadCamera: {
        iconClass: 'camera',
        text: '拍摄',
        handler: 'handleImageUpload',
        handlerArg: 'camera',
      },
      uploadImage: {
        iconClass: 'image',
        text: '图片',
        handler: 'handleImageUpload',
        handlerArg: 'album',
      },
      uploadAttachment: {
        iconClass: 'file-add',
        text: '文件',
        handler: 'handleWechatFileUpload',
        handlerArg: 'attachment',
      },
    },
    uploadNames:[]
  },
  // 将 computed 转换为 methods
  methods: {

    onkeyboardheightchange(e) {
      // 业务侧控制键盘顶起高度，如果用fix布局，不需要监听键盘高度变化
      this.triggerEvent('keyboardheightchange', e);
    },
    handleSendClick(e) {
      this.data.loading ? this.handleStop(e) : this.sendClick(e);
    },
    handleOutsideClick() {
      this.triggerEvent('updatevisible', false);
    },
    sendClick(e) {
      if (this.data.value && !this.data.disabled) {
        this.triggerEvent('send', {
          value: this.data.value,
          e,
        });
      }
    },
    handleStop(e) {
      this.triggerEvent(
        'stop',
        {
          value: this.data.value,
          e,
        },
        { bubbles: false },
      );
    },
    handlerClick() {
      // 禁用状态输入框无焦点
      if (this.data.disabled) {
        this.setData({
          focusFlag: false,
        });
      } else {
        this.setData({
          focusFlag: true,
        });
      }
    },
    focusFn(e) {
      this.setData({
        focusFlag: true,
      });
      this.triggerEvent('focus', { value: e.detail.value, context: e });
    },
    blurFn(e) {
      this.setData({
        focusFlag: false,
      });
      this.triggerEvent('blur', { value: e.detail.value, context: e });
    },
    textChange(e) {
      this.setData({
        value: e.detail.value,
      });
      this.triggerEvent('change', { value: e.detail.value, context: e });
    },
    handleUploadClick(e) {
      const { type, status } = e.currentTarget.dataset;
      this.triggerEvent('uploadClick');
      // 禁用状态不显示上传面板
      if (this.data.disabled || status === 'disabled') return;
      this.setData({
        uploadPlacement: type,
      });
      // 点击按钮切换面板显示状态
      this.triggerEvent('updateVisible', !this.data.visible);
      // 透传处理上传按钮点击事件,由业务侧控制是否显示上传面板
    },
    handleFileClick(e) {
      // 透传 处理文件点击事件
      const {item} = e.detail;
      this.triggerEvent('fileClick', {file:item});
    },
    handleFileRemove(e) {
      // 添加数组存在性检查
      if (!Array.isArray(this.data.files)) return;
      const { item:file, index } = e.detail;
      this.triggerEvent('fileDelete', {file});
      const files = [...this.data.files];
      files.splice(index, 1);
      this.setData({ files });
      this.triggerEvent('fileChange', {files}); // 确保传递新数组
    },
    handleFileAdd() {
      this.triggerEvent('fileAdd');
    },
    async handleImageUpload(e) {
      const { type } = e.currentTarget.dataset;
      const sourceType = [type];
      try {
        const res = await wx.chooseImage({
          count: 1,
          // 最多可选9张
          sizeType: ['original', 'compressed'],
          // 可以指定是原图还是压缩图
          sourceType, // 从相册选择
        });
        // 处理选择的图片
        if (res.tempFilePaths && res.tempFilePaths.length > 0) {
          const files = res.tempFilePaths.map((item) => ({
            url: item,
            name: item,
            // 获取文件名
            size: 0,
            // 暂时不支持获取文件大小
            fileType: 'image', // 文件类型为图片
          }));
          const name = type === 'album' ? 'uploadImage' : 'uploadCamera';
          this.triggerEvent('fileSelect', {
            e,
            name,
            files,
          });
          const newFiles = [...this.data.files, ...files];
          this.setData({ files: newFiles });
          this.triggerEvent('fileChange', {files:newFiles});
        }
      } catch (err) {
        wx.showToast({
          title: type === 'album' ? '选择图片失败' : '拍照失败',
          icon: 'none',
        });
      } finally {
        this.triggerEvent('updatevisible', false);
      }
    },
    async handleWechatFileUpload(e) {
      try {
        // 使用微信小程序的选择文件API
        const res = await wx.chooseMessageFile({
          count: 5,
          // 最多5个文件
          type: 'all', // 所有类型文件
        });
        if (res.tempFiles && res.tempFiles.length > 0) {
          const files = res.tempFiles.map((item) => ({
            ...item,
            // 其他属性保留
            url: item.path, // 获取文件路径
          }));
          const newFiles = [...this.data.files, ...files];
          this.setData({ files: newFiles });
          this.triggerEvent('fileSelect', {
            e,
            name: 'uploadAttachment',
            files,
          });
          this.triggerEvent('fileChange', {files:newFiles});
        }
      } catch (err) {
        wx.showToast({
          title: '选择微信文件失败',
          icon: 'none',
        });
      } finally {
        this.triggerEvent('updatevisible', false);
      }
    },
    handleUploadEntryClick(e) {
      const { name } = e.currentTarget.dataset;
      const config = this.data.uploadConfig[name];
      if (config && this[config.handler]) {
        this[config.handler]({ currentTarget: { dataset: { type: config.handlerArg } } });
      }
    },
  },
  observers: {
    fileList: function (newVal) {
      // 添加空值检查
      this.setData({
        files: newVal ? JSON.parse(JSON.stringify(newVal)) : [],
      });
    },
    renderPresets: function (newVal) {
      const preset = newVal.find((item) => Array.isArray(item.presets));
      this.setData({
        uploadNames: preset ? preset.presets : [],
      })
    }
  },
  lifetimes: {
    created() {
      // 移除handleEvent相关绑定
    },
    attached() {
      // 移除生命周期中的空函数
    },
    detached() {
      // 移除生命周期中的空函数
    },
  },
});
