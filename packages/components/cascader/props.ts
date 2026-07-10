/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCascaderProps } from './type';
const props: TdCascaderProps = {
  /** 父子节点选中状态不再关联，可各自选中或取消 */
  checkStrictly: {
    type: Boolean,
    value: false,
  },
  /** 关闭按钮 */
  closeBtn: {
    type: Boolean,
    value: true,
  },
  /**  自定义过滤函数。返回 true 表示匹配，未设置时使用内置匹配规则：对路径中所有 label 拼接后做大小写不敏感的 includes 匹配 */
  filter: {
    type: null,
  },
  /** 搜索框占位符描述文本 */
  filterPlaceholder: {
    type: String,
    value: '',
  },
  /** 是否可搜索，开启后顶部会展示一个搜索框  */
  filterable: {
    type: Boolean,
    value: false,
  },
  /** 用来定义 value / label / children / disabled 在 `options` 中对应的字段别名 */
  keys: {
    type: Object,
  },
  /** 可选项数据源 */
  options: {
    type: Array,
    value: [],
  },
  /** 未选中时的提示文案。组件内置默认值为：'选择选项' */
  placeholder: {
    type: String,
    value: '',
  },
  /** 每级展示的次标题 */
  subTitles: {
    type: Array,
    value: [],
  },
  /** 展示风格 */
  theme: {
    type: String,
    value: 'step',
  },
  /** 标题 */
  title: {
    type: String,
  },
  /** 选项值 */
  value: {
    type: null,
    value: null,
  },
  /** 选项值，非受控属性 */
  defaultValue: {
    type: null,
    value: null,
  },
  /** 是否展示 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
