/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdChatAttachmentsProps } from './type';
const props: TdChatAttachmentsProps = {
  /** 文件列表数据，每个元素需包含fileType/name/url/size等属性 */
  items: {
    type: Array,
    value: [],
  },
  /** 是否显示删除按钮 */
  removable: {
    type: Boolean,
    value: true,
  },
  /** 是否启用图片预览功能 */
  imageViewer: {
    type: Boolean,
    value: true,
  },
  /** 是否显示添加按钮 */
  addable: {
    type: Boolean,
    value: true,
  },
  /** 图片模式 */
  imageProps: {
    type: String,
    value: {
      mode: 'scaleToFill',
      width: 52,
      height: 52,
    },
  },
};

export default props;
