var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';
import { pageScrollMixin, getRect } from './utils';
const { prefix } = config;
const ContainerClass = `.${prefix}-sticky`;
let Sticky = class Sticky extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.properties = props;
        this.behaviors = [
            pageScrollMixin(function (event) {
                this.onScroll(event);
            }),
        ];
        this.observers = {
            'offsetTop, disabled, container': this.onScroll,
        };
        this.data = {
            containerStyle: '',
            contentStyle: '',
            classPrefix: `.${prefix}-sticky`,
        };
    }
    mounted() {
        this.onScroll();
    }
    onScroll(event) {
        const { scrollTop } = event || {};
        const { container, offsetTop, disabled } = this.properties;
        if (disabled) {
            this.setDataAfterDiff({
                isFixed: false,
                transform: 0,
            });
            return;
        }
        this.scrollTop = scrollTop || this.scrollTop;
        if (typeof container === 'function') {
            Promise.all([getRect(this, ContainerClass), this.getContainerRect()]).then(([root, container]) => {
                if (offsetTop + root.height > container.height + container.top) {
                    this.setDataAfterDiff({
                        isFixed: false,
                        transform: container.height - root.height,
                    });
                }
                else if (offsetTop >= root.top) {
                    this.setDataAfterDiff({
                        isFixed: true,
                        height: root.height,
                        transform: 0,
                    });
                }
                else {
                    this.setDataAfterDiff({ isFixed: false, transform: 0 });
                }
            });
            return;
        }
        getRect(this, ContainerClass).then((root) => {
            if (offsetTop >= root.top) {
                this.setDataAfterDiff({ isFixed: true, height: root.height });
                this.transform = 0;
            }
            else {
                this.setDataAfterDiff({ isFixed: false });
            }
        });
    }
    setDataAfterDiff(data) {
        const { offsetTop } = this.properties;
        const { containerStyle: prevContainerStyle, contentStyle: prevContentStyle } = this.data;
        const { isFixed, height, transform } = data;
        wx.nextTick(() => {
            let containerStyle = '';
            let contentStyle = '';
            if (isFixed) {
                containerStyle += `height:${height}px;`;
                contentStyle += `position:fixed;top:${offsetTop}px`;
            }
            if (transform) {
                const translate = `translate3d(0, ${transform}px, 0)`;
                contentStyle += `-webkit-transform:${translate};transform:${translate};`;
            }
            if (prevContainerStyle !== containerStyle || prevContentStyle !== contentStyle) {
                this.setData({ containerStyle, contentStyle });
            }
            this.triggerEvent('scroll', {
                scrollTop: this.scrollTop,
                isFixed,
            });
        });
    }
    getContainerRect() {
        const nodesRef = this.properties.container();
        return new Promise((resolve) => nodesRef.boundingClientRect(resolve).exec());
    }
};
Sticky = __decorate([
    wxComponent()
], Sticky);
export default Sticky;

//# sourceMappingURL=sticky.js.map
