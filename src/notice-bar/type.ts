/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdNoticeBarProps {
  /**
   * 文本内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，分别用于设置 组件外层元素、文本内容、前缀图标、右侧额外信息、后缀图标 等元素类名。
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-content', 't-class-prefix-icon', 't-class-extra', 't-class-suffix-icon'];
  };
  /**
   * 右侧额外信息
   */
  extra?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放
   * @default false
   */
  marquee?: {
    type: null;
    value?: boolean | DrawMarquee;
  };
  /**
   * 前缀图标
   * @default ''
   */
  prefixIcon?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 后缀图标
   * @default ''
   */
  suffixIcon?: {
    type: StringConstructor;
    value?: string;
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

export interface DrawMarquee {
  speed?: number;
  loop?: number;
  delay?: number;
}
