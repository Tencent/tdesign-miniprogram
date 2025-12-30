/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdAttachmentsProps as AttachmentsProps, FileItem } from '../attachments/type';

export interface TdChatSenderProps {
  /**
   * 默认键盘弹起不会把页面顶起来
   * @default false
   */
  adjustPosition?: boolean;
  /**
   * 附件列表属性
   */
  attachmentsProps?: AttachmentsProps;
  /**
   * 键盘弹起时自动顶起来输入框
   * @default false
   */
  autoRiseWithKeyboard?: boolean;
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean;
  /**
   * 附件文件列表
   * @default []
   */
  fileList?: FileItem[];
  /**
   * 发送按钮是否处于加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 输入框默认文案
   * @default 请输入消息...
   */
  placeholder?: string;
  /**
   * 预设发送区渲染配置，用于灵活配置发送区的上传入口和发送按钮，支持自定义类型、顺序、样式
   * @default [{name: 'upload', presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'], status: ''},{ name: 'send', type: 'icon'}]
   */
  renderPresets?: ChatActionButtons;
  /**
   * 透传给 Textarea 组件的属性，autosize数值单位为 rpx
   * @default { autosize: { maxHeight: 264, minHeight: 48 } }
   */
  textareaProps?: boolean | object;
  /**
   * 输入框的值
   * @default ''
   */
  value?: string;
  /**
   * 上传面板是否可见
   * @default false
   */
  visible?: boolean;
  /**
   * 输入框聚焦时触发
   */
  onBlur?: (value: string, context: { e: FocusEvent }) => void;
  /**
   * 输入框值发生变化时触发
   */
  onChange?: (value: string, context: { e: InputEvent | MouseEvent | KeyboardEvent }) => void;
  /**
   * 添加附件时触发
   */
  onFileAdd?: () => void;
  /**
   * 附件列表变化时触发
   */
  onFileChange?: (file: FileItem) => void;
  /**
   * 点击附件时触发
   */
  onFileClick?: (file: FileItem) => void;
  /**
   * 删除附件时触发
   */
  onFileDelete?: (file: FileItem) => void;
  /**
   * 选择文件（图片/微信文件）时触发
   */
  onFileSelect?: (context: { files: FileList; name: UploadActionType }) => void;
  /**
   * 输入框聚焦时触发
   */
  onFocus?: (value: string, context: { e: FocusEvent }) => void;
  /**
   * 选择文件（图片/微信文件）时触发
   */
  onKeyboardheightchange?: (context: { height: number; duration: number }) => void;
  /**
   * 点击消息发送的回调方法
   */
  onSend?: (value: string, context: { e: MouseEvent | KeyboardEvent }) => void;
  /**
   * 点击消息终止的回调方法
   */
  onStop?: (value: string, context: { e: MouseEvent }) => void;
  /**
   * 输入框值发生变化时触发
   */
  onUpdateValue?: (value: boolean) => void;
  /**
   * 上传面板可见性发生变化时触发
   */
  onUpdateVisible?: (value: boolean) => void;
  /**
   * 【实验】点击上传按钮时触发
   */
  onUploadClick?: () => void;
}

export type ChatActionButtons = Array<ChatActionButton>;

export type ChatActionButton = UploadButton | SendButton;

export interface UploadButton {
  name: 'upload';
  presets: string[];
  status?: string;
}

export interface SendButton {
  name: 'send';
  type: 'icon' | 'text';
}

export type UploadActionType = 'uploadAttachment' | 'uploadImage';
