/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdCountDownProps {
  /**
   * 是否自动开始倒计时
   * @default true
   */
  autoStart?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽
   * @default 'default'
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
   * 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
   * @default HH:mm:ss
   */
  format?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否开启毫秒级渲染
   * @default false
   */
  millisecond?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 倒计时尺寸
   * @default 'small'
   */
  size?: {
    type: StringConstructor;
    value?: 'small' | 'medium' | 'large';
  };
  /**
   * 使用时间单位分割
   * @default false
   */
  splitWithUnit?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 倒计时风格
   * @default 'default'
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'round' | 'square';
  };
  /**
   * 倒计时时长，单位毫秒
   */
  time: {
    type: NumberConstructor;
    value?: number;
  };
}
