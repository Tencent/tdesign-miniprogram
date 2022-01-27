var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import dom from '../behaviors/dom';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
let ARRAY = [];
const { prefix } = config;
let SwiperCell = class SwiperCell extends SuperComponent {
    constructor() {
        super(...arguments);
        this.behaviors = [dom];
        this.externalClasses = ['t-class'];
        this.options = {
            multipleSlots: true,
        };
        this.properties = props;
        this.data = {
            wrapperStyle: '',
            closed: true,
            opened: false,
            classPrefix: `.${prefix}-swipe-cell`,
        };
    }
    attached() {
        ARRAY.push(this);
        this.setSwipeWidth();
    }
    setSwipeWidth() {
        return __awaiter(this, void 0, void 0, function* () {
            const rightRect = yield this.gettingBoundingClientRect(`${this.data.classPrefix}__right`);
            const leftRect = yield this.gettingBoundingClientRect(`${this.data.classPrefix}__left`);
            this.setData({
                leftWidth: leftRect.width,
                rightWidth: rightRect.width,
            });
        });
    }
    detached() {
        ARRAY = ARRAY.filter((item) => item !== this);
    }
    open() {
        this.setData({ opened: true });
    }
    close() {
        this.setData({ opened: false });
    }
    closeOther() {
        ARRAY.filter((item) => item !== this).forEach((item) => item.close());
    }
    onTap() {
        this.close();
    }
    onActionTap(event) {
        const { currentTarget: { dataset: { action }, }, } = event;
        this.triggerEvent('click', action);
    }
};
SwiperCell = __decorate([
    wxComponent()
], SwiperCell);
export default SwiperCell;

//# sourceMappingURL=swipe-cell.js.map
