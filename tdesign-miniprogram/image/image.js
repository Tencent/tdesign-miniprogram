var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import ImageProps from './props';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-image`;
let Image = class Image extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class', 't-class-load'];
        this.options = {
            multipleSlots: true,
        };
        this.properties = ImageProps;
        this.data = {
            isLoading: true,
            isFailed: false,
            widthStyle: '',
            classPrefix: name,
        };
        this.preSrc = ''; // 保留上一次的src,防止在src相同时重复update
        this.lifetimes = {
            attached() {
                this.update();
            },
        };
        this.observers = {
            src() {
                if (this.preSrc === this.properties.src)
                    return;
                this.update();
            },
        };
    }
    onLoaded(e) {
        const sdkVersion = wx.getSystemInfoSync().SDKVersion;
        const versionArray = sdkVersion.split('.').map((v) => parseInt(v, 10));
        // 版本号低于2.10.3时组件内部实现heightFix模式
        if (versionArray[0] < 2 ||
            (versionArray[0] === 2 && versionArray[1] < 10) ||
            (versionArray[0] === 2 && versionArray[1] === 10 && versionArray[2] < 3)) {
            const mode = this.properties.mode;
            if (mode === 'heightFix') {
                // 实现heightFix模式，保持高度和宽高比，设置对应的宽度
                const { height: picHeight, width: picWidth } = e.detail;
                const query = this.createSelectorQuery();
                query
                    .select('#image')
                    .boundingClientRect((res) => {
                    const { height } = res;
                    const resultWidth = ((height / picHeight) * picWidth).toFixed(2);
                    this.setData({ widthStyle: `width: ${resultWidth}px;` });
                })
                    .exec();
            }
        }
        this.setData({
            isLoading: false,
            isFailed: false,
        });
        this.triggerEvent('load', e.detail);
    }
    onLoadError(e) {
        this.setData({
            isLoading: false,
            isFailed: true,
        });
        this.triggerEvent('error', e.detail);
    }
    update() {
        const { src } = this.properties;
        this.preSrc = src;
        if (!src) {
            // 链接为空时直接触发加载失败
            this.onLoadError({ errMsg: '图片链接为空' });
        }
        else {
            this.setData({
                isLoading: true,
                isFailed: false,
            });
        }
    }
};
Image = __decorate([
    wxComponent()
], Image);
export default Image;

//# sourceMappingURL=image.js.map
