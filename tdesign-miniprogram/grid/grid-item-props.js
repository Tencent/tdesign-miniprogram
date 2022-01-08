/* eslint-disable */
const props = {
    /** 文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点 */
    description: {
        type: String,
    },
    /** 组件类名，分别用于设置组件外层元素、图片、文本、描述等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 图片，可以是图片地址，也可以自定义图片节点 */
    image: {
        type: String,
    },
    /** 链接跳转类型 */
    jumpType: {
        type: String,
        value: 'navigate-to',
    },
    /** 内容布局方式 */
    layout: {
        type: String,
        value: 'vertical',
    },
    /** 文本，可以通过 Props 传入文本，也可以自定义标题节点 */
    text: {
        type: String,
    },
    /** 点击后的跳转链接 */
    url: {
        type: String,
        value: '',
    },
};
export default props;

//# sourceMappingURL=grid-item-props.js.map
