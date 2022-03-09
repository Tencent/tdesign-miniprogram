import props from './props';

type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

interface DialogAlertOptionsType {
  context?: Context;
  selector?: string;
  title?: string;
  content: string;
  zIndex?: number;
  asyncClose?: boolean;
  confirmButtonText?: string;
  textAlign?: string;
  cancelBtn?: string | object;
  confirmBtn?: string | object;
}

interface DialogComfirmOptionsType extends DialogAlertOptionsType {
  cancelButtonText?: string;
}

interface Action {
  name: string;
  primary?: boolean;
  style?: string;
}

interface DialogActionOptionsType {
  context?: Context;
  selector?: string;
  title?: string;
  content: string;
  zIndex?: number;
  asyncClose?: boolean;
  actions?: Action[]; // 自定义多选项，优先级高于默认的确定、取消按钮，触发后返回按钮的index
  buttonLayout?: 'vertical' | 'horizontal'; // 多按钮排列方式，可选值：horizontal/vertical。
}

const defaultOptions = {
  actions: false,
  buttonLayout: props.buttonLayout.value,
  cancelBtn: props.cancelBtn.value,
  closeOnOverlayClick: props.closeOnOverlayClick.value,
  confirmBtn: props.confirmBtn.value,
  content: '',
  preventScrollThrough: props.preventScrollThrough.value,
  showOverlay: props.showOverlay.value,
  title: '',
  visible: props.visible.value,
};

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
    const { context, selector, ...otherOptions } = { ...defaultOptions, ...options };
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
    const { context, selector, ...otherOptions } = { ...defaultOptions, ...options };
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
    const { context, selector, actions, ...otherOptions } = { ...defaultOptions, ...options };
    const instance = getDialogInstance(context, selector);
    if (!instance) return Promise.reject();
    if (!actions || (typeof actions === 'object' && (actions.length === 0 || actions.length > 7))) {
      console.warn('action 数量建议控制在1至7个');
    }

    return new Promise((resolve) => {
      instance.setData({
        actions,
        buttonLayout: 'vertical',
        ...otherOptions,
        visible: true,
      });
      instance._onAction = resolve;
    });
  },
};
