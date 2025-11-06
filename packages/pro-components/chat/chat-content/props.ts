/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatContentProps } from './type';
const props: TdChatContentProps = {
  /** 聊天内容对象，包含 `type` 和 `data` 字段	 */
  content: {
    type: Object,
    value: {},
    required: true,
  },
  /** 详见 `ChatMarkdown` 的 `options` 属性 */
  markdownProps: {
    type: Object,
    value: {options: { gfm: true, pedantic: false, breaks: true }},
  },
  /** 消息角色，用于区分用户和助手的消息样式	 */
  role: {
    type: String,
    required: true,
  },
  /** 正文状态 */
  status: {
    type: String,
  },
};

export default props;
