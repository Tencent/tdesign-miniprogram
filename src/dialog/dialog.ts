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
        this.data[`${type}Btn`][`bind${evtType}`](e.detail)
      }
    },

    onConfirm() {
      this.setData({
        visible: false,
      });
      this.triggerEvent('confirm');
      this._onComfirm && this._onComfirm();
    },

    onCancel() {
      this.close();
      this.triggerEvent('cancel');
    },

    close() {
      this.setData({
        visible: false,
      });
      this.triggerEvent('close');
    },

    overlayClick() {
      if (this.properties.closeOnOverlayClick) {
        this.close();
      }
      this.triggerEvent('overlayClick');
    },

    onActionTap(e: any) {
      const { index } = e.currentTarget.dataset;

      this.setData({
        visible: false,
      });
      this.triggerEvent('action', { index });
      this._onAction && this._onAction({ index });
    },

    openValueCBHandle(e) {
      this.triggerEvent('open-type-event', e.detail);
    },

    openValueErrCBHandle(e) {
      this.triggerEvent('open-type-error-event', e.detail);
    },
  };
}
