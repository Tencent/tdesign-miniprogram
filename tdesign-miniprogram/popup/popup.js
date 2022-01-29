var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { classNames } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-popup`;
const defaultTransitionProps = {
    name: `${name}--transition`,
    durations: [300, 300],
    appear: false,
};
let Popup = class Popup extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-overlay', 't-class-content'];
        this.options = {
            multipleSlots: true,
            styleIsolation: 'shared',
        };
        this.properties = props;
        this.data = {
            prefix,
            classPrefix: name,
            className: name,
            dataTransitionProps: Object.assign({}, defaultTransitionProps),
        };
        this.lifetimes = {
            attached() {
                this.setClass();
                this.setTransitionProps();
            },
        };
    }
    setClass() {
        const { placement, showOverlay } = this.properties;
        const className = classNames(name, 't-class', `${name}--position-${placement}`, {
            [`${name}--overlay-transparent`]: !showOverlay,
        });
        this.setData({
            className,
        });
    }
    setTransitionProps() {
        if (!this.properties.transitionProps) {
            return;
        }
        const transitionProps = Object.assign(Object.assign({}, defaultTransitionProps), this.properties.transitionProps);
        this.setData({
            dataTransitionProps: transitionProps,
        });
    }
    onOverlayClick() {
        const { closeOnOverlayClick } = this.properties;
        if (closeOnOverlayClick) {
            this.triggerEvent('visible-change', { visible: false });
        }
    }
    onCloseClick() {
        this.triggerEvent('visible-change', { visible: false });
    }
    preventEvent() { }
};
Popup = __decorate([
    wxComponent()
], Popup);
export default Popup;

//# sourceMappingURL=popup.js.map
