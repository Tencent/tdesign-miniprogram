/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdGuideProps } from './type';
export default {
  /** 透传 返回按钮 的全部属性，示例：`{ content: '返回', theme: 'default' }` */
  backButtonProps: {
    type: Object,
  },
  /** 用于自定义渲染计数部分 */
  counter: {
    type: [String, Function],
  },
  /** 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景 */
  current: {
    type: Number,
  },
  /** 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景，非受控属性 */
  defaultCurrent: {
    type: Number,
  },
  /** 透传 完成按钮 的全部属性，示例：`{ content: '完成', theme: 'primary' }` */
  finishButtonProps: {
    type: Object,
  },
  /** 是否隐藏返回按钮 */
  hideBack: Boolean,
  /** 是否隐藏计数 */
  hideCounter: Boolean,
  /** 是否隐藏跳过按钮 */
  hideSkip: Boolean,
  /** 高亮框的内边距，单位rpx */
  highlightPadding: {
    type: Number,
    default: 16,
  },
  /** 引导框的类型 */
  mode: {
    type: String,
    default: 'popover' as TdGuideProps['mode'],
    validator(val: TdGuideProps['mode']): boolean {
      if (!val) return true;
      return ['popover', 'dialog'].includes(val);
    },
  },
  /** 透传 下一步按钮 的全部属性，示例：{ content: '下一步', theme: 'primary' } */
  nextButtonProps: {
    type: Object,
  },
  /** 是否出现遮罩层 */
  showOverlay: {
    type: Boolean,
    default: true,
  },
  /** 透传 跳过按钮 的全部属性，{ content: '跳过', theme: 'default' } */
  skipButtonProps: {
    type: Object,
  },
  /** 用于定义每个步骤的内容，包括高亮的节点、相对位置和具体的文案内容等 */
  steps: {
    type: Array,
  },
  /** 是否使用了自定义导航栏 */
  usingCustomNavbar: Boolean,
  /** 提示框的层级 */
  zIndex: {
    type: Number,
    default: 999999,
  },
  /** 点击返回按钮时触发 */
  onBack: {
    type: Function,
    default: () => ({}),
  },
  /** 当前步骤发生变化时触发 */
  onChange: {
    type: Function,
    default: () => ({}),
  },
  /** 点击完成按钮时触发 */
  onFinish: {
    type: Function,
    default: () => ({}),
  },
  /** 点击下一步时触发 */
  onNextStepClick: {
    type: Function,
    default: () => ({}),
  },
  /** 点击跳过按钮时触发 */
  onSkip: {
    type: Function,
    default: () => ({}),
  },
};
