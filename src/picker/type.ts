/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button/index';

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
   * 配置每一列的选项
   * @default []
   */
  columns: {
    type: ArrayConstructor;
    value?: Array<PickerColumn> | ((item: Array<PickerValue>) => Array<PickerColumn>);
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
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 底部内容
   * @default true
   */
  footer?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 TNode 表示自定义头部内容
   * @default true
   */
  header?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 自定义label
   */
  renderLabel?: {
    type: StringConstructor;
    value?: (item: PickerColumnItem) => string;
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

export interface TdPickerItemProps {
  /**
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 格式化标签
   */
  format?: {
    type: null;
    value?: (option: PickerColumnItem) => string;
  };
  /**
   * 数据源
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<PickerColumnItem>;
  };
}
export type PickerColumn = PickerColumnItem[];

export interface PickerColumnItem {
  label: string;
  value: string;
}

export type PickerValue = string | number;
