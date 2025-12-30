/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import type { SizeEnum } from '../common/common';

export interface TdCheckTagProps {
  /**
   * 标签选中的状态，默认风格（theme=default）才有选中态
   */
  checked?: boolean;
  /**
   * 标签选中的状态，默认风格（theme=default）才有选中态，非受控属性
   */
  defaultChecked?: boolean;
  /**
   * 标签是否可关闭
   * @default false
   */
  closable?: boolean;
  /**
   * 组件子元素；传入数组时：[选中内容，非选中内容]
   */
  content?: string | number | string[];
  /**
   * 标签禁用态，失效标签不能触发事件。默认风格（theme=default）才有禁用态
   * @default false
   */
  disabled?: boolean;
  /**
   * 标签图标
   */
  icon?: string | object;
  /**
   * 标签类型，有三种：方形、圆角方形、标记型
   * @default square
   */
  shape?: 'square' | 'round' | 'mark';
  /**
   * 标签尺寸
   * @default medium
   */
  size?: SizeEnum;
  /**
   * 标签风格变体
   * @default dark
   */
  variant?: 'dark' | 'light' | 'outline' | 'light-outline';
  /**
   * 状态切换时触发
   */
  onChange?: (context: { checked: boolean }) => void;
  /**
   * 点击标签时触发
   */
  onClick?: () => void;
  /**
   * 如果关闭按钮存在，点击关闭按钮时触发
   */
  onClose?: () => void;
}
