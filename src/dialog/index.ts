import config from '../common/config';

interface DialogOptions {
  mode?: 'modal' | 'half-screen';
  theme?: 'primary' | 'warning' | 'success' | 'error';
  className?: String | Object | any[];
  customStyle?: String | Object;
  width?: Number | String;
  header?: String;
  body: String;
  cancelContent?: String;
  confirmContent?: String;
  showOverlay?: Boolean;
  preventScrollThrough?: Boolean;
  zIndex?: Number | String;
  // API 调用方式新增
  closeOnClickOverlay?: Boolean;
  asyncClose?: Boolean;
  instance?: WechatMiniprogram.Component.TrivialInstance;
}

const defaultOptions = {
  mode: 'modal',
  theme: 'primary',
  className: '',
  customStyle: '',
  width: '',
  header: '',
  body: '',
  cancelContent: '取消',
  confirmContent: '确定',
  showOverlay: true,
  preventScrollThrough: true,
  zIndex: 2500,
  closeOnClickOverlay: true,
  asyncClose: false,
  visible: true,
  footer: true,
};

// alert 覆盖 Dialog 的默认 Options
const alertDefaultOptions = {
  ...defaultOptions,
  cancelContent: false,
};
// confirm 覆盖 Dialog 的默认 Options
const confirmDefaultOptions = {
  ...defaultOptions,
};

// 获取当前页面的默认 Dialog 实例
const getDefaultInstance = () => {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  return currentPage.selectComponent(`#${config.prefix}-dialog`);
};

const dialog = (options) =>
  new Promise<{
    confirm: Boolean;
    close?: Function;
    dialog: WechatMiniprogram.Component.TrivialInstance;
  }>((resolve, reject) => {
    // Dialog 组件实例
    const dialog = options.instance || getDefaultInstance();

    // 关闭 Dialog
    const hideDialog = () =>
      dialog.setData({
        visible: false,
      });

    // 触发点击事件
    const clickEvent = (confirm) => {
      if (options.asyncClose) {
        // 异步手动关闭
        resolve({
          confirm,
          dialog,
          close: hideDialog,
        });
      } else {
        // 自动关闭
        hideDialog();
        resolve({
          confirm,
          dialog,
        });
      }
    };

    if (dialog?.setData) {
      dialog.setData({
        ...options,
      });
      // 点击笼罩层
      const _clickOverlay = dialog.clickOverlay;
      dialog.clickOverlay = function (...args) {
        _clickOverlay.bind(this)(...args);
        if (options.closeOnClickOverlay) {
          // 点击笼罩层是否关闭
          clickEvent(false);
        }
      };
      // 点击关闭按钮
      const _clickCloseBtn = dialog.clickCloseBtn;
      dialog.clickCloseBtn = function (...args) {
        _clickCloseBtn.bind(this)(...args);
        clickEvent(false);
      };
      // 点击确定按钮
      const _clickConfirmBtn = dialog.clickConfirmBtn;
      dialog.clickConfirmBtn = function (...args) {
        _clickConfirmBtn.bind(this)(...args);
        clickEvent(true);
      };
    } else {
      const msg = '`instance` 参数错误，请确认是否正确选中 Dialog 组件实例';
      console.warn(msg);
      reject(msg);
    }
  });

const Dialog = {
  // Dialog.alert
  alert(options: DialogOptions): Promise<{
    close?: Function;
    dialog: WechatMiniprogram.Component.TrivialInstance;
  }> {
    return dialog({
      ...alertDefaultOptions,
      ...options,
    });
  },

  // Dialog.confirm
  confirm(options: DialogOptions): Promise<{
    confirm: Boolean;
    close?: Function;
    dialog: WechatMiniprogram.Component.TrivialInstance;
  }> {
    return dialog({
      ...confirmDefaultOptions,
      ...options,
    });
  },
};

export default Dialog;
