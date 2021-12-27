/* eslint-disable */
const props = {
    /** 文本位置（仅在水平分割线有效） */
    align: {
        type: String,
        value: 'center',
    },
    /** 子元素 */
    content: {
        type: String,
    },
    /** 是否虚线（仅在水平分割线有效） */
    dashed: {
        type: Boolean,
        value: false,
    },
    /** 组件类名，分别用于设置 组件外层类名、分隔线类名 等 */
    externalClasses: {
        type: Array,
    },
    /** 分隔线类型有两种：水平和垂直 */
    layout: {
        type: String,
        value: 'horizontal',
    },
    /** 分隔线颜色 */
    lineColor: {
        type: String,
        value: '',
    },
    /** 已废弃。请更为使用 `layout`。分隔线类型有两种：水平和垂直 */
    theme: {
        type: String,
        value: 'horizontal',
    },
};
export default props;

//# sourceMappingURL=props.js.map
