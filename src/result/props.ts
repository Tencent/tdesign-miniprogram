/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdResultProps } from './type';
const props: TdResultProps = {
  /** 描述文字 */
  description: {
    type: String,
  },
  /** 图标名称。值为字符串表示图标名称，值为 `false` 表示不显示图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标。 */
  icon: {
    type: null,
    value: true,
  },
  /** 图片地址 */
  image: {
    type: String,
  },
  /** 内置主题 */
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
