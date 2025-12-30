/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export interface TdSwiperNavProps {
  /**
   * 当前轮播在哪一项（下标）
   * @default 0
   */
  current?: number;
  /**
   * 轮播滑动方向，包括横向滑动和纵向滑动两个方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 小于这个数字不会显示导航器
   * @default 2
   */
  minShowNum?: number;
  /**
   * 页码信息展示位置
   * @default bottom
   */
  paginationPosition?: 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right' | 'left' | 'right';
  /**
   * 是否显示两侧的控制按钮
   * @default false
   */
  showControls?: boolean;
  /**
   * 总共的项数
   * @default 0
   */
  total?: number;
  /**
   * 导航器类型，点状(dots)、点条状(dots-bar)、分式(fraction)等
   * @default dots
   */
  type?: SwiperNavigationType;
}

export type SwiperNavigationType = 'dots' | 'dots-bar' | 'fraction';
