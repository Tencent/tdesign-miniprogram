<template>
  <view>
    <view
      :class="classPrefix"
      :style="_._style([customStyle, inputStyle])"
      @click.stop="handleOutsideClick"
    >
      <view
        :class="classPrefix + '__header'"
        :style="attachmentsProps && attachmentsProps.items && attachmentsProps.items.length > 0 ? 'margin-top:-8rpx;' : ''"
      >
        <block v-if="attachmentsProps && attachmentsProps.items && attachmentsProps.items.length > 0">
          <view :class="classPrefix + '__attachments'">
            <attachments
              :items="attachmentsProps.items"
              :removable="attachmentsProps.removable"
              :image-viewer="attachmentsProps.imageViewer"
              @fileClick="handleFileClick"
              @remove="handleFileRemove"
              @add="handleFileAdd"
            />
          </view>
        </block>
        <block v-else>
          <slot name="header" />
        </block>
      </view>

      <view :class="classPrefix + '__actions'">
        <view :class="classPrefix + '__textarea'">
          <slot name="input-prefix" />
          <textarea
            :class="classPrefix + '__textarea--control'"
            :style="textareaStyle(textareaProps.autosize)"
            :disabled="disabled"
            :auto-height="!!textareaProps.autosize"
            confirm-type="send"
            :adjust-position="adjustPosition"
            :disable-default-padding="false"
            cursor-spacing="30"
            maxlength="-1"
            :value="innerValue"
            @change="textChange"
            @focus="focusFn"
            @blur="blurFn"
            @click="handlerClick"
            @input="textChange"
            @keyboardheightchange="onkeyboardheightchange"
            @confirm="handleSendClick"
          />
          <view :class="classPrefix + '__textarea--placeholder ' + (focusFlag || innerValue ? 'hide' : '')">
            {{ placeholder }}
          </view>
        </view>

        <view :class="classPrefix + '__footer'">
          <view :class="classPrefix + '__mode'">
            <slot name="footer-prefix" />
          </view>
          <view :class="classPrefix + '__sendbtn'">
            <block v-if="renderPresets">
              <view :class="classPrefix + '__sendbtn--default'">
                <block
                  v-for="(item, index) in renderPresets"
                  :key="index"
                >
                  <view>
                    <view
                      v-if="item.name === 'upload'"
                      :class="'plus-btn ' + (item.status === 'disabled' ? 'disabled' : '')"
                    >
                      <view
                        class="btn-func"
                        :data-status="item.status"
                        @click.stop="handleUploadClick"
                      >
                        <t-icon
                          :name="visible ? 'close' : 'add'"
                          size="40rpx"
                        />
                      </view>
                    </view>

                    <block v-if="item.name === 'send'">
                      <block v-if="item.type === 'text'">
                        <view
                          :class="'send-btn-' + item.type + ' ' + (innerValue || loading ? 'active' : 'disabled')"
                          @click.stop="handleSendClick"
                        >
                          {{ loading ? '停止' : '发送' }}
                        </view>
                      </block>
                      <block v-else>
                        <view
                          :class="
                            'send-btn-icon send-btn-' + item.type + ' ' + (innerValue || loading ? 'active' : 'disabled') + ' ' + (loading ? 'stop' : '')
                          "
                          @click.stop="handleSendClick"
                        >
                          <block v-if="!loading">
                            <t-icon
                              name="send-filled"
                              size="32rpx"
                            />
                          </block>
                          <block v-else>
                            <view style="width: 24rpx; height: 24rpx; background-color: #ffffff" />
                          </block>
                        </view>
                      </block>
                    </block>
                  </view>
                </block>
              </view>
            </block>
            <block v-else>
              <slot name="suffix" />
            </block>
          </view>
        </view>
      </view>
    </view>
    <view
      v-if="visible"
      :class="classPrefix + '__upload'"
      @click.stop="handleUploadClick"
    >
      <block
        v-for="(name, index) in uploadNames"
        :key="index"
      >
        <view
          :class="classPrefix + '__upload-item'"
          :data-name="name"
          @click.stop="handleUploadEntryClick"
        >
          <view :class="classPrefix + '__upload-item__icon'">
            <t-icon
              :name="uploadConfig[name].iconClass"
              size="56rpx"
            />
          </view>
          <view :class="classPrefix + '__upload-item__text'">
            {{ uploadConfig[name].text }}
          </view>
        </view>
      </block>
    </view>
  </view>
</template>
<script>
import tIcon from '@tdesign/uniapp/icon/icon.vue';
import attachments from '../attachments/attachments.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import props from './props';
import { uniComponent } from '@tdesign/uniapp/common/src/index';
import { textareaStyle } from './computed';
import _ from '@tdesign/uniapp/common/utils.wxs';
import { nextTick } from '@tdesign/uniapp/common/utils';

const name = `${prefix}-chat-sender`;


export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    tIcon,
    attachments,
  },

  props: {
    ...props,
  },

  emits: [
    'update:visible',
    'update:value',
  ],

  data() {
    return {
      classPrefix: name,
      scrollViewTop: 0,
      focusFlag: false,
      isSending: false,
      inputStyle: '',
      originalMarginBottom: 12, // 设计稿的 margin-bottom 值（单位：px）
      files: [],
      uploadPlacement: 'bottom',
      uploadConfig: {
        uploadCamera: {
          iconClass: 'camera',
          text: '拍摄',
          handler: 'handleImageUpload',
          handlerArg: 'camera',
        },
        uploadImage: {
          iconClass: 'image',
          text: '图片',
          handler: 'handleImageUpload',
          handlerArg: 'album',
        },
        uploadAttachment: {
          iconClass: 'file-add',
          text: '文件',
          handler: 'handleWechatFileUpload',
          handlerArg: 'attachment',
        },
      },
      uploadNames: [],

      _,

      innerValue: this.value,
    };
  },

  watch: {
    value: {
      handler(v) {
        this.innerValue = v;
        nextTick().then(() => {
          this.innerValue = v;
        });
      },
      immediate: true,
    },
    fileList: {
      handler(newVal) {
      // 添加空值检查
        this.files = newVal ? JSON.parse(JSON.stringify(newVal)) : [];
      },
      immediate: true,
      deep: true,
    },
    renderPresets: {
      handler(newVal) {
        const preset = newVal.find(item => Array.isArray(item.presets));
        this.uploadNames = preset ? preset.presets : [];
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    textareaStyle,

    onkeyboardheightchange(e) {
      // 业务侧控制键盘顶起高度，如果用fix布局，不需要监听键盘高度变化
      this.$emit('keyboardheightchange', e.detail);
      // 不开启自动顶起，不做处理
      if (!this.autoRiseWithKeyboard) return;
      const keyboardHeight = e.detail.height;
      if (keyboardHeight > 0) {
        // 键盘弹起时，将键盘高度与原始 margin-bottom 相加
        // todo：使用js计算实际的margin-bottom，因为业务侧可能会覆盖样式
        const totalMarginBottom = keyboardHeight + this.originalMarginBottom;
        this.inputStyle = `margin-bottom: ${totalMarginBottom}px;`;
      } else {
        // 键盘收起时，恢复原始 margin-bottom
        this.inputStyle = '';
      }
    },

    handleSendClick(e) {
      this.loading ? this.handleStop(e) : this.sendClick(e);
    },

    handleOutsideClick() {
      this.$emit('update:visible', false);
    },

    sendClick(e) {
      if (this.innerValue && !this.disabled) {
        this.$emit('send', {
          value: this.innerValue,
          e,
        });
      }
    },

    handleStop(e) {
      this.$emit(
        'stop',
        {
          value: this.innerValue,
          e,
        },
        { bubbles: false },
      );
    },

    handlerClick() {
      // 禁用状态输入框无焦点
      if (this.disabled) {
        this.focusFlag = false;
      } else {
        this.focusFlag = true;
      }
    },

    focusFn(e) {
      this.focusFlag = true;
      this.$emit('focus', {
        value: e.detail.value,
        context: e,
      });
    },

    blurFn(e) {
      this.focusFlag = false;
      this.$emit('blur', {
        value: e.detail.value,
        context: e,
      });
    },

    textChange(e) {
      const { value } = e.detail;
      this.innerValue = value;
      this.$emit('change', {
        value,
        context: e,
      });
      this.$emit('update:value', value);
    },

    handleUploadClick(e) {
      const { status } = e.currentTarget.dataset;
      this.$emit('uploadClick');
      // 禁用状态不显示上传面板
      if (this.disabled || status === 'disabled') return;
      // 点击按钮切换面板显示状态
      this.$emit('update:visible', !this.visible);
      // 透传处理上传按钮点击事件,由业务侧控制是否显示上传面板
    },

    handleFileClick(e) {
      // 透传 处理文件点击事件
      const { item } = e.detail;
      this.$emit('fileClick', {
        file: item,
      });
    },

    handleFileRemove(e) {
      // 添加数组存在性检查
      if (!Array.isArray(this.files)) return;
      const { item: file, index } = e;
      this.$emit('fileDelete', {
        file,
      });
      const files = [...this.files];
      files.splice(index, 1);
      this.files = files;

      this.$emit('fileChange', {
        files,
      }); // 确保传递新数组
    },

    handleFileAdd() {
      this.$emit('fileAdd');
    },

    async handleImageUpload(e) {
      const { type } = e.currentTarget.dataset;
      const sourceType = [type];
      try {
        const res = await wx.chooseImage({
          count: 1,
          // 最多可选9张
          sizeType: ['original', 'compressed'],
          // 可以指定是原图还是压缩图
          sourceType, // 从相册选择
        });
        // 处理选择的图片
        if (res.tempFilePaths && res.tempFilePaths.length > 0) {
          const files = res.tempFilePaths.map(item => ({
            url: item,
            name: item,
            // 获取文件名
            size: 0,
            // 暂时不支持获取文件大小
            fileType: 'image', // 文件类型为图片
          }));
          const name = type === 'album' ? 'uploadImage' : 'uploadCamera';
          this.$emit('fileSelect', {
            e,
            name,
            files,
          });
          const newFiles = [...this.files, ...files];
          this.files = newFiles;

          this.$emit('fileChange', {
            files: newFiles,
          });
        }
      } catch (err) {
        wx.showToast({
          title: type === 'album' ? '选择图片失败' : '拍照失败',
          icon: 'none',
        });
      } finally {
        this.$emit('update:visible', false);
      }
    },

    async handleWechatFileUpload(e) {
      try {
        // 使用微信小程序的选择文件API
        const res = await wx.chooseMessageFile({
          count: 5,
          // 最多5个文件
          type: 'all', // 所有类型文件
        });
        if (res.tempFiles && res.tempFiles.length > 0) {
          const files = res.tempFiles.map(item => ({
            ...item,
            // 其他属性保留
            url: item.path, // 获取文件路径
          }));
          const newFiles = [...this.files, ...files];
          this.files = newFiles;

          this.$emit('fileSelect', {
            e,
            name: 'uploadAttachment',
            files,
          });
          this.$emit('fileChange', {
            files: newFiles,
          });
        }
      } catch (err) {
        wx.showToast({
          title: '选择微信文件失败',
          icon: 'none',
        });
      } finally {
        this.$emit('update:visible', false);
      }
    },

    handleUploadEntryClick(e) {
      const { name } = e.currentTarget.dataset;
      const config = this.uploadConfig[name];
      if (config && this[config.handler]) {
        this[config.handler]({ currentTarget: { dataset: { type: config.handlerArg } } });
      }
    },
  },
});
</script>
<style scoped>
@import './chat-sender.css';
</style>
