import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../../components/common/src/index';
import config from '../../../components/common/config';
import props from './props';
import { TdAttachmentsProps } from './type';

const { prefix } = config;
const name = `${prefix}-attachments`;

export interface AttachmentsProps extends TdAttachmentsProps {}

@wxComponent()
export default class Attachments extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = {
    ...props,

    // 组件内置属性，暂不对外
    inChat: {
      type: Boolean,
      value: false,
    },
  };

  data = {
    classPrefix: name,
    files: [],
    scrollViewHeight: 0, // 新增：scroll-view的高度
  };

  observers = {
    items() {
      this.setFiles();
      // 新增：文件列表变化时重新计算高度
      wx.nextTick(() => {
        this.getScrollViewHeight();
      });
    },
  };

  methods = {
    onFileWrapTap(e) {
      const { index } = e.currentTarget.dataset || {};
      const item = this.data.files?.[index];
      if (item) {
        this.handleFileClick(item);
      }
    },
    onRemoveTap(e) {
      const { index } = e.currentTarget.dataset || {};
      const item = this.data.files?.[index];
      if (typeof e?.stopPropagation === 'function') e.stopPropagation();
      if (item !== undefined) {
        this.handleRemove(item, index);
      }
    },
    // 新增：图片加载完成回调
    onImageLoad() {
      // 图片加载完成后重新计算高度
      wx.nextTick(() => {
        this.getScrollViewHeight();
      });
    },
    handleFileClick(item) {
      if (this.data.imageViewer && item.fileType === 'image') {
        wx.previewImage({
          urls: [item.url],
        });
      }
      this.triggerEvent('fileClick', { item });
    },
    handleRemove(item, index) {
      this.triggerEvent('remove', { item, index });
    },
    // 修改：获取所有文件元素的最大高度
    getScrollViewHeight() {
      const query = this.createSelectorQuery();
      query.selectAll('.t-attachments__files').boundingClientRect();
      query.exec((res) => {
        if (res[0] && res[0].length > 0) {
          // 获取所有文件元素的最大高度
          const maxFileHeight = Math.max(...res[0].map((rect) => rect.height));
          this.setData({
            scrollViewHeight: maxFileHeight,
          });
        }
      });
    },
    renderDesc(item) {
      const sizeInBytes = item.size || 0;
      let formattedSize;
      let unit;

      if (sizeInBytes < 1024) {
        // 小于1KB，显示B
        formattedSize = sizeInBytes;
        unit = 'B';
      } else if (sizeInBytes < 1024 * 1024) {
        // 大于等于1KB小于1MB，显示KB
        const sizeInKB = sizeInBytes / 1024;
        formattedSize = sizeInKB % 1 === 0 ? sizeInKB : sizeInKB.toFixed(2);
        unit = 'KB';
      } else {
        // 大于等于1MB，显示MB
        const sizeInMB = sizeInBytes / (1024 * 1024);
        formattedSize = sizeInMB % 1 === 0 ? sizeInMB : sizeInMB.toFixed(2);
        unit = 'MB';
      }
      return `${formattedSize} ${unit}`;
    },
    renderIcon(item) {
      const fileIcons = {
        file: {
          name: 'file-zip-filled',
          color: '#E37318',
        },
        video: {
          name: 'video-filled',
          color: '#D54941',
        },
        pdf: {
          name: 'file-pdf-filled',
          color: '#D54941',
        },
        doc: {
          name: 'file-word-filled',
          color: '#0052d9',
        },
        excel: {
          name: 'file-excel-filled',
          color: '#2BA471',
        },
        ppt: {
          name: 'file-powerpoint-filled',
          color: '#E37318',
        },
        audio: {
          name: 'video-filled',
          color: '#D54941',
        },
      };
      return fileIcons[item.fileType] || fileIcons.file;
    },

    renderFileType(item) {
      const type = ['image', 'video', 'audio', 'pdf', 'doc', 'ppt', 'txt', 'excel'];
      if (item.fileType) {
        return item.fileType;
      }
      if (type.includes(item.type)) {
        return item.fileType;
      }
      const url = item.url || '';
      const lastDotIndex = url.lastIndexOf('.');
      const extension = lastDotIndex !== -1 ? url.substring(lastDotIndex + 1).toLowerCase() : '';
      const extensionToType = {
        // 图片类型
        jpg: 'image',
        jpeg: 'image',
        png: 'image',
        gif: 'image',
        bmp: 'image',
        webp: 'image',
        // 视频类型
        mp4: 'video',
        mov: 'video',
        avi: 'video',
        mkv: 'video',
        webm: 'video',
        // 音频类型
        mp3: 'audio',
        wav: 'audio',
        ogg: 'audio',
        aac: 'audio',
        // 文档类型
        pdf: 'pdf',
        doc: 'doc',
        docx: 'doc',
        ppt: 'ppt',
        pptx: 'ppt',
        xls: 'excel',
        xlsx: 'excel',
        txt: 'txt',
      };
      return extensionToType[extension] || '';
    },
    renderExtension(item) {
      if (item.extension) {
        return item.extension;
      }
      const extension = item.extension || (item.url ? item.url.split('.').pop().toLowerCase() : '');
      return extension;
    },
    setFiles() {
      this.setData({
        files: this.properties.items.map((item) => ({
          ...item,
          fileType: this.data.renderFileType(item),
          desc: this.data.renderDesc(item),
          fileIcon: this.data.renderIcon(item),
        })),
      });
    },
  };

  lifetimes = {
    created() {
      this.data.handleFileClick = this.handleFileClick.bind(this);
      this.data.handleRemove = this.handleRemove.bind(this);
      this.data.renderDesc = this.renderDesc.bind(this);
      this.data.renderIcon = this.renderIcon.bind(this);
      this.data.renderFileType = this.renderFileType.bind(this);
      this.data.renderExtension = this.renderExtension.bind(this);
    },
    attached() {
      this.setFiles();
      // 新增：组件挂载时计算高度
      wx.nextTick(() => {
        this.getScrollViewHeight();
      });
    },
    detached() {},
  };
}
