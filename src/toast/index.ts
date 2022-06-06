type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

type ToastType = 'loading' | 'success' | 'fail';
type ToastPositionType = 'top' | 'middle' | 'bottom';
type ToastDirectionType = 'row' | 'column';

export type ToastOptionsType = {
  context?: Context;
  selector?: string;
  icon?: string;
  message?: string;
  duration?: number;
  theme?: ToastType;
  placement?: ToastPositionType;
  preventScrollThrough?: boolean;
  direction?: ToastDirectionType;
};

const getInstance = (context?: Context, selector = '#t-toast') => {
  if (!context) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    context = page.$$basePage || page;
  }
  const instance = context?.selectComponent(selector);
  if (!instance) {
    console.warn('未找到toast组件,请检查selector是否正确');
    return null;
  }
  return instance;
};

function Toast(options: ToastOptionsType) {
  const { context, selector, ...Options } = options;
  const instance = getInstance(context, selector);
  if (instance) {
    instance.show({
      ...Options,
      duration: Options.duration || 2000,
    });
  }
}

function showToast(options: ToastOptionsType) {
  Toast(options);
}

function hideToast(options: ToastOptionsType) {
  const { context, selector } = options;
  const instance = getInstance(context, selector);
  if (instance) {
    instance.hide();
  }
}

export { Toast as default, showToast, hideToast };
