var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent, isObject } from '../common/src/index';
import config from '../common/config';
import props from './grid-item-props';
const { prefix } = config;
const name = `${prefix}-grid-item`;
var LinkTypes;
(function (LinkTypes) {
    LinkTypes["redirect-to"] = "redirectTo";
    LinkTypes["switch-tab"] = "switchTab";
    LinkTypes["relaunch"] = "reLaunch";
    LinkTypes["navigate-to"] = "navigateTo";
})(LinkTypes || (LinkTypes = {}));
let GridItem = class GridItem extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-image', 't-class-text', 't-class-description'];
        this.options = {
            multipleSlots: true,
        };
        this.relations = {
            './grid': {
                type: 'ancestor',
                linked(target) {
                    this.parent = target;
                    this.updateStyle();
                },
            },
        };
        this.properties = props;
        this.data = {
            classPrefix: name,
            gridItemStyle: '',
            gridItemWrapperStyle: '',
            gridItemContentStyle: '',
            align: 'center',
            layout: 'vertical',
        };
    }
    updateStyle() {
        const { hover, align } = this.parent.properties;
        const gridItemStyles = [];
        const gridItemWrapperStyles = [];
        const gridItemContentStyles = [];
        const widthStyle = this.getWidthStyle();
        const paddingStyle = this.getPaddingStyle();
        const borderStyle = this.getBorderStyle();
        widthStyle && gridItemStyles.push(widthStyle);
        paddingStyle && gridItemWrapperStyles.push(paddingStyle);
        borderStyle && gridItemContentStyles.push(borderStyle);
        this.setData({
            gridItemStyle: gridItemStyles.join(';'),
            gridItemWrapperStyle: gridItemWrapperStyles.join(';'),
            gridItemContentStyle: gridItemContentStyles.join(';'),
            hover,
            layout: this.properties.layout,
            align: align,
        });
    }
    // 判断应该加在gridItem上的宽度
    getWidthStyle() {
        const { column = 4 } = this.parent.properties;
        return `width:${(1 / column) * 100}%`;
    }
    // 获取应该加在gridWrap上的padding
    getPaddingStyle() {
        const { gutter } = this.parent.properties;
        if (gutter)
            return `padding-left:${gutter}rpx;padding-top:${gutter}rpx`;
        return '';
    }
    // 判断border在grid-item-content上的css属性
    getBorderStyle() {
        const { gutter } = this.parent.properties;
        let { border } = this.parent.properties;
        if (!border)
            return ''; // 如果border的值没传或者是border的值为false
        if (!isObject(border))
            border = {};
        const { color = '#266FE8', width = 2, style = 'solid' } = border;
        if (gutter)
            return `border:${width}rpx ${style} ${color}`;
        return `border-top:${width}rpx ${style} ${color};border-left:${width}rpx ${style} ${color}`;
    }
    onClick(e) {
        const { item } = e.currentTarget.dataset;
        this.triggerEvent('click', item);
        this.jumpLink();
    }
    jumpLink() {
        const { url, jumpType } = this.properties;
        if (url && jumpType) {
            if (LinkTypes[jumpType]) {
                wx[LinkTypes[jumpType]]({ url });
            }
        }
    }
};
GridItem = __decorate([
    wxComponent()
], GridItem);
export default GridItem;

//# sourceMappingURL=grid-item.js.map
