/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { SwiperNavProps } from '../swiper-nav/index';

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
   * @default 192
   */
  height?: {
    type: null;
    value?: string | number;
  };
  /**
   * 透传至 Image 组件
   */
  imageProps?: {
    type: ObjectConstructor;
    value?: object;
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
    value?: string[] | SwiperList[];
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
   * 导航器全部配置，true 的话使用默认配置
   * @default true
   */
  navigation?: {
    type: null;
    value?: SwiperNavProps | boolean;
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

export interface SwiperList {
  value: string;
  ariaLabel: string;
}
