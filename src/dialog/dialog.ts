import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-dialog`;

@wxComponent()
export default class Dailog extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };
  externalClasses = ['t-class', 't-class-confirm', 't-class-cancel'];
  properties = {
    visible: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      optionalTypes: [Boolean],
      value: '',
    },
    content: {
      type: String,
      optionalTypes: [Boolean],
      value: '',
    },
    actions: {
      type: Array,
      optionalTypes: [Boolean],
      value: [],
    },
    confirmBtn: {
      type: String,
      optionalTypes: [Boolean],
      value: '',
    },
    cancelBtn: {
      type: String,
      optionalTypes: [Boolean],
      value: '',
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
    buttonLayout: {
      type: String,
      value: 'horizontal', // horizontal 水平；vertical 垂直
    },
  };

  data = {
    classPrefix: name,
  };

  onConfirm() {
    this.setData({
      visible: false,
    });
    this.triggerEvent('confirm');
    this._onComfirm && this._onComfirm();
  }

  onCancel() {
    this.close();
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
    this.setData({
      visible: false,
    });

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
