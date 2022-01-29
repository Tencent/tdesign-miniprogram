/* eslint-disable */
const props = {
    /** 内容的对齐方式，默认居中对齐 */
    align: {
        type: String,
        value: 'middle',
    },
    /** 是否显示右侧箭头 */
    arrow: {
        type: Boolean,
        value: false,
    },
    /** 是否显示下边框 */
    bordered: {
        type: Boolean,
        value: true,
    },
    /** 下方内容描述 */
    description: {
        type: String,
    },
    /** 组件类名，分别用于设置 组件外层类名、标题类名、右侧说明文字类名、下方描述内容类名、图片类名、激活态类名、左侧图标类名、右侧图标类名 等 */
    externalClasses: {
        type: Array,
    },
    /** 是否开启点击反馈 */
    hover: {
        type: Boolean,
    },
    /** 主图 */
    image: {
        type: String,
    },
    /** 链接跳转类型 */
    jumpType: {
        type: String,
        value: 'navigateTo',
    },
    /** 左侧图标，出现在单元格标题的左侧 */
    leftIcon: {
        type: String,
    },
    /** 和标题同行的说明文字 */
    note: {
        type: String,
    },
    /** 是否显示表单必填星号 */
    required: {
        type: Boolean,
        value: false,
    },
    /** 最右侧图标 */
    rightIcon: {
        type: String,
    },
    /** 标题 */
    title: {
        type: String,
    },
    /** 点击后跳转链接地址。如果值为空，则表示不需要跳转 */
    url: {
        type: String,
        value: '',
    },
};
export default props;

//# sourceMappingURL=props.js.map
