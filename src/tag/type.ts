/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { SizeEnum } from '../common/common';

export interface TdTagProps {
  /**
   * 标签是否可关闭
   * @default false
   */
  closable?: {
    type: BooleanConstructor;
    value?: boolean;
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
   * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
   * @default false
   */
  disabled?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 组件类名，用于设置 组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
  };
  /**
   * 标签中的图标，可自定义图标呈现
   */
  icon?: {
    type: null;
    value?: string | object;
  };
  /**
   * 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80
   */
  maxWidth?: {
    type: null;
    value?: string | number;
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
   * 组件风格，用于描述组件不同的应用场景
   * @default default
   */
  theme?: {
    type: StringConstructor;
    value?: 'default' | 'primary' | 'warning' | 'danger' | 'success';
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
   * @deprecated
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
   * 自定义组件样式
   * @default ''
   */
  customStyle?: {
    type: StringConstructor;
    value?: string;
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
   * 组件类名，用于设置 组件外层元素元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class'];
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
   * @deprecated
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
