import { SuperComponent, wxComponent } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';
import usingConfig from '../../../components/mixins/using-config';

const { prefix } = config;
const componentName = 'chat-sender';

@wxComponent()
export default class ChatSender extends SuperComponent {
  behaviors = [usingConfig({ componentName })];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    classPrefix: `${prefix}-${componentName}`,
    scrollViewTop: 0,
    focusFlag: false,
    isSending: false,
    inputStyle: '',
    originalMarginBottom: 12, // 设计稿的 margin-bottom 值（单位：px）
    files: [],
    uploadPlacement: 'bottom',
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
    uploadNames: [],
  };

  observers = {
    fileList(newVal) {
      // 添加空值检查
      this.setData({
        files: newVal ? JSON.parse(JSON.stringify(newVal)) : [],
      });
    },
    renderPresets(newVal) {
      const preset = newVal.find((item) => Array.isArray(item.presets));
      this.setData({
        uploadNames: preset ? preset.presets : [],
      });
    },
  };

  methods = {
    onkeyboardheightchange(e) {
      // 业务侧控制键盘顶起高度，如果用fix布局，不需要监听键盘高度变化
      this.triggerEvent('keyboardheightchange', e.detail);
      // 不开启自动顶起，不做处理
      if (!this.data.autoRiseWithKeyboard) return;
      const keyboardHeight = e.detail.height;
      if (keyboardHeight > 0) {
        // 键盘弹起时，将键盘高度与原始 margin-bottom 相加
        // todo：使用js计算实际的margin-bottom，因为业务侧可能会覆盖样式
        const totalMarginBottom = keyboardHeight + this.data.originalMarginBottom;
        this.setData({
          inputStyle: `margin-bottom: ${totalMarginBottom}px;`,
        });
      } else {
        // 键盘收起时，恢复原始 margin-bottom
        this.setData({
          inputStyle: '',
        });
      }
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
      const { status } = e.currentTarget.dataset;
      this.triggerEvent('uploadClick');
      // 禁用状态不显示上传面板
      if (this.data.disabled || status === 'disabled') return;
      // 点击按钮切换面板显示状态
      this.triggerEvent('updateVisible', !this.data.visible);
      // 透传处理上传按钮点击事件,由业务侧控制是否显示上传面板
    },

    handleFileClick(e) {
      // 透传 处理文件点击事件
      const { item } = e.detail;
      this.triggerEvent('fileClick', { file: item });
    },

    handleFileRemove(e) {
      // 添加数组存在性检查
      if (!Array.isArray(this.data.files)) return;
      const { item: file, index } = e.detail;
      this.triggerEvent('fileDelete', { file });
      const files = [...this.data.files];
      files.splice(index, 1);
      this.setData({ files });
      this.triggerEvent('fileChange', { files }); // 确保传递新数组
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
          this.triggerEvent('fileChange', { files: newFiles });
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
          this.triggerEvent('fileChange', { files: newFiles });
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
  };

  lifetimes = {
    created() {
      // 绑定方法到 this.data
      this.data.onkeyboardheightchange = this.onkeyboardheightchange.bind(this);
      this.data.handleSendClick = this.handleSendClick.bind(this);
      this.data.handleOutsideClick = this.handleOutsideClick.bind(this);
      this.data.sendClick = this.sendClick.bind(this);
      this.data.handleStop = this.handleStop.bind(this);
      this.data.handlerClick = this.handlerClick.bind(this);
      this.data.focusFn = this.focusFn.bind(this);
      this.data.blurFn = this.blurFn.bind(this);
      this.data.textChange = this.textChange.bind(this);
      this.data.handleUploadClick = this.handleUploadClick.bind(this);
      this.data.handleFileClick = this.handleFileClick.bind(this);
      this.data.handleFileRemove = this.handleFileRemove.bind(this);
      this.data.handleFileAdd = this.handleFileAdd.bind(this);
      this.data.handleImageUpload = this.handleImageUpload.bind(this);
      this.data.handleWechatFileUpload = this.handleWechatFileUpload.bind(this);
      this.data.handleUploadEntryClick = this.handleUploadEntryClick.bind(this);
    },
    attached() {},
    detached() {
      // 组件销毁逻辑
    },
  };
}
