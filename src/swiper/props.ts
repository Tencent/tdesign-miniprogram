/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSwiperProps } from './type';
const props: TdSwiperProps = {
  /** 轮播切换动画效果类型 */
  animation: {
    type: String,
    value: 'slide',
  },
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
  style: {
    type: String,
    value: '',
  },
  /** 轮播滑动方向，包括横向滑动和纵向滑动两个方向 */
  direction: {
    type: String,
    value: 'horizontal',
  },
  /** 滑动动画时长 */
  duration: {
    type: Number,
    value: 300,
  },
  /** 当使用垂直方向滚动时的高度 */
  height: {
    type: Number,
  },
  /** 轮播间隔时间 */
  interval: {
    type: Number,
    value: 5000,
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
  /** 页码信息展示位置 */
  paginationPosition: {
    type: String,
    value: 'bottom',
  },
};

export default props;
