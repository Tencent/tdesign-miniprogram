import config from '../common/config';
import { MessageType, IMessageProps } from './message.interface';

const { prefix } = config;

interface MessageOptions extends IMessageProps {
  // API 调用方式新增
  instance?: WechatMiniprogram.Component.TrivialInstance;
}

const TimerSymbol = Symbol(`${prefix}-message-timer`) as any;

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
  return currentPage.selectComponent(`#${prefix}-message`);
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

    if (message[TimerSymbol]) {
      clearTimeout(message[TimerSymbol]);
    }

    message[TimerSymbol] = setTimeout(() => {
      hideMessage();
      message.durationEnd(message);
    }, parsedOptions.duration);
  } else {
    const msg = '`instance` 参数错误，请确认是否正确选中 Message 组件实例';
    console.warn(msg);
  }
};

const MESSAGE = {};

(['info', 'success', 'warning', 'error'] as MessageType[]).forEach((type: MessageType): void => {
  MESSAGE[type] = (options: IMessageProps | string) => {
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

export default MESSAGE;
