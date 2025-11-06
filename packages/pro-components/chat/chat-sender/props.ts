/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatSenderProps } from './type';
const props: TdChatSenderProps = {
  /** 默认键盘弹起不会把页面顶起来 */
  adjustPosition: {
    type: Boolean,
    value: false,
  },
  /** 附件列表属性 */
  attachmentsProps: {
    type: Object,
  },
  /** 键盘弹起时自动顶起来输入框 */
  autoRiseWithKeyboard: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用输入框 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 附件文件列表 */
  fileList: {
    type: Array,
    value: [],
  },
  /** 发送按钮是否处于加载状态 */
  loading: {
    type: Boolean,
    value: false,
  },
  /** 输入框默认文案 */
  placeholder: {
    type: String,
    value: '请输入消息...',
  },
  /** 预设发送区渲染配置 */
  renderPresets: {
    type: Array,
  },
  /** 输入框的值 */
  value: {
    type: String,
    value: null,
  },
  /** 输入框的值，非受控属性 */
  defaultValue: {
    type: String,
    value: '',
  },
  /** 上传面板是否可见 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
