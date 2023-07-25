import { getInstance } from '../common/utils';

type Context = WechatMiniprogram.Page.TrivialInstance | WechatMiniprogram.Component.TrivialInstance;

type ToastType = 'loading' | 'success' | 'error';
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
  close?: () => void;
};

function Toast(options: ToastOptionsType) {
  const { context, selector = '#t-toast', ...Options } = options;
  const instance = getInstance(context, selector);
  if (instance) {
    instance.show({
      ...Options,
      duration: Options.duration ?? 2000,
    });
  }
}

function showToast(options: ToastOptionsType = {}) {
  Toast(options);
}

function hideToast(options: ToastOptionsType = {}) {
  const { context, selector = '#t-toast' } = options;
  const instance = getInstance(context, selector);
  if (instance) {
    instance.hide();
  }
}

export { Toast as default, showToast, hideToast };
