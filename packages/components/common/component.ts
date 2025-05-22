// 此处定义一个 TComponent，作为所有组件的统一收归
const TComponent: typeof Component = (options) => {
  // mixin default
  options.options = {
    multipleSlots: true,
    addGlobalClass: true,
    ...options.options,
  };

  return Component(options);
};

export default TComponent;
