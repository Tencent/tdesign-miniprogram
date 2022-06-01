/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */
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
   * 选择器的结束时间
   */
  end?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
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
   * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
   * @default ''
   */
  format?: {
    type: StringConstructor;
    value?: string;
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
   * year = 年；month = 年月；date = 年月日；hour = 年月日时； minute = 年月日时分；当类型为数组时，第一个值控制年月日，第二个值控制时分秒
   * @default 'date'
   */
  mode?: {
    type: StringConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: DateTimePickerMode;
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
   * 选择器的开始时间
   */
  start?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: string | number;
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
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
    value?: DateValue;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: StringConstructor;
    optionalTypes: Array<NumberConstructor>;
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
