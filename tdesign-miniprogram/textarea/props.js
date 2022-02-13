/* eslint-disable */
const props = {
    /** 键盘弹起时，是否自动上推页面 */
    adjustPosition: {
        type: Boolean,
        value: true,
    },
    /** 自动聚焦，拉起键盘 */
    autofocus: {
        type: Boolean,
        value: false,
    },
    /** 是否自动增高，值为 autosize 时，style.height 不生效 */
    autosize: {
        type: Boolean,
        value: false,
    },
    /** 点击键盘右下角按钮时是否保持键盘不收起点 */
    confirmHold: {
        type: Boolean,
        value: false,
    },
    /** 设置键盘右下角按钮的文字，仅在 type='text'时生效 */
    confirmType: {
        type: String,
        value: 'done',
    },
    /** 是否禁用文本框 */
    disabled: {
        type: Boolean,
        value: false,
    },
    /** 组件类名，分别用于表示组件外层元素、输入框、占位符、标签名等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 自动聚焦 */
    focus: {
        type: Boolean,
        value: false,
    },
    /** 左侧文本 */
    label: {
        type: String,
    },
    /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 */
    maxcharacter: {
        type: Number,
    },
    /** 用户最多可以输入的字符个数 */
    maxlength: {
        type: Number,
    },
    /** 占位符 */
    placeholder: {
        type: String,
        value: undefined,
    },
    /** 文本框值 */
    value: {
        type: String,
        value: null,
    },
};
export default props;

//# sourceMappingURL=props.js.map
