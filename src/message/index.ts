import config from '../common/config';
import { MessageType, IMessageProps } from './message.interface';

const { prefix } = config;

interface MessageOptions extends IMessageProps {
  // API 调用方式新增
  instance?: WechatMiniprogram.Component.TrivialInstance;
}

const TIMER_SYMBOL = Symbol(`${prefix}-message-timer`) as any;

const defaultOptions = {
  theme: 'info',
  content: '',
  duration: 2000,
  align: 'left',
  zIndex: 6000,
  visible: true,
};

// 获取当前页面的默认 Dialog 实例
const getDefaultInstance = () => {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  return currentPage.selectComponent('#t-message');
};

const create = (options: MessageOptions) => {
  // Message 组件实例
  const message = options.instance || getDefaultInstance();

  // 关闭 Message
  const hideMessage = () =>
    message.setData({
      visible: false,
    });

  if (message?.setData) {
    const parsedOptions = {
      ...defaultOptions,
      ...options,
    };
    message.setData(parsedOptions);

    if (message[TIMER_SYMBOL]) {
      clearTimeout(message[TIMER_SYMBOL]);
    }

    message[TIMER_SYMBOL] = setTimeout(() => {
      hideMessage();
      message.durationEnd(message);
    }, parsedOptions.duration);
  } else {
    const msg = '`instance` 参数错误，请确认是否正确选中 Message 组件实例';
    console.warn(msg);
  }
};

const Message = {};

(['info', 'success', 'warning', 'error'] as MessageType[]).forEach((type: MessageType): void => {
  Message[type] = (options: IMessageProps | string) => {
    let props: IMessageProps = {
      content: '',
      theme: type,
    };

    if (typeof options === 'string') {
      props.content = options;
    } else {
      props = {
        ...props,
        ...options,
      };
    }

    return create(props);
  };
});

export default Message;
