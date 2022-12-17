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
    buttonVariant: 'text',
  };

  observers = {
    'confirmBtn, cancelBtn'(confirm, cancel) {
      const rect: Record<string, any> = {};
      // 其中一个为 null，也应该属于 text
      const allText = [confirm, cancel].every((item) => typeof item === 'string' || item == null);
      const buttonMap = { confirm, cancel };

      if (allText) {
        this.setData({ buttonVariant: 'text' });
      } else {
        this.setData({ buttonVariant: 'base' });
      }

      Object.keys(buttonMap).forEach((key) => {
        const btn = buttonMap[key];
        if (typeof btn === 'string') {
          rect[`_${key}`] = { content: btn };
        } else if (btn && typeof btn === 'object') {
          rect[`_${key}`] = btn;
        }
      });

      this.setData({ ...rect });
    },
  };

  methods = {
    onTplButtonTap(e) {
      const evtType = e.type;
      const { type, extra } = e.target.dataset;
      const button = this.data[`${type}Btn`];
      const cbName = `bind${evtType}`;

      if (type === 'action') {
        this.onActionTap(extra);
        return;
      }

      if (typeof button[cbName] === 'function') {
        button[cbName](e);
      } else if (['confirm', 'cancel'].includes(type)) {
        this.triggerEvent(type);
      }

      if (evtType !== 'tap') {
        const success = e.detail?.errMsg.indexOf('ok') > -1;
        this.triggerEvent(success ? 'open-type-event' : 'open-type-error-event', e.detail);
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
      this.triggerEvent('close', { trigger: 'cancel' });
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
        this.triggerEvent('close', { trigger: 'overlay' });
      }
      this.triggerEvent('overlayClick');
    },

    onActionTap(index: number) {
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
