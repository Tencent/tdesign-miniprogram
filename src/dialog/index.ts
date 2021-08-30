import {
  Context,
  DialogAlertOptionsType,
  DialogComfirmOptionsType,
  DialogActionOptionsType,
} from './type';

const getDialogInstance = function (context?: Context, selector = '#t-dialog') {
  if (!context) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    context = page.$$basePage || page;
  }
  const instance = context ? context.selectComponent(selector) : null;
  if (!instance) {
    console.warn('未找到dialog组件,请检查selector是否正确');
    return null;
  }
  return instance;
};

export default {
  alert(options: DialogAlertOptionsType) {
    const { context, selector, ...otherOptions } = options;
    const instance = getDialogInstance(context, selector);
    if (!instance) return Promise.reject();

    return new Promise((resolve) => {
      instance.setData({
        cancelBtn: '',
        ...otherOptions,
        visible: true,
      });
      instance._onComfirm = resolve;
    });
  },
  confirm(options: DialogComfirmOptionsType) {
    const { context, selector, ...otherOptions } = options;
    const instance = getDialogInstance(context, selector);
    if (!instance) return Promise.reject();

    return new Promise((resolve, reject) => {
      instance.setData({
        ...otherOptions,
        visible: true,
      });
      instance._onComfirm = resolve;
      instance._onCancel = reject;
    });
  },
  close() {
    const instance = getDialogInstance();
    if (instance) {
      instance.close();
      return Promise.resolve();
    }
    return Promise.reject();
  },
  action(options: DialogActionOptionsType): Promise<{ index: number }> {
    const { context, selector, actions, ...otherOptions } = options;
    const instance = getDialogInstance(context, selector);
    if (!instance) return Promise.reject();
    if (!actions || actions.length === 0 || actions.length > 7) {
      console.warn('action 数量建议控制在1至7个');
    }

    return new Promise((resolve) => {
      instance.setData({
        actions,
        direction: 'vertical',
        ...otherOptions,
        visible: true,
      });
      instance._onAction = resolve;
    });
  },
};
