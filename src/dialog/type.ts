/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button/index';

export interface TdDialogProps {
  /**
   * 操作栏
   */
  actions?: {
    type: ArrayConstructor;
    value?: Array<ButtonProps>;
  };
  /**
   * 多按钮排列方式
   * @default horizontal
   */
  buttonLayout?: {
    type: StringConstructor;
    value?: 'horizontal' | 'vertical';
  };
  /**
   * 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件
   * @default ''
   */
  cancelBtn?: {
    type: null;
    value?: string | ButtonProps | null;
  };
  /**
   * 点击蒙层时是否触发关闭事件
   * @default true
   */
  closeOnOverlayClick?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件
   * @default ''
   */
  confirmBtn?: {
    type: null;
    value?: string | ButtonProps | null;
  };
  /**
   * 内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 组件类名，分别用于设置 组件外层元素、组件内容部分、确认按钮、取消按钮 等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-content', 't-class-confirm', 't-class-cancel'];
  };
  /**
   * 透传至 Overlay 组件
   * @default {}
   */
  overlayProps?: {
    type: ObjectConstructor;
    value?: object;
  };
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标题
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 控制对话框是否显示
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500
   * @default 11500
   */
  zIndex?: {
    type: NumberConstructor;
    value?: number;
  };
}
