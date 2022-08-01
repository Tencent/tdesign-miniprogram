/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSwiperProps {
  /**
   * 轮播切换动画效果类型
   * @default slide
   */
  animation?: {
    type: StringConstructor;
    value?: 'slide';
  };
  /**
   * 是否自动播放
   * @default true
   */
  autoplay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 当前轮播在哪一项（下标）
   * @default 0
   */
  current?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 当前轮播在哪一项（下标），非受控属性
   * @default 0
   */
  defaultCurrent?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 轮播滑动方向，包括横向滑动和纵向滑动两个方向
   * @default horizontal
   */
  direction?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
  };
  /**
   * 滑动动画时长
   * @default 300
   */
  duration?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 当使用垂直方向滚动时的高度
   */
  height?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 轮播间隔时间
   * @default 5000
   */
  interval?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 是否循环播放
   * @default true
   */
  loop?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 导航器全部配置
   */
  navigation?: {
    type: ObjectConstructor;
    value?: SwiperNavigation;
  };
  /**
   * 页码信息展示位置
   * @default bottom-right
   */
  paginationPosition?: {
    type: StringConstructor;
    value?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
  };
}

export interface SwiperNavigation {
  /**
   * 小于这个数字不会显示导航器
   */
  minShowNum?: number;
  /**
   * 表示是否显示两侧的滑动控制按钮
   */
  showSlideBtn?: boolean;
  /**
   * 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等
   * @default ''
   */
  type?: SwiperNavigationType;
}

export type SwiperNavigationType = 'dots' | 'dots-bar' | 'fraction';
