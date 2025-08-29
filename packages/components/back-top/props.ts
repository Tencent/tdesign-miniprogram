/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdBackTopProps } from './type';
const props: TdBackTopProps = {
  /** 是否绝对定位固定到屏幕右下方 */
  fixed: {
    type: Boolean,
    value: true,
  },
  /** 图标。值为 `false` 表示不显示图标。不传表示使用默认图标 `'backtop'` */
  icon: {
    type: null,
    value: true,
  },
  /** 页面滚动距离 */
  scrollTop: {
    type: Number,
    value: 0,
  },
  /** 文案 */
  text: {
    type: String,
    value: '',
  },
  /** 预设的样式类型 */
  theme: {
    type: String,
    value: 'round',
  },
  /** 滚动高度达到此参数值才出现 */
  visibilityHeight: {
    type: Number,
    value: 200,
  },
};

export default props;
