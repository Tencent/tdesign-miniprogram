/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdChatRecordProps {
  /**
   * 是否自动发送（预留扩展）
   * @default false
   */
  autoSend?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 底部高度，用于适配键盘弹出时的布局
   * @default 0
   */
  bottomHeight?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 最大录音时长（ms）
   * @default 60000
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 识别语言（WechatSI 插件参数）
   * @default zh_CN
   */
  lang?: {
    type: StringConstructor;
    value?: string;
  };
}
