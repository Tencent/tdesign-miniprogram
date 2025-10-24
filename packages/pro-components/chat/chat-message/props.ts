/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatMessageProps, TdChatContentProps } from './type';
const props: TdChatMessageProps = {
  /** 聊天消息的唯一标识 */
  chatId: {
    type: String,
    value: '',
  },
  /** 自定义的头像配置。支持字符串、对象、插槽或函数 */
  avatar: {
    type: null,
    value: '',
  },
  /** 自定义的昵称。支持字符串、插槽或函数 */
  name: {
    type: String,
    value: '',
  },
  /** 对话单元的时间配置。支持字符串、插槽或函数 */
  datetime: {
    type: String,
    value: '',
  },
  /** 气泡框样式，支持基础、线框、文字三种类型 */
  variant: {
    type: String,
    value: 'base',
  },
  /** 消息内容对象 */
  content: {
    type: Array,
    value: [],
  },
  /** 消息角色 */
  role: {
    type: String,
    value: 'user',
  },
  status: {
    type: String,
    value: '',
  },
  /** 消息显示位置 */
  placement: {
    type: String,
    value: '',
  },
  /** 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种 */
  animation: {
    type: String,
    value: 'skeleton',
  },
  /** 聊天内容组件的属性 */
  chatContentProps: {
    type: Object,
    value: {},
  }
};

export default props;
