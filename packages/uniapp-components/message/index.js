import { MessageType } from './message.interface';
import { getInstance } from '../common/utils';


const showMessage = function (options, theme = MessageType.info) {
  const { context, selector = '#t-message', ...otherOptions } = options;
  const instance = getInstance(context, selector);
  if (typeof otherOptions.single !== 'boolean') {
    otherOptions.single = true;
  }
  if (instance) {
    instance.setMessage(otherOptions, theme);
    return instance;
  }
  console.error('未找到组件,请确认 selector && context 是否正确');
};

export default {
  info(options) {
    return showMessage(options, MessageType.info);
  },
  success(options) {
    return showMessage(options, MessageType.success);
  },
  warning(options) {
    return showMessage(options, MessageType.warning);
  },
  error(options) {
    return showMessage(options, MessageType.error);
  },
  hide(options) {
    const { context, selector = '#t-message' } = { ...options };
    const instance = getInstance(context, selector);
    if (!instance) {
      return;
    }
    instance.hide();
  },
};
