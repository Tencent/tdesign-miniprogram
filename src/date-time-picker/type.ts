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
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: {
    type: ObjectConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: DisableDate;
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
   * @default 'YYYY-MM-DD'
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
   * 选择器模式，用于表示可以选择到哪一个层级。【示例一】year 或者 ['year'] 表示纯日期选择器，只能选择到年份，只显示年份。【示例二】'hour' 或 ['hour'] 表示纯时间选择器，只能选择到小时维度。【示例三】['year', 'month', 'date', 'hour', 'minute'] 表示，日期和时间 混合选择器，可以选择到具体哪一分钟，显示全部时间：年/月/日/时/分
   * @default ['year', 'month', 'date']
   */
  mode?: {
    type: StringConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: DateTimePickerMode;
  };
  /**
   * 是否在日期旁边显示周几（如周一，周二，周日等）
   * @default false
   */
  showWeek?: {
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

export interface TdDateTimeRangePickerProps {
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
   * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
   */
  disableDate?: {
    type: ObjectConstructor;
    optionalTypes: Array<ArrayConstructor>;
    value?: DisableRangeDate;
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
   * @default 'YYYY-MM-DD'
   */
  format?: {
    type: StringConstructor;
    value?: string;
  };
  /**
   * 选择器模式，用于表示可以选择到哪一个层级
   * @default date
   */
  mode?: {
    type: StringConstructor;
    value?: 'year' | 'month' | 'date' | 'hour' | 'minutes' | 'second';
  };
  /**
   * 是否在日期旁边显示周几（如周一，周二，周日等）
   * @default false
   */
  showWeek?: {
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
    value?: DateRangeValue;
  };
  /**
   * 选中值，非受控属性
   */
  defaultValue?: {
    type: ArrayConstructor;
    value?: DateRangeValue;
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

export type DisableDate = DateValue | DisableDateObj | ((date: DateValue) => boolean);

export interface DisableDateObj {
  from?: string;
  to?: string;
  before?: string;
  after?: string;
}

export type DateTimePickerMode = TimeModeValues | Array<TimeModeValues>;

export type TimeModeValues = 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';

export type DateValue = string | number;

export type DisableRangeDate =
  | Array<DateValue>
  | DisableDateObj
  | ((context: { date: DateRangeValue; partial: DateRangePickerPartial }) => boolean);

export type DateRangePickerPartial = 'start' | 'end';

export type DateRangeValue = Array<string | number>;
