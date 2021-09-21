/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-09-21 18:21:58
 * */

import { TdInputProps } from './type';

const props: TdInputProps = {
  /** 是否可清空 */
  clearable: {
    type: Boolean,
    value: false,
  },
  /** 是否禁用输入框 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 是否存在错误提示消息 */
  error: {
    type: Boolean,
    value: false,
  },
  /** 错误提示文本 */
  errorMessage: {
    type: String,
    value: '',
  },
  /** 用户最多可以输入的文本长度 */
  maxlength: {
    type: Number,
    value: 140,
  },
  /** 名称 */
  name: {
    type: String,
    value: '',
  },
  /** 是否密码类型 */
  password: {
    type: Boolean,
    value: false,
  },
  /** 占位符 */
  placeholder: {
    type: String,
    value: '',
  },
  /** 是否必填 */
  required: {
    type: Boolean,
    value: false,
  },
  /** 输入框尺寸 */
  size: {
    type: String,
    value: 'small',
  },
  /** 后置文本内容 */
  suffix: {
    type: String,
    value: '',
  },
  /** 组件后置图标 */
  suffixIcon: {
    type: String,
  },
  /** 输入框类型 */
  type: {
    type: String,
    value: 'text',
  },
  /** 输入框的值 */
  value: {
    type: String,
    value: '',
  },
};

export default props;
