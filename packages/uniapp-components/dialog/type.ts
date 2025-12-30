/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdButtonProps as ButtonProps } from '../button/type';
import type { TdOverlayProps as OverlayProps } from '../overlay/type';

export interface TdDialogProps {
  /**
   * 操作栏
   */
  actions?: Array<ButtonProps>;
  /**
   * 多按钮排列方式
   * @default horizontal
   */
  buttonLayout?: 'horizontal' | 'vertical';
  /**
   * 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制取消事件
   */
  cancelBtn?: string | ButtonProps | null;
  /**
   * 是否展示关闭按钮，值为 `true` 显示默认关闭按钮；值为 `false` 则不显示关闭按钮；使用 Object 时透传至图标组件
   * @default false
   */
  closeBtn?: boolean | ButtonProps | null;
  /**
   * 点击蒙层时是否触发关闭事件
   * @default false
   */
  closeOnOverlayClick?: boolean;
  /**
   * 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 Slot 自定义按钮时，需自行控制确认事件
   */
  confirmBtn?: string | ButtonProps | null;
  /**
   * 内容
   */
  content?: string;
  /**
   * 透传至 Overlay 组件
   * @default {}
   */
  overlayProps?: OverlayProps;
  /**
   * 防止滚动穿透
   * @default true
   */
  preventScrollThrough?: boolean;
  /**
   * 是否显示遮罩层
   * @default true
   */
  showOverlay?: boolean;
  /**
   * 标题
   */
  title?: string;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 控制对话框是否显示
   */
  visible?: boolean;
  /**
   * 对话框层级，Web 侧样式默认为 2500，移动端样式默认 2500，小程序样式默认为 11500
   * @default 11500
   */
  zIndex?: number;
  /**
   * 点击多按钮中的其中一个时触发
   */
  onAction?: (context: { index: number }) => void;
  /**
   * 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件
   */
  onCancel?: (context: { e: MouseEvent }) => void;
  /**
   * 关闭事件，点击 取消按钮 或 点击蒙层 时触发
   */
  onClose?: (context: { trigger: DialogEventSource }) => void;
  /**
   * 如果“确认”按钮存在，则点击“确认”按钮时触发
   */
  onConfirm?: (context: { e: MouseEvent }) => void;
  /**
   * 如果蒙层存在，点击蒙层时触发
   */
  onOverlayClick?: (context: { e: MouseEvent }) => void;
}

export type DialogEventSource = 'cancel' | 'overlay' | 'close-btn';
