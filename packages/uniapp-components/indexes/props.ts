/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export default {
  /** 索引列表的激活项，默认首项 */
  current: {
    type: [String, Number],
  },
  /** 索引列表的激活项，默认首项，非受控属性 */
  defaultCurrent: {
    type: [String, Number],
  },
  /** 索引字符列表。不传默认 `A-Z` */
  indexList: {
    type: Array,
  },
  /** 索引是否吸顶，默认为true */
  sticky: {
    type: Boolean,
    default: true,
  },
  /** 锚点吸顶时与顶部的距离	 */
  stickyOffset: {
    type: Number,
    default: 0,
  },
  /** 索引发生变更时触发事件 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击侧边栏时触发事件 */
  onSelect: {
    type: Function,
    default: () => ({}),
  },
};
