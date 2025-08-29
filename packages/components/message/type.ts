/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdMessageProps {
  /**
   * 文本对齐方式
   * @default left
   */
  align?: {
    type: StringConstructor;
    value?: MessageAlignType;
  };
  /**
   * 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'user'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件
   * @default false
   */
  closeBtn?: {
    type: null;
    value?: string | boolean | object;
  };
  /**
   * 用于自定义消息弹出内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器
   * @default 3000
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 两条 `message` 之间的间距
   * @default 12
   */
  gap?: {
    type: null;
    value?: string | number | boolean;
  };
  /**
   * 消息提醒前面的图标，可以自定义。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string ，如：'info'，则显示组件内置图标。值类型为 object ，则会透传至 icon 组件
   * @default true
   */
  icon?: {
    type: null;
    value?: string | boolean | object;
  };
  /**
   * 链接名称。值为字符串表示链接名称，值为 `Object` 类型，表示透传至 `Link`
   */
  link?: {
    type: null;
    value?: string | object;
  };
  /**
   * 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放
   * @default false
   */
  marquee?: {
    type: null;
    value?: boolean | MessageMarquee;
  };
  /**
   * 相对于 placement 的偏移量，默认单位 rpx。示例：[-10, 20] 或 ['10rpx', '8rpx']
   */
  offset?: {
    type: ArrayConstructor;
    value?: Array<string | number>;
  };
  /**
   * 是否保持仅显示一条信息
   * @default true
   */
  single?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 元素层级，样式默认为 15000
   * @default 15000
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}

export type MessageAlignType = 'left' | 'center';

export interface MessageMarquee {
  speed?: number;
  loop?: number;
  delay?: number;
}

export type MessageThemeList = 'info' | 'success' | 'warning' | 'error';
