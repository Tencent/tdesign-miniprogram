// import { TdFormItemProps } from './type';

const props = {
  // ==================== 已实现的属性 ====================
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  labelAlign: {
    type: String,
    value: '',
  },
  /** 表单字段标签文本 */
  label: {
    type: String,
    value: '',
  },
  /** 表单字段名称 */
  name: {
    type: String,
    value: '',
  },
  /** 是否显示必填符号（*），默认显示 */
  requiredMark: {
    type: Boolean,
    value: undefined,
  },
  /** 表单字段校验规则 */
  rules: {
    type: Array,
    value: [],
  },
  /** 校验不通过时，是否显示错误提示信息 */
  showErrorMessage: {
    type: Boolean,
    value: true,
  },

  // ==================== 待实现的属性 ====================
  /** 表单字段标签宽度 */
  // labelWidth: {
  //   type: String,
  //   value: '',
  // },
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  // labelAlign: {
  //   type: String,
  //   value: 'left',
  // },
  /** 表单字段标签文本 */
  // label: {
  //   type: String,
  //   value: '',
  // },
  /** 表单字段名称 */
  // name: {
  //   type: String,
  //   value: '',
  // },
  /** 是否显示必填符号（*），默认显示 */
  // requiredMark: {
  //   type: Boolean,
  //   value: undefined,
  // },
  /** 表单字段校验规则 */
  // rules: {
  //   type: Array,
  //   value: [],
  // },
  /** 校验不通过时，是否显示错误提示信息 */
  // showErrorMessage: {
  //   type: Boolean,
  //   value: true,
  // },
};

export default props;
