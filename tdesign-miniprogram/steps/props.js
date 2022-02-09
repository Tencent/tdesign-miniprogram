/* eslint-disable */
const props = {
    /** 当前步骤 */
    current: {
        type: String,
        optionalTypes: [Number],
    },
    /** 当前步骤 */
    defaultCurrent: {
        type: null,
        value: undefined,
    },
    /** 组件类名，用于设置组件外层元素元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 步骤条方向，有两种：横向和纵向 */
    layout: {
        type: String,
        value: 'horizontal',
    },
    /** 是否只读 */
    readonly: {
        type: Boolean,
        value: false,
    },
    /** 步骤条风格 */
    theme: {
        type: String,
        value: 'default',
    },
};
export default props;

//# sourceMappingURL=props.js.map
