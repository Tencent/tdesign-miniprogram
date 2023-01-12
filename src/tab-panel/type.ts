/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TabValue } from '../tabs/index';

export interface TdTabPanelProps {
  /**
   * 透传至 Badge 组件
   * @default null
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: object;
  };
  /**
   * 自定义组件样式
   * @default ''
   */
  style?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选项卡内容隐藏时是否销毁
   * @default true
   */
  destroyOnHide?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否禁用当前选项卡
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选项卡名称
   * @default ''
   */
  label?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 用于自定义选项卡面板内容
   */
  panel?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选项卡的值，唯一标识
   */
  value?: {
    type: null;
    value?: TabValue;
  };
}
