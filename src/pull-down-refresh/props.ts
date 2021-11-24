/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */

import { TdPullDownRefreshProps } from './type';
const props: TdPullDownRefreshProps = {
  /** 加载loading样式 */
  externalClasses: {
    type: Array,
  },
  /** 加载中下拉高度 */
  loadingBarHeight: {
    type: Number,
    value: 200,
  },
  /** 加载loading样式 */
  loadingProps: {
    type: Object,
  },
  /** 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'] */
  loadingTexts: {
    type: Array,
    value: [],
  },
  /** 最大下拉高度 */
  maxBarHeight: {
    type: Number,
    value: 272,
  },
  /** 刷新超时时间 */
  refreshTimeout: {
    type: Number,
    value: 3000,
  },
};

export default props;
