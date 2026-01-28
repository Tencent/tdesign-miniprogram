<template>
  <view>
    <view class="chat-box image-chat" :style="'height: ' + contentHeight + ';'">
      <t-chat-list>
        <block v-for="(item, chatIndex) in chatList" :key="item.key">
          <t-chat-message
            :chat-id="item.key"
            :avatar="item.avatar || ''"
            :name="item.name || ''"
            :datetime="item.datetime || ''"
            :role="item.message.role"
            :placement="item.message.role === 'user' ? 'right' : 'left'"
            @message-longpress="showPopover"
          >
            <template #content>
              <view v-if="item.message.role === 'user'">
                <block v-for="(contentItem, contentIndex) in item.message.content" :key="contentIndex">
                  <t-chat-content
                    v-if="contentItem.type === 'text' || contentItem.type === 'markdown'"
                    :content="contentItem"
                  />
                </block>
              </view>
              <view v-else style="width: 100%">
                <block v-for="(contentItem, contentIndex) in item.message.content" :key="contentIndex">
                  <t-chat-content
                    v-if="contentItem.type === 'text' || contentItem.type === 'markdown'"
                    :content="contentItem"
                  />

                  <view v-else class="attachment-slide">
                    <t-attachments :items="contentItem.data" :in-chat="true" :removable="false" />
                  </view>
                </block>
              </view>
            </template>
            <template #actionbar>
              <t-chat-actionbar
                v-if="
                  chatIndex !== chatList.length - 1 &&
                  item.message.status === 'complete' &&
                  item.message.role === 'assistant'
                "
                placement="end"
                @actions="handleAction"
              />
            </template>
          </t-chat-message>
        </block>
        <template #footer>
          <t-chat-sender
            :value="value"
            :loading="loading"
            :disabled="disabled"
            :render-presets="renderPresets"
            :auto-rise-with-keyboard="true"
            @send="onSend"
            @stop="onStop"
            @focus="onFocus"
          />
        </template>
      </t-chat-list>
      <!-- 长按弹出操作栏 -->
      <t-chat-actionbar
        ref="popoverActionbar"
        class="popover-actionbar"
        placement="longpress"
        :long-press-position="longPressPosition"
        @actions="handlePopoverAction"
      />
    </view>
    <t-toast ref="t-toast" />
  </view>
</template>

<script>
import TChatMessage from '@tdesign/uniapp-chat/chat-message/chat-message.vue';
import TChatContent from '@tdesign/uniapp-chat/chat-content/chat-content.vue';
import TChatList from '@tdesign/uniapp-chat/chat-list/chat-list.vue';
import TAttachments from '@tdesign/uniapp-chat/attachments/attachments.vue';
import TChatSender from '@tdesign/uniapp-chat/chat-sender/chat-sender.vue';
import TChatActionbar from '@tdesign/uniapp-chat/chat-actionbar/chat-actionbar.vue';
import TToast from '@tdesign/uniapp/toast/toast.vue';
import Toast from '@tdesign/uniapp/toast/index';
import { getNavigationBarHeight } from '../utils';

let uniqueId = 0;
const getUniqueKey = () => {
  uniqueId += 1;
  return `key-${uniqueId}`;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const fetchStream = async (str, options) => {
  const { success, complete, delay = 100 } = options;
  const arr = str.split('');
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await sleep(delay);
    success(arr[i]);
  }
  complete();
};
export default {
  components: {
    TChatMessage,
    TChatContent,
    TChatList,
    TChatSender,
    TChatActionbar,
    TToast,
    TAttachments,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      renderPresets: [
        {
          name: 'send',
          type: 'icon',
        },
      ],

      customActionBar: ['good', 'bad'],

      chatList: [
        {
          avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
          key: getUniqueKey(),
          message: {
            role: 'assistant',
            content: [
              {
                type: 'text',
                data: '欢迎使用TDesign智能生图助手，请先写下你的创意，可以试试上传参考图哦～',
              },
            ],
          },
        },
      ],

      value: '',

      // 输入框的值
      loading: false,

      // 加载状态
      disabled: false,

      // 禁用状态
      inputStyle: '',

      // 输入框动态样式
      attachmentsProps: {
        items: [],
        removable: true,
        imageViewer: true,
        addable: false,
      },

      // 内容高度
      contentHeight: '100vh',

      chatIndex: 0,
      contentIndex: 0,

      contentItem: {
        type: '',
        data: '',
      },
      activePopoverId: '', // 当前打开悬浮actionbar的chatId
      longPressPosition: null, // 长按位置对象
    };
  },
  options: {
    styleIsolation: 'shared',
  },
  watch: {
    isActive: {
      handler(v) {
        this.value = v ? '请为Tdesign设计三张品牌宣传图' : ''; // 输入框的值
      },

      immediate: true,
    },
  },
  mounted() {
    // 处理小程序 attached 生命周期
    this.attached();
  },
  created() {},
  methods: {
    attached() {
      try {
        // 获取当前的导航栏高度和安全区域高度
        const navigationBarHeight = getNavigationBarHeight() || 0;

        // 生成CSS calc表达式字符串
        const contentHeight = `calc(100vh - 96rpx - ${navigationBarHeight}px)`;
        this.contentHeight = contentHeight;
        console.log('内容区域高度CSS表达式:', contentHeight);
      } catch (error) {
        console.log('CatchClause', error);
        console.log('CatchClause', error);
        console.error('生成内容高度表达式失败:', error);
        this.contentHeight = 'calc(100vh - 96rpx)';
      }
    },

    // 发送消息事件处理
    onSend(e) {
      const { value } = e;
      if (!value || value.trim() === '') {
        return;
      }

      // 创建用户消息对象
      const userMessage = {
        key: getUniqueKey(),
        message: {
          role: 'user',
          content: [
            {
              type: 'text',
              data: value.trim(),
            },
          ],
        },
      };

      // 将用户消息插入到chatList的开头（因为reverse为true，所以用unshift）
      this.chatList = [userMessage, ...this.chatList];
      this.value = ''; // 清空输入框

      // 模拟助手回复（可选）
      this.simulateAssistantReply(value.trim());
    },

    // 停止事件处理
    onStop() {
      console.log('停止发送');
      this.loading = false;
    },

    // 聚焦事件处理
    onFocus() {
      console.log('输入框聚焦');
    },

    // 打开选择文件界面
    onUpdateVisible() {
      const that = this;
      uni.chooseMessageFile({
        count: 1,
        type: 'file',
        success(res) {
          const tempFile = res.tempFiles[0];
          console.log('选择的文件信息：', tempFile);
          const item = {
            fileType: 'doc',
            name: tempFile.name,
            url: tempFile.path,
            size: tempFile.size,
            status: 'success',
          };
          this.attachmentsProps = {
            ...that.attachmentsProps,
            items: [item],
          };
        },
        fail(err) {
          console.error('选择文件失败：', err);
        },
      });
    },

    // 模拟助手回复
    simulateAssistantReply() {
      this.loading = true;
      const assistantMessage = {
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        key: getUniqueKey(),
        message: {
          role: 'assistant',
          content: [
            {
              type: 'markdown',
              data: '',
            },
          ],
        },
      };
      this.chatList = [assistantMessage, ...this.chatList];
      const that = this;
      this.$nextTick(async () => {
        await fetchStream('接下来我将生成符合要求的图片', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[0].data += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content.push({
          type: 'imageview',
          status: 'complete',
          data: [
            {
              name: 'sample1.png',
              url: 'https://tdesign.gtimg.com/site/square.png',
              fileType: 'image',
              status: 'success',
              size: 1032,
              width: 128,
              height: 128,
            },
            {
              name: 'sample2.png',
              url: 'https://tdesign.gtimg.com/site/square.png',
              fileType: 'image',
              status: 'success',
              size: 1032,
              width: 128,
              height: 128,
            },
            {
              name: 'sample3.png',
              url: 'https://tdesign.gtimg.com/site/square.png',
              fileType: 'image',
              status: 'success',
              size: 1032,
              width: 128,
              height: 128,
            },
            {
              name: 'sample4.png',
              url: 'https://tdesign.gtimg.com/site/square.png',
              fileType: 'image',
              status: 'success',
              size: 1032,
              width: 128,
              height: 128,
            },
            {
              name: 'sample5.png',
              url: 'https://tdesign.gtimg.com/site/square.png',
              fileType: 'image',
              status: 'success',
              size: 1032,
              width: 128,
              height: 128,
            },
          ],
        });
        that.chatList[0].message.status = 'complete';
        that.loading = false;
      });
    },

    handleAction(e) {
      const { name, active, data } = e;
      console.log('[handleAction]', name);
      let message = '';
      switch (name) {
        case 'replay':
          message = '重新生成';
          break;
        case 'copy':
          console.log(data);
          message = '复制成功';
          break;
        case 'good':
          message = active ? '点赞成功' : '取消点赞';
          break;
        case 'bad':
          message = active ? '点踩成功' : '取消点踩';
          break;
        case 'share':
          message = '分享功能';
          break;
        default:
          message = `执行了${name}操作`;
      }
      Toast({
        context: this,
        selector: '#t-toast',
        message,
        theme: 'success',
      });
    },

    // 显示长按弹出操作栏
    showPopover(e) {
      const { id, longPressPosition } = e;

      let role = '';
      this.chatList.forEach((item) => {
        if (item.key === id) {
          role = item.message.role;
        }
      });

      // 仅当 role 为 user 时才显示 popover
      if (role !== 'user') {
        return;
      }

      this.activePopoverId = id;
      this.longPressPosition = longPressPosition;
    },

    // 处理弹出操作栏的事件
    handlePopoverAction(e) {
      e.chatId = this.activePopoverId;
      this.handleAction(e);
    },
  },
};
</script>
<style>
.chat-box {
  padding-top: 32rpx;
  box-sizing: border-box;
}

.image-chat .t-chat__list {
  padding: 0 0 0 0;
  box-sizing: border-box;
}

.t-chat-message {
  padding: 0 32rpx;
}

.image-chat .assistant,
.image-chat .assistant .t-chat__detail {
  width: 100%;
}

.image-chat .assistant .t-chat-content {
  padding-right: 64rpx !important;
}

.attachment-slide {
  height: calc(128px + 24rpx);
  width: 100%;
}

.attachment-slide .t-attachments {
  padding-top: 24rpx;
  box-sizing: border-box;
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
}

:deep(.attachment-slide .t-attachments .t-attachments__files:first-child) {
  padding-left: 120rpx;
}

:deep(.attachment-slide .t-attachments .t-attachments__files:last-child) {
  padding-right: 96rpx;
}

.image-chat .t-chat-message__actionbar {
  --chat-actionbar-padding: 16rpx 0 0 0 !important;
}
</style>
