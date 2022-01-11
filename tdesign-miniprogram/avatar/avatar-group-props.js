/* eslint-disable */
const props = {
    /** 图片之间的层叠关系，可选值：左侧图片在上和右侧图片在上 */
    cascading: {
        type: String,
        value: 'right-up',
    },
    /** 头像数量超出时，会出现一个头像折叠元素。该元素内容可自定义。默认为 `+N`。示例：`+5`，`...`, `更多` */
    collapseAvatar: {
        type: String,
    },
    /** 组件类名，用于设置组件外层元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 能够同时显示的最多头像数量 */
    max: {
        type: Number,
    },
    /** 尺寸，示例值：small/medium/large/24px/38px 等。优先级低于 Avatar.size */
    size: {
        type: String,
        value: 'medium',
    },
};
export default props;

//# sourceMappingURL=avatar-group-props.js.map
