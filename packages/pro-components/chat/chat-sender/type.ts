/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { AttachmentsProps, FileItem } from '../attachments/index';

export interface TdChatSenderProps {
  /**
   * 默认键盘弹起不会把页面顶起来
   * @default false
   */
  adjustPosition?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 附件列表属性
   */
  attachmentsProps?: {
    type: ObjectConstructor;
    value?: AttachmentsProps;
  };
  /**
   * 键盘弹起时自动顶起来输入框
   * @default false
   */
  autoRiseWithKeyboard?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 附件文件列表
   * @default []
   */
  fileList?: {
    type: ArrayConstructor;
    value?: FileItem[];
  };
  /**
   * 发送按钮是否处于加载状态
   * @default false
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 输入框默认文案
   * @default 请输入消息...
   */
  placeholder?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 预设发送区渲染配置
   */
  renderPresets?: {
    type: ArrayConstructor;
    value?: Array<unknown>;
  };
  /**
   * 输入框的值
   * @default ''
   */
  value?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 输入框的值，非受控属性
   * @default ''
   */
  defaultValue?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 上传面板是否可见
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
