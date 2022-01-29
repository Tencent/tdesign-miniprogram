/* eslint-disable */
const props = {
    /** 是否禁用全部子单选框 */
    disabled: {
        type: Boolean,
        value: undefined,
    },
    /** HTML 元素原生属性 */
    name: {
        type: String,
        value: '',
    },
    /** 单选组件按钮形式。RadioOption 数据类型为 string 或 number 时，表示 label 和 value 值相同 */
    options: {
        type: Array,
    },
    /** 选中的值 */
    value: {
        type: String,
        optionalTypes: [Number, Boolean],
        value: undefined,
    },
    /** 选中的值，非受控属性 */
    defaultValue: {
        type: null,
        value: undefined,
    },
};
export default props;

//# sourceMappingURL=radio-group-props.js.map
