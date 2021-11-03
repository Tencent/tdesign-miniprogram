import { MessageType, MessageProps } from './message.interface';

type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

interface MessageActionOptionsType extends Optional<MessageProps> {
  context?: Context;
  selector?: string;
}

const getInstance = function (context?: Context, selector = '#t-message') {
  if (!context) {
    const pages = getCurrentPages();
    const page = pages[pages.length - 1];
    context = page.$$basePage || page;
  }
  const instance = context?.selectComponent(selector);
  if (!instance) {
    console.warn('未找到Message组件, 请检查selector是否正确');
    return null;
  }
  return instance;
};

const showMessage = function (
  options: MessageActionOptionsType,
  theme: MessageType = MessageType.info,
) {
  const { context, selector } = options;
  const instance = getInstance(context, selector);
  if (!instance) return Promise.reject();

  // instance.hide();

  instance.resetData(() => {
    instance.setData({ theme, ...options }, instance.show);
  });

  return instance;
};

export default {
  info(options: MessageActionOptionsType) {
    return showMessage(options, MessageType.info);
  },
  success(options: MessageActionOptionsType) {
    return showMessage(options, MessageType.success);
  },
  warning(options: MessageActionOptionsType) {
    return showMessage(options, MessageType.warning);
  },
  error(options: MessageActionOptionsType) {
    return showMessage(options, MessageType.error);
  },
  hide() {
    const instance = getInstance();
    if (!instance) {
      return;
    }
    instance.hide();
  },
};
