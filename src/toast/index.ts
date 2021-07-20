type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

type ToastType = 'loading' | 'success' | 'fail';
type ToastPositionType = 'top' | 'middle' | 'bottom';
type ToastDirectionType = 'row' | 'column';

type ToastOptionsType = {
  context?: Context;
  selector?: string;
  icon?: string;
  message: string;
  duration?: number;
  type?: ToastType;
  position?: ToastPositionType;
  showOverlay?: boolean;
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
    console.warn(`未找到toast组件,请检查selector是否正确`);
    return null;
  }
  return instance;
};

export default function (options: ToastOptionsType) {
  const { context, selector, ..._options } = options;
  const instance = getInstance(context, selector);
  if (instance) {
    instance.show({
      ..._options,
      duration: _options.duration || 2000,
    });
  }
}
