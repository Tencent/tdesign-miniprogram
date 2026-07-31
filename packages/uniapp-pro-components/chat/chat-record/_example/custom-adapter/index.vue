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
        >
          <!-- 语音输入：腾讯云 ASR（换 key 即用） -->
          <template #speech>
            <t-chat-record :adapter="tencentAdapter" @recognize="handleRecognize" @error="handleRecordError">
              <template #speechInput>
                <view class="speech-slot-btn"> 按住说话（腾讯云 ASR） </view>
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
import TToast from 'tdesign-uniapp/toast/toast.vue';

import TChatActionbar from 'tdesign-uniapp-chat/chat-actionbar/chat-actionbar.vue';
import TChatList from 'tdesign-uniapp-chat/chat-list/chat-list.vue';
import TChatMessage from 'tdesign-uniapp-chat/chat-message/chat-message.vue';
import TChatRecord from 'tdesign-uniapp-chat/chat-record/chat-record.vue';
import TChatSender from 'tdesign-uniapp-chat/chat-sender/chat-sender.vue';
import { TencentASRAdapter } from 'tdesign-uniapp-chat/chat-record/adapters/tencent-asr';

import { getNavigationBarHeight } from '../utils';

// ============================================================================
// 换链接即用：替换为你的后端签名接口地址
//
// 后端代码见 koa-blog-end/packages/server/src/app/api/asr.ts
// 部署后在 .env.local 中配置：
//   TENCENT_ASR_APPID=你的APPID
//   TENCENT_ASR_SECRET_ID=你的SecretId
//   TENCENT_ASR_SECRET_KEY=你的SecretKey
// ============================================================================
const ASR_CONFIG = {
  signEndpoint: 'https://your-api.com/api/asr/tencent-sign',
  // signHeaders: { Authorization: 'Bearer xxx' },  // 如需鉴权
};

const mockData = `腾讯云 ASR 已就绪，按住下方"按住说话"即可开始录音识别。识别到的文字会作为新的用户消息自动插入到对话流顶部，方便你直接观察识别效果。

当前示例使用腾讯云一句话识别（ASR）作为自定义 adapter，配置完成后即可在小程序 / H5 双端跑通。

你也可以参考 chat-record/adapters/tencent-asr.ts 自行实现 ASRAdapter 接口，替换为 WebSpeech（H5 原生）、微信同声传译（小程序原生）或自定义的云端方案。

切换 adapter 不需要改动任何业务代码，只要在 t-chat-record 上传 :adapter 即可，组件会自动接管录音、权限、错误处理等流程。

试试看按住说话，识别完成后消息会自动出现在这里。`;

export default {
  components: {
    TChatList,
    TChatMessage,
    TChatActionbar,
    TChatSender,
    TChatRecord,
    TToast,
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
      activePopoverId: '', // 当前打开悬浮 actionbar 的 chatId
      longPressPosition: null, // 长按位置对象
      placeholder: '腾讯云 ASR Demo（H5 + 小程序双端可用）',
      uniqueId: 0,
      // 实例化 adapter，传入腾讯云密钥
      tencentAdapter: new TencentASRAdapter(ASR_CONFIG),
    };
  },
  options: {
    styleIsolation: 'shared',
  },
  mounted() {
    this.calculateContentHeight();
  },
  beforeUnmount() {
    if (this.tencentAdapter) {
      this.tencentAdapter.destroy();
      this.tencentAdapter = null;
    }
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

        this.contentHeight = `calc(100vh - 96rpx - ${navigationBarHeight}px)`;
      } catch (error) {
        console.error('生成内容高度表达式失败:', error);
        this.contentHeight = 'calc(100vh - 96rpx)';
      }
    },

    onScroll(e) {
      console.log('监听滚动', e);
    },

    /**
     * 语音识别回调
     */
    handleRecognize(voiceMsg) {
      console.log('腾讯云 ASR 识别结果:', voiceMsg);
      if (voiceMsg.voiceText) {
        // 自动发送识别到的文本
        this.onSend({ value: voiceMsg.voiceText });
      }
    },

    // 语音识别错误
    handleRecordError(err) {
      console.error('ASR 错误:', err);
    },

    // 发送消息事件处理
    onSend(e) {
      const sendValue = e.value || e.detail?.value;
      if (!sendValue || sendValue.trim() === '') return;

      // 创建用户消息对象
      const userMessage = {
        role: 'user',
        content: [
          {
            type: 'text',
            data: sendValue.trim(),
          },
        ],
        chatId: this.getUniqueKey(),
      };

      // 将用户消息插入到 chatList 的开头
      this.chatList = [userMessage, ...this.chatList];
      this.value = ''; // 清空输入框

      // 模拟助手回复
      this.simulateAssistantReply(sendValue.trim());
    },

    // 停止事件处理
    onStop() {
      this.loading = false;
    },

    // 模拟助手回复
    simulateAssistantReply() {
      this.loading = true;

      // 请求中
      const assistantMessage = {
        role: 'assistant',
        content: [
          {
            type: 'text',
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
</style>
