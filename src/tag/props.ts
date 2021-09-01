/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-08-25 13:37:36
 * */

import { TdTagProps } from './type';
const props: TdTagProps = {
  /** 标签是否可关闭 */
  closable: {
    type: Boolean,
    value: false,
  },
  /** 组件子元素 */
  content: {
    type: String,
    optionalTypes: [Number],
  },
  /** 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80 */
  maxWidth: {
    type: String,
    optionalTypes: [Number],
  },
  /** 标签类型，有三种：方形、圆角方形、标记型 */
  shape: {
    type: String,
    value: 'square',
  },
  /** 标签尺寸 */
  size: {
    type: String,
    value: 'medium',
  },
  /** 组件风格，用于描述组件不同的应用场景 */
  theme: {
    type: String,
    value: 'default',
  },
  /** 影响标签风格（theme） */
  variant: {
    type: String,
    value: 'dark',
  },
};

export default props;
