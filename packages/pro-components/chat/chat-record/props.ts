/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 */

import { TdChatRecordProps } from './type';

const props: TdChatRecordProps = {
  /** 是否自动发送（预留扩展） */
  autoSend: {
    type: Boolean,
    value: false,
  },

  /** 识别语言（WechatSI 插件参数） */
  lang: {
    type: String,
    value: 'zh_CN',
  },

  /** 最大录音时长（ms） */
  duration: {
    type: Number,
    value: 60000,
  },
};

export default props;
