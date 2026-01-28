<template>
  <view
    :class="[classPrefix, inChat ? classPrefix + '--chatting' : '', getFileTypeClass(inChat, files)]"
    :style="_._style([customStyle])"
  >
    <view :class="classPrefix + '__left'">
      <view :class="classPrefix + '__scrollable scroll-x'">
        <block
          v-for="(item, index) in files"
          :key="index"
        >
          <view
            :class="classPrefix + '__files'"
            :data-index="index"
            @click.stop="onFileWrapTap"
          >
            <block v-if="item.fileType === 'image'">
              <view :class="'file-image ' + classPrefix + '__file ' + (removable ? classPrefix + '__file--removable' : '')">
                <block v-if="item.status === 'pending' || item.status === 'fail' || item.status === 'error'">
                  <view :class="item.status + ' ' + classPrefix + '__file--' + item.status">
                    <t-loading
                      theme="circular"
                      size="48rpx"
                    />
                  </view>
                </block>
                <block v-else>
                  <image
                    class="image"
                    :src="item.url"
                    :mode="getImageMode(item)"
                    :lazy-load="false"
                    :style="inChat ? imageStyle(item) : ''"
                  />
                </block>
                <view
                  v-if="removable"
                  :class="classPrefix + '__remove'"
                  @click.stop="onRemoveTap($event, { index })"
                >
                  <t-icon
                    :data-index="index"
                    name="multiply"
                    size="16px"
                  />
                </view>
              </view>
            </block>
            <block v-else>
              <view :class="'file ' + classPrefix + '__file ' + (removable ? classPrefix + '__file--removable' : '')">
                <view class="image">
                  <block v-if="item.status === 'pending'">
                    <view :class="'loading ' + classPrefix + '__file--pending'">
                      <t-loading
                        theme="circular"
                        size="48rpx"
                      />
                    </view>
                  </block>
                  <block v-else-if="item.status === 'fail'">
                    <view :class="'fail ' + classPrefix + '__file--fail'">
                      <t-loading
                        theme="circular"
                        size="48rpx"
                      />
                    </view>
                  </block>
                  <block v-else-if="item.status === 'error'">
                    <view :class="'error ' + classPrefix + '__file--error'">
                      <t-loading
                        theme="circular"
                        size="48rpx"
                      />
                    </view>
                  </block>
                  <block v-else>
                    <t-icon
                      :name="item.fileIcon.name"
                      :color="item.fileIcon.color"
                      size="48rpx"
                    />
                  </block>
                </view>
                <view :class="classPrefix + '__content'">
                  <view :class="classPrefix + '__title'">
                    {{ item.name }}
                  </view>
                  <view
                    v-if="item.status === 'pending'"
                    :class="classPrefix + '__desc'"
                  >
                    上传中...{{ item.progress || 0 + '%' }}
                  </view>
                  <view
                    v-else-if="item.status === 'fail'"
                    :class="classPrefix + '__desc'"
                  >
                    上传失败
                  </view>
                  <view
                    v-else-if="item.status === 'error'"
                    :class="classPrefix + '__desc'"
                  >
                    {{ item.errorMessage }}
                  </view>
                  <view
                    v-else
                    :class="classPrefix + '__desc'"
                  >
                    {{ item.desc }}
                  </view>
                </view>
                <view
                  v-if="removable"
                  :class="classPrefix + '__remove'"
                  @click.stop="onRemoveTap($event, { index })"
                >
                  <t-icon
                    :data-index="index"
                    name="multiply"
                    size="16px"
                  />
                </view>
              </view>
            </block>
          </view>
        </block>
      </view>
    </view>
  </view>
</template>
<script>
import tIcon from '@tdesign/uniapp/icon/icon.vue';
import tImage from '@tdesign/uniapp/image/image.vue';
import tLoading from '@tdesign/uniapp/loading/loading.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import props from './props';
import _ from '@tdesign/uniapp/common/utils.wxs';
import { uniComponent } from '@tdesign/uniapp/common/src/index';
import { imageStyle, getFileTypeClass, getImageMode } from './computed';


const name = `${prefix}-attachments`;


export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    tIcon,
    tImage,
    tLoading,
  },

  props: {
    ...props,
    inChat: {
      type: Boolean,
      default: false,
    },
  },

  emits: [
    'fileClick',
    'remove',
  ],

  data() {
    return {
      classPrefix: name,
      _,
      files: [],
    };
  },

  watch: {
    items: {
      handler() {
        this.setFiles();
      },
      immediate: true,
      deep: true,
    },
  },

  created() {
  },
  mounted() {
    this.setFiles();
  },

  methods: {
    imageStyle,
    getFileTypeClass,
    getImageMode,

    onFileWrapTap(e) {
      const { index } = e.currentTarget.dataset || {};
      const item = this.files?.[index];
      if (item) {
        this.handleFileClick(item);
      }
    },
    onRemoveTap(e, { index }) {
      const item = this.files?.[index];
      if (item !== undefined) {
        this.handleRemove(item, index);
      }
    },
    handleFileClick(item) {
      if (this.imageViewer && item.fileType === 'image') {
        wx.previewImage({
          urls: [item.url],
        });
      }
      this.$emit('fileClick', {
        item,
      });
    },
    handleRemove(item, index) {
      this.$emit('remove', {
        item,
        index,
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
      const extension = item.extension || (item.url ? item.url.split('.').pop()
        .toLowerCase() : '');
      return extension;
    },
    setFiles() {
      this.files = this.items.map(item => ({
        ...item,
        fileType: this.renderFileType(item),
        desc: this.renderDesc(item),
        fileIcon: this.renderIcon(item),
      }));
    },
  },
});
</script>
<style scoped>
@import './attachments.css';
</style>
