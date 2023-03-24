/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { SizeEnum } from '../common/common';

export interface TdLinkProps {
  /**
   * 链接内容
   */
  content?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 与 navigator 原生组件属性保持一致，具体使用参考：https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html。
   */
  navigatorProps?: {
    type: ObjectConstructor;
    value?: object;
  };
  /**
   * 前置图标
   */
  prefixIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: SizeEnum;
  };
  /**
   * 已废弃。组件状态
   * @default normal
   */
  status?: {
    type: StringConstructor;
    value?: 'normal' | 'active' | 'disabled';
  };
  /**
   * 禁用态
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 是否开启点击反馈
   */
  hover?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 前置图标
   */
  suffixIcon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 组件风格，依次为默认色、品牌色、危险色、警告色、成功色
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
  };
  /**
   * 是否显示链接下划线
   */
  underline?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}
