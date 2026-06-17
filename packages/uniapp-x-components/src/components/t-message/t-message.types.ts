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
 *
 * 实现差异（v1 简化）：
 *  - 仅支持单条 message（uniapp x 多条 message-item 队列管理复杂度高，先支持核心场景）
 *  - 跑马灯/offset/gap 暂不支持，后续按需补齐
 */

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
