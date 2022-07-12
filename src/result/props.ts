import { TdResultProps } from './type';

const props: TdResultProps = {
  /** 描述文字 */
  description: {
    type: String,
  },
  /** 组件类名，分别用于设置 组件外层类名、文本描述类名、图片类名、操作按钮类名 */
  externalClasses: {
    type: Array,
  },
  /** 图标名称 */
  icon: {
    type: String,
    value: '',
  },
  /** 图片地址 */
  image: {
    type: String,
  },
  /** 标题 */
  title: {
    type: String,
    value: '',
  },
  /** 内置主题 */
  theme: {
    type: String,
    value: 'default',
  },
};

export default props;
