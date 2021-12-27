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
    /** 选择器模式，用于表示可以选择到哪一个层级。【示例一】year 或者 ['year'] 表示纯日期选择器，只能选择到年份，只显示年份。【示例二】'hour' 或 ['hour'] 表示纯时间选择器，只能选择到小时维度。【示例三】['date', 'minutes'] 表示，日期和时间 混合选择器，可以选择到具体哪一分钟，显示全部时间：年/月/日/时/分 */
    mode: {
        type: String,
        optionalTypes: [Array],
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
        type: String,
        optionalTypes: [Number],
    },
    /** 是否显示 */
    visible: {
        type: Boolean,
        value: false,
    },
};
export default props;

//# sourceMappingURL=props.js.map
