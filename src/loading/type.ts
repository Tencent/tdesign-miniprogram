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
   * 组件类名，分别用于设置加载组件外层元素，加载组件文本，加载组件指示符，加载指示符内侧同心圆等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-text', 't-class-indicator'];
  };
  /**
   * 是否显示加载指示符
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
   * 尺寸，示例：40rpx/20px
   * @default '40rpx'
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
    value?: 'circular' | 'spinner' | 'bar' | 'error' | 'dots';
  };
}
