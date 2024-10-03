/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { PopupProps } from '../popup/index';

export interface TdDateTimePickerProps {
  /**
   * 取消按钮文字
   * @default 取消
   */
  cancelBtn?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 确定按钮文字
   * @default ''
   */
  confirmBtn?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   *  组件国际化语言，目前支持: 简体中文(zh)、(tc)、英文(en)、日语(ja)、韩语(ko)、俄语(ru)等六种语言
   * @default zh
   */
  customLocale?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选择器的最大可选时间，默认为当前时间+10年
   */
  end?: {
    type: null;
    value?: string | number;
  };
  /**
   * 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名
   */
  externalClasses?: {
    type: ArrayConstructor;
    value?: ['t-class', 't-class-confirm', 't-class-cancel', 't-class-title'];
  };
  /**
   * 用于格式化 pick、change、confirm 事件返回的值，[详细文档](https://day.js.org/docs/en/display/format)
   * @default 'YYYY-MM-DD HH:mm:ss'
   */
  format?: {
    type: StringConstructor;
    value?: string;
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
   * year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒
   * @default 'date'
   */
  mode?: {
    type: null;
    value?: DateTimePickerMode;
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
   * 【开发中】是否在日期旁边显示周几（如周一，周二，周日等）
   * @default false
   */
  showWeek?: {
    type: BooleanConstructor;
    value?: boolean;
  };
  /**
   * 选择器的最小可选时间，默认为当前时间-10年
   */
  start?: {
    type: null;
    value?: string | number;
  };
  /**
   * 时间间隔步数，示例：`{ minute: 5 }`
   */
  steps?: {
    type: ObjectConstructor;
    value?: object;
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
   * 选中值
   */
  value?: {
    type: null;
    value?: DateValue;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: null;
    value?: DateValue;
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

export type DateTimePickerMode = TimeModeValues | Array<TimeModeValues>;

export type TimeModeValues = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';

export type DateValue = string | number;
