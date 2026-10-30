/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

export default {
  /** 操作 */
  actions: {
    type: Array,
  },
  /** 作者 */
  author: {
    type: String,
  },
  /** 头像 */
  avatar: {
    type: [String, Object],
  },
  /** 子元素内容，同 reply */
  children: {
    type: String,
  },
  /** 内容 */
  content: {
    type: String,
  },
  /** 时间 */
  datetime: {
    type: String,
  },
  /** 折叠/展开配置项 */
  folds: {
    type: Object,
  },
  /** 折叠/展开配置项，非受控属性 */
  defaultFolds: {
    type: Object,
  },
  /** 回复 */
  reply: {
    type: String,
  },
  /** 点击任一操作项（如回复/点赞/不喜欢）时触发并返回当前操作项 */
  onActions: {
    type: Function,
    default: () => ({}),
  },
  /** 用户点击“展开回复/收起”时触发，并返回点击后的 fold 配置 */
  onFolds: {
    type: Function,
    default: () => ({}),
  },
};
