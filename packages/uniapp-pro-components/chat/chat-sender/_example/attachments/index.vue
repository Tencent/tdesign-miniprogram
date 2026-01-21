<template>
  <view>
    <view :class="'demo-attachments-container ' + (showUploadMenu ? 'show-upload-menu' : '')">
      <view class="chat-sender-demo-wrapper">
        <view class="chat-sender-height-limit">
          <view class="chat-sender-height-left-limit" />
          <view class="chat-sender-height-right-limit" />
        </view>
        <view class="chat-sender-placeholder">
          高度限制：最大高度为132px
        </view>
        <view
          class="chat-sender-wrapper"
          :style="showUploadMenu ? 'bottom:32rpx;' : ''"
        >
          <TChatSender
            :value="value"
            :loading="loading"
            :disabled="disabled"
            :placeholder="placeholder"
            :textarea-props="textareaProps"
            :file-list="fileList"
            :attachments-props="attachmentsProps"
            :render-presets="renderPresets"
            :visible="visible"
            @send="onSend"
            @stop="onStop"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
            @uploadClick="onUploadClick"
            @fileClick="onFileClick"
            @fileDelete="onFileDelete"
            @fileChange="onFileChange"
            @fileAdd="onFileAdd"
            @fileSelect="onFileSelect"
            @updateVisible="onUpdateVisible"
            @keyboardheightchange="onKeyboardHeightChange"
          >
            <template
              #footer-prefix
            >
              <view
                class="demo-footer-prefix"
              >
                <view
                  :class="'deep-think-block ' + (deepThinkActive ? 'active' : '')"
                  @click.stop="onDeepThinkTap"
                >
                  <TIcon
                    name="system-sum"
                    size="40rpx"
                  />
                  <text class="deep-think-text">
                    深度思考
                  </text>
                </view>
                <view
                  :class="'net-search-block ' + (netSearchActive ? 'active' : '')"
                  @click.stop="onNetSearchTap"
                >
                  <TIcon
                    name="internet"
                    size="40rpx"
                  />
                </view>
              </view>
            </template>
          </TChatSender>
        </view>
        <view
          v-if="!visible"
          class="demo-attachments-footer"
        >
          内容由AI生成，仅供参考
        </view>
      </view>
    </view>
    <TToast ref="t-toast" />
  </view>
</template>

<script>
import TChatSender from 'tdesign-uniapp-chat/chat-sender/chat-sender.vue';
import TToast from 'tdesign-uniapp/toast/toast.vue';
import Toast from 'tdesign-uniapp/toast';
import TIcon from 'tdesign-uniapp/icon/icon.vue';

export default {
  components: {
    TChatSender,
    TToast,
    TIcon,
  },
  data() {
    return {
      value: '',
      loading: false,
      disabled: false,
      fileList: [
        {
          fileType: 'image',
          name: '图片1.png',
          url: 'https://tdesign.gtimg.com/site/square.png',
        },
        {
          fileType: 'pdf',
          name: '文档.pdf',
          url: 'https://example.com/document.pdf',
          size: 3072,
          status: 'pending',
        },
      ],
      visible: true,
      placeholder: '请输入消息...',
      textareaProps: {
        autosize: {
          maxHeight: 264,
          minHeight: 48, // 设置为0时，用自动计算height的高度
        }, // 默认为false
      },
      attachmentsProps: {
        items: [
          {
            fileType: 'image',
            name: '图片1.png',
            url: 'https://tdesign.gtimg.com/site/square.png',
          },
          {
            fileType: 'pdf',
            name: '文档.pdf',
            url: 'https://example.com/document.pdf',
            size: 3072,
            status: 'pending',
          },
        ],
        removable: true,
        imageViewer: true,
        addable: false,
      },
      renderPresets: [
        {
          name: 'upload',
          presets: ['uploadCamera', 'uploadImage', 'uploadAttachment'],
          type: 'bottom',
          status: '',
        },
        {
          name: 'send',
          type: 'icon',
        },
      ],
      deepThinkActive: false,
      netSearchActive: false,
      showUploadMenu: true,
    };
  },
  methods: {
    // 发送消息
    onSend(e) {
      const { value } = e;
      console.log('发送消息:', value);
      if (!value.trim()) {
        uni.showToast({
          title: '请输入消息内容',
          icon: 'none',
        });
        return;
      }

      // 模拟发送状态
      this.loading = true;

      setTimeout(() => {
        if (this.loading) {
          this.loading = false;
          this.value = '';// 清空输入框

          uni.showToast({
            title: '发送成功',
            icon: 'success',
          });
        }
      }, 3000);
    },

    // 停止发送
    onStop(e) {
      const { value } = e;
      console.log('停止发送:', value);
      this.loading = false;

      uni.showToast({
        title: '已停止发送',
        icon: 'none',
      });
    },

    // 输入框聚焦
    onFocus(e) {
      const { value, context } = e;
      console.log('输入框聚焦:', value, context);
    },

    // 输入框失焦
    onBlur(e) {
      const { value, context } = e;
      console.log('输入框失焦:', value, context);
    },

    // 输入内容变化
    onChange(e) {
      const { value } = e;
      console.log('输入内容变化:', value);

      this.value = value;
    },

    // 点击上传按钮
    onUploadClick() {
      console.log('点击上传按钮');
    },

    // 点击文件
    onFileClick(e) {
      const { file } = e;
      console.log('点击文件:', file);
      uni.showToast({
        title: `点击了文件: ${file.name}`,
        icon: 'none',
      });
    },

    // 删除文件
    onFileDelete(e) {
      const { file } = e;
      console.log('删除文件:', file);
      uni.showToast({
        title: '文件删除成功',
        icon: 'success',
      });
    },

    // 文件列表变化
    onFileChange(e) {
      const { files } = e;
      console.log('文件列表变化:', files);
      this.attachmentsProps = {
        ...this.attachmentsProps,
        items: files,
      };

      this.fileList = files;
    },

    // 添加文件
    onFileAdd() {
      console.log('添加文件');
    },

    // 选择文件
    onFileSelect(e) {
      const { name, files } = e;
      console.log('选择文件:', name, files);
      uni.showToast({
        title: `选择了${files.length}个文件`,
        icon: 'success',
      });
    },

    // 上传面板显示状态变化
    onUpdateVisible() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '暂不可操作',
      });
    },

    // 键盘高度变化
    onKeyboardHeightChange(e) {
      console.log('键盘高度变化:', e);
    },

    // 切换禁用状态
    toggleDisabled() {
      this.disabled = !this.disabled;
    },

    // 切换加载状态
    toggleLoading() {
      this.loading = !this.loading;
    },

    // 清空输入框
    clearInput() {
      this.value = '';
    },

    onDeepThinkTap() {
      this.deepThinkActive = !this.deepThinkActive;
    },

    onNetSearchTap() {
      this.netSearchActive = !this.netSearchActive;
    },
  },
};
</script>
<style>
.demo-attachments-container {
    padding: 56rpx 0 0 0;
    background-color: var(--td-bg-color-container);
    height: 608rpx;
    position: relative;
    transition: all 0.3s;
}

/* 聊天发送器包装器 */
.chat-sender-demo-wrapper {
    margin-bottom: 32rpx;
    /* border: 2rpx solid #e5e5e5; */
    border-radius: 8rpx;
    overflow: hidden;
}

.chat-sender-height-limit {
    height: 72rpx;
    padding: 0 24rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-sender-height-left-limit {
    height: 70rpx;
    width: 70rpx;
    border-top: 1px var(--td-component-stroke) dashed;
    border-left: 1px var(--td-component-stroke) dashed;
    border-top-left-radius: 32rpx;
}
.chat-sender-height-right-limit {
    height: 70rpx;
    width: 70rpx;
    border-top: 1px var(--td-component-stroke) dashed;
    border-right: 1px var(--td-component-stroke) dashed;
    border-top-right-radius: 32rpx;
}
.chat-sender-placeholder {
    font-size: 32rpx;
    font-weight: 600;
    color: var(--demo-chat-sender-placeholder);
    text-align: center;
    height: 48rpx;
}


.show-upload-menu {
    height: 780rpx;
}

.demo-attachments-footer {
    height: 32rpx;
    width: 100%;
    text-align: center;
    font-size: 20rpx;
    line-height: 32rpx;
    color: rgba(0, 0, 0, 0.4);
    position: absolute;
    bottom: 32rpx;
}

.chat-sender-wrapper {
    position: absolute;
    width: 100%;
    bottom: 0rpx;
    background-color: var(--td-bg-color-container);
}


/* 聊天发送器包装器 */
.chat-sender-wrapper {
    /* border: 2rpx solid #e5e5e5; */
    border-radius: 8rpx;
    overflow: hidden;
    background-color: var(--td-bg-color-container);
}

.demo-footer-prefix {
    display: flex;
    align-items: center;
}

.deep-think-block {
    padding: 0 24rpx;
    height: 60rpx;
    margin-right: 16rpx;
}

.deep-think-text {
    margin-left: 8rpx;
}

.deep-think-block,
.net-search-block {
    color: var(--td-text-color-primary);
    border-radius: 200rpx;
    border: 2rpx solid var(--td-component-border);
    display: flex;
    justify-content: center;
    align-items: center;
}

.net-search-block {
    width: 64rpx;
    height: 60rpx;
}

.active {
    border-color: var(--td-brand-color-light-active);
    color: var(--td-brand-color);
    background-color: var(--td-brand-color-light);
}

</style>
