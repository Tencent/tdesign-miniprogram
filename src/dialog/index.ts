type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

interface DialogAlertOptionsType {
  context?: Context;
  selector?: string;
  header?: string;
  body: string;
  zIndex?: number;
  asyncClose?: boolean;
  confirmButtonText?: string;
  textAlign?: string;
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
  header?: string;
  body: string;
  zIndex?: number;
  asyncClose?: boolean;
  actions?: Action[]; // 自定义多选项，优先级高于默认的确定、取消按钮，触发后返回按钮的index
  direction?: 'column' | 'row'; // 按钮排列方向，默认row，传入action时默认column
}

function getDialogInstance(context?: Context, selector = '#t-dialog') {
  if (!context) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    context = page.$$basePage || page;
  }
  const instance = context?.selectComponent(selector);
  if (!instance) {
    console.warn(`未找到dialog组件,请检查selector是否正确`);
    return null;
  }
  return instance;
}

const DEFAULT_OPTIONS = {
  zIndex: 1001,
  actions: [],
};

export default {
  alert(options: DialogAlertOptionsType) {
    const { context, selector, ..._options } = options;
    const instance = getDialogInstance(context, selector);
    if (!instance) return Promise.reject();

    return new Promise((resolve) => {
      instance.setData({
        ...DEFAULT_OPTIONS,
        cancelBtn: '',
        ..._options,
        visible: true,
      });
      instance._onComfirm = resolve;
    });
  },
  confirm(options: DialogComfirmOptionsType) {
    const { context, selector, ..._options } = options;
    const instance = getDialogInstance(context, selector);
    if (!instance) return Promise.reject();

    return new Promise((resolve, reject) => {
      instance.setData({
        ...DEFAULT_OPTIONS,
        ..._options,
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
    const { context, selector, actions, ..._options } = options;
    const instance = getDialogInstance(context, selector);
    if (!instance) return Promise.reject();
    if (!actions || actions.length === 0 || actions.length > 7) {
      console.warn('action 数量建议控制在1至7个');
    }

    return new Promise((resolve) => {
      instance.setData({
        ...DEFAULT_OPTIONS,
        actions,
        direction: 'column',
        ..._options,
        visible: true,
      });
      instance._onAction = resolve;
    });
  },
};
