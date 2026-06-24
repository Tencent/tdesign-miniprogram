/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { TdPopupProps as PopupProps } from '../popup/type';
import type { KeysType } from '../common/common';

export interface TdPickerProps {
  /**
   * 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible
   * @default true
   */
  autoClose?: boolean;
  /**
   * 取消按钮文字
   * @default true
   */
  cancelBtn?: boolean | string;
  /**
   * 确定按钮文字
   * @default true
   */
  confirmBtn?: boolean | string;
  /**
   * 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容
   * @default true
   */
  header?: boolean;
  /**
   * PickerItem 的子项高度，单位 `px`
   * @default 40
   */
  itemHeight?: number;
  /**
   * 用来定义 value / label / icon 在 `options` 中对应的字段别名
   */
  keys?: KeysType;
  /**
   * 透传 Popup 组件全部属性
   * @default {}
   */
  popupProps?: PopupProps;
  /**
   * 标题
   * @default ''
   */
  title?: string;
  /**
   * 是否使用弹出层包裹
   * @default true
   */
  usePopup?: boolean;
  /**
   * 是否使用了自定义导航栏
   * @default false
   */
  usingCustomNavbar?: boolean;
  /**
   * 选中值
   */
  value?: Array<PickerValue>;
  /**
   * 选中值，非受控属性
   */
  defaultValue?: Array<PickerValue>;
  /**
   * 是否显示。支持语法糖 `v-model:visible`
   * @default false
   */
  visible?: boolean;
  /**
   * 可视区域 PickerItem 的子项个数
   * @default 5
   */
  visibleItemCount?: number;
  /**
   * 点击取消按钮时触发
   * @default ''
   */
  onCancel?: () => void;
  /**
   * 选中变化时候触发，即确认变化时触发
   * @default ''
   */
  onChange?: (context: {
    value: Array<PickerValue>;
    label: string;
    columns: Array<{ column: number; index: number; disabled?: boolean }>;
  }) => void;
  /**
   * 关闭时触发
   */
  onClose?: (context: { trigger: TriggerSource }) => void;
  /**
   * 点击确认按钮时触发
   * @default ''
   */
  onConfirm?: (context: {
    value: Array<PickerValue>;
    label: string;
    columns: Array<{ column: number; index: number; disabled?: boolean }>;
  }) => void;
  /**
   * 任何一列选中都会触发，不同的列参数不同。`column` 表示第几列变化，`index` 表示变化那一列的选中项下标
   * @default ''
   */
  onPick?: (context: { value: Array<PickerValue>; label: string; column: number; index: number }) => void;
}

export type PickerValue = string | number;

export type TriggerSource = 'overlay' | 'cancel-btn' | 'confirm-btn';
