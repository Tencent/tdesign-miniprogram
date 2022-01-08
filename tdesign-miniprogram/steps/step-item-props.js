/* eslint-disable */
const props = {
    /** 步骤描述 */
    content: {
        type: String,
        value: '',
    },
    /** 组件类名，用于设置组件外层元素元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 图标。传入 slot 代表使用插槽，其他字符串代表使用内置图标 */
    icon: {
        type: String,
    },
    /** 当前步骤的状态 */
    status: {
        type: String,
        value: 'default',
    },
    /** 标题 */
    title: {
        type: String,
        value: '',
    },
};
export default props;

//# sourceMappingURL=step-item-props.js.map
