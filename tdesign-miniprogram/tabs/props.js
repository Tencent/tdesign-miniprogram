/* eslint-disable */
const props = {
    /** 动画效果设置。其中 duration 表示动画时长 */
    animation: {
        type: Object,
    },
    /** 组件类名，分别用于设置 组件外层元素、选项卡单项、选项卡激活态、滚动条样式类名 等类名 */
    externalClasses: {
        type: Array,
    },
    /** 选项卡位置 */
    placement: {
        type: String,
        value: 'top',
    },
    /** 是否展示底部激活线条 */
    showBottomLine: {
        type: Boolean,
        value: true,
    },
    /** 激活的选项卡值 */
    value: {
        type: String,
        optionalTypes: [Number],
        value: null,
    },
    /** 激活的选项卡值，非受控属性 */
    defaultValue: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;

//# sourceMappingURL=props.js.map
