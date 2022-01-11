/* eslint-disable */
const props = {
    /** 延迟显示加载效果的时间，用于防止请求速度过快引起的加载闪烁，单位：毫秒 */
    delay: {
        type: Number,
        value: 0,
    },
    /** 加载动画执行完成一次的时间，单位：毫秒 */
    duration: {
        type: Number,
        value: 800,
    },
    /** 组件类名，分别用于设置加载组件外层元素，加载组件文本，加载组件指示符，加载指示符内侧同心圆等元素类名 */
    externalClasses: {
        type: Array,
    },
    /** 是否显示加载指示符 */
    indicator: {
        type: Boolean,
        value: true,
    },
    /** 对齐方式 */
    layout: {
        type: String,
        value: 'horizontal',
    },
    /** 是否处于加载状态 */
    loading: {
        type: Boolean,
        value: true,
    },
    /** 是否暂停动画 */
    pause: {
        type: Boolean,
        value: false,
    },
    /** 加载进度 */
    progress: {
        type: Number,
    },
    /** 加载动画是否反向 */
    reverse: {
        type: Boolean,
    },
    /** 尺寸，示例：40rpx/20px */
    size: {
        type: String,
        value: '40rpx',
    },
    /** 加载提示文案 */
    text: {
        type: String,
    },
    /** 加载组件类型 */
    theme: {
        type: String,
        value: 'circular',
    },
};
export default props;

//# sourceMappingURL=props.js.map
