/* eslint-disable */
const props = {
    /** 是否显示外边框 */
    bordered: {
        type: Boolean,
        value: true,
    },
    /** 标签颜色设置。示例：[选中标签的颜色, 未选中的标签颜色] */
    color: {
        type: Array,
        value: ['#0052D9', 'rgba(0, 0, 0, .6)'],
    },
    /** 组件类名，用于设置外层元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 是否固定在底部 */
    fixed: {
        type: Boolean,
        value: true,
    },
    /** 是否为 iPhoneX 留出底部安全距离 */
    safeAreaInsetBottom: {
        type: Boolean,
        value: true,
    },
    /** 是否需要分割线 */
    split: {
        type: Boolean,
        value: true,
    },
    /** 当前选中标签的索引 */
    value: {
        type: String,
        optionalTypes: [Number, Array],
        value: null,
    },
    /** 当前选中标签的索引，非受控属性 */
    defaultValue: {
        type: null,
        optionalTypes: [Number, Array],
        value: undefined,
    },
};
export default props;

//# sourceMappingURL=props.js.map
