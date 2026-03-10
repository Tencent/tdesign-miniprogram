<template>
  <view>
    <view
      class="chat-box"
      :style="'height: ' + contentHeight + ';'"
    >
      <t-chat-list>
        <block
          v-for="(item, chatIndex) in chatList"
          :key="item.key"
        >
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
              <block
                v-for="(contentItem, contentIndex) in item.message.content"
                :key="contentIndex"
              >
                <t-chat-content
                  v-if="contentItem.type === 'text' || contentItem.type === 'markdown'"
                  :content="contentItem"
                />

                <!-- :slot="'custom-' + contentIndex" -->
                <view
                  v-if="contentItem.type === 'preview'"
                  class="preview"
                >
                  <view>{{ contentItem.data.enName }}</view>
                  <view>
                    <span class="btn">复制代码</span>
                    <span class="btn">预览</span>
                  </view>
                </view>
              </block>
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

const mockData1 =  '```jsx\nimport { Form, Input, Button, Message } from \'tdesign-react\';\n\nconst LoginForm = () => {\n  const [loading, setLoading] = useState(false);\n\n  const onSubmit = async ({ validateResult }) => {\n    if (validateResult === true) {\n      setLoading(true);\n      try {\n        // 登录逻辑\n        Message.success(\'登录成功\');\n      } catch {\n        Message.error(\'登录失败\');\n      } finally {\n        setLoading(false);\n      }\n    }\n  };\n\n  return (\n    <Form onSubmit={onSubmit}>\n      <Form.FormItem name="username" label="用户名" rules={[{ required: true }]}>\n        <Input placeholder="请输入用户名" />\n      </Form.FormItem>\n\n      <Form.FormItem name="password" label="密码" rules={[{ required: true }]}>\n        <Input type="password" />\n      </Form.FormItem>\n\n      <Form.FormItem>\n        <Button theme="primary" type="submit" loading={loading} block>\n          登录\n        </Button>\n      </Form.FormItem>\n    </Form>\n  );\n};\n```\n\n';
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
      customActionBar: ['refresh', 'good', 'bad'],

      chatList: [
        {
          avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
          key: getUniqueKey(),
          message: {
            role: 'assistant',
            content: [
              {
                type: 'text',
                data: '欢迎使用TDesign Chatbot智能代码助手，请输入你的问题',
              },
            ],
          },
        },
      ],

      value: '使用tdesign组件库实现一个登录表单的例子',

      // 输入框的值
      loading: false,

      // 加载状态
      disabled: false,

      // 禁用状态
      inputStyle: '',

      // 动态样式
      // 内容高度
      contentHeight: '100vh',

      chatIndex: 0,
      contentIndex: 0,

      contentItem: {
        type: '',

        data: {
          enName: '',
        },
      },
      activePopoverId: '', // 当前打开悬浮actionbar的chatId
      longPressPosition: null, // 长按位置对象
    };
  },
  mounted() {
    // 处理小程序 attached 生命周期
    this.attached();
  },
  created() {},
  methods: {
    attached() {
      /**
       * 计算内容区域高度
       * 生成CSS calc表达式：calc(100vh - 96rpx - 导航高度 - 底部安全区域高度)
       */
      try {
        // 获取当前的导航栏高度和安全区域高度
        const navigationBarHeight = getNavigationBarHeight() || 0;

        // 生成CSS calc表达式字符串
        const contentHeight = `calc(100vh - 96rpx - ${navigationBarHeight}px)`;
        this.setData({
          contentHeight,
        });
        console.log('内容区域高度CSS表达式:', contentHeight);
      } catch (error) {
        console.log('CatchClause', error);
        console.log('CatchClause', error);
        console.error('生成内容高度表达式失败:', error);
        this.setData({
          contentHeight: 'calc(100vh - 96rpx)',
        });
      }
    },

    // 发送消息事件处理
    onSend(e) {
      const { value } = e.detail;
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
      this.setData({
        chatList: [userMessage, ...this.chatList],
        value: '', // 清空输入框
      });

      // 模拟助手回复（可选）
      this.simulateAssistantReply(value.trim());
    },

    // 停止事件处理
    onStop() {
      console.log('停止发送');
      this.setData({
        loading: false,
      });
    },

    // 聚焦事件处理
    onFocus() {
      console.log('输入框聚焦');
    },

    // 模拟助手回复
    simulateAssistantReply() {
      this.setData({
        loading: true,
      });
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
      this.setData({
        chatList: [assistantMessage, ...this.chatList],
      });
      const that = this;
      this.$nextTick(async () => {
        await fetchStream('下面是一个使用TDesign组件库实现的登录表单组件，以React版本为例：\n\n', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[0].data += result;
            that.setData({
              chatList: that.chatList,
            });
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content.push(
          {
            type: 'preview',
            status: 'complete',
            data: {
              id: 1755774250585,
              enName: 'tdesign-login-form.jsx',
              cnName: '生产完成',
              version: 'v1',
            },
          },
          {
            type: 'markdown',
            data: '',
          },
        );
        that.setData({
          chatList: that.chatList,
        });
        await fetchStream(mockData1, {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[2].data += result;
            that.setData({
              chatList: that.chatList,
            });
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content.push({
          type: 'markdown',
          data: '',
        });
        that.setData({
          chatList: that.chatList,
        });
        await fetchStream(
          '这个版本都包含了：\n1. 用户名和密码输入框\n2. 必填验证\n3. 加载状态\n4. 基本的登录提交逻辑\n5. 消息提示功能',
          {
            success(result) {
              if (!that.loading) {
                return;
              }
              that.chatList[0].message.content[3].data += result;
              that.setData({
                chatList: that.chatList,
              });
            },
            complete() {
              that.chatList[0].message.status = 'complete';
              that.setData({
                chatList: that.chatList,
              });
              that.setData({
                loading: false,
              });
            },
          },
        );
      });
    },

    handleAction(e) {
      const { name, active, data } = e.detail || e;
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

.t-chat__list {
  padding: 0 0 0 32rpx;
  box-sizing: border-box;
}

.t-chat-message {
  padding: 0 32rpx;
}

.preview {
  padding: 8rpx 16rpx;
  display: flex;
  justify-content: space-between;
  border: 1px solid #c5c5c5;
  border-radius: 6rpx;
  color: #181818;
}

.preview .btn {
  color: #366ef4;
  margin-left: 32rpx;
}
</style>
