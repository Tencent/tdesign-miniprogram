import { isObject, SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import { UploadFile } from './type';
import config from '../common/config';
import { isOverSize } from '../common/utils';

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
    column: 4,
    dragBaseData: {}, // 拖拽所需要页面数据
    rows: 0, // 行数
    dragWrapStyle: '', // 拖拽容器的样式
    dragList: [], // 拖拽的数据列
    dragging: true, // 是否开始拖拽
    dragLayout: false, // 是否开启拖拽布局
  };

  properties = props;

  controlledProps = [
    {
      key: 'files',
      event: 'success',
    },
  ];

  observers = {
    'files, max, draggable'(files: UploadFile, max: number) {
      this.handleLimit(files, max);
    },
    gridConfig() {
      this.updateGrid();
    },
  };

  lifetimes = {
    ready() {
      this.handleLimit(this.data.customFiles, this.data.max);
      this.updateGrid();
    },
  };

  onProofTap(e: any) {
    this.onFileClick(e);
    const { index } = e.currentTarget.dataset;
    wx.previewImage({
      urls: this.data.customFiles.filter((file) => file.percent !== -1).map((file) => file.url),
      current: this.data.customFiles[index]?.url,
    });
  }

  handleLimit(customFiles: UploadFile[], max: number) {
    if (max === 0) {
      max = 20;
    }
    this.setData({
      customFiles: customFiles.length > max ? customFiles.slice(0, max) : customFiles,
      customLimit: max - customFiles.length,
      dragging: true,
    });
    this.initDragLayout();
  }

  triggerSuccessEvent(files) {
    this._trigger('success', { files: [...this.data.customFiles, ...files] });
  }

  triggerFailEvent(err) {
    this.triggerEvent('fail', err);
  }

  onFileClick(e) {
    const { file } = e.currentTarget.dataset;
    this.triggerEvent('click', { file });
  }

  /**
   * 由于小程序暂时在ios上不支持返回上传文件的fileType，这里用文件的后缀来判断
   * @param mediaType
   * @param tempFilePath
   * @returns string
   * @link https://developers.weixin.qq.com/community/develop/doc/00042820b28ee8fb41fc4d0c254c00
   */
  getFileType(mediaType: string[], tempFilePath: string, fileType?: string) {
    if (fileType) return fileType; // 如果有返回fileType就直接用
    if (mediaType.length === 1) {
      // 在单选媒体类型的时候直接使用单选媒体类型
      return mediaType[0];
    }
    // 否则根据文件后缀进行判读
    const videoType = ['avi', 'wmv', 'mkv', 'mp4', 'mov', 'rm', '3gp', 'flv', 'mpg', 'rmvb'];
    const temp = tempFilePath.split('.');
    const postfix = temp[temp.length - 1];
    if (videoType.includes(postfix.toLocaleLowerCase())) {
      return 'video';
    }
    return 'image';
  }

  // 选中文件之后，计算一个随机的短文件名
  getRandFileName(filePath) {
    const extIndex = filePath.lastIndexOf('.');
    const extName = extIndex === -1 ? '' : filePath.substr(extIndex);
    return parseInt(`${Date.now()}${Math.floor(Math.random() * 900 + 100)}`, 10).toString(36) + extName;
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

  initDragLayout() {
    const { draggable, disabled } = this.properties;
    if (!draggable || disabled) return;
    this.initDragList();
    this.initDragBaseData();
  }

  initDragList() {
    let i = 0;
    const { column, customFiles, customLimit } = this.data;
    const dragList = [];
    customFiles.forEach((item, index) => {
      dragList.push({
        realKey: i, // 真实顺序
        sortKey: index, // 整体顺序
        tranX: `${(index % column) * 100}%`,
        tranY: `${Math.floor(index / column) * 100}%`,
        data: { ...item },
      });
      i += 1;
    });
    if (customLimit > 0) {
      const listLength = dragList.length;
      dragList.push({
        realKey: listLength, // 真实顺序
        sortKey: listLength, // 整体顺序
        tranX: `${(listLength % column) * 100}%`,
        tranY: `${Math.floor(listLength / column) * 100}%`,
        fixed: true,
      });
    }
    this.data.rows = Math.ceil(dragList.length / column);
    this.setData({
      dragList,
    });
  }

  initDragBaseData() {
    const { classPrefix, rows, column, customFiles } = this.data;
    if (customFiles.length === 0) {
      this.setData({
        dragBaseData: {},
        dragWrapStyle: '',
        dragLayout: false,
      });
      return;
    }
    const query = this.createSelectorQuery();
    const selectorGridItem = `.${classPrefix} >>> .t-grid-item`;
    const selectorGrid = `.${classPrefix} >>> .t-grid`;
    query.select(selectorGridItem).boundingClientRect();
    query.select(selectorGrid).boundingClientRect();
    query.selectViewport().scrollOffset();
    query.exec((res) => {
      const [{ width, height }, { left, top }, { scrollTop }] = res;
      const dragBaseData = {
        rows,
        classPrefix,
        itemWidth: width,
        itemHeight: height,
        wrapLeft: left,
        wrapTop: top + scrollTop,
        columns: column,
      };
      const dragWrapStyle = `height: ${rows * height}px`;
      this.setData(
        {
          dragBaseData,
          dragWrapStyle,
          dragLayout: true,
        },
        () => {
          // 为了给拖拽元素加上拖拽方法，同时控制不拖拽时不取消穿透
          const timer = setTimeout(() => {
            this.setData({ dragging: false });
            clearTimeout(timer);
          }, 0);
        },
      );
    });
  }

  methods = {
    uploadFiles(files: UploadFile[]) {
      return new Promise((resolve) => {
        // 开始调用上传函数
        const task = this.data.requestMethod(files);
        if (task instanceof Promise) {
          return task;
        }
        resolve({});
      });
    },

    startUpload(files: UploadFile[]) {
      // 如果传入了上传函数，则进度设为0并开始上传，否则跳过上传
      if (typeof this.data.requestMethod === 'function') {
        return this.uploadFiles(files)
          .then(() => {
            files.forEach((file) => {
              file.percent = 100;
            });
            this.triggerSuccessEvent(files);
          })
          .catch((err) => {
            this.triggerFailEvent(err);
          });
      }

      // 如果没有上传函数，success事件与微信api上传成功关联
      this.triggerSuccessEvent(files);

      this.handleLimit(this.data.customFiles, this.data.max);
      return Promise.resolve();
    },

    onAddTap() {
      const { disabled, mediaType, source } = this.properties;
      if (disabled) return;
      if (source === 'media') {
        this.chooseMedia(mediaType);
      } else {
        this.chooseMessageFile(mediaType);
      }
    },

    chooseMedia(mediaType) {
      const { config, sizeLimit, customLimit } = this.data;

      wx.chooseMedia({
        count: customLimit,
        mediaType,
        ...config,
        success: (res) => {
          const files = [];

          // 支持单/多文件
          res.tempFiles.forEach((temp) => {
            const { size, fileType, tempFilePath, width, height, duration, thumbTempFilePath, ...res } = temp;

            if (isOverSize(size, sizeLimit)) {
              let title = `${fileType === 'image' ? '图片' : '视频'}大小超过限制`;

              if (typeof sizeLimit !== 'number') {
                title = sizeLimit.message.replace('{sizeLimit}', sizeLimit?.size);
              }
              wx.showToast({ icon: 'none', title });
              return;
            }

            const name = this.getRandFileName(tempFilePath);
            files.push({
              name,
              type: this.getFileType(mediaType, tempFilePath, fileType),
              url: tempFilePath,
              size: size,
              width: width,
              height: height,
              duration: duration,
              thumb: thumbTempFilePath,
              percent: 0,
              ...res,
            });
          });
          this.afterSelect(files);
        },
        fail: (err) => {
          this.triggerFailEvent(err);
        },
        complete: (res) => {
          this.triggerEvent('complete', res);
        },
      });
    },

    chooseMessageFile(mediaType) {
      const { max, config, sizeLimit } = this.properties;
      wx.chooseMessageFile({
        count: max,
        type: Array.isArray(mediaType) ? 'all' : mediaType,
        ...config,
        success: (res) => {
          const files = [];

          // 支持单/多文件
          res.tempFiles.forEach((temp) => {
            const { size, type: fileType, path: tempFilePath, ...res } = temp;

            if (isOverSize(size, sizeLimit)) {
              let title = `${fileType === 'image' ? '图片' : '视频'}大小超过限制`;

              if (typeof sizeLimit !== 'number') {
                title = sizeLimit.message.replace('{sizeLimit}', sizeLimit?.size);
              }
              wx.showToast({ icon: 'none', title });
              return;
            }

            const name = this.getRandFileName(tempFilePath);
            files.push({
              name,
              type: this.getFileType(mediaType, tempFilePath, fileType),
              url: tempFilePath,
              size: size,
              percent: 0,
              ...res,
            });
          });
          this.afterSelect(files);
        },
        fail: (err) => this.triggerFailEvent(err),
        complete: (res) => this.triggerEvent('complete', res),
      });
    },

    afterSelect(files) {
      this._trigger('select-change', {
        files: [...this.data.customFiles],
        currentSelectedFiles: [files],
      });
      this._trigger('add', { files });
      this.startUpload(files);
    },

    dragVibrate(e) {
      const { vibrateType } = e;
      const { draggable } = this.data;
      const dragVibrate = draggable?.vibrate ?? true;
      const dragCollisionVibrate = draggable?.collisionVibrate;
      if ((dragVibrate && vibrateType === 'longPress') || (dragCollisionVibrate && vibrateType === 'touchMove')) {
        wx.vibrateShort({
          type: 'light',
        });
      }
    },

    dragStatusChange(e) {
      const { dragging } = e;
      this.setData({ dragging });
    },

    dragEnd(e) {
      const { dragCollisionList } = e;
      let files = [];
      if (dragCollisionList.length === 0) {
        files = this.data.customFiles;
      } else {
        files = dragCollisionList.reduce((list, item) => {
          const { realKey, data, fixed } = item;
          if (!fixed) {
            list[realKey] = {
              ...data,
            };
          }
          return list;
        }, []);
      }
      this.triggerDropEvent(files);
    },

    triggerDropEvent(files) {
      const { transition } = this.properties;
      if (transition.backTransition) {
        const timer = setTimeout(() => {
          this.triggerEvent('drop', { files });
          clearTimeout(timer);
        }, transition.duration);
      } else {
        this.triggerEvent('drop', { files });
      }
    },
  };
}
