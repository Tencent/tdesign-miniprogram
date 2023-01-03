/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdResultProps } from './type';
const props: TdResultProps = {
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 描述文字 */
  description: {
    type: String,
  },
  /** 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名。`['t-class', 't-class-image', 't-class-title', 't-class-description']` */
  externalClasses: {
    type: Array,
  },
  /** 图标名称 */
  icon: {
    type: null,
    value: true,
  },
  /** 图片地址 */
  image: {
    type: String,
  },
  /** 内置主题。可选项：default/success/warning/error */
  theme: {
    type: String,
    value: 'default',
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
};

export default props;
