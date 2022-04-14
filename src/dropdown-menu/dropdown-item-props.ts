/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDropdownItemProps } from './type';
const props: TdDropdownItemProps = {
  /** 是否禁用 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 标题 */
  label: {
    type: String,
    value: '',
  },
  /** 是否多选 */
  multiple: {
    type: Boolean,
    value: false,
  },
  /** 选项数据 */
  options: {
    type: Array,
    value: [],
  },
  /** 选项分栏（1-3） */
  optionsColumns: {
    type: String,
    optionalTypes: [Number],
    value: 1,
  },
  /** 选项排列 */
  optionsLayout: {
    type: String,
    value: 'columns',
  },
  /** 选中值 */
  value: {
    type: null,
    optionalTypes: [Number, Array],
    value: null,
  },
  /** 选中值，非受控属性 */
  defaultValue: {
    type: null,
    optionalTypes: [Number, Array],
    value: null,
  },
};

export default props;
