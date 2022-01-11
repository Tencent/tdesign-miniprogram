var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { isNumber } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-skeleton`;
let Skeleton = class Skeleton extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-avatar', 't-class-text'];
        this.properties = props;
        this.observers = {
            rowCol(val) {
                const rowStyles = [];
                const isNumList = [];
                if (Array.isArray(val)) {
                    val.forEach((v) => {
                        if (isNumber(v)) {
                            const curArr = [];
                            const defaultWidth = `${(686 - 32 * (v - 1)) / v}rpx`;
                            // eslint-disable-next-line no-plusplus
                            for (let i = 0; i < v; i++) {
                                curArr.push({ width: defaultWidth, height: '32rpx' });
                            }
                            rowStyles.push(curArr);
                            isNumList.push(true);
                        }
                        else {
                            rowStyles.push(Array.isArray(v) ? v : [v]);
                            isNumList.push(false);
                        }
                    });
                }
                this.setData({ rowStyles, isNumList });
            },
        };
        this.data = {
            classPrefix: name,
            isNumList: [],
            rowStyles: [],
        };
    }
};
Skeleton = __decorate([
    wxComponent()
], Skeleton);
export default Skeleton;

//# sourceMappingURL=skeleton.js.map
