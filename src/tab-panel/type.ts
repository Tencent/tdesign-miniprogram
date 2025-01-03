/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TabValue } from '../tabs/index';

export interface TdTabPanelProps {
  /**
   * 透传至 Badge 组件
   */
  badgeProps?: {
    type: ObjectConstructor;
    value?: object;
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
   * `1.0.0-rc.1`。图标，传对象则透传至 Icon
   */
  icon?: {
    type: null;
    value?: string | object;
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
   * 是否启用选项卡懒加载
   * @default false
   */
  lazy?: {
    type: BooleanConstructor;
    value?: boolean;
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
