/* eslint-disable */
const props = {
    /** 键盘弹起时，是否自动上推页面 */
    adjustPosition: {
        type: Boolean,
        value: true,
    },
    /** 文本内容位置，居左/居中/居右 */
    align: {
        type: String,
        value: 'left',
    },
    /** 是否可清空 */
    clearable: {
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
    /** 是否禁用输入框 */
    disabled: {
        type: Boolean,
        value: false,
    },
    /** 错误提示文本，值为空不显示 */
    errorMessage: {
        type: String,
        value: '',
    },
    /** 组件类名，用于设置组件外层元素、输入框、占位符、错误信息等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 自动聚焦 */
    focus: {
        type: Boolean,
        value: false,
    },
    /** 用户最多可以输入的字符个数，一个中文汉字表示两个字符长度 */
    maxcharacter: {
        type: Number,
    },
    /** 用户最多可以输入的文本长度。值小于等于 0 的时候，则不限制输入长度 */
    maxlength: {
        type: Number,
    },
    /** 名称 */
    name: {
        type: String,
        value: '',
    },
    /** 占位符 */
    placeholder: {
        type: String,
        value: '',
    },
    /** 输入框尺寸 */
    size: {
        type: String,
        value: 'small',
    },
    /** 后置文本内容 */
    suffix: {
        type: String,
        value: '',
    },
    /** 组件后置图标 */
    suffixIcon: {
        type: String,
    },
    /** 输入框类型 */
    type: {
        type: String,
        value: 'text',
    },
    /** 输入框的值 */
    value: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;

//# sourceMappingURL=props.js.map
