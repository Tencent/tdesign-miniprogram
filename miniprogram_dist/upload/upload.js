var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { isObject, SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-upload`;
let Upload = class Upload extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = [`${prefix}-class`];
        this.options = {
            multipleSlots: true,
        };
        this.data = {
            classPrefix: name,
            prefix,
            current: false,
            proofs: [],
            customFiles: [],
            customLimit: 0,
            mediaType: [],
            // 以下是声明properties
            config: {},
            files: [],
            max: 0,
            sizeLimit: 0,
            requestMethod: null,
            gridItemStyle: '',
            column: 4,
        };
        this.properties = props;
        this.observers = {
            files(files) {
                this.handleLimit(files, this.data.max);
            },
            max(max) {
                this.handleLimit(this.data.customFiles, max);
            },
            gridConfig() {
                this.updateGrid();
            },
        };
    }
    onProofTap(e) {
        var _a;
        const { index } = e.currentTarget.dataset;
        wx.previewImage({
            urls: this.data.customFiles.filter((file) => file.percent !== -1).map((file) => file.url),
            current: (_a = this.data.customFiles[index]) === null || _a === void 0 ? void 0 : _a.url,
        });
    }
    ready() {
        this.handleLimit(this.data.customFiles, this.data.max);
        this.updateGrid();
    }
    handleLimit(customFiles, max) {
        while (max !== 0 && customFiles.length - max > 0) {
            customFiles.pop();
        }
        const proofs = [];
        customFiles.forEach((item) => {
            if (item.type !== 'video') {
                proofs.push(item.url);
            }
        });
        this.setData({
            customFiles: customFiles,
            proofs,
            customLimit: max === 0 ? Number.MAX_SAFE_INTEGER : max - customFiles.length,
        });
    }
    uploadFiles(files) {
        return new Promise((resolve) => {
            // 开始调用上传函数
            const task = this.data.requestMethod(files);
            if (task instanceof Promise) {
                return task;
            }
            resolve({});
        });
    }
    startUpload(files) {
        // 如果传入了上传函数，则进度设为0并开始上传，否则跳过上传
        if (typeof this.data.requestMethod === 'function') {
            return this.uploadFiles(files);
        }
        this.handleLimit(this.data.customFiles, this.data.max);
        return Promise.resolve();
    }
    /** 选择图片 */
    chooseImg() {
        const { config, max, sizeLimit } = this.data;
        wx.chooseImage(Object.assign(Object.assign({ count: max }, config), { success: (res) => {
                const tempFiles = [];
                res.tempFiles.forEach((temp) => {
                    if (sizeLimit && temp.size > sizeLimit) {
                        wx.showToast({ icon: 'none', title: '图片大小超过限制' });
                        return;
                    }
                    const name = this.getRandFileName(temp.path);
                    tempFiles.push({
                        name,
                        type: 'image',
                        url: temp.path,
                        size: temp.size,
                        progress: 0,
                    });
                });
                this.triggerEvent('success', res);
                this.startUpload(tempFiles);
            }, fail: (err) => {
                this.triggerEvent('fail', err);
            }, complete: (res) => {
                this.triggerEvent('complete', res);
            } }));
    }
    /** 选择视频 */
    chooseVideo() {
        const { config } = this.data;
        wx.chooseVideo(Object.assign(Object.assign({}, config), { success: (res) => {
                if (this.data.sizeLimit && res.size > this.data.sizeLimit) {
                    wx.showToast({ icon: 'none', title: '视频大小超过限制' });
                    return;
                }
                this.triggerEvent('success', res);
                this.startUpload(this.data.customFiles);
            }, fail: (err) => {
                this.triggerEvent('fail', err);
            }, complete: (res) => {
                this.triggerEvent('complete', res);
            } }));
    }
    // 选中文件之后，计算一个随机的短文件名
    getRandFileName(filePath) {
        const extIndex = filePath.lastIndexOf('.');
        const extName = extIndex === -1 ? '' : filePath.substr(extIndex);
        return (parseInt(`${Date.now()}${Math.floor(Math.random() * 900 + 100)}`, 10).toString(36) + extName);
    }
    closePop() {
        this.setData({ showPop: false });
    }
    onAddTap() {
        const { mediaType } = this.data;
        // if (mediaType.length > 1) {
        //   this.setData({ showPop: true });
        //   return;
        // }
        switch (mediaType[0]) {
            case 'video':
                this.chooseVideo();
                break;
            case 'image':
                this.chooseImg();
                break;
            default:
                // 后续可能有file等类型
                break;
        }
    }
    onChooseImage() {
        this.chooseImg();
        // this.setData({ showPop: false });
    }
    onChooseVideo() {
        this.chooseVideo();
        // this.setData({ showPop: false });
    }
    onDelete(e) {
        const { index } = e.currentTarget.dataset;
        this.deleteHandle(index);
    }
    deleteHandle(index) {
        const { customFiles } = this.data;
        const delFile = customFiles[index];
        this.triggerEvent('remove', { index, file: delFile });
    }
    updateGrid() {
        let { gridConfig = {} } = this.properties;
        if (!isObject(gridConfig))
            gridConfig = {};
        const { column = 4, width = 160, height = 160 } = gridConfig;
        this.setData({
            gridItemStyle: `width:${width}rpx;height:${height}rpx`,
            column: column,
        });
    }
};
Upload = __decorate([
    wxComponent()
], Upload);
export default Upload;

//# sourceMappingURL=upload.js.map
