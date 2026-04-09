/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 */

import { TdChatRecordProps } from './type';

const props: TdChatRecordProps = {
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
  /** 是否自动发送（预留扩展） */
  autoSend: {
    type: Boolean,
    value: false,
  },
  /** 底部高度，用于适配键盘弹出时的布局 */
  bottomHeight: {
    type: Number,
    value: 0,
  },
  /** 是否自动获取键盘高度更新 bottomHeight */
  autoHeight: {
    type: Boolean,
    value: false,
  },
};

export default props;
