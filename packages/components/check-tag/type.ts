/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { SizeEnum } from '../common/common';

export interface TdCheckTagProps {
  /**
   * 标签选中的状态，默认风格（theme=default）才有选中态
   */
  checked?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标签选中的状态，默认风格（theme=default）才有选中态，非受控属性
   */
  defaultChecked?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标签是否可关闭
   * @default false
   */
  closable?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件子元素；传入数组时：[选中内容，非选中内容]
   */
  content?: {
    type: null;
    value?: string | number | string[];
  };
  /**
   * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 标签图标
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 标签类型，有三种：方形、圆角方形、标记型
   * @default square
   */
  shape?: {
    type: StringConstructor;
    value?: 'square' | 'round' | 'mark';
  };
  /**
   * 标签尺寸
   * @default medium
   */
  size?: {
    type: StringConstructor;
    value?: SizeEnum;
  };
  /**
   * 标签风格变体
   * @default dark
   */
  variant?: {
    type: StringConstructor;
    value?: 'dark' | 'light' | 'outline' | 'light-outline';
  };
}
