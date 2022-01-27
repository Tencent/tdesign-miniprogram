/* eslint-disable */
const props = {
    /** 选项卡内容隐藏时是否销毁 */
    destroyOnHide: {
        type: Boolean,
        value: true,
    },
    /** 是否禁用当前选项卡 */
    disabled: {
        type: Boolean,
        value: false,
    },
    /** 选项卡名称，可自定义选项卡导航内容 */
    label: {
        type: String,
    },
    /** 用于自定义选项卡面板内容 */
    panel: {
        type: String,
    },
    /** 选项卡的值，唯一标识 */
    value: {
        type: String,
        optionalTypes: [Number],
    },
};
export default props;

//# sourceMappingURL=tab-panel-props.js.map
