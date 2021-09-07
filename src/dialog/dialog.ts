import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-dialog`;

@wxComponent()
export default class Dailog extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };
  externalClasses = ['t-class', 't-class-confirm', 't-class-cancel'];
  properties = props;

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
