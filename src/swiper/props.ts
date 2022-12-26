/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSwiperProps } from './type';
const props: TdSwiperProps = {
  /** 是否自动播放 */
  autoplay: {
    type: Boolean,
    value: true,
  },
  /** 当前轮播在哪一项（下标） */
  current: {
    type: Number,
    value: null,
  },
  /** 当前轮播在哪一项（下标），非受控属性 */
  defaultCurrent: {
    type: Number,
    value: 0,
  },
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 轮播滑动方向，包括横向滑动和纵向滑动两个方向 */
  direction: {
    type: String,
    value: 'horizontal',
  },
  /** 同时显示的滑块数量 */
  displayMultipleItems: {
    type: Number,
    value: 1,
  },
  /** 滑动动画时长 */
  duration: {
    type: Number,
    value: 300,
  },
  /** 指定 swiper 切换缓动动画类型 */
  easingFunction: {
    type: String,
    value: 'default',
  },
  /** 轮播的高度；默认单位 `px` */
  height: {
    type: null,
    value: '192px',
  },
  /** 轮播间隔时间 */
  interval: {
    type: Number,
    value: 5000,
  },
  /** 图片列表 */
  list: {
    type: Array,
  },
  /** 是否循环播放 */
  loop: {
    type: Boolean,
    value: true,
  },
  /** 导航器全部配置 */
  navigation: {
    type: Object,
  },
  /** 后边距，可用于露出后一项的一小部分。默认单位 `px` */
  nextMargin: {
    type: null,
    value: 0,
  },
  /** 页码信息展示位置 */
  paginationPosition: {
    type: String,
    value: 'bottom',
  },
  /** 前边距，可用于露出前一项的一小部分。默认单位 `px` */
  previousMargin: {
    type: null,
    value: 0,
  },
  /** 当 swiper-item 的个数大于等于 2，关闭 circular 并且开启 previous-margin 或 next-margin 的时候，可以指定这个边距是否应用到第一个、最后一个元素 */
  snapToEdge: {
    type: Boolean,
    value: false,
  },
};

export default props;
