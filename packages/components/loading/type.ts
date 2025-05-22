/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdLoadingProps {
  /**
   * 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒
   * @default 0
   */
  delay?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 加载动画执行完成一次的时间，单位：毫秒
   * @default 800
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否显示为全屏加载
   * @default false
   */
  fullscreen?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 加载指示符，值为 true 显示默认指示符，值为 false 则不显示，也可以自定义指示符
   * @default true
   */
  indicator?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否继承父元素颜色
   * @default false
   */
  inheritColor?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 对齐方式
   * @default horizontal
   */
  layout?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
  };
  /**
   * 是否处于加载状态
   * @default true
   */
  loading?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否暂停动画
   * @default false
   */
  pause?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 加载进度
   */
  progress?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 加载动画是否反向
   */
  reverse?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 尺寸，示例：20px
   * @default '20px'
   */
  size?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 加载提示文案
   */
  text?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 加载组件类型
   * @default circular
   */
  theme?: {
    type: StringConstructor;
    value?: 'circular' | 'spinner' | 'dots';
  };
}
