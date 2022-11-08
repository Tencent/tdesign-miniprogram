/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { ButtonProps } from '../button/index';

export interface TdCalendarProps {
  /**
   * 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。
   * @default ''
   */
  confirmBtn?: {
    type: null;
    value?: string | ButtonProps | null;
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
   * 第一天从星期几开始，默认 0 = 周日
   * @default 0
   */
  firstDayOfWeek?: {
    type: NumberConstructor;
    value?: number;
  };
  /**
   * 用于格式化日期的函数
   */
  format?: {
    type: undefined;
    value?: (day: TDate) => TDate;
  };
  /**
   * 最大可选的日期，不传则默认半年后
   */
  maxDate?: {
    type: NumberConstructor;
    value?: number | Date;
  };
  /**
   * 最小可选的日期，不传则默认今天
   */
  minDate?: {
    type: NumberConstructor;
    value?: number | Date;
  };
  /**
   * 标题，不传默认为“请选择日期”
   * @default ''
   */
  title?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 日历的选择类型，single = 单选；multiple = 多选; range = 区间选择
   * @default 'single'
   */
  type?: {
    type: StringConstructor;
    value?: 'single' | 'multiple' | 'range';
  };
  /**
   * 当前选择的日期，不传则默认今天，当 type = multiple 或 range 时传入数组
   */
  value?: {
    type: null;
    value?: number | Date | TCalendarValue[];
  };
  /**
   * 是否显示日历
   * @default false
   */
  visible?: {
    type: BooleanConstructor;
    value?: boolean;
  };
}

export type TDateType = 'selected' | 'disabled' | 'start' | 'centre' | 'end' | '';

export interface TDate {
  date: Date;
  day: number;
  type: TDateType;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export type TCalendarValue = number | Date;
