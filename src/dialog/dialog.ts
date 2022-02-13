import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

const { prefix } = config;
const name = `${prefix}-dialog`;

@wxComponent()
export default class Dialog extends SuperComponent {
  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true,
  };

  externalClasses = [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-confirm`,
    `${prefix}-class-cancel`,
    `${prefix}-class-action`,
  ];

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    onTplButtonTap(e) {
      const evtType = e.type;
      const { type } = e.target.dataset;

      if (`bind${evtType}` in this.data[`${type}Btn`]) {
        this.data[`${type}Btn`][`bind${evtType}`](e.detail);
      }
    },

    onConfirm() {
      this.triggerEvent('confirm');
      if (this._onComfirm) {
        this._onComfirm();
        this.close();
      }
    },

    onCancel() {
      this.triggerEvent('close');
      this.triggerEvent('cancel');

      if (this._onCancel) {
        this._onCancel();
        this.close();
      }
    },

    close() {
      this.setData({ visible: false });
    },

    overlayClick() {
      if (this.properties.closeOnOverlayClick) {
        this.triggerEvent('close');
      }
      this.triggerEvent('overlayClick');
    },

    onActionTap(e: any) {
      const { index } = e.currentTarget.dataset;

      this.triggerEvent('action', { index });
      if (this._onAction) {
        this._onAction({ index });
        this.close();
      }
    },

    openValueCBHandle(e) {
      this.triggerEvent('open-type-event', e.detail);
    },

    openValueErrCBHandle(e) {
      this.triggerEvent('open-type-error-event', e.detail);
    },
  };
}
