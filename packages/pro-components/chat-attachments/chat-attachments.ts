import { SuperComponent, wxComponent, ComponentsOptionsType } from '../../components/common/src/index';
import { handleEvent } from '../tools/_handle-event.js';

@wxComponent()
export default class ChatAttachments extends SuperComponent {
  options: ComponentsOptionsType = {
    multipleSlots: true,
    addGlobalClass: true,
    styleIsolation: 'shared',
  };

  properties = {
    items: {
      type: Array,
      value: [],
    },
    removable: {
      type: Boolean,
      value: true,
    },
    imageViewer: {
      type: Boolean,
      value: true,
    },
  };

  data = {
    COMPONENT_NAME: 't-chat-attachments',
    /** @type {string} - 组件内部内容 */
    content: '这里是上传的内容，超出宽度时可以滚动。',
    files: [],
  };

  observers = {
    items() {
      this.setFiles();
    },
  };

  methods = {
    handleClick(e) {
      handleEvent.call(this, e);
    },
    handleDelete(e) {
      handleEvent.call(this, e);
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

      const extension = this.data.renderExtension(item);
      return extension ? `${extension}， ${formattedSize} ${unit}` : `${formattedSize} ${unit}`;
    },
    renderIcon(item) {
      const fileIcons = {
        file: 'file-1',
        video: 'video',
        pdf: 'file-pdf',
        doc: 'file-word',
        excel: 'file-excel',
        ppt: 'file-powerpoint',
        audio: 'audio',
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
    },
    detached() {},
  };
}
