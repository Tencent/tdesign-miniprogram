<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + tClass"
  >
    <t-grid
      :gutter="gutter"
      :border="false"
      align="center"
      :column="column"
      :custom-style="draggable ? 'overflow: visible' : ''"
    >
      <block v-if="!dragLayout">
        <t-grid-item
          v-for="(file, index) in customFiles"
          :key="index"
          :t-class="classPrefix + '__grid ' + classPrefix + '__grid-file'"
          :t-class-content="classPrefix + '__grid-content'"
          aria-role="presentation"
        >
          <view
            :class="classPrefix + '__wrapper ' + (disabled ? classPrefix + '__wrapper--disabled' : '')"
            :style="gridItemStyle"
            :aria-role="ariaRole || getWrapperAriaRole(file)"
            :aria-label="ariaLabel || getWrapperAriaLabel(file)"
          >
            <t-image
              v-if="file.type !== 'video'"
              :data-file="file"
              :data-index="index"
              :t-class="classPrefix + '__thumbnail'"
              :custom-style="(imageProps && imageProps.style) || ''"
              :src="file.thumb || file.url"
              :mode="(imageProps && imageProps.mode) || 'aspectFill'"
              :error="(imageProps && imageProps.error) || 'default'"
              :lazy="(imageProps && imageProps.lazy) || false"
              :loading="(imageProps && imageProps.loading) || 'default'"
              :shape="(imageProps && imageProps.shape) || 'round'"
              :webp="(imageProps && imageProps.webp) || false"
              :show-menu-by-longpress="(imageProps && imageProps.showMenuByLongpress) || false"
              @click="onPreview($event, { file, index })"
            />
            <video
              v-if="file.type === 'video'"
              :class="classPrefix + '__thumbnail'"
              :src="file.url"
              :poster="file.thumb"
              controls
              :autoplay="false"
              objectFit="contain"
              :data-file="file"
              @click.stop="onFileClick"
            />
            <view
              v-if="file.status && file.status != 'done'"
              :class="classPrefix + '__progress-mask'"
              :data-index="index"
              :data-file="file"
              @click.stop="onFileClick"
            >
              <block v-if="file.status == 'loading'">
                <t-icon
                  :t-class="classPrefix + '__progress-loading'"
                  name="loading"
                  size="48rpx"
                  aria-hidden
                />
                <view :class="classPrefix + '__progress-text'">
                  {{ file.percent ? file.percent + '%' : '上传中...' }}
                </view>
              </block>
              <t-icon
                v-else
                :name="file.status == 'reload' ? 'refresh' : 'close-circle'"
                size="48rpx"
                aria-hidden
              />
              <view
                v-if="file.status == 'reload' || file.status == 'failed'"
                :class="classPrefix + '__progress-text'"
              >
                {{ file.status == 'reload' ? '重新上传' : '上传失败' }}
              </view>
            </view>
            <view
              v-if="tools.isBoolean(file.removeBtn) ? file.removeBtn : removeBtn"
              :class="classPrefix + '__close-btn hotspot-expanded'"
              :data-index="index"
              aria-role="button"
              aria-label="删除"
              @click.stop="onDelete"
            >
              <t-icon
                name="close"
                size="32rpx"
                color="#fff"
              />
            </view>
          </view>
        </t-grid-item>
        <t-grid-item
          v-if="addBtn && customLimit > 0"
          :t-class="classPrefix + '__grid'"
          :t-class-content="classPrefix + '__grid-content'"
          aria-label="上传"
          @click="onAddTap"
        >
          <view
            :class="classPrefix + '__wrapper'"
            :style="gridItemStyle"
          >
            <slot name="add-content" />
            <block v-if="addContent">
              {{ addContent }}
            </block>
            <view
              v-else
              :class="classPrefix + '__add-icon ' + (disabled ? classPrefix + '__add-icon--disabled' : '')"
            >
              <t-icon name="add" />
            </view>
          </view>
        </t-grid-item>
      </block>
      <block v-else>
        <view
          :class="classPrefix + '__drag'"
          :list="dragList"
          :style="dragWrapStyle + ';'"
          :drag-base-data="dragBaseData"
        >
          <view
            v-for="(file, index) in customFiles"
            :key="index"
            :ref="classPrefix + '__drag-item'"
            :class="getDragItemClass(index)"
            :style="getDragItemStyle(index)"
            :data-index="index"
            @longpress="parseEventDynamicCode($event, 'longPress', index)"
            @touchmove.stop.prevent="parseEventDynamicCode($event, dragging ? 'touchMove' : '', index)"
            @touchend.stop.prevent="parseEventDynamicCode($event, dragging ? 'touchEnd' : '', index)"
          >
            <t-grid-item
              :t-class="classPrefix + '__grid ' + classPrefix + '__grid-file'"
              :t-class-content="classPrefix + '__grid-content'"
              aria-role="presentation"
              custom-style="width: 100%"
            >
              <view
                :class="classPrefix + '__wrapper ' + (disabled ? classPrefix + '__wrapper--disabled' : '')"
                :style="gridItemStyle + ';'"
                :aria-role="ariaRole || getWrapperAriaRole(file)"
                :aria-label="ariaLabel || getWrapperAriaLabel(file)"
              >
                <t-image
                  v-if="file.type !== 'video'"
                  :data-file="file"
                  :data-index="index"
                  :t-class="classPrefix + '__thumbnail'"
                  :custom-style="(imageProps && imageProps.style) || ''"
                  :src="file.thumb || file.url"
                  :mode="(imageProps && imageProps.mode) || 'aspectFill'"
                  :error="(imageProps && imageProps.error) || 'default'"
                  :lazy="(imageProps && imageProps.lazy) || false"
                  :loading="(imageProps && imageProps.loading) || 'default'"
                  :shape="(imageProps && imageProps.shape) || 'round'"
                  :webp="(imageProps && imageProps.webp) || false"
                  :show-menu-by-longpress="(imageProps && imageProps.showMenuByLongpress) || false"
                  @click="onPreview($event, { file, index })"
                />
                <video
                  v-if="file.type === 'video'"
                  :class="classPrefix + '__thumbnail'"
                  :src="file.url"
                  :poster="file.thumb"
                  controls
                  :autoplay="false"
                  objectFit="contain"
                  :data-file="file"
                  @click.stop="onFileClick"
                />
                <view
                  v-if="file.status && file.status != 'done'"
                  :class="classPrefix + '__progress-mask'"
                  :data-index="index"
                  :data-file="file"
                  @click.stop="onFileClick"
                >
                  <block v-if="file.status == 'loading'">
                    <t-icon
                      :t-class="classPrefix + '__progress-loading'"
                      name="loading"
                      size="48rpx"
                      aria-hidden
                    />
                    <view :class="classPrefix + '__progress-text'">
                      {{ file.percent ? file.percent + '%' : '上传中...' }}
                    </view>
                  </block>
                  <t-icon
                    v-else
                    :name="file.status == 'reload' ? 'refresh' : 'close-circle'"
                    size="48rpx"
                    aria-hidden
                  />
                  <view
                    v-if="file.status == 'reload' || file.status == 'failed'"
                    :class="classPrefix + '__progress-text'"
                  >
                    {{ file.status == 'reload' ? '重新上传' : '上传失败' }}
                  </view>
                </view>
                <view
                  v-if="tools.isBoolean(file.removeBtn) ? file.removeBtn : removeBtn"
                  :class="classPrefix + '__close-btn hotspot-expanded'"
                  :data-index="index"
                  :data-url="file.url"
                  aria-role="button"
                  aria-label="删除"
                  @click.stop="onDelete"
                >
                  <t-icon
                    name="close"
                    size="32rpx"
                    color="#fff"
                  />
                </view>
              </view>
            </t-grid-item>
          </view>
          <view
            v-if="addBtn && customLimit > 0"
            :ref="classPrefix + '__drag-item'"
            :class="getDragItemClass(customFiles.length)"
            :style="getDragItemStyle(customFiles.length)"
          >
            <t-grid-item
              :t-class="classPrefix + '__grid'"
              :t-class-content="classPrefix + '__grid-content'"
              aria-label="上传"
              custom-style="width: 100%"
              @click="onAddTap"
            >
              <view
                :class="classPrefix + '__wrapper'"
                :style="gridItemStyle"
              >
                <slot name="add-content" />
                <block v-if="addContent">
                  {{ addContent }}
                </block>
                <view
                  v-else
                  :class="classPrefix + '__add-icon ' + (disabled ? classPrefix + '__add-icon--disabled' : '')"
                >
                  <t-icon name="add" />
                </view>
              </view>
            </t-grid-item>
          </view>
        </view>
      </block>
    </t-grid>
  </view>
</template>
<script>
import tGrid from '../grid/grid';
import tGridItem from '../grid-item/grid-item';
import tIcon from '../icon/icon';
import tImage from '../image/image';
import { uniComponent } from '../common/src/index';
import props from './props';
import { prefix } from '../common/config';
import { isOverSize, coalesce } from '../common/utils';
import { isObject } from '../common/validator';
import tools from '../common/utils.wxs';
import {
  getWrapperAriaRole,
  getWrapperAriaLabel,
} from './upload.computed.js';
import {
  longPress,
  touchMove,
  touchEnd,
  baseDataObserver,
  listObserver,
} from './drag.computed.js';
import { parseEventDynamicCode } from '../common/event/dynamic';


const name = `${prefix}-upload`;

const makeMethods = () => [
  [longPress, 'longPress'],
  [touchMove, 'touchMove'],
  [touchEnd, 'touchEnd'],
  [baseDataObserver, 'baseDataObserver'],
  [listObserver, 'listObserver'],
].reduce((acc, item) => {
  const func = item[0];
  return {
    ...acc,
    [item[1]](...args) {
      func.call(this, ...args);
    },
  };
}, {});


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'files',
      event: 'success',
    },
  ],
  externalClasses: [`${prefix}-class`],
  components: {
    tGrid,
    tGridItem,
    tIcon,
    tImage,
  },
  props: {
    ...props,
  },
  data() {
    return {
      classPrefix: name,
      prefix,
      current: false,
      proofs: [],
      customFiles: [], // 内部动态修改的files
      customLimit: 0, // 内部动态修改的limit
      column: 4,
      dragBaseData: {}, // 拖拽所需要页面数据
      rows: 0, // 行数
      dragWrapStyle: '', // 拖拽容器的样式
      dragList: [], // 拖拽的数据列
      dragging: true, // 是否开始拖拽
      dragLayout: false, // 是否开启拖拽布局
      tools,

      gridItemStyle: '',

      fakeState: {},

      dragItemClassList: [],
      dragItemStyleList: [],
    };
  },
  watch: {
    files: {
      handler() {
        this.onWatchFilesLimit();
      },
      deep: true,
    },
    max: 'onWatchFilesLimit',
    draggable: {
      handler() {
        this.onWatchFilesLimit();
      },
      deep: true,
    },

    gridConfig: {
      handler() {
        this.updateGrid();
      },
      deep: true,
    },
    dragList: {
      handler(val) {
        setTimeout(() => {
          this.listObserver(val);
        }, 33);
      },
      deep: true,
      immediate: true,
    },
    dragBaseData: {
      handler(val) {
        this.baseDataObserver(val);
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.handleLimit(this.files, this.max);
    this.updateGrid();
  },
  methods: {
    getWrapperAriaRole,
    getWrapperAriaLabel,

    ...makeMethods(),

    handleLimit(customFiles, max) {
      if (max === 0) {
        max = Number.MAX_SAFE_INTEGER;
      }
      this.customFiles = customFiles.length > max ? customFiles.slice(0, max) : customFiles;
      this.customLimit = max - customFiles.length;
      this.dragging = true;

      this.initDragLayout();
    },

    triggerSuccessEvent(files) {
      this._trigger('success', { files: [...this.customFiles, ...files] });
    },

    triggerFailEvent(err) {
      this.$emit('fail', err);
    },

    onFileClick(e) {
      const { file, index } = e.currentTarget.dataset;
      this.$emit('click', { index, file });
    },

    /**
   * 由于小程序暂时在ios上不支持返回上传文件的fileType，这里用文件的后缀来判断
   * @param mediaType
   * @param tempFilePath
   * @returns string
   * @link https://developers.weixin.qq.com/community/develop/doc/00042820b28ee8fb41fc4d0c254c00
   */
    getFileType(mediaType, tempFilePath, fileType) {
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
    },

    // 选中文件之后，计算一个随机的短文件名
    getRandFileName(filePath) {
      const extIndex = filePath.lastIndexOf('.');
      const extName = extIndex === -1 ? '' : filePath.substr(extIndex);
      return parseInt(`${Date.now()}${Math.floor(Math.random() * 900 + 100)}`, 10).toString(36) + extName;
    },

    onDelete(e) {
      const { index } = e.currentTarget.dataset;
      this.deleteHandle(index);
    },

    deleteHandle(index) {
      const { customFiles } = this;
      const delFile = customFiles[index];
      this.$emit('remove', { index, file: delFile });
    },

    updateGrid() {
      let { gridConfig = {} } = this;
      if (!isObject(gridConfig)) gridConfig = {};
      const { column = 4, width = 160, height = 160 } = gridConfig;

      this.gridItemStyle = `width:${width}rpx;height:${height}rpx`;
      this.column = column;
    },

    initDragLayout() {
      const { draggable, disabled } = this;
      if (!draggable || disabled) return;
      this.initDragList();
      setTimeout(() => {
        this.initDragBaseData();
      }, 33)
      ;
    },

    initDragList() {
      let i = 0;
      const { column, customFiles, customLimit } = this;
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
      this.rows = Math.ceil(dragList.length / column);

      this.dragList = dragList;
    },

    initDragBaseData() {
      const { classPrefix, rows, column, customFiles } = this;
      if (customFiles.length === 0) {
        this.dragBaseData = {};
        this.dragWrapStyle = '';
        this.dragLayout = false;
        return;
      }

      let query;
      // #ifdef H5 || APP-PLUS
      query = uni.createSelectorQuery().in(this);
      // #endif
      if (!query) {
        query = this.createSelectorQuery();
      }


      let selectorGridItem;
      let selectorGrid;
      // #ifdef H5 || APP-PLUS
      selectorGridItem = '.t-grid-item';
      selectorGrid = '.t-grid';
      // #endif

      if (!selectorGridItem) {
        selectorGridItem = `.${classPrefix} >>> .t-grid-item`;
        selectorGrid = `.${classPrefix} >>> .t-grid`;
      }

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

        this.dragBaseData = dragBaseData;
        this.dragWrapStyle = dragWrapStyle;
        this.dragLayout = true;


        // 为了给拖拽元素加上拖拽方法，同时控制不拖拽时不取消穿透
        const timer = setTimeout(() => {
          this.dragging = false;
          clearTimeout(timer);
        }, 0);
      });
    },

    getPreviewMediaSources() {
      const previewMediaSources = [];
      this.customFiles.forEach((ele) => {
        const mediaSource = {
          url: ele.url,
          type: ele.type,
          poster: ele.thumb || undefined,
        };
        previewMediaSources.push(mediaSource);
      });

      return previewMediaSources;
    },

    onPreview(e) {
      this.onFileClick(e);
      const { preview } = this;

      if (!preview) return;

      const usePreviewMedia = this.customFiles.some(file => file.type === 'video');
      if (usePreviewMedia) {
        this.onPreviewMedia(e);
      } else {
        this.onPreviewImage(e);
      }
    },

    onPreviewImage(e) {
      const { index } = e.currentTarget.dataset;
      const urls = this.customFiles.filter(file => file.percent !== -1).map(file => file.url);
      const current = this.customFiles[index]?.url;
      uni.previewImage({
        urls,
        current,
        fail() {
          uni.showToast({ title: '预览图片失败', icon: 'none' });
        },
      });
    },

    onPreviewMedia(e) {
      const { index: current } = e.currentTarget.dataset;
      const sources = this.getPreviewMediaSources();
      uni.previewMedia({
        sources,
        current,
        fail() {
          uni.showToast({ title: '预览视频失败', icon: 'none' });
        },
      });
    },

    uploadFiles(files) {
      return new Promise((resolve) => {
        // 开始调用上传函数
        const task = this.requestMethod(files);
        if (task instanceof Promise) {
          return task;
        }
        resolve({});
      });
    },

    startUpload(files) {
      // 如果传入了上传函数，则进度设为0并开始上传，否则跳过上传
      if (typeof this.requestMethod === 'function') {
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

      this.handleLimit(this.customFiles, this.max);
      return Promise.resolve();
    },

    onWatchFilesLimit() {
      this.handleLimit(this.files, this.max);
    },

    onAddTap() {
      const { disabled, mediaType, source } = this;
      if (disabled) return;
      if (source === 'media') {
        this.chooseMedia(mediaType);
      } else {
        this.chooseMessageFile(mediaType);
      }
    },

    chooseMedia(mediaType) {
      const { customLimit } = this;
      const { config, sizeLimit } = this;
      let func = 'chooseMedia';
      // #ifdef H5 || MP-ALIPAY
      func = 'chooseImage';
      // #endif
      uni[func]({
        count: Math.min(20, customLimit),
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
              uni.showToast({ icon: 'none', title });
              return;
            }

            const name = temp.name || this.getRandFileName(tempFilePath);
            files.push({
              name,
              type: this.getFileType(mediaType, temp.name || tempFilePath, fileType),
              url: tempFilePath,
              size,
              width,
              height,
              duration,
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
          this.$emit('complete', res);
        },
      });
    },

    chooseMessageFile(mediaType) {
      const { customLimit } = this;
      const { config, sizeLimit } = this;
      uni.chooseMessageFile({
        count: Math.min(100, customLimit),
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
              uni.showToast({ icon: 'none', title });
              return;
            }

            const name = this.getRandFileName(tempFilePath);
            files.push({
              name,
              type: this.getFileType(mediaType, tempFilePath, fileType),
              url: tempFilePath,
              size,
              percent: 0,
              ...res,
            });
          });
          this.afterSelect(files);
        },
        fail: err => this.triggerFailEvent(err),
        complete: res => this.$emit('complete', res),
      });
    },

    afterSelect(files) {
      this._trigger('select-change', {
        files: [...this.customFiles],
        currentSelectedFiles: [files],
      });
      this._trigger('add', { files });
      this.startUpload(files);
    },

    dragVibrate(e) {
      const { vibrateType } = e;
      const { draggable } = this;
      const dragVibrate = coalesce(draggable?.vibrate, true);
      const dragCollisionVibrate = draggable?.collisionVibrate;
      if ((dragVibrate && vibrateType === 'longPress') || (dragCollisionVibrate && vibrateType === 'touchMove')) {
        uni.vibrateShort({
          type: 'light',
        });
      }
    },

    dragStatusChange(e) {
      const { dragging } = e;
      this.dragging = dragging;
    },

    dragEnd(e) {
      const { dragCollisionList } = e;
      let files = [];
      if (dragCollisionList.length === 0) {
        files = this.customFiles;
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
      const { transition } = this;
      if (transition.backTransition) {
        const timer = setTimeout(() => {
          this.$emit('drop', { files });
          clearTimeout(timer);
        }, transition.duration);
      } else {
        this.$emit('drop', { files });
      }
    },
    getState() {
      return this.fakeState || {};
    },
    callMethod(...args) {
      return this[args[0]]?.(...args.slice(1));
    },
    parseEventDynamicCode,
    setDragItemClass(index, operation, val) {
      if (!this.dragItemClassList[index]) {
        this.dragItemClassList[index] = [];
      }
      const valList = Array.isArray(val) ? val : [val];
      if (operation === 'add') {
        this.dragItemClassList[index].push(...valList);
        return;
      }
      if (operation === 'remove') {
        this.dragItemClassList[index] = this.dragItemClassList[index].filter(item => !valList.includes(item));
      }
    },
    getDragItemClass(index) {
      const { classPrefix } = this;
      const base = [
        `${classPrefix}__drag-item`,
      ];
      return [
        ...base,
        ...(this.dragItemClassList[index] || []),
      ].join(' ');
    },
    setDragItemStyle(index, val) {
      if (!this.dragItemStyleList[index]) {
        this.dragItemStyleList[index] = [];
      }
      this.dragItemStyleList[index].push(val);
    },
    getDragItemStyle(index) {
      const { column, transition } = this;
      const base = [
        `width: ${100 / column}%`,
        `--td-upload-drag-transition-duration: ${transition.duration}ms`,
        `--td-upload-drag-transition-timing-function: ${transition.timingFunction}`,
      ];

      return [
        ...base,
        ...(this.dragItemStyleList[index] || []),
      ].join(';');
    },
  },
});
</script>
<style scoped>
@import './upload.css';
</style>
