/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatRecordProps {
  /**
   * 是否自动发送（预留扩展）
   * @default false
   */
  autoSend?: boolean;
  /**
   * 底部高度，用于适配键盘弹出时的布局
   * @default 0
   */
  bottomHeight?: number;
  /**
   * 最大录音时长（ms）
   * @default 60000
   */
  duration?: number;
  /**
   * 识别语言（WechatSI 插件参数）
   * @default zh_CN
   */
  lang?: string;
  /**
   * 取消录音时触发
   */
  onCancel?: () => void;
  /**
   * 录音识别错误时触发
   */
  onError?: (err: any) => void;
  /**
   * 语音识别完成时触发
   */
  onRecognize?: (context: { voicePath: string; voiceText: string; duration: number }) => void;
}
