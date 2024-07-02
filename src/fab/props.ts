/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdFabProps } from './type';
const props: TdFabProps = {
  /** 透传至 Button 组件 */
  buttonProps: {
    type: Object,
  },
  /** 是否可移动 */
  draggable: {
    type: Boolean,
    optionalTypes: [String],
    value: false,
  },
  /** 图标 */
  icon: {
    type: String,
    value: '',
  },
  /** 悬浮按钮的样式，常用于调整位置（即将废弃，建议使用 `style`） */
  style: {
    type: String,
    value: 'right: 16px; bottom: 32px;',
  },
  /** 文本内容 */
  text: {
    type: String,
    value: '',
  },
};

export default props;
