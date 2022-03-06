/* eslint-disable */
const props = {
    /** 自定义右侧操作按钮文字 */
    action: {
        type: String,
        value: '',
    },
    /** 是否居中 */
    center: {
        type: Boolean,
        value: false,
    },
    /** 是否禁用 */
    disabled: {
        type: Boolean,
        value: false,
    },
    /** 组件外部样式类名，分别用于设置组件外层类名、输入框类名、输入框容器类名、右侧 cancel 文本类名、左侧图标类名、右侧图标类型 */
    externalClasses: {
        type: Array,
    },
    /** 是否聚焦 */
    focus: {
        type: Boolean,
        value: false,
    },
    /** 左侧文本 */
    label: {
        type: String,
        value: '',
    },
    /** 左侧图标 */
    leftIcon: {
        type: String,
        value: 'search',
    },
    /** 占位符 */
    placeholder: {
        type: String,
        value: '',
    },
    /** 右侧图标 */
    rightIcon: {
        type: String,
        value: 'close',
    },
    /** 搜索框形状 */
    shape: {
        type: String,
        value: 'square',
    },
    /** 值 */
    value: {
        type: String,
        value: '',
    },
};
export default props;

//# sourceMappingURL=props.js.map
