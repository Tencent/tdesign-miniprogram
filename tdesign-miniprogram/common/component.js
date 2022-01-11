// 此处定义一个 TComponent，作为所有组件的统一收归
const TComponent = (options) => {
    // mixin default
    options.options = Object.assign({ multipleSlots: true, addGlobalClass: true }, options.options);
    return Component(options);
};
export default TComponent;

//# sourceMappingURL=component.js.map
