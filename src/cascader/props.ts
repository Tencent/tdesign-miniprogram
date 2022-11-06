/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdCascaderProps } from './type';
const props: TdCascaderProps = {
  /** 关闭按钮 */
  closeBtn: {
    type: Boolean,
    value: true,
  },
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 可选项数据源 */
  options: {
    type: Array,
    value: [],
  },
  /** 标题 */
  title: {
    type: String,
  },
  /** 选项值 */
  value: {
    type: String,
    optionalTypes: [Number],
    value: null,
  },
  /** 选项值，非受控属性 */
  defaultValue: {
    type: String,
    optionalTypes: [Number],
  },
  /** 是否展示 */
  visible: {
    type: Boolean,
    value: false,
  },
};

export default props;
