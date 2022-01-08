/* eslint-disable */
const props = {
    /** 是否为块级元素 */
    block: {
        type: Boolean,
        value: false,
    },
    /** 按钮内容 */
    content: {
        type: String,
        value: '',
    },
    /** 是否禁用按钮 */
    disabled: {
        type: Boolean,
        value: false,
    },
    /** 组件类名 */
    externalClasses: {
        type: Array,
    },
    /** 是否为幽灵按钮（镂空按钮） */
    ghost: {
        type: Boolean,
        value: false,
    },
    /** 图标名称 */
    icon: {
        type: String,
        value: '',
    },
    /** 是否显示为加载状态 */
    loading: {
        type: Boolean,
        value: false,
    },
    /** 按钮形状，有二种：方形、圆角方形 */
    shape: {
        type: String,
        value: 'square',
    },
    /** 组件尺寸 */
    size: {
        type: String,
        value: 'medium',
    },
    /** 组件风格，依次为品牌色、危险色 */
    theme: {
        type: String,
        value: undefined,
    },
    /** 同小程序的 formType */
    type: {
        type: String,
    },
    /** 按钮形式，基础、线框、文字 */
    variant: {
        type: String,
        value: 'base',
    },
    /** 微信开放能力 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
    openType: {
        type: String,
    },
    /** 指定是否阻止本节点的祖先节点出现点击态 */
    hoverStopPropagation: {
        type: Boolean,
        value: false,
    },
    /** 按住后多久出现点击态，单位毫秒 */
    hoverStartTime: {
        type: Number,
        value: 20,
    },
    /** 手指松开后点击态保留时间，单位毫秒 */
    hoverStayTime: {
        type: Number,
        value: 70,
    },
    /** 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) */
    lang: {
        type: String,
        value: 'en',
    },
    /** 会话来源，open-type=contact时有效 */
    sessionFrom: {
        type: String,
        value: '',
    },
    /** 会话内消息卡片标题，open-type=contact时有效 */
    sendMessageTitle: {
        type: String,
        value: '',
    },
    /** 会话内消息卡片点击跳转小程序路径，open-type=contact时有效 */
    sendMessagePath: {
        type: String,
        value: '',
    },
    /** 会话内消息卡片图片，open-type=contact时有效 */
    sendMessageImg: {
        type: String,
        value: '',
    },
    /** 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 */
    appParameter: {
        type: String,
        value: '',
    },
    /** 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示可能要发送的小程序提示，用户点击后可以快速发送小程序消息，open-type=contact时有效 */
    showMessageCard: {
        type: Boolean,
        value: false,
    },
};
export default props;

//# sourceMappingURL=props.js.map
