/**
 * Message - uni-app x 类型定义
 *
 * 行为契约对齐 @tdesign/uniapp 的 message：
 *  - theme: info / success / warning / error 4 主题
 *  - duration: 自动关闭毫秒数（默认 3000，0 常驻）
 *  - closeBtn: 显示关闭按钮（true / 字符串图标名）
 *  - icon: 显示图标（true 用主题预设 / false 不显示 / 字符串自定义）
 *  - align: left / center 文本对齐
 *  - link: 右侧链接文本
 *  - offset: 相对于 placement 的偏移量，默认单位 rpx
 *  - gap: 两条 message 之间的间距
 *  - single: 是否保持仅显示一条信息
 *  - marquee: 跑马灯效果
 */

/** 跑马灯效果配置 */
export type MessageMarquee = {
  /** 速度控制（px/s） */
  speed?: number;
  /** 循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放 */
  loop?: number;
  /** 延迟多久开始播放（ms） */
  delay?: number;
};

export type MessageTheme = 'info' | 'success' | 'warning' | 'error';
export type MessageAlign = 'left' | 'center';

export type MessageOptions = {
  /** 内容文字 */
  content?: string;
  /** 主题 */
  theme?: MessageTheme;
  /** 自动关闭毫秒数，0 表示常驻 */
  duration?: number;
  /** 关闭按钮：true 显示默认 close 图标 / 字符串自定义图标名 / false 不显示 */
  closeBtn?: boolean | string;
  /** 图标：true 用主题预设 / false 不显示 / 字符串自定义 */
  icon?: boolean | string;
  /** 文本对齐 */
  align?: MessageAlign;
  /** 右侧链接文本 */
  link?: string;
  /** 元素层级 */
  zIndex?: number;
  /**
   * 相对于 placement 的偏移量，默认单位 rpx
   * 示例：[-10, 20] 或 ['10rpx', '8rpx']
   */
  offset?: [number, number] | [string, string];
  /** 两条 message 之间的间距，默认 12 */
  gap?: number | string;
  /** 是否保持仅显示一条信息，默认 true */
  single?: boolean;
  /** 跑马灯效果 */
  marquee?: boolean | MessageMarquee;
};

export type MessageProps = MessageOptions & {
  customClass?: string;
  customStyle?: string;
};

export type MessageEmits = {
  (e: 'close-btn-click'): void;
  (e: 'link-click'): void;
  (e: 'duration-end'): void;
};
