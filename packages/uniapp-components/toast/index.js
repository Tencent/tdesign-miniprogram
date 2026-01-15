import { getInstance, coalesce } from '../common/utils';


function Toast(options) {
  const { context, selector = '#t-toast', ...Options } = options;
  const instance = getInstance(context, selector);
  if (instance) {
    instance.show({
      ...Options,
      duration: coalesce(Options.duration, 2000),
    });
  }
}

function showToast(options = {}) {
  Toast(options);
}

function hideToast(options = {}) {
  const { context, selector = '#t-toast' } = options;
  const instance = getInstance(context, selector);
  if (instance) {
    instance.hide();
  }
}

export { Toast as default, showToast, hideToast };
