/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdRadioGroupProps } from './type';
const props: TdRadioGroupProps = {
  /** 是否禁用全部子单选框 */
  disabled: {
    type: Boolean,
    value: undefined,
  },
  /** HTML 元素原生属性 */
  name: {
    type: String,
    value: '',
  },
  /** 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同 */
  options: {
    type: Array,
  },
  /** 选中的值 */
  value: {
    type: String,
    optionalTypes: [Number, Boolean],
    value: null,
  },
  /** 选中的值，非受控属性 */
  defaultValue: {
    type: String,
    optionalTypes: [Number, Boolean],
    value: false,
  },
};

export default props;
