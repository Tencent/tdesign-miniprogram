import props from './props';
import { getInstance } from '../common/utils';


const defaultOptions = {
  actions: [],
  buttonLayout: props.buttonLayout.default,
  cancelBtn: props.cancelBtn.default,
  closeOnOverlayClick: props.closeOnOverlayClick.default,
  confirmBtn: props.confirmBtn.value,
  content: '',
  preventScrollThrough: props.preventScrollThrough.default,
  showOverlay: props.showOverlay.default,
  title: '',
  visible: props.visible.default,
};

export default {
  alert(options) {
    const { context, selector = '#t-dialog', ...otherOptions } = { ...options };
    const instance = getInstance(context, selector);
    if (!instance) return Promise.reject();

    return new Promise((resolve) => {
      const mergedOptions = {
        ...defaultOptions,
        ...instance.properties,
        ...otherOptions,
      };
      instance.setData({
        cancelBtn: '',
        ...mergedOptions,
        visible: true,
      });
      instance._onConfirm = resolve;
    });
  },
  confirm(options) {
    const { context, selector = '#t-dialog', ...otherOptions } = { ...options };
    const instance = getInstance(context, selector);
    if (!instance) return Promise.reject();

    return new Promise((resolve, reject) => {
      const mergedOptions = {
        ...defaultOptions,
        ...instance.properties,
        ...otherOptions,
      };
      instance.setData({
        ...mergedOptions,
        visible: true,
      });
      instance._onConfirm = resolve;
      instance._onCancel = reject;
    });
  },
  close(options) {
    const { context, selector = '#t-dialog' } = { ...options };
    const instance = getInstance(context, selector);
    if (instance) {
      instance.close();
      return Promise.resolve();
    }
    return Promise.reject();
  },
  action(options) {
    const { context, selector = '#t-dialog', ...otherOptions } = { ...options };
    const instance = getInstance(context, selector);
    if (!instance) return Promise.reject();
    const { buttonLayout = 'vertical', actions = instance.properties.actions } = options;
    const maxLengthSuggestion = buttonLayout === 'vertical' ? 7 : 3;
    if (!actions || (typeof actions === 'object' && (actions.length === 0 || actions.length > maxLengthSuggestion))) {
      console.warn(`action 数量建议控制在1至${maxLengthSuggestion}个`);
    }

    return new Promise((resolve) => {
      const mergedOptions = {
        ...defaultOptions,
        ...instance.properties,
        ...otherOptions,
      };
      instance.setData({
        ...mergedOptions,
        buttonLayout,
        visible: true,
      });
      instance._onAction = resolve;
    });
  },
};
