<template>
  <view>
    <view
      class="chat-box"
      :style="'height: ' + contentHeight + ';'"
    >
      <t-chat-list
        id="chatList"
        @scroll="onScroll($event, { tagId: 'chatList' })"
      >
        <block
          v-for="(item, index) in chatList"
          :key="item.chatId"
        >
          <t-chat-message
            :chat-id="item.chatId"
            :avatar="item.avatar || ''"
            :name="item.name || ''"
            :datetime="item.datetime || ''"
            :content="item.content"
            :role="item.role"
            :placement="item.role === 'user' ? 'right' : 'left'"
            :status="item.status || ''"
            @message-longpress="showPopover"
          >
            <template #actionbar>
              <t-chat-actionbar
                v-if="index !== chatList.length - 1 && item.status === 'complete' && item.role === 'assistant'"
                :ref="`actionbar-${item.chatId}`"
                :chat-id="`actionbar-${item.chatId}`"
                :comment="item.comment"
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
            :auto-rise-with-keyboard="true"
            :render-presets="renderPresets"
            @update:value="value = $event"
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
      <!-- 内置虚拟列表优化性能仅在data属性中使用 -->
      <!-- <TChatList id="chatList" bindscroll="onScroll" data="{{chatList}}"></TChatList> -->
    </view>
    <t-toast ref="t-toast" />
  </view>
</template>

<script>
import TChatMessage from '@tdesign/uniapp-chat/chat-message/chat-message.vue';
import TChatList from '@tdesign/uniapp-chat/chat-list/chat-list.vue';
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

const mockData = `南极的自动提款机并没有一个特定的专属名称，但历史上确实有一台ATM机曾短暂存在于南极的**麦克默多站**（McMurdo Station）。这台ATM由美国**富兰克林国家银行**（Wells Fargo）于1998年安装，主要供驻扎在该站的科研人员使用。不过，由于南极的极端环境和极低的人口密度，这台ATM机并未长期运行，最终被移除。

**背景补充：**
- **麦克默多站**是美国在南极最大的科研基地，夏季人口可达约1,000人，冬季约200人。
- 该ATM机更多是作为一种象征性服务存在，实际使用频率极低，因为南极科考人员通常依靠预支资金或电子支付。
- 目前南极已无长期运行的ATM机，现代科考站更多依赖非现金交易方式。

南极作为非主权领土，其基础设施以科研和生活支持为主，商业金融服务非常有限。若有类似设施，通常是临时或实验性质的。`;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
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
    TChatList,
    TChatSender,
    TChatActionbar,
    TToast,
  },
  data() {
    return {
      renderPresets: [
        {
          name: 'send',
          type: 'icon',
        },
      ],

      chatList: [
        {
          avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
          role: 'assistant',
          status: 'complete',
          chatId: getUniqueKey(),
          comment: '',
          content: [
            {
              type: 'text',
              data: '它叫 McMurdo Station ATM，是美国富国银行安装在南极洲最大科学中心麦克默多站的一台自动提款机。',
            },
          ],
        },
        {
          role: 'user',
          chatId: getUniqueKey(),
          comment: '',
          content: [
            {
              type: 'text',
              data: '牛顿第一定律是否适用于所有参考系？',
            },
          ],
        },
      ],

      value: '',

      // 输入框的值
      loading: false,

      // 加载状态
      disabled: false,

      // 禁用状态
      inputStyle: '',

      // 输入框样式
      contentHeight: '100vh',

      // 内容高度
      animation: 'dots',

      chatIndex: '',
      activePopoverId: '', // 当前打开悬浮actionbar的chatId
      longPressPosition: null, // 长按位置对象
    };
  },
  options: {
    styleIsolation: 'shared',
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

    // 调用chatList的滚动到底部方法
    scrollToBottom() {
      const chatListComponent = this.zpSelectComponent('#chatList');
      if (chatListComponent && typeof chatListComponent.scrollToBottom === 'function') {
        chatListComponent.scrollToBottom();
      }
    },

    onScroll(e) {
      console.log('监听滚动', e);
    },

    // 发送消息事件处理
    onSend(e) {
      const { value } = e;
      if (!value || value.trim() === '') {
        return;
      }

      // 创建用户消息对象
      const userMessage = {
        role: 'user',
        chatId: getUniqueKey(),
        content: [
          {
            type: 'text',
            data: value.trim(),
          },
        ],
      };

      // 将用户消息插入到chatList的开头（因为reverse为true，所以用unshift）
      this.chatList = [userMessage, ...this.chatList];
      this.value = ''; // 清空输入框

      // 模拟助手回复（可选）
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

    // 获取当前时间
    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString()
        .padStart(2, '0');
      const minutes = now.getMinutes().toString()
        .padStart(2, '0');
      return `${hours}:${minutes}`;
    },

    // 模拟助手回复
    simulateAssistantReply() {
      this.loading = true;

      // 请求中
      const assistantMessage = {
        role: 'assistant',
        chatId: getUniqueKey(),
        comment: '',
        content: [
          {
            type: 'markdown',
            data: '',
          },
        ],
        avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
        status: 'pending',
      };
      this.chatList = [assistantMessage, ...this.chatList];

      const that = this;
      this.$nextTick(() => {
        fetchStream(mockData, {
          success(result) {
            // 生文中
            that.chatList[0].status = 'streaming';
            if (!that.loading) {
              return;
            }
            that.chatList[0].content[0].data += result;
            // this.chatList = that.chatList;
          },
          complete() {
            that.chatList[0].status = 'complete';
            // this.chatList = that.chatList;

            that.loading = false;
          },
        });
      });
    },

    handleAction(e) {
      const { name, active, data, chatId } = e;
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

      if (name === 'good' || name === 'bad') {
        this.chatList.forEach((item) => {
          if (item.chatId === chatId) {
            item.comment = active ? name : '';
          }
        });
      }
    },

    // 显示长按弹出操作栏
    showPopover(e) {
      const { id, longPressPosition } = e;

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

.t-chat__list {
  padding: 0 0 0 32rpx;
  box-sizing: border-box;
}

.t-chat-message {
  padding: 0 32rpx;
}
</style>
