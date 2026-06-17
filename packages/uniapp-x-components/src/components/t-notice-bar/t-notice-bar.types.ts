/**
 * NoticeBar - uni-app x 类型定义
 *
 * 行为契约对齐 @tdesign/uniapp 的 notice-bar：
 *  - theme: info/success/warning/error 4 种主题色
 *  - direction: horizontal（默认）/ vertical（纵向轮播）
 *  - marquee: 跑马灯效果（speed/loop/delay）
 *  - prefixIcon/suffixIcon: 前后缀图标
 *  - content: 文本内容（horizontal 单条字符串；vertical 数组多条轮播）
 *
 * 实现差异：
 *  - 跑马灯改用 CSS animation 替代 uni.createAnimation（uvue 不支持）
 *  - vertical 模式使用 swiper 组件
 */

export type NoticeBarTheme = 'info' | 'success' | 'warning' | 'error';
export type NoticeBarDirection = 'horizontal' | 'vertical';

/** 跑马灯配置 */
export type NoticeBarMarquee = {
  /** 滚动速度（px/s），默认 50 */
  speed?: number;
  /** 循环次数，-1 无限循环，0 不滚动，默认 -1 */
  loop?: number;
  /** 延迟开始时间（ms），默认 0 */
  delay?: number;
};

/** 点击事件触发源 */
export type NoticeBarClickTrigger = 'prefix-icon' | 'content' | 'operation' | 'suffix-icon';

/** vertical 模式 change 事件参数 */
export type NoticeBarChangeContext = {
  current: number;
  source: string;
};

export type NoticeBarProps = {
  /** 文本内容；horizontal 用 string，vertical 用 string[] */
  content?: string;
  /** vertical 模式的多条文本 */
  contentList?: string[];
  /** 滚动方向 */
  direction?: NoticeBarDirection;
  /** 间隔时间（仅 vertical 有效），ms */
  interval?: number;
  /** 跑马灯效果（仅 horizontal 有效） */
  marquee?: NoticeBarMarquee | boolean;
  /** 右侧额外信息文案 */
  operation?: string;
  /** 前缀图标名（空字符串关闭，'__theme__' 表示用主题图标） */
  prefixIcon?: string;
  /** 后缀图标名 */
  suffixIcon?: string;
  /** 主题 */
  theme?: NoticeBarTheme;
  /** 是否显示 */
  visible?: boolean;
  /** 自定义类名 */
  customClass?: string;
  /** 自定义样式 */
  customStyle?: string;
};

export type NoticeBarEmits = {
  (e: 'click', ctx: { trigger: NoticeBarClickTrigger }): void;
  (e: 'change', ctx: NoticeBarChangeContext): void;
};
