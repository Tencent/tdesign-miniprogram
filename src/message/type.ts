/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdMessageProps {
  /**
   * 操作
   */
  action?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 文本对齐方式
   * @default left
   */
  align?: {
    type: StringConstructor;
    value?: MessageAlignType;
  };
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮
   * @default false
   */
  closeBtn?: {
    type: null;
    value?: string | boolean;
  };
  /**
   * 用于自定义消息弹出内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。
   * @default 3000
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 样式类名，分别用于设置 组件外层、消息内容、左侧图标、操作按钮、关闭按钮等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-content', 't-class-icon', 't-class-action', 't-class-close-btn'];
  };
  /**
   * 消息提醒前面的图标。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 'info' 或 'bell' 则显示组件内置图标。也可以完全自定义图标节点
   * @default true
   */
  icon?: {
    type: null;
    value?: boolean | 'info' | 'bell';
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
   * 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10rpx', '8rpx']
   */
  offset?: {
    type: ArrayConstructor;
    value?: Array<string | number>;
  };
  /**
   * 消息组件风格
   * @default info
   */
  theme?: {
    type: StringConstructor;
    value?: MessageThemeList;
  };
  /**
   * 是否显示，隐藏时默认销毁组件
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示，隐藏时默认销毁组件，非受控属性
   * @default false
   */
  defaultVisible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件层级，样式默认为 15000
   * @default 15000
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 链接名称。值为字符串表示链接名称，值为 `Object` 类型，表示透传至 `Link`。
   */
  link?: {
    type: null;
    value?: string | object;
  };
  /**
   * 两条message之间的间距
   */
  gap?: {
    type: null;
    value?: string | number;
  };
  /**
   * 是否保持仅显示一条信息
   */
  single?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export type MessageAlignType = 'left' | 'center';

export interface DrawMarquee {
  speed?: number;
  loop?: number;
  delay?: number;
}

export type MessageThemeList = 'info' | 'success' | 'warning' | 'error';
