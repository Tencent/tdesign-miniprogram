/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdWatermarkProps } from './type';
const props: TdWatermarkProps = {
  /** 水印整体透明度，取值范围 [0-1] */
  alpha: {
    type: Number,
    value: 1,
  },
  /** 水印所覆盖的内容节点 */
  content: {
    type: String,
  },
  /** 水印高度 */
  height: {
    type: Number,
  },
  /** 水印是否重复出现 */
  isRepeat: {
    type: Boolean,
    value: true,
  },
  /** 行间距，只作用在多行（`content` 配置为数组）情况下 */
  lineSpace: {
    type: Number,
    value: 16,
  },
  /** 水印是否可移动 */
  movable: {
    type: Boolean,
    value: false,
  },
  /** 水印发生运动位移的间隙，单位：毫秒 */
  moveInterval: {
    type: Number,
    value: 3000,
  },
  /** 水印在画布上绘制的水平和垂直偏移量，正常情况下水印绘制在中间位置，即 `offset = [gapX / 2, gapY / 2]` */
  offset: {
    type: Array,
  },
  /** 水印是否可被删除 */
  removable: {
    type: Boolean,
    value: true,
  },
  /** 水印旋转的角度，单位 ° */
  rotate: {
    type: Number,
    value: -22,
  },
  /** 水印内容，需要显示多行情况下可配置为数组 */
  watermarkContent: {
    type: null,
  },
  /** 水印宽度 */
  width: {
    type: Number,
  },
  /** 水印之间的水平间距 */
  x: {
    type: Number,
  },
  /** 水印之间的垂直间距 */
  y: {
    type: Number,
  },
  /** 水印元素的 `z-index`，默认值写在 CSS 中 */
  zIndex: {
    type: Number,
  },
};

export default props;
