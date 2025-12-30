/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdChatSenderProps } from './type';
export default {
  /** 默认键盘弹起不会把页面顶起来 */
  adjustPosition: Boolean,
  /** 附件列表属性 */
  attachmentsProps: {
    type: Object,
  },
  /** 键盘弹起时自动顶起来输入框 */
  autoRiseWithKeyboard: Boolean,
  /** 是否禁用输入框 */
  disabled: Boolean,
  /** 附件文件列表 */
  fileList: {
    type: Array,
    default: (): TdChatSenderProps['fileList'] => [],
  },
  /** 发送按钮是否处于加载状态 */
  loading: Boolean,
  /** 输入框默认文案 */
  placeholder: {
    type: String,
    default: '请输入消息...',
  },
  /** 预设发送区渲染配置，用于灵活配置发送区的上传入口和发送按钮，支持自定义类型、顺序、样式 */
  renderPresets: {
    type: Array,
    default: () => [{name: 'upload', presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'], status: ''},{ name: 'send', type: 'icon'}],
  },
  /** 透传给 Textarea 组件的属性，autosize数值单位为 rpx */
  textareaProps: {
    type: [Boolean, Object],
    default: () =>({ autosize: { maxHeight: 264, minHeight: 48 } }) as TdChatSenderProps['textareaProps'],
  },
  /** 输入框的值 */
  value: {
    type: String,
    default: '',
  },
  /** 上传面板是否可见 */
  visible: Boolean,
  /** 输入框聚焦时触发 */
  onBlur: {
    type: Function,
    default: () => ({}),
  },
  /** 输入框值发生变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 添加附件时触发 */
  onFileAdd: {
    type: Function,
    default: () => ({}),
  },
  /** 附件列表变化时触发 */
  onFileChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击附件时触发 */
  onFileClick: {
    type: Function,
    default: () => ({}),
  },
  /** 删除附件时触发 */
  onFileDelete: {
    type: Function,
    default: () => ({}),
  },
  /** 选择文件（图片/微信文件）时触发 */
  onFileSelect: {
    type: Function,
    default: () => ({}),
  },
  /** 输入框聚焦时触发 */
  onFocus: {
    type: Function,
    default: () => ({}),
  },
  /** 选择文件（图片/微信文件）时触发 */
  onKeyboardheightchange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击消息发送的回调方法 */
  onSend: {
    type: Function,
    default: () => ({}),
  },
  /** 点击消息终止的回调方法 */
  onStop: {
    type: Function,
    default: () => ({}),
  },
  /** 输入框值发生变化时触发 */
  onUpdateValue: {
    type: Function,
    default: () => ({}),
  },
  /** 上传面板可见性发生变化时触发 */
  onUpdateVisible: {
    type: Function,
    default: () => ({}),
  },
  /** 【实验】点击上传按钮时触发 */
  onUploadClick: {
    type: Function,
    default: () => ({}),
  },
};
