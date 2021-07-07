import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-dialog`; // t-dialog有时候不生效，微信开发工具异常

@wxComponent()
export default class Dailog extends SuperComponent {
  externalClasses = ['-dialog', 't-cancel-btn', 't-confirm-btn'];
  properties = {
    show: {
      type: Boolean,
      value: false,
    },
    title: String,
    message: String,
    textAlign: {
      type: String,
      value: 'center',
    },
    showCancelButton: Boolean,
    width: null,
    zIndex: {
      type: Number,
      value: 2000,
    },
    confirmButtonText: {
      type: String,
      value: '确认',
    },
    cancelButtonText: {
      type: String,
      value: '取消',
    },
    showConfirmButton: {
      type: Boolean,
      value: true,
    },
    position: {
      type: String,
      value: 'center',
    },
    direction: {
      type: String,
      value: 'row',
    },
    actions: {
      type: Array,
      value: [],
    },
    confirmOpenTypeValue: String,
    asyncClose: {
      type: Boolean,
      value: false,
    },
  };

  data = {
    classPrefix: name,
  };

  onConfirm() {
    const { asyncClose } = this.properties;
    if (!asyncClose) {
      this.setData({
        show: false,
      });
    }
    this.triggerEvent('confirm');
    this._onComfirm && this._onComfirm();
  }

  onCancel() {
    const { asyncClose } = this.properties;
    if (!asyncClose) {
      this.setData({
        show: false,
      });
    }
    this.triggerEvent('cancel');
    this._onCancel && this._onCancel();
  }

  close() {
    this.setData({
      show: false,
    });
    this.triggerEvent('close');
  }

  onActionTap(e: any) {
    const { asyncClose } = this.properties;
    if (!asyncClose) {
      this.setData({
        show: false,
      });
    }
    const { index } = e.currentTarget.dataset;
    this.triggerEvent('action', { index });
    this._onAction && this._onAction({ index });
  }

  openValueCBHandle(e) {
    this.triggerEvent('open-type-event', e.detail);
  }

  openValueErrCBHandle(e) {
    this.triggerEvent('open-type-error-event', e.detail);
  }
}
