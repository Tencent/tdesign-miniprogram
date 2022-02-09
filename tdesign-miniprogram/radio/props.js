/* eslint-disable */
const props = {
    /** 复选框和内容相对位置 */
    align: {
        type: String,
        value: 'left',
    },
    /** 是否选中 */
    checked: {
        type: Boolean,
    },
    /** 是否选中，非受控属性 */
    defaultChecked: {
        type: null,
        value: undefined,
    },
    /** 单选按钮颜色 */
    color: {
        type: String,
        value: '#0052d9',
    },
    /** 单选内容 */
    content: {
        type: String,
    },
    /** 是否禁用组件内容（content）触发选中 */
    contentDisabled: {
        type: Boolean,
    },
    /** 是否为禁用态 */
    disabled: {
        type: Boolean,
        value: undefined,
    },
    /** 组件类名，分别用于设置 组件外层、单选图标、主文案、内容 等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 自定义选中图标和非选中图标。示例：[选中态图标，非选中态图标]。值为 fill-circle 表示图标为填充型图标，值为 stroke-line 表示图标为描边型图标 */
    icon: {
        type: String,
        optionalTypes: [Array],
        value: 'fill-circle',
    },
    /** 主文案 */
    label: {
        type: String,
    },
    /** 内容最大行数限制 */
    maxContentRow: {
        type: Number,
        value: 5,
    },
    /** 主文案最大行数限制 */
    maxLabelRow: {
        type: Number,
        value: 3,
    },
    /** HTM 元素原生属性 */
    name: {
        type: String,
        value: '',
    },
    /** 单选按钮的值 */
    value: {
        type: String,
        optionalTypes: [Number, Boolean],
        value: undefined,
    },
};
export default props;

//# sourceMappingURL=props.js.map
