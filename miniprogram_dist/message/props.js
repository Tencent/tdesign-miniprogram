/* eslint-disable */
const props = {
    /** 操作 */
    action: {
        type: String,
    },
    /** 文本对齐方式 */
    align: {
        type: String,
        value: 'left',
    },
    /** 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。也可以完全自定义按钮 */
    closeBtn: {
        type: String,
        optionalTypes: [Boolean],
        value: undefined,
    },
    /** 用于自定义消息弹出内容 */
    content: {
        type: String,
    },
    /** 消息内置计时器，计时到达时会触发 duration-end 事件。单位：毫秒。值为 0 则表示没有计时器。 */
    duration: {
        type: Number,
        value: 3000,
    },
    /** 样式类名，分别用于设置 组件外层、消息内容、左侧图标、操作按钮、关闭按钮等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 消息提醒前面的图标。值为 true 则根据 theme 显示对应的图标，值为 false 则不显示图标。值为 'info' 或 'bell' 则显示组件内置图标。也可以完全自定义图标节点 */
    icon: {
        type: String,
        optionalTypes: [Boolean],
        value: true,
    },
    /** 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放 */
    marquee: {
        type: Boolean,
        optionalTypes: [Object],
        value: false,
    },
    /** 相对于 placement 的偏移量，示例：[-10, 20] 或 ['10rpx', '8rpx'] */
    offset: {
        type: Array,
    },
    /** 消息组件风格 */
    theme: {
        type: String,
        value: 'info',
    },
    /** 是否显示，隐藏时默认销毁组件 */
    visible: {
        type: Boolean,
        value: false,
    },
    /** 元素层级，样式默认为 5000 */
    zIndex: {
        type: Number,
    },
};
export default props;

//# sourceMappingURL=props.js.map
