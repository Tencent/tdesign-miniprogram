/* eslint-disable */
const props = {
    /** 图标自定义样式 */
    customStyle: {
        type: String,
        value: '',
    },
    /** 图标颜色 */
    color: {
        type: String,
        value: '',
    },
    /** 图标名称 */
    name: {
        type: String,
        value: '',
        required: true,
    },
    /** 图标尺寸，支持 'small', 'medium', 'large'，'35px', '3em' 等 */
    size: {
        type: String,
        value: undefined,
    },
    /** 自定义图标前缀 */
    prefix: {
        type: String,
        value: undefined,
    },
};
export default props;

//# sourceMappingURL=props.js.map
