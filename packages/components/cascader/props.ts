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
  /** 是否可搜索。开启后顶部展示搜索框，输入关键字将层级面板切换为扁平的匹配路径列表 */
  filterable: {
    type: Boolean,
    value: false,
  },
  /** 自定义过滤函数。返回 true 表示匹配；签名为 `(keyword, option, path) => boolean` */
  filter: {
    type: null,
    value: null,
  },
  /** 搜索框占位文案 */
  filterPlaceholder: {
    type: String,
    value: '',
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
