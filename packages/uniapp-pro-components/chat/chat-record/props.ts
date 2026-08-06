/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export default {
  /** 语音识别适配器（Adapter）。不传时按平台自动选择内置适配器。 微信小程序使用 WechatSIAdapter（依赖 WechatSI 插件），H5 使用 WebSpeechAdapter（依赖浏览器 Web Speech API），APP / 其他小程序 → NoopSpeechAdapter（占位，提示需自定义） */
  adapter: {
    type: Object,
  },
  /** 是否自动发送（预留扩展）  */
  autoSend: Boolean,
  /** 底部高度，用于适配键盘弹出时的布局 */
  bottomHeight: {
    type: Number,
    default: 0,
  },
  /** 最大录音时长（ms） */
  duration: {
    type: Number,
    default: 60000,
  },
  /** 识别语言（WechatSI 插件参数） */
  lang: {
    type: String,
    default: 'zh_CN',
  },
  /** 取消录音时触发 */
  onCancel: {
    type: Function,
    default: () => ({}),
  },
  /** 录音识别错误时触发 */
  onError: {
    type: Function,
    default: () => ({}),
  },
  /** 语音识别完成时触发 */
  onRecognize: {
    type: Function,
    default: () => ({}),
  },
};
