/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdFormItemProps } from './type';
const props: TdFormItemProps = {
  /** 是否显示右侧箭头 */
  arrow: {
    type: Boolean,
    value: false,
  },
  /** label 原生属性 */
  for: {
    type: String,
    value: '',
  },
  /** 表单项说明内容 */
  help: {
    type: String,
  },
  /** 字段标签名称 */
  label: {
    type: String,
    value: '',
  },
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐。默认使用 Form 的对齐方式，优先级高于 Form.labelAlign */
  labelAlign: {
    type: String,
  },
  /** 可以整体设置标签宽度，优先级高于 Form.labelWidth */
  labelWidth: {
    type: null,
  },
  /** 表单字段名称 */
  name: {
    type: String,
    value: '',
  },
  /** 是否显示必填符号（*），优先级高于 Form.requiredMark */
  requiredMark: {
    type: null,
    value: undefined,
  },
  /** 表单字段校验规则 */
  rules: {
    type: Array,
  },
  /** 校验不通过时，是否显示错误提示信息，优先级高于 `Form.showErrorMessage` */
  showErrorMessage: {
    type: null,
    value: undefined,
  },
};

export default props;
