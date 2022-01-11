/* eslint-disable */
const props = {
    /** 函数返回容器对应的 NodesRef 节点，将对应节点指定为组件的外部容器，滚动时组件会始终保持在容器范围内，当组件即将超出容器底部时，会返回原位置。 */
    container: {
        type: null,
    },
    /** 是否禁用组件 */
    disabled: {
        type: Boolean,
        value: false,
    },
    /** 根结点外部样式 */
    externalClasses: {
        type: Array,
    },
    /** 吸顶时与顶部的距离，单位`px` */
    offsetTop: {
        type: Number,
        value: 0,
    },
    /** 吸顶时的 z-index */
    zIndex: {
        type: Number,
        value: 99,
    },
};
export default props;

//# sourceMappingURL=props.js.map
