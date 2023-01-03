/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdGridItemProps } from './type';
const props: TdGridItemProps = {
  /** 透传至 Badge 属性 */
  badgeProps: {
    type: Object,
    value: null,
  },
  /** 自定义组件样式 */
  customStyle: {
    type: String,
    value: '',
  },
  /** 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点 */
  description: {
    type: String,
  },
  /** 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名 */
  externalClasses: {
    type: Array,
  },
  /** 图标名称 */
  icon: {
    type: null,
  },
  /** 图片，可以是图片地址，也可以自定义图片节点 */
  image: {
    type: String,
  },
  /** 透传至 Image 组件 */
  imageProps: {
    type: Object,
  },
  /** 链接跳转类型 */
  jumpType: {
    type: String,
    value: 'navigate-to',
  },
  /** 内容布局方式 */
  layout: {
    type: String,
    value: 'vertical',
  },
  /** 文本，可以通过 Props 传入文本，也可以自定义标题节点 */
  text: {
    type: String,
  },
  /** 点击后的跳转链接 */
  url: {
    type: String,
    value: '',
  },
};

export default props;
