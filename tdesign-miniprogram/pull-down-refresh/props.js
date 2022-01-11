/* eslint-disable */
const props = {
    /** 加载loading样式 */
    externalClasses: {
        type: Array,
    },
    /** 加载中下拉高度 */
    loadingBarHeight: {
        type: Number,
        value: 200,
    },
    /** 加载loading样式 */
    loadingProps: {
        type: Object,
    },
    /** 提示语，组件内部默认值为 ['下拉刷新', '松手刷新', '正在刷新', '刷新完成'] */
    loadingTexts: {
        type: Array,
        value: [],
    },
    /** 最大下拉高度 */
    maxBarHeight: {
        type: Number,
        value: 272,
    },
    /** 刷新超时时间 */
    refreshTimeout: {
        type: Number,
        value: 3000,
    },
};
export default props;

//# sourceMappingURL=props.js.map
