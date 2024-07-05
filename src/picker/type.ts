/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button/index';
import { PopupProps } from '../popup/index';
import { KeysType } from '../common/common';

export interface TdPickerProps {
  /**
   * 自动关闭；在确认、取消、点击遮罩层自动关闭，不需要手动设置 visible
   * @default true
   */
  autoClose?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 取消按钮文字
   * @default true
   */
  cancelBtn?: {
    type: null;
    value?: boolean | string | ButtonProps;
  };
  /**
   * 确定按钮文字
   * @default true
   */
  confirmBtn?: {
    type: null;
    value?: boolean | string | ButtonProps;
  };
  /**
   * 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容
   * @default true
   */
  header?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * PickerItem 的子项高度，单位 rpx
   * @default 80
   */
  itemHeight?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 用来定义 value / label 在 `options` 中对应的字段别名
   */
  keys?: {
    type: ObjectConstructor;
    value?: KeysType;
  };
  /**
   * 透传 `Popup` 组件全部属性
   * @default {}
   */
  popupProps?: {
    type: ObjectConstructor;
    value?: PopupProps;
  };
  /**
   * 标题
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 是否使用弹出层包裹
   * @default true
   */
  usePopup?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 选中值
   */
  value?: {
    type: ArrayConstructor;
    value?: Array<PickerValue>;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: Array<PickerValue>;
  };
  /**
   * 是否显示
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export type PickerValue = string | number;
