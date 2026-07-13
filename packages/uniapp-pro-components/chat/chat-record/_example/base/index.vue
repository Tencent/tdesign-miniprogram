<template>
  <view class="chat-box" :style="{ height: contentHeight }">
    <t-chat-list id="chatList" @scroll="onScroll">
      <t-chat-message
        v-for="(item, index) in chatList"
        :key="item.chatId"
        :chat-id="item.chatId"
        :avatar="item.avatar || ''"
        :name="item.name || ''"
        :datetime="item.datetime || ''"
        :content="item.content"
        :role="item.role"
        :placement="item.role === 'user' ? 'right' : 'left'"
        :status="item.status || ''"
        @message-longpress="showPopover"
        @click="onClick"
      >
        <template
          v-if="index !== chatList.length - 1 && item.status === 'complete' && item.role === 'assistant'"
          #actionbar
        >
          <t-chat-actionbar
            :id="'actionbar-' + item.chatId"
            :chat-id="item.chatId"
            :comment="item.comment"
            placement="end"
            @actions="handleAction"
          />
        </template>
      </t-chat-message>

      <template #footer>
        <t-chat-sender
          v-model="value"
          :loading="loading"
          :disabled="disabled"
          :auto-rise-with-keyboard="true"
          :render-presets="renderPresets"
          :allow-speech="true"
          :placeholder="placeholder"
          @send="onSend"
          @stop="onStop"
          @focus="onFocus"
          @keyboardheightchange="onKeyboardHeightChange"
        >
          <!-- 语音输入模式 -->
          <template #speech>
            <t-chat-record @recognize="handleRecognize" @error="handleRecordError">
              <template #speechInput>
                <view class="speech-slot-btn"> 按住说话 </view>
              </template>
              <template #speechNoAuth>
                <view class="speech-btn-error"> 请授权麦克风权限 </view>
              </template>
            </t-chat-record>
          </template>
        </t-chat-sender>
      </template>
    </t-chat-list>

    <t-toast id="t-toast" />
  </view>
</template>

<script>
import tToast from 'tdesign-uniapp/toast/toast.vue';

import tChatActionbar from 'tdesign-uniapp-chat/chat-actionbar/chat-actionbar.vue';
import tChatList from 'tdesign-uniapp-chat/chat-list/chat-list.vue';
import tChatMessage from 'tdesign-uniapp-chat/chat-message/chat-message.vue';
import tChatRecord from 'tdesign-uniapp-chat/chat-record/chat-record.vue';
import tChatSender from 'tdesign-uniapp-chat/chat-sender/chat-sender.vue';
import { getNavigationBarHeight } from '../utils';

export default {
  components: {
    't-chat-list': tChatList,
    't-chat-message': tChatMessage,
    't-chat-actionbar': tChatActionbar,
    't-chat-sender': tChatSender,
    't-chat-record': tChatRecord,
    't-toast': tToast,
  },
  data() {
    return {
      renderPresets: [{ name: 'send', type: 'icon' }],
      chatList: [
        {
          avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
          role: 'assistant',
          status: 'complete',
          content: [
            {
              type: 'text',
              data: '它叫 McMurdo Station ATM，是美国富国银行安装在南极洲最大科学中心麦克默多站的一台自动提款机。',
            },
          ],
          chatId: this.getUniqueKey(),
          comment: '',
        },
        {
          role: 'user',
          content: [
            {
              type: 'text',
              data: '牛顿第一定律是否适用于所有参考系？',
            },
          ],
          chatId: this.getUniqueKey(),
        },
      ],
      value: '', // 输入框的值
      loading: false, // 加载状态
      disabled: false, // 禁用状态
      contentHeight: '100vh', // 内容高度
      activePopoverId: '', // 当前打开悬浮actionbar的chatId
      longPressPosition: null, // 长按位置对象
      keyboardHeight: 0, // 键盘高度（px）
      placeholder: '请输入内容',
      uniqueId: 0,
    };
  },
  options: {
    styleIsolation: 'shared',
  },
  mounted() {
    this.calculateContentHeight();
  },
  methods: {
    getUniqueKey() {
      this.uniqueId += 1;
      return `key-${this.uniqueId}`;
    },

    // 计算内容区域高度
    calculateContentHeight() {
      try {
        const navigationBarHeight = getNavigationBarHeight() || 0;

        this.contentHeight = `calc(100vh - ${navigationBarHeight}px)`;
      } catch (error) {
        console.error('生成内容高度表达式失败:', error);
        this.contentHeight = 'calc(100vh - 96rpx)';
      }
    },

    // 调用chatList的滚动到底部方法
    scrollToBottom() {
      const chatListComponent = this.$refs.chatList;
      if (chatListComponent && typeof chatListComponent.scrollToBottom === 'function') {
        chatListComponent.scrollToBottom();
      }
    },

    onScroll(e) {
      console.log('监听滚动', e);
    },

    /**
     * 监听键盘高度变化，弹出键盘时将 chat-sender 往上推
     */
    onKeyboardHeightChange(e) {
      const height = (e && e.height) || 0;
      this.keyboardHeight = height;
    },

    /**
     * 语音识别回调
     */
    handleRecognize(voiceMsg) {
      console.log('语音识别结果:', voiceMsg);
      if (voiceMsg.voiceText) {
        // 自动发送识别到的文本
        this.onSend({ value: voiceMsg.voiceText });
      }
    },

    // 语音识别错误
    handleRecordError(err) {
      console.error('语音识别错误:', err);
    },

    // 发送消息事件处理
    onSend(e) {
      const value = e.value || e.detail?.value;
      if (!value || value.trim() === '') return;

      // 创建用户消息对象
      const userMessage = {
        role: 'user',
        content: [
          {
            type: 'text',
            data: value.trim(),
          },
        ],
        chatId: this.getUniqueKey(),
      };

      // 将用户消息插入到chatList的开头
      this.chatList = [userMessage, ...this.chatList];
      this.value = ''; // 清空输入框

      // 模拟助手回复
      this.simulateAssistantReply(value.trim());
    },

    // 停止事件处理
    onStop() {
      this.loading = false;
    },

    // 聚焦事件处理
    onFocus() {
      console.log('输入框聚焦');
    },

    // 模拟助手回复
    simulateAssistantReply() {
      this.loading = true;

      const mockData = `南极的自动提款机并没有一个特定的专属名称，但历史上确实有一台ATM机曾短暂存在于南极的**麦克默多站**（McMurdo Station）。这台ATM由美国**富兰克林国家银行**（Wells Fargo）于1998年安装，主要供驻扎在该站的科研人员使用。不过，由于南极的极端环境和极低的人口密度，这台ATM机并未长期运行，最终被移除。

**背景补充：**
- **麦克默多站**是美国在南极最大的科研基地，夏季人口可达约1,000人，冬季约200人。
- 该ATM机更多是作为一种象征性服务存在，实际使用频率极低，因为南极科考人员通常依靠预支资金或电子支付。
- 目前南极已无长期运行的ATM机，现代科考站更多依赖非现金交易方式。

南极作为非主权领土，其基础设施以科研和生活支持为主，商业金融服务非常有限。若有类似设施，通常是临时或实验性质的。`;

      // 请求中
      const assistantMessage = {
        role: 'assistant',
        content: [
          {
            type: 'markdown',
            data: '',
          },
        ],
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        status: 'pending',
        chatId: this.getUniqueKey(),
        comment: '',
      };

      this.chatList = [assistantMessage, ...this.chatList];

      const that = this;
      this.$nextTick(() => {
        this.fetchStream(mockData, {
          success(result) {
            if (!that.loading) return;
            that.chatList[0].status = 'streaming';
            that.chatList[0].content[0].data += result;
            that.chatList = [...that.chatList]; // 触发响应式更新
          },
          complete() {
            that.chatList[0].status = 'complete';
            that.loading = false;
            that.chatList = [...that.chatList]; // 触发响应式更新
          },
        });
      });
    },

    fetchStream(str, options) {
      const { success, complete, delay = 100 } = options;
      const arr = str.split('');

      const stream = async () => {
        for (let i = 0; i < arr.length; i += 1) {
          await this.sleep(delay);
          success(arr[i]);
        }
        complete();
      };

      stream();
    },

    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },

    handleAction(e) {
      const { name, active, data, chatId } = e.detail || e;

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

      this.$refs.toast?.show({
        message,
        theme: 'success',
      });

      if (name === 'good' || name === 'bad') {
        this.chatList.forEach((item) => {
          if (item.chatId === chatId) {
            item.comment = active ? name : '';
          }
        });
        this.chatList = [...this.chatList]; // 触发响应式更新
      }
    },

    showPopover(e) {
      const { id, longPressPosition } = e.detail || e;

      let role = '';
      this.chatList.forEach((item) => {
        if (item.chatId === id) {
          role = item.role;
        }
      });

      // 仅当 role 为 user 时才显示 popover
      if (role !== 'user') {
        return;
      }

      this.activePopoverId = id;
      this.longPressPosition = longPressPosition;
    },

    onClick(e) {
      const { node } = e.detail || e;
      console.log('点击节点', node);
    },
  },
};
</script>

<style>
.chat-box {
  padding-top: 32rpx;
  box-sizing: border-box;
}

.t-chat-message {
  padding: 0 32rpx;
}

.speech-slot-btn,
.speech-btn-error {
  /* 不设置 height，让 chat-sender 父容器的 min-height(134rpx) 自然撑起，
     避免与 t-chat-record-hook 的 padding/line-height 叠加导致总高度超过 keyboard 模式 */
  width: 100%;
  text-align: center;
  gap: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  line-height: 48rpx;
  color: rgba(0, 0, 0, 0.9);
}

.speech-btn-error {
  color: red;
}

.demo-footer-prefix {
  display: flex;
  align-items: center;
}
</style>
