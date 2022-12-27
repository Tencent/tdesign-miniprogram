/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSwiperProps {
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
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
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
   * 同时显示的滑块数量
   * @default 1
   */
  displayMultipleItems?: {
    type: NumberConstructor;
    value?: number;
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
   * 指定 swiper 切换缓动动画类型
   * @default default
   */
  easingFunction?: {
    type: StringConstructor;
    value?: 'default' | 'linear' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic';
  };
  /**
   * 轮播的高度；默认单位 `px`
   * @default '192px'
   */
  height?: {
    type: null;
    value?: string | number;
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
   * 图片列表
   */
  list?: {
    type: ArrayConstructor;
    value?: string[];
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
   * 后边距，可用于露出后一项的一小部分。默认单位 `px`
   * @default 0
   */
  nextMargin?: {
    type: null;
    value?: string | number;
  };
  /**
   * 页码信息展示位置
   * @default bottom
   */
  paginationPosition?: {
    type: StringConstructor;
    value?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right';
  };
  /**
   * 前边距，可用于露出前一项的一小部分。默认单位 `px`
   * @default 0
   */
  previousMargin?: {
    type: null;
    value?: string | number;
  };
  /**
   * 当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素
   * @default false
   */
  snapToEdge?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export interface SwiperNavigation {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: string;
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
