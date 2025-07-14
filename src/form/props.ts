/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdFormProps } from './type';
const props: TdFormProps = {
  /** 表单底部按钮组样式 */
  buttonGroupStyle: {
    type: Object,
    value: {},
  },
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
  /** 是否显示必填符号（*），默认显示 */
  requiredMark: {
    type: Boolean,
    value: false,
  },
  /** 重置表单的方式，值为 empty 表示重置表单为空，值为 initial 表示重置表单数据为初始值 */
  resetType: {
    type: String,
    value: 'empty',
  },
  /** 表单字段校验规则 */
  rules: {
    type: Object,
    value: {},
  },
};

export default props;
