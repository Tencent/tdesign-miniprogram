/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdNoticeBarProps {
  /**
   * 文本内容
   */
  content?: {
    type: null;
    value?: string | string[];
  };
  /**
   * 滚动方向
   * @default horizontal
   */
  direction?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
  };
  /**
   * 间隔时间【仅在 direction='vertical' 有效】
   * @default 2000
   */
  interval?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放【仅在 direction='horizontal' 有效】
   * @default false
   */
  marquee?: {
    type: null;
    value?: boolean | NoticeBarMarquee;
  };
  /**
   * 右侧额外信息
   */
  operation?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 前缀图标。值为字符串表示图标名称，值为 `false` 表示不显示前缀图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标
   * @default true
   */
  prefixIcon?: {
    type: null;
    value?: string | boolean | object;
  };
  /**
   * 后缀图标。值为字符串表示图标名称。值为 `Object` 类型，表示透传至 `icon`，不传表示不显示后缀图标
   */
  suffixIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 内置主题
   * @default info
   */
  theme?: {
    type: StringConstructor;
    value?: 'info' | 'success' | 'warning' | 'error';
  };
  /**
   * 显示/隐藏
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 显示/隐藏，非受控属性
   * @default false
   */
  defaultVisible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export interface NoticeBarMarquee {
  speed?: number;
  loop?: number;
  delay?: number;
}
