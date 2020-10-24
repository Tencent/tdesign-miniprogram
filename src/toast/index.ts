interface ToastOptions {
  type?: 'loading' | 'success' | 'fail';
  position?: 'top' | 'middle' | 'bottom';
  message?: string;
  icon?: string;
  showOverlay?: boolean;
  duration?: number;
  instance?: WechatMiniprogram.Component.TrivialInstance;
}

const defaultOptions = {
  type: '',
  position: 'middle',
  message: '',
  icon: '',
  showOverlay: false,
  duration: 2000,
};

const Toast = {

};

export default Toast;
