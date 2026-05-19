import { SuperComponent, wxComponent } from '../common/src/index';
import props from './props';
import { UploadFile, SizeLimitObj } from './type';
import config from '../common/config';
import { isOverSize, isWxWork, isPC } from '../common/utils';
import { isObject } from '../common/validator';
import usingConfig from '../mixins/using-config';

const { prefix } = config;
const componentName = 'upload';

@wxComponent()
export default class Upload extends SuperComponent {
  behaviors = [usingConfig({ componentName })];

  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  data = {
    classPrefix: `${prefix}-${componentName}`,
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
      this.updateGrid();
      this.handleLimit(this.data.customFiles, this.data.max);
    },
  };

  handleLimit(customFiles: UploadFile[], max: number) {
    if (max === 0) {
      max = Number.MAX_SAFE_INTEGER;
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

  onFileClick(e: WechatMiniprogram.BaseEvent) {
    const { file, index } = e.currentTarget.dataset;
    this.triggerEvent('click', { index, file });
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
    if (mediaType.length === 1 && mediaType[0] !== 'mix') {
      // 在单选媒体类型（非 mix）的时候直接使用单选媒体类型
      return mediaType[0];
    }
    // 否则根据文件后缀进行判断
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

  checkFileSize(size: number, sizeLimit: SizeLimitObj | number, fileType?: string): boolean {
    if (isOverSize(size, sizeLimit)) {
      let title = `${fileType === 'video' ? '视频' : '图片'}大小超过限制`;

      if (isObject(sizeLimit)) {
        const { size: limitSize, message: limitMessage } = sizeLimit as SizeLimitObj;
        title = limitMessage?.replace('{sizeLimit}', String(limitSize));
      }
      wx.showToast({ icon: 'none', title });
      return true;
    }
    return false;
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

  /**
   * 重置拖拽布局状态
   */
  resetDragLayout() {
    this.setData({
      dragBaseData: {},
      dragWrapStyle: '',
      dragLayout: false,
    });
  }

  initDragLayout() {
    const { draggable, disabled } = this.properties;
    const { customFiles } = this.data;

    if (!draggable || disabled || customFiles.length === 0) {
      this.resetDragLayout();
      return;
    }

    this.initDragList();
    this.initDragBaseData();
  }

  initDragList() {
    let i = 0;
    const { customFiles, customLimit } = this.data;
    const theme = (this.properties as any).theme as string;
    const dragColumn = this.getDragColumn();
    const isListTheme = theme === 'list';
    const dragList = [];

    customFiles.forEach((item, index) => {
      dragList.push({
        realKey: i, // 真实顺序
        sortKey: index, // 整体顺序
        tranX: `${(index % dragColumn) * 100}%`,
        tranY: `${Math.floor(index / dragColumn) * 100}%`,
        data: { ...item },
      });
      i += 1;
    });

    // list 布局下不添加 fixed 的"添加按钮"项，因为上传按钮在列表外部
    if (customLimit > 0 && !isListTheme) {
      const listLength = dragList.length;
      dragList.push({
        realKey: listLength, // 真实顺序
        sortKey: listLength, // 整体顺序
        tranX: `${(listLength % dragColumn) * 100}%`,
        tranY: `${Math.floor(listLength / dragColumn) * 100}%`,
        fixed: true,
      });
    }

    this.data.rows = Math.ceil(dragList.length / dragColumn);
    this.setData({
      dragList,
    });
  }

  /**
   * 获取拖拽布局相关的选择器配置
   * 统一 list 和 grid 布局的选择器逻辑
   */
  getDragSelectors() {
    const { classPrefix } = this.data;
    const theme = (this.properties as any).theme as string;
    const isListTheme = theme === 'list';

    return {
      // list 布局使用非拖拽态的 list-item 选择器获取尺寸（因为拖拽态 DOM 尚未渲染）
      // grid 布局使用 grid-item 选择器（grid/grid-item 在两种态下都存在）
      itemSelector: isListTheme ? `.${classPrefix}__list-item` : `.${classPrefix} >>> .t-grid-item`,
      wrapSelector: isListTheme ? `.${classPrefix}__list` : `.${classPrefix} >>> .t-grid`,
    };
  }

  /**
   * 获取当前布局的拖拽列数
   */
  getDragColumn() {
    const theme = (this.properties as any).theme as string;
    return theme === 'list' ? 1 : this.data.column;
  }

  /**
   * 获取拖拽项的间距补偿（list 布局需要加上 padding-bottom 间距）
   */
  getDragItemGap() {
    const theme = (this.properties as any).theme as string;
    if (theme !== 'list') return 0;
    const systemInfo = wx.getSystemInfoSync();
    return (systemInfo.windowWidth / 750) * 24;
  }

  initDragBaseData() {
    const { classPrefix, rows } = this.data;
    const dragColumn = this.getDragColumn();
    const { itemSelector, wrapSelector } = this.getDragSelectors();
    const query = this.createSelectorQuery();

    query.select(itemSelector).boundingClientRect();
    query.select(wrapSelector).boundingClientRect();
    query.selectViewport().scrollOffset();

    query.exec((res) => {
      if (!res || !res[0] || !res[1]) return;
      const [{ width, height }, { left, top }, { scrollTop }] = res;

      const gap = this.getDragItemGap();
      const itemHeight = height + gap;

      const dragBaseData = {
        rows,
        classPrefix,
        itemWidth: width,
        itemHeight,
        wrapLeft: left,
        wrapTop: top + scrollTop,
        columns: dragColumn,
      };
      const dragWrapStyle = `height: ${rows * itemHeight}px`;
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
    isMediaFile(file: UploadFile) {
      return file.type === 'image' || file.type === 'video' || this.isImageUrl(file.url);
    },

    /**
     * 判断文件是否可预览（仅上传成功或无状态的媒体文件可预览）
     */
    isPreviewable(file: UploadFile) {
      return this.isMediaFile(file) && (!file.status || file.status === 'done');
    },

    getPreviewMediaSources() {
      const previewMediaSources: WechatMiniprogram.MediaSource[] = [];
      this.data.customFiles.forEach((ele) => {
        if (!this.isPreviewable(ele)) return;
        const mediaSource: WechatMiniprogram.MediaSource = {
          url: ele.url,
          type: ele.type,
          poster: ele.thumb || undefined,
        };
        previewMediaSources.push(mediaSource);
      });

      return previewMediaSources;
    },

    /**
     * 获取当前文件在可预览媒体列表中的索引
     */
    getMediaIndex(index: number) {
      const { customFiles } = this.data;
      let mediaIndex = 0;
      for (let i = 0; i < index; i += 1) {
        if (this.isPreviewable(customFiles[i])) {
          mediaIndex += 1;
        }
      }
      return mediaIndex;
    },

    onPreview(e: WechatMiniprogram.BaseEvent) {
      this.onFileClick(e);
      const { preview } = this.properties;

      if (!preview) return;

      const { file } = e.currentTarget.dataset;
      // 非图片非视频文件没有预览功能，仅触发 click 事件
      if (file && !this.isMediaFile(file)) return;

      const usePreviewMedia = this.data.customFiles.some((file: UploadFile) => file.type === 'video');
      if (usePreviewMedia) {
        this.onPreviewMedia(e);
      } else {
        this.onPreviewImage(e);
      }
    },

    isImageUrl(url: string) {
      if (!url) return false;
      const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg', 'tiff'];
      const lowerUrl = url.toLowerCase();
      return imageExts.some((ext) => lowerUrl.includes(`.${ext}`));
    },

    onPreviewImage(e: WechatMiniprogram.BaseEvent) {
      const { index } = e.currentTarget.dataset;
      const imageFiles = this.data.customFiles.filter((file: UploadFile) => this.isPreviewable(file));
      const urls = imageFiles.map((file) => file.url);
      const current = this.data.customFiles[index]?.url;
      wx.previewImage({
        urls,
        current,
        fail() {
          wx.showToast({ title: '预览图片失败', icon: 'none' });
        },
      });
    },

    onPreviewMedia(e: WechatMiniprogram.BaseEvent) {
      const { index } = e.currentTarget.dataset;
      const sources = this.getPreviewMediaSources();
      const current = this.getMediaIndex(index);
      wx.previewMedia({
        sources,
        current,
        fail() {
          wx.showToast({ title: '预览视频失败', icon: 'none' });
        },
      });
    },

    uploadFiles(files: UploadFile[]) {
      return Promise.resolve().then(() => {
        // 开始调用上传函数
        const task = this.data.requestMethod(files);
        if (task instanceof Promise) {
          return task;
        }
        return Promise.resolve({});
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
      const { customLimit } = this.data;
      const { config, sizeLimit } = this.properties;

      if (isWxWork || isPC) {
        wx.chooseImage({
          count: Math.min(20, customLimit),
          ...config,
          success: (res) => {
            const files = [];

            res.tempFiles.forEach((temp) => {
              const { path, size } = temp;

              if (this.checkFileSize(size, sizeLimit, 'image')) return;

              const name = this.getRandFileName(path);
              files.push({
                name,
                type: 'image',
                url: path,
                size: size,
                percent: 0,
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
      } else {
        wx.chooseMedia({
          count: Math.min(20, customLimit),
          mediaType,
          ...config,
          success: (res) => {
            const files = [];

            // 支持单/多文件
            res.tempFiles.forEach((temp) => {
              const { size, fileType, tempFilePath, width, height, duration, thumbTempFilePath, ...rest } = temp;

              if (this.checkFileSize(size, sizeLimit, fileType)) return;

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
                ...rest,
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
      }
    },

    chooseMessageFile(mediaType) {
      const { customLimit } = this.data;
      const { config, sizeLimit, extension } = this.properties;
      wx.chooseMessageFile({
        count: Math.min(100, customLimit),
        type: Array.isArray(mediaType) ? 'all' : mediaType,
        ...(extension && extension.length > 0 ? { extension } : {}),
        ...config,
        success: (res) => {
          const files = [];

          // 支持单/多文件
          res.tempFiles.forEach((temp) => {
            const { size, type: fileType, path: tempFilePath, ...rest } = temp;

            if (this.checkFileSize(size, sizeLimit, fileType)) return;

            const name = this.getRandFileName(tempFilePath);
            files.push({
              name,
              type: this.getFileType(mediaType, tempFilePath, fileType),
              url: tempFilePath,
              size: size,
              percent: 0,
              ...rest,
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
