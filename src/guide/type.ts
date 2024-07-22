/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button/index';

export interface TdGuideProps {
  /**
   * 透传 返回 的全部属性，示例：`{ content: '返回', theme: 'default' }`
   */
  backButtonProps?: {
    type: ObjectConstructor;
    value?: ButtonProps;
  };
  /**
   * 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景
   */
  current?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 透传 完成 的全部属性，示例：`{ content: '完成', theme: 'primary' }`
   */
  finishButtonProps?: {
    type: ObjectConstructor;
    value?: ButtonProps;
  };
  /**
   * 是否隐藏计数
   * @default false
   */
  hideCounter?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否隐藏跳过按钮
   * @default false
   */
  hideSkip?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 高亮框的内边距，单位rpx
   * @default 16
   */
  highlightPadding?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 引导框的类型
   * @default popover
   */
  mode?: {
    type: StringConstructor;
    value?: 'popover' | 'dialog';
  };
  /**
   * 透传 下一步按钮 的全部属性，示例：{ content: '下一步', theme: 'primary' }
   */
  nextButtonProps?: {
    type: ObjectConstructor;
    value?: ButtonProps;
  };
  /**
   * 是否出现遮罩层
   * @default true
   */
  showOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 透传 跳过按钮 的全部属性，{ content: '跳过', theme: 'default' }
   */
  skipButtonProps?: {
    type: ObjectConstructor;
    value?: ButtonProps;
  };
  /**
   * 用于定义每个步骤的内容，包括高亮的节点、相对位置和具体的文案内容等。
   */
  steps?: {
    type: ArrayConstructor;
    value?: Array<GuideStep>;
  };
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 提示框的层级
   * @default 999999
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}

export interface GuideStep {
  /**
   * 用于自定义当前引导框的返回按钮的内容
   */
  backButtonProps?: ButtonProps;
  /**
   * 当前步骤提示框的内容，支持插槽：slot="body-{{index}}" (1、当要显示body-{{index}}插槽时，请将body设置为空；2、当要显示content-{{index}}插槽完全自定义内容时，请将body和title都设置为空)
   * @default ''
   */
  body?: string;
  /**
   * 高亮的节点。示例： `() => new Promise((resolve) => this.createSelectorQuery().select('#tdesign').boundingClientRect((rect) => resolve(rect)).exec())`
   */
  element: StepElement;
  /**
   * 透传 完成 的全部属性，示例：`{ content: '完成', theme: 'primary' }`
   */
  finishButtonProps?: ButtonProps;
  /**
   * 高亮框的内边距，单位rpx
   */
  highlightPadding?: number;
  /**
   * 引导框的类型
   */
  mode?: 'popover' | 'dialog';
  /**
   * 用于自定义当前引导框的下一步按钮的内容
   */
  nextButtonProps?: ButtonProps;
  /**
   * 相对于 placement 的偏移量[left, top]，默认单位rpx，示例：[-10, 20] 或 ['10px', '8px'] 或 ['20rpx', '16rpx'] (仅当 `mode` 为 `popover` 时生效)
   */
  offset?: Array<string | number>;
  /**
   * 引导框相对于高亮元素出现的位置，(仅当 `mode` 为 `popover` 时生效)
   * @default 'top'
   */
  placement?: StepPopoverPlacement;
  /**
   * 是否出现遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 用于自定义当前步骤引导框的跳过按钮的内容
   */
  skipButtonProps?: ButtonProps;
  /**
   * 当前步骤的标题内容，支持插槽：slot="title-{{index}}" (1、当要显示body-{{index}}插槽时，请将title设置为空；2、当要显示content-{{index}}插槽完全自定义内容时，请将body和title都设置为空)
   * @default ''
   */
  title?: string;
}

export type StepElement = () => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>;

export type StepPopoverPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
  | 'center';
