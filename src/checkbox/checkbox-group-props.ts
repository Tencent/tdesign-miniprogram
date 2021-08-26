/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-11 16:34:26
 * */

import { TdCheckboxGroupProps } from './type';
const props: TdCheckboxGroupProps = {
  /** 是否禁用组件 */
  disabled: {
    type: Boolean,
    value: false,
  },
  /** 支持最多选中的数量 */
  max: {
    type: Number,
  },
  /** 统一设置内部复选框 HTML 属性 */
  name: {
    type: String,
    value: '',
  },
  /** 以配置形式设置子元素。示例1：['北京', '上海'] ，示例2: [{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]。checkAll 值为 true 表示当前选项为「全选选项」 */
  options: {
    type: Array,
    value: [],
  },
  /** 选中值 */
  value: {
    type: Array,
    value: [],
  },
};

export default props;
