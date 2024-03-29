import { MessageType, MessageProps } from '../message.interface';
import { getInstance } from '../../common/utils';

type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

interface MessageActionOptionsType extends Optional<MessageProps> {
  context?: Context;
  selector?: string;
}

const showMessage = function (options: MessageActionOptionsType, theme: MessageType = MessageType.info) {
  const { context, selector = '#t-message', ...otherOptions } = options;
  const instance = getInstance(context, selector);

  if (instance) {
    instance.resetData(() => {
      instance.setData({ theme, ...otherOptions }, instance.show.bind(instance));
    });

    return instance;
  }
  console.error('未找到组件,请确认 selector && context 是否正确');
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
  hide(options: MessageActionOptionsType) {
    const { context, selector = '#t-message' } = { ...options };
    const instance = getInstance(context, selector);
    if (!instance) {
      return;
    }
    instance.hide();
  },
};
