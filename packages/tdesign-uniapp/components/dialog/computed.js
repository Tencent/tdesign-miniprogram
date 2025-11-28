import { coalesce } from '../common/utils';

export const getTypeof = function (obj) {
  return typeof obj;
};

export const getActionClass = function (prefix, buttonLayout, actionItem, tClassAction) {
  const cls = [`${prefix}__button`, `${prefix}__button--action`];

  if (buttonLayout) {
    cls.push(`${prefix}__button--${buttonLayout}`);
  }

  return `${cls.join(' ')} ${coalesce(actionItem.tClass, tClassAction)}`;
};
