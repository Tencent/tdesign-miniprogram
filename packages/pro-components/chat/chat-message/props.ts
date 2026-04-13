/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatMessageProps } from './type';
const props: TdChatMessageProps = {
  /** 动画效果 */
  animation: {
    type: String,
    value: 'skeleton',
  },
  /** 自定义的头像配置 */
  avatar: {
    type: String,
  },
  /** 聊天内容组件的属性 */
  chatContentProps: {
    type: Object,
  },
  /** 聊天消息的唯一标识 */
  chatId: {
    type: String,
    value: '',
  },
  /** 消息内容，数组中的每一项为一个消息内容对象 */
  content: {
    type: Array,
  },
  /** 对话单元的时间配置 */
  datetime: {
    type: String,
    value: '',
  },
  /** 自定义的昵称 */
  name: {
    type: String,
  },
  /** 消息显示位置 */
  placement: {
    type: String,
  },
  /** 消息角色 */
  role: {
    type: String,
    value: 'user',
  },
  /** 消息状态 */
  status: {
    type: String,
  },
  /** 气泡框样式，支持基础、线框、文字三种类型 */
  variant: {
    type: String,
    value: 'base',
  },
};

export default props;
