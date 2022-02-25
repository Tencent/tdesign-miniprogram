import { isObject, SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import { MediaType, UploadMpConfig, UploadFile } from './type';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-upload`;
@wxComponent()
export default class Upload extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  data = {
    classPrefix: name,
    prefix,
    current: false,
    proofs: [],
    customFiles: [] as UploadFile[], // 内部动态修改的files
    customLimit: 0, // 内部动态修改的limit
    mediaType: [] as MediaType[], // 这里由于小程序api问题目前不支持同时上传视频和图片
    // 以下是声明properties
    config: {} as UploadMpConfig,
    files: [] as UploadFile[],
    max: 0,
    sizeLimit: 0,
    requestMethod: null,
    gridItemStyle: '',
    column: 4,
  };

  properties = props;

  controlledProps = [
    {
      key: 'files',
      event: 'success',
    },
  ];

  observers = {
    files(files: UploadFile) {
      this.handleLimit(files, this.data.max);
    },
    max(max) {
      this.handleLimit(this.data.customFiles, max);
    },
    gridConfig() {
      this.updateGrid();
    },
  };

  onProofTap(e: any) {
    const { index } = e.currentTarget.dataset;
    wx.previewImage({
      urls: this.data.customFiles.filter((file) => file.percent !== -1).map((file) => file.url),
      current: this.data.customFiles[index]?.url,
    });
  }

  ready() {
    this.handleLimit(this.data.customFiles, this.data.max);
    this.updateGrid();
  }

  handleLimit(customFiles: UploadFile[], max: number) {
    while (max !== 0 && customFiles.length - max > 0) {
      customFiles.pop();
    }
    const proofs = [];
    customFiles.forEach((item: UploadFile) => {
      if (item.type !== 'video') {
        proofs.push(item.url);
      }
    });
    this.setData({
      customFiles,
      proofs,
      customLimit: max === 0 ? Number.MAX_SAFE_INTEGER : max - customFiles.length,
    });
  }

  uploadFiles(files: UploadFile[]) {
    return new Promise((resolve) => {
      // 开始调用上传函数
      const task = this.data.requestMethod(files);
      if (task instanceof Promise) {
        return task;
      }
      resolve({});
    });
  }

  startUpload(files: UploadFile[]) {
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
    wx.chooseMedia({
      count: max,
      mediaType: ['image'],
      ...config,
      success: (res) => {
        const files = [];
        res.tempFiles.forEach((temp) => {
          if (sizeLimit && temp.size > sizeLimit) {
            wx.showToast({ icon: 'none', title: '图片大小超过限制' });
            return;
          }
          const name = this.getRandFileName(temp.tempFilePath);
          files.push({
            name,
            type: 'image',
            url: temp.tempFilePath,
            width: temp.width,
            height: temp.height,
            size: temp.size,
            progress: 0,
          });
        });
        this._trigger('select-change', {
          files: [...this.data.customFiles],
          currentSelectedFiles: [files]
        });
        this._trigger('add', { files });
        this._trigger('success', { files: [...this.data.customFiles, ...files] });
        this.startUpload(files);
      },
      fail: (err) => {
        this.triggerEvent('fail', err);
      },
      complete: (res) => {
        this.triggerEvent('complete', res);
      },
    });
  }

  /** 选择视频 */
  chooseVideo() {
    const { config, sizeLimit } = this.data;
    wx.chooseMedia({
      mediaType: ['video'],
      ...config,
      success: (res) => {
        const files = [];
        res.tempFiles.forEach((temp) => {
          if (sizeLimit && temp.size > sizeLimit) {
            wx.showToast({ icon: 'none', title: '视频大小超过限制' });
            return;
          }
          const name = this.getRandFileName(temp.tempFilePath);
          files.push({
            name,
            type: 'video',
            url: temp.tempFilePath,
            size: temp.size,
            width: temp.width,
            height: temp.height,
            duration: temp.duration,
            thumb: temp.thumbTempFilePath,
            progress: 0,
          });
        });
        this._trigger('select-change', {
          files: [...this.data.customFiles],
          currentSelectedFiles: [files]
        });
        this._trigger('add', { files });
        this._trigger('success', { files: [...this.data.customFiles, ...files] });
        this.startUpload(files);
      },
      fail: (err) => {
        this.triggerEvent('fail', err);
      },
      complete: (res) => {
        this.triggerEvent('complete', res);
      },
    });
  }

  // 选中文件之后，计算一个随机的短文件名
  getRandFileName(filePath) {
    const extIndex = filePath.lastIndexOf('.');
    const extName = extIndex === -1 ? '' : filePath.substr(extIndex);
    return (
      parseInt(`${Date.now()}${Math.floor(Math.random() * 900 + 100)}`, 10).toString(36) + extName
    );
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

  onDelete(e: any) {
    const { index } = e.currentTarget.dataset;
    this.deleteHandle(index);
  }

  deleteHandle(index: number) {
    const { customFiles } = this.data;
    const delFile = customFiles[index];
    this.triggerEvent('remove', { index, file: delFile });
  }

  updateGrid() {
    let { gridConfig = {} } = this.properties;
    if (!isObject(gridConfig)) gridConfig = {};
    const { column = 4, width = 160, height = 160 } = gridConfig as any;
    this.setData({
      gridItemStyle: `width:${width}rpx;height:${height}rpx`,
      column: column,
    });
  }
}
