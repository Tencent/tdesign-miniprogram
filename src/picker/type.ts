/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button/index';

export interface TdPickerProps {
  /**
   * 取消按钮文字
   * @default 取消
   */
  cancelBtn?: {
    type: StringConstructor;
    optionalTypes: Array<ObjectConstructor>;
    value?: string | ButtonProps;
  };
  /**
   * 确定按钮文字
   * @default 确认
   */
  confirmBtn?: {
    type: StringConstructor;
    optionalTypes: Array<ObjectConstructor>;
    value?: string | ButtonProps;
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
   * 格式化标签
   */
  format?: {
    type: null;
    value?: (option: PickerItemOption) => string;
  };
  /**
   * 数据源
   * @default []
   */
  options?: {
    type: ArrayConstructor;
    value?: Array<PickerItemOption>;
  };
}

export type PickerValue = string | number;

export interface PickerItemOption {
  label: string;
  value: string | number;
}
