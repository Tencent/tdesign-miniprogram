/* eslint-disable */
const props = {
    /** 组件类名，分别用于设置外层元素、图标、文本内容等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 是否绝对定位固定到屏幕右下方 */
    fixed: {
        type: Boolean,
        value: true,
    },
    /** 图标 */
    icon: {
        type: String,
        value: 'backtop',
    },
    /** 文案 */
    text: {
        type: String,
        value: '',
    },
    /** 预设的样式类型 */
    theme: {
        type: String,
        value: 'round',
    },
};
export default props;

//# sourceMappingURL=props.js.map
