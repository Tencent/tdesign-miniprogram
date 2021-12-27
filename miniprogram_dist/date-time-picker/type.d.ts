/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * updated at 2021-11-24 10:58:05
 * */
export interface TdDateTimePickerProps {
    /**
     * 取消按钮文字
     * @default 取消
     */
    cancelBtn?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 确定按钮文字
     * @default ''
     */
    confirmBtn?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
     */
    disableDate?: {
        type: ObjectConstructor;
        optionalTypes: Array<ArrayConstructor>;
        value?: DisableDate;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-confirm', 't-class-cancel', 't-class-title'];
        required?: boolean;
    };
    /**
     * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
     * @default 'YYYY-MM-DD'
     */
    format?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 选择器模式，用于表示可以选择到哪一个层级。【示例一】year 或者 ['year'] 表示纯日期选择器，只能选择到年份，只显示年份。【示例二】'hour' 或 ['hour'] 表示纯时间选择器，只能选择到小时维度。【示例三】['date', 'minutes'] 表示，日期和时间 混合选择器，可以选择到具体哪一分钟，显示全部时间：年/月/日/时/分
     * @default 'date'
     */
    mode?: {
        type: StringConstructor;
        optionalTypes: Array<ArrayConstructor>;
        value?: DateTimePickerMode;
        required?: boolean;
    };
    /**
     * 是否在日期旁边显示周几（如周一，周二，周日等）
     * @default false
     */
    showWeek?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 标题
     * @default ''
     */
    title?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 选中值
     */
    value?: {
        type: StringConstructor;
        optionalTypes: Array<NumberConstructor>;
        value?: Array<DateValue>;
        required?: boolean;
    };
    /**
     * 是否显示
     * @default false
     */
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
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
        required?: boolean;
    };
    /**
     * 确定按钮文字
     * @default ''
     */
    confirmBtn?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用
     */
    disableDate?: {
        type: ObjectConstructor;
        optionalTypes: Array<ArrayConstructor>;
        value?: DisableRangeDate;
        required?: boolean;
    };
    /**
     * 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名
     */
    externalClasses?: {
        type: ArrayConstructor;
        value?: ['t-class', 't-class-confirm', 't-class-cancel', 't-class-title'];
        required?: boolean;
    };
    /**
     * 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format)
     * @default 'YYYY-MM-DD'
     */
    format?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 选择器模式，用于表示可以选择到哪一个层级
     * @default date
     */
    mode?: {
        type: StringConstructor;
        value?: 'year' | 'month' | 'date' | 'hour' | 'minutes' | 'second';
        required?: boolean;
    };
    /**
     * 是否在日期旁边显示周几（如周一，周二，周日等）
     * @default false
     */
    showWeek?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
    /**
     * 标题
     * @default ''
     */
    title?: {
        type: StringConstructor;
        value?: string;
        required?: boolean;
    };
    /**
     * 选中值
     */
    value?: {
        type: ArrayConstructor;
        value?: DateRangeValue;
        required?: boolean;
    };
    /**
     * 是否显示
     * @default false
     */
    visible?: {
        type: BooleanConstructor;
        value?: boolean;
        required?: boolean;
    };
}
export declare type DisableDate = Array<DateValue> | DisableDateObj | ((date: DateValue) => boolean);
export interface DisableDateObj {
    from?: string;
    to?: string;
    before?: string;
    after?: string;
}
export declare type DateTimePickerMode = TimeModeValues | Array<TimeModeValues>;
export declare type TimeModeValues = 'year' | 'month' | 'date' | 'hour' | 'minutes' | 'second';
export declare type DateValue = string | number;
export declare type DisableRangeDate = Array<DateValue> | DisableDateObj | ((context: {
    date: DateRangeValue;
    partial: DateRangePickerPartial;
}) => boolean);
export declare type DateRangePickerPartial = 'start' | 'end';
export declare type DateRangeValue = Array<string | number>;
