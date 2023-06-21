/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdNoticeBarProps } from './type';
const props: TdNoticeBarProps = {
  /** 文本内容 */
  content: {
    type: null,
  },
  /** 滚动方向，可选 horizontal、vertical */
  direction: {
    type: String,
    value: 'horizontal',
  },
  /** 组件类名，分别用于设置 组件外层元素、文本内容、前缀图标、右侧额外信息、后缀图标 等元素类名。 */
  externalClasses: {
    type: Array,
  },
  /** 右侧额外信息 */
  operation: {
    type: String,
  },
  /** 间隔时间 */
  interval: {
    type: Number,
    value: 2000,
  },
  /** 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放 */
  marquee: {
    type: null,
    value: false,
  },
  /** 前缀图标 */
  prefixIcon: {
    type: null,
    value: true,
  },
  /** 后缀图标 */
  suffixIcon: {
    type: null,
    value: null,
  },
  /** 内置主题 */
  theme: {
    type: String,
    value: 'info',
  },
  /** 显示/隐藏 */
  visible: {
    type: Boolean,
    value: null,
  },
  /** 显示/隐藏，非受控属性 */
  defaultVisible: {
    type: Boolean,
    value: false,
  },
};

export default props;
