var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-dialog`;
let Dialog = class Dialog extends SuperComponent {
    constructor() {
        super(...arguments);
        this.options = {
            multipleSlots: true,
            addGlobalClass: true,
        };
        this.externalClasses = [
            `${prefix}-class`,
            `${prefix}-class-content`,
            `${prefix}-class-confirm`,
            `${prefix}-class-cancel`,
            `${prefix}-class-action`,
        ];
        this.properties = props;
        this.data = {
            prefix,
            classPrefix: name,
        };
        this.methods = {
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
            onActionTap(e) {
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
};
Dialog = __decorate([
    wxComponent()
], Dialog);
export default Dialog;

//# sourceMappingURL=dialog.js.map
