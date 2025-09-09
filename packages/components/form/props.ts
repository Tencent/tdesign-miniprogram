/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdFormProps } from './type';
const props: TdFormProps = {
  /** 是否在表单标签字段右侧显示冒号 */
  colon: {
    type: Boolean,
    value: false,
  },
  /** 表单数据 */
  data: {
    type: Object,
    value: {},
  },
  /** 表单字段标签对齐方式：左对齐、右对齐、顶部对齐 */
  labelAlign: {
    type: String,
    value: 'right',
  },
  /** 可以整体设置label标签宽度，默认为81px */
  labelWidth: {
    type: null,
    value: '81px',
  },
  /** 是否显示必填符号（*），默认显示 */
  requiredMark: {
    type: Boolean,
    value: true,
  },
  /** 表单必填符号（*）显示位置 */
  requiredMarkPosition: {
    type: String,
  },
  /** 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值 */
  resetType: {
    type: String,
    value: 'empty',
  },
  /** 表单字段校验规则 */
  rules: {
    type: Object,
  },
  /** 校验不通过时，是否显示错误提示信息，统一控制全部表单项。如果希望控制单个表单项，请给 FormItem 设置该属性 */
  showErrorMessage: {
    type: Boolean,
    value: true,
  },
};

export default props;
