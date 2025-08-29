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
  /** 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点 */
  description: {
    type: String,
  },
  /** 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon` */
  icon: {
    type: null,
  },
  /** 图片，可以是图片地址，也可以自定义图片节点，值为 slot 的时候才能使用插槽 */
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
