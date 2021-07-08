import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-dialog`;

@wxComponent()
export default class Dailog extends SuperComponent {
  externalClasses = ['t-class', 't-cancel-btn', 't-confirm-btn'];
  properties = {
    visible: {
      type: Boolean,
      value: false,
    },
    header: {
      type: String,
      optionalTypes: [Boolean],
      value: true,
    },
    body: {
      type: String,
      value: '',
    },
    footer: {
      type: Boolean,
      value: true,
    },
    confirmBtn: {
      type: String,
      optionalTypes: [Boolean],
      value: '确认',
    },
    cancelBtn: {
      type: String,
      optionalTypes: [Boolean],
      value: '取消',
    },
    showOverlay: {
      type: Boolean,
      value: true,
    },
    closeOnOverlayClick: {
      type: Boolean,
      value: true,
    },
    preventScrollThrough: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: Number,
      value: 2500,
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
        visible: false,
      });
    }
    this.triggerEvent('confirm');
    this._onComfirm && this._onComfirm();
  }

  onCancel() {
    const { asyncClose } = this.properties;
    if (!asyncClose) {
      this.close();
    }
    this.triggerEvent('cancel');
  }

  close() {
    this.setData({
      visible: false,
    });
    this.triggerEvent('close');
  }

  overlayClick() {
    if (this.properties.closeOnOverlayClick) {
      this.close();
    }
    this.triggerEvent('overlayClick');
  }

  onActionTap(e: any) {
    const { asyncClose } = this.properties;
    if (!asyncClose) {
      this.setData({
        visible: false,
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
