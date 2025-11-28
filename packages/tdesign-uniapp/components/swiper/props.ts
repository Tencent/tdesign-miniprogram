/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdSwiperProps } from './type';
export default {
  /** 是否自动播放 */
  autoplay: {
    type: Boolean,
    default: true,
  },
  /** 当前轮播在哪一项（下标） */
  current: {
    type: Number,
    default: 0,
  },
  /** 轮播滑动方向，包括横向滑动和纵向滑动两个方向 */
  direction: {
    type: String,
    default: 'horizontal' as TdSwiperProps['direction'],
    validator(val: TdSwiperProps['direction']): boolean {
      if (!val) return true;
      return ['horizontal', 'vertical'].includes(val);
    },
  },
  /** 同时显示的滑块数量 */
  displayMultipleItems: {
    type: Number,
    default: 1,
  },
  /** 滑动动画时长 */
  duration: {
    type: Number,
    default: 300,
  },
  /** 指定 swiper 切换缓动动画类型 */
  easingFunction: {
    type: String,
    default: 'default' as TdSwiperProps['easingFunction'],
    validator(val: TdSwiperProps['easingFunction']): boolean {
      if (!val) return true;
      return ['default', 'linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'].includes(val);
    },
  },
  /** 轮播的高度；默认单位 `px` */
  height: {
    type: [String, Number],
    default: 192 as TdSwiperProps['height'],
  },
  /** 透传至 Image 组件 */
  imageProps: {
    type: Object,
    default: () => ({}),
  },
  /** 轮播间隔时间 */
  interval: {
    type: Number,
    default: 5000,
  },
  /** 图片列表 */
  list: {
    type: Array,
  },
  /** 是否循环播放 */
  loop: {
    type: Boolean,
    default: true,
  },
  /** 导航器全部配置，true 的话使用默认配置 */
  navigation: {
    type: [Boolean, Object],
    default: true as TdSwiperProps['navigation'],
  },
  /** 后边距，可用于露出后一项的一小部分。默认单位 `px` */
  nextMargin: {
    type: [String, Number],
    default: 0 as TdSwiperProps['nextMargin'],
  },
  /** 页码信息展示位置 */
  paginationPosition: {
    type: String,
    default: 'bottom' as TdSwiperProps['paginationPosition'],
    validator(val: TdSwiperProps['paginationPosition']): boolean {
      if (!val) return true;
      return ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right', 'left', 'right'].includes(val);
    },
  },
  /** 前边距，可用于露出前一项的一小部分。默认单位 `px` */
  previousMargin: {
    type: [String, Number],
    default: 0 as TdSwiperProps['previousMargin'],
  },
  /** 当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素 */
  snapToEdge: Boolean,
  /** 轮播切换时触发 */
  onAnimationfinish: {
    type: Function,
    default: () => ({}),
  },
  /** 轮播切换时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击轮播项时触发 */
  onClick: {
    type: Function,
    default: () => ({}),
  },
  /** 图片加载时触发 */
  onImageLoad: {
    type: Function,
    default: () => ({}),
  },
};
