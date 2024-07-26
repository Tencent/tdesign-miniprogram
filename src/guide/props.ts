/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdGuideProps } from './type';
const props: TdGuideProps = {
  /** 透传 返回 的全部属性，示例：`{ content: '返回', theme: 'default' }` */
  backButtonProps: {
    type: Object,
  },
  /** 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景 */
  current: {
    type: Number,
  },
  /** 透传 完成 的全部属性，示例：`{ content: '完成', theme: 'primary' }` */
  finishButtonProps: {
    type: Object,
  },
  /** 是否隐藏计数 */
  hideCounter: {
    type: Boolean,
    value: false,
  },
  /** 是否隐藏跳过按钮 */
  hideSkip: {
    type: Boolean,
    value: false,
  },
  /** 高亮框的内边距，单位rpx */
  highlightPadding: {
    type: Number,
    value: 16,
  },
  /** 引导框的类型 */
  mode: {
    type: String,
    value: 'popover',
  },
  /** 透传 下一步按钮 的全部属性，示例：{ content: '下一步', theme: 'primary' } */
  nextButtonProps: {
    type: Object,
  },
  /** 是否出现遮罩层 */
  showOverlay: {
    type: Boolean,
    value: true,
  },
  /** 透传 跳过按钮 的全部属性，{ content: '跳过', theme: 'default' } */
  skipButtonProps: {
    type: Object,
  },
  /** 用于定义每个步骤的内容，包括高亮的节点、相对位置和具体的文案内容等。 */
  steps: {
    type: Array,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: {
    type: Boolean,
    value: false,
  },
  /** 提示框的层级 */
  zIndex: {
    type: Number,
    value: 999999,
  },
};

export default props;
