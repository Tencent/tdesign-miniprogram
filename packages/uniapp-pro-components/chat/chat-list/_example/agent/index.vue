<template>
  <view>
    <view class="chat-box" :style="'height: ' + contentHeightClone + ';'">
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
              <block v-for="(contentItem, contentIndex) in item.message.content" :key="contentIndex">
                <t-chat-content
                  v-if="contentItem.type === 'text' || contentItem.type === 'markdown'"
                  :content="contentItem"
                  :role="item.message.role"
                />

                <view v-if="contentItem.type === 'agent'" class="step">
                  <t-steps layout="vertical" :current="contentItem.content.steps.length">
                    <t-step-item v-for="(item, index) in contentItem.content.steps" :key="index" :title="item.step">
                      <template #content>
                        <view class="step-text-list">
                          <view
                            v-for="(taskItem, index1) in item.tasks"
                            :key="index1"
                            :class="'step-text ' + taskItem.type"
                          >
                            <t-icon
                              v-if="taskItem.type === 'command'"
                              name="control-platform"
                              size="32rpx"
                              t-class="step-icon"
                            />

                            {{ taskItem.text }}
                          </view>
                        </view>
                      </template>
                    </t-step-item>
                  </t-steps>
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
import TChatSender from '@tdesign/uniapp-chat/chat-sender/chat-sender.vue';
import TChatActionbar from '@tdesign/uniapp-chat/chat-actionbar/chat-actionbar.vue';
import TSteps from '@tdesign/uniapp/steps/steps.vue';
import TStepItem from '@tdesign/uniapp/step-item/step-item.vue';
import TIcon from '@tdesign/uniapp/icon/icon.vue';
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
    TSteps,
    TStepItem,
    TIcon,
    TToast,
  },
  props: {
    contentHeight: {
      type: String,
      default: '100vh',
    },
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

      chatList: [
        {
          avatar: 'https://tdesign.gtimg.com/site/chat-avatar.png',
          key: getUniqueKey(),
          message: {
            role: 'assistant',
            content: [
              {
                type: 'text',
                data: '欢迎使用TDesign Agent家庭活动策划助手，请给我布置任务吧～',
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
      // 输入框动态样式
      inputStyle: '',

      chatIndex: 0,
      contentIndex: 0,

      contentItem: {
        type: '',

        content: {
          steps: [],
        },
      },

      taskItem: {
        type: '',
      },

      contentHeightClone: '',
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
        this.value = v ? '请帮我做一个5岁儿童生日聚会的规划' : ''; // 输入框的值
      },

      immediate: true,
    },

    contentHeight: {
      handler(newVal) {
        this.contentHeightClone = newVal;
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
      /**
       * 计算内容区域高度
       * 生成CSS calc表达式：calc(100vh - 96rpx - 导航高度 - 底部安全区域高度)
       */
      try {
        // 获取当前的导航栏高度和安全区域高度
        const navigationBarHeight = getNavigationBarHeight() || 0;

        // 生成CSS calc表达式字符串
        const contentHeight = `calc(100vh - 96rpx - ${navigationBarHeight}px)`;
        this.contentHeightClone = contentHeight;
        console.log('内容区域高度CSS表达式:', contentHeight);
      } catch (error) {
        console.log('CatchClause', error);
        console.log('CatchClause', error);
        console.error('生成内容高度表达式失败:', error);
        this.contentHeightClone = 'calc(100vh - 96rpx)';
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
        await fetchStream('为5岁小朋友准备一场生日派对，我会根据要求准备合适方案，计划从以下几个步骤进行准备：', {
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
          type: 'agent',
          id: 'task1',
          content: {
            text: '',
            steps: [],
          },
        });
        await fetchStream('生日聚会规划任务已分解为3个执行阶段', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[1].content.text += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps.push({
          step: '确定派对餐饮方案',
          agent_id: 'a1',
          tasks: [
            {
              type: 'command',
              text: '',
            },
          ],
          status: 'finish',
        });
        await fetchStream('调用智能搜索工具', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[1].content.steps[0].tasks[0].text += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps[0].tasks.push({
          type: 'command',
          text: '',
        });
        await fetchStream('已筛选出3种高性价比菜单方案，开始进行营养匹配', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[1].content.steps[0].tasks[1].text += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps[0].tasks.push({
          type: 'result',
          text: '',
        });
        await fetchStream('主菜是香草烤鸡（无麸质），准备耗时45分钟；', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[1].content.steps[0].tasks[2].text += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps.push({
          step: '准备派对现场布置',
          agent_id: 'a2',
          tasks: [
            {
              type: 'command',
              text: '',
            },
          ],
          status: 'finish',
        });
        await fetchStream('调用智能搜索工具，搜索儿童派对用品清单', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[1].content.steps[1].tasks[0].text += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps[1].tasks.push({
          type: 'result',
          text: '',
        });
        await fetchStream(
          '推荐现场布置方案：餐具（一次性纸盘、刀叉套装）、杯子、纸巾、一次性桌布，装饰气球、横幅、礼帽等',
          {
            success(result) {
              if (!that.loading) {
                return;
              }
              that.chatList[0].message.content[1].content.steps[1].tasks[1].text += result;
            },
            complete() {},
          },
        );
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps.push({
          step: '策划派对活动',
          agent_id: 'a1',
          tasks: [
            {
              type: 'command',
              text: '',
            },
          ],
          status: 'finish',
        });
        await fetchStream('搜索儿童派对游戏', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[1].content.steps[2].tasks[0].text += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps[2].tasks.push({
          type: 'command',
          text: '',
        });
        await fetchStream('整理信息并进行合理性分析，安全性评估', {
          success(result) {
            if (!that.loading) {
              return;
            }
            that.chatList[0].message.content[1].content.steps[2].tasks[1].text += result;
          },
          complete() {},
        });
        if (!that.loading) {
          return;
        }
        that.chatList[0].message.content[1].content.steps[2].tasks.push({
          type: 'result',
          text: '',
        });
        await fetchStream(
          '派对总时长建议控制在1.5小时，符合5岁儿童注意力持续时间，每位小朋友到达时可以在拍照区留影，可设置一个签到',
          {
            success(result) {
              if (!that.loading) {
                return;
              }
              that.chatList[0].message.content[1].content.steps[2].tasks[2].text += result;
            },
            complete() {},
          },
        );
        that.chatList[0].message.status = 'complete';
        that.loading = false;
      });
    },

    handleAction(e) {
      const { name, active, data } = e;
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
  padding: 16rpx;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--td-component-border);
}

.step {
  padding-top: 24rpx;
}

.step-text-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;
}

.step-text {
  text-align: start;
}

.step-text.command {
  padding: 16rpx;
  border-radius: 16rpx;
  background-color: var(--td-bg-color-secondarycontainer);
  display: flex;
  font-size: 28rpx;
  line-height: 44rpx;
  color: var(--td-text-color-secondary);
}

.step-text.result {
  font-size: 28rpx;
  line-height: 44rpx;
  color: var(--td-text-color-primary);
}

.chat-box :deep(.step-icon) {
  margin-right: 12rpx;
  margin-top: 6rpx;
}

.chat-box :deep(.t-steps-item__circle--finish) {
  background-color: transparent;
  color: var(--td-text-color-primary);
  border: 1px solid var(--td-text-color-primary);
  width: 16px;
  height: 16px;
}

.chat-box :deep(.t-steps-item__circle--finish) .t-icon {
  font-size: 12px;
}

.chat-box :deep(.t-steps-item__line--finish) {
  background-color: var(--td-component-border);
}

.chat-box :deep(.t-steps-item__title--finish) {
  color: var(--td-text-color-primary);
  font-weight: 600;
}
</style>
