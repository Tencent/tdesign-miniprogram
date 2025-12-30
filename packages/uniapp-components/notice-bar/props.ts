/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdNoticeBarProps } from './type';
export default {
  /** 文本内容 */
  content: {
    type: [String, Array],
  },
  /** 滚动方向 */
  direction: {
    type: String,
    default: 'horizontal' as TdNoticeBarProps['direction'],
    validator(val: TdNoticeBarProps['direction']): boolean {
      if (!val) return true;
      return ['horizontal', 'vertical'].includes(val);
    },
  },
  /** 间隔时间【仅在 direction='vertical' 有效】 */
  interval: {
    type: Number,
    default: 2000,
  },
  /** 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放【仅在 direction='horizontal' 有效】 */
  marquee: {
    type: [Boolean, Object],
    default: false as TdNoticeBarProps['marquee'],
  },
  /** 右侧额外信息 */
  operation: {
    type: String,
  },
  /** 前缀图标。值为字符串表示图标名称，值为 `false` 表示不显示前缀图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标 */
  prefixIcon: {
    type: [String, Boolean, Object],
    default: true as TdNoticeBarProps['prefixIcon'],
  },
  /** 后缀图标。值为字符串表示图标名称。值为 `Object` 类型，表示透传至 `icon`，不传表示不显示后缀图标 */
  suffixIcon: {
    type: [String, Object],
  },
  /** 内置主题 */
  theme: {
    type: String,
    default: 'info' as TdNoticeBarProps['theme'],
    validator(val: TdNoticeBarProps['theme']): boolean {
      if (!val) return true;
      return ['info', 'success', 'warning', 'error'].includes(val);
    },
  },
  /** 显示/隐藏 */
  visible: {
    type: Boolean,
    default: undefined,
  },
  /** 显示/隐藏，非受控属性 */
  defaultVisible: Boolean,
  /** 当 `direction="vertical"` 时轮播切换时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击事件 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
};
