export const getListThemeItemClass = function (props) {
  const { classPrefix } = props;
  const { item } = props;
  const { prefix } = props;
  const classList = [`${classPrefix}__list-item`];
  if (item.disabled) {
    classList.push(`${prefix}-is-disabled`);
  }
  return classList.join(' ');
};

export const isImage = function (name) {
  return name.indexOf('/') !== -1;
};

