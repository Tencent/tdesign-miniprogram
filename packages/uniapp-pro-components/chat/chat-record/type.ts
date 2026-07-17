/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatRecordProps {
  /**
   * 语音识别适配器（Adapter）。不传时按平台自动选择内置适配器。 微信小程序使用 WechatSIAdapter（依赖 WechatSI 插件），H5 使用 WebSpeechAdapter（依赖浏览器 Web Speech API），APP / 其他小程序 → NoopSpeechAdapter（占位，提示需自定义）
   */
  adapter?: Adapter;
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

export type AdapterStartOptions = { duration: number; lang: string };

export type AdapterStopResult = { tempFilePath: string; duration: number; result: string };

export type AdapterPartialResult = { result: string };

export type AdapterEventType = 'start' | 'partial' | 'stop' | 'error';

export type Adapter = {
  checkAuth(): Promise<boolean>;
  requestAuth(): Promise<boolean>;
  start(opts: AdapterStartOptions): Promise<void>;
  stop(): Promise<void>;
  on<E extends AdapterEventType>(event: E, cb: AdapterEventMap[E]): void;
  off<E extends AdapterEventType>(event: E, cb?: AdapterEventMap[E]): void;
  destroy(): void;
};

export type AdapterEventMap = {
  start: () => void;
  partial: (payload: AdapterPartialResult) => void;
  stop: (payload: AdapterStopResult) => void;
  error: (err: unknown) => void;
};
