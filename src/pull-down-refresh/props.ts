/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdPullDownRefreshProps } from './type';
const props: TdPullDownRefreshProps = {
  /** 加载loading样式 */
  externalClasses: {
    type: Array,
  },
  /** 加载中下拉高度，如果值为数字则单位是：'px' */
  loadingBarHeight: {
    type: String,
    optionalTypes: [Number],
    value: 50,
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
  /** 最大下拉高度，如果值为数字则单位是：'px' */
  maxBarHeight: {
    type: String,
    optionalTypes: [Number],
    value: 80,
  },
  /** 刷新超时时间 */
  refreshTimeout: {
    type: Number,
    value: 3000,
  },
  /** 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态 */
  value: {
    type: Boolean,
    value: null,
  },
  /** 组件状态，值为 `true` 表示下拉状态，值为 `false` 表示收起状态，非受控属性 */
  defaultValue: {
    type: Boolean,
    value: false,
  },
};

export default props;
