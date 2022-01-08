/* eslint-disable */
const props = {
    /** 取消按钮文字 */
    cancelBtn: {
        type: String,
        value: '',
    },
    /** 确定按钮文字 */
    confirmBtn: {
        type: String,
        value: '',
    },
    /** 禁用日期，示例：['A', 'B'] 表示日期 A 和日期 B 会被禁用。{ from: 'A', to: 'B' } 表示在 A 到 B 之间的日期会被禁用。{ before: 'A', after: 'B' } 表示在 A 之前和在 B 之后的日期都会被禁用。其中 A = '2021-01-01'，B = '2021-02-01'。值类型为 Function 则表示返回值为 true 的日期会被禁用 */
    disableDate: {
        type: Object,
        optionalTypes: [Array, null],
    },
    /** 组件类名，分别用于设置组件外层元素、确认按钮、取消按钮、标题等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 用于格式化日期，[详细文档](https://day.js.org/docs/en/display/format) */
    format: {
        type: String,
        value: 'YYYY-MM-DD',
    },
    /** 选择器模式，用于表示可以选择到哪一个层级 */
    mode: {
        type: String,
        value: 'date',
    },
    /** 是否在日期旁边显示周几（如周一，周二，周日等） */
    showWeek: {
        type: Boolean,
        value: false,
    },
    /** 标题 */
    title: {
        type: String,
        value: '',
    },
    /** 选中值 */
    value: {
        type: Array,
    },
    /** 是否显示 */
    visible: {
        type: Boolean,
        value: false,
    },
};
export default props;

//# sourceMappingURL=date-time-range-picker-props.js.map
