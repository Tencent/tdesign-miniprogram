/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdSwiperNavProps } from './type';
const props: TdSwiperNavProps = {
  /** 当前轮播在哪一项（下标） */
  current: {
    type: Number,
    value: 0,
  },
  /** 轮播滑动方向，包括横向滑动和纵向滑动两个方向 */
  direction: {
    type: String,
    value: 'horizontal',
  },
  /** 小于这个数字不会显示导航器 */
  minShowNum: {
    type: Number,
    value: 2,
  },
  /** 页码信息展示位置 */
  paginationPosition: {
    type: String,
    value: 'bottom',
  },
  /** 是否显示两侧的控制按钮 */
  showControls: {
    type: Boolean,
    value: false,
  },
  /** 总共的项数 */
  total: {
    type: Number,
    value: 0,
  },
  /** 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等 */
  type: {
    type: String,
    value: 'dots',
  },
};

export default props;
