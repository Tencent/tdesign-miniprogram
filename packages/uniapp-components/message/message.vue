<template>
  <view>
    <t-message-item
      v-for="(item, idx) in messageList"
      :key="item.id"
      :ref="item.id"
      @close-btn-click="(e) => handleClose(e, { tagId: item.id })"
      @link-click="(e) => handleLinkClick(e, { tagId: item.id })"
      @duration-end="(e) => handleDurationEnd(e, { tagId: item.id })"
    >
      <!-- slot 仅透传给第一条消息，避免 v-for 中产生多个同名 slot 的警告 -->
      <template v-if="idx === 0" #icon>
        <slot name="icon" />
      </template>
      <template v-if="idx === 0" #content>
        <slot name="content" />
      </template>
      <slot v-if="idx === 0" />
      <template v-if="idx === 0" #link>
        <slot name="link" />
      </template>
      <template v-if="idx === 0" #close-btn>
        <slot name="close-btn" />
      </template>
    </t-message-item>
  </view>
</template>

<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import { unitConvert } from '../common/utils';
import TMessageItem from '../message-item/message-item.vue';

import { MessageType } from './message.interface';
import props from './props';

const SHOW_DURATION = 400;
const name = `${prefix}-message`;

export default {
  components: {
    TMessageItem,
  },
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    props: {
      ...props,
    },
    data() {
      return {
        prefix,
        classPrefix: name,
        messageList: [],
        index: 0,
      };
    },
    watch: {
      visible: {
        handler(value) {
          if (value) {
            const data = Object.keys(props).reduce(
              (acc, key) => ({
                ...acc,
                [key]: this[key],
              }),
              {},
            );

            this.setMessage(data, this.theme);
          } else {
            this.messageList = [];
          }
        },
        immediate: true,
      },
    },

    pageLifetimes: {
      show() {
        this.hideAll();
      },
    },

    created() {
      this.instances = [];
      // 记录各 id 对应的延迟移除 messageList 占位的定时器，避免连续点击时上一次 close 的
      // 延迟移除在复用过程中把新占位也干掉导致 ref 实例释放、新消息闪退。
      this.removeMsgTimers = {};
    },
    mounted() {},

    methods: {
      /**
       * 设置消息信息
       * @param msg
       * @param theme
       */
      setMessage(msg, theme = MessageType.info) {
        if (!this.instances) {
          this.instances = [];
        }
        // 过滤掉之前可能 push 进来的 undefined，避免 findIndex 报错
        this.instances = this.instances.filter(Boolean);

        let id = `${name}_${this.index}`;
        if (msg.single) {
          // 不能与外层的 ref 相同，否则抖音小程序报错
          id = `${name}_inner`;
        }
        // 若存在同 id 的 pending removeMsg 定时器，先取消掉，避免复用后被延迟销毁。
        if (this.removeMsgTimers && this.removeMsgTimers[id]) {
          clearTimeout(this.removeMsgTimers[id]);
          delete this.removeMsgTimers[id];
        }
        const gap = unitConvert(msg.gap || this.gap);
        const msgObj = {
          ...msg,
          theme,
          id,
          gap,
        };
        const instanceIndex = this.instances.findIndex((x) => x && x.id === id);
        if (instanceIndex < 0) {
          this.addMessage(msgObj);
        } else {
          // 更新消息
          const instance = this.instances[instanceIndex];
          const offsetHeight = this.getOffsetHeight(instanceIndex);
          // 复用实例前先清掉上一次 show 启动的 duration/animation 定时器，
          // 否则 resetData 只是把 closeTimeoutContext 字段重置为 0，原 timeout 仍会触发 hide，
          // 导致新展示的消息不到 duration 就消失。
          if (typeof instance.reset === 'function') {
            instance.reset();
          }
          // 旧的 onHide 也要清掉，避免旧回调把新消息从 instances 中移除
          instance.onHide = null;
          instance.resetData(() => {
            Object.keys(msgObj).forEach((key) => {
              instance[key] = msgObj[key];
            });
            setTimeout(() => {
              instance.show.call(instance, offsetHeight);
            });
            instance.onHide = () => {
              this.close(id);
            };
          });
        }
      },

      /**
       * 新增消息
       * @param msgObj
       */
      addMessage(msgObj) {
        // single 模式下若已经有同 id 的占位，直接复用并跳过 add，避免列表中出现重复 id
        const existIndex = this.messageList.findIndex((x) => x.id === msgObj.id);
        if (existIndex < 0) {
          this.messageList = [...this.messageList, { id: msgObj.id }];
        }

        setTimeout(() => {
          const offsetHeight = this.getOffsetHeight();
          const instance = this.showMessageItem(msgObj, msgObj.id, offsetHeight);
          // instance 可能为 undefined，避免污染 instances 导致后续 findIndex 异常
          if (this.instances && instance) {
            this.instances.push(instance);
            this.index += 1;
          }
        }, 33);
      },

      /**
       * 获取消息显示top偏移距离
       * @param index
       * @returns
       */
      getOffsetHeight(index = -1) {
        let offsetHeight = 0;
        let len = index;
        if (len === -1 || len > this.instances.length) {
          len = this.instances.length;
        }
        for (let i = 0; i < len; i += 1) {
          const instance = this.instances[i];
          offsetHeight += instance.height + instance.gap;
        }
        return offsetHeight;
      },

      /**
       * 新增消息显示
       * @param options
       * @param id
       * @param offsetHeight
       * @returns
       */
      showMessageItem(options, id, offsetHeight) {
        let instance = this.$refs[`${id}`];
        if (Array.isArray(instance)) {
          instance = instance[0];
        }

        if (instance) {
          // 复用同一 ref 时同样要先清掉旧定时器与旧 onHide，避免互相干扰
          if (typeof instance.reset === 'function') {
            instance.reset();
          }
          instance.onHide = null;
          instance.resetData(() => {
            Object.keys(options).forEach((key) => {
              instance[key] = options[key];
            });
            setTimeout(() => {
              instance.show.call(instance, offsetHeight);
            });
            instance.onHide = () => {
              this.close(id);
            };
          });

          return instance;
        }
        console.error('未找到组件,请确认 selector && context 是否正确');
      },

      close(id) {
        if (!this.removeMsgTimers) {
          this.removeMsgTimers = {};
        }
        // 多次 close 同一 id 时，先清掉旧的 pending removeMsg 定时器
        if (this.removeMsgTimers[id]) {
          clearTimeout(this.removeMsgTimers[id]);
        }
        this.removeMsgTimers[id] = setTimeout(() => {
          this.removeMsg(id);
          delete this.removeMsgTimers[id];
        }, SHOW_DURATION);
        this.removeInstance(id);
      },

      /**
       * 移除指定消息，id为空则删除全部消息
       * @param id
       */
      hide(id) {
        if (!id) {
          this.hideAll();
        }
        const instance = this.instances.find((x) => x && x.id === id);
        if (instance) {
          instance.hide();
        }
      },

      /**
       * 移除全部消息
       */
      hideAll() {
        // 消息移除后也会移除instance，下标不用增加，直至全部删除
        for (let i = 0; i < this.instances.length; ) {
          const instance = this.instances[i];
          instance.hide();
        }
      },

      /**
       * 移除message实例
       */
      removeInstance(id) {
        const index = this.instances.findIndex((x) => x && x.id === id);
        if (index < 0) return;
        const instance = this.instances[index];
        const removedHeight = instance.height;
        this.instances.splice(index, 1);
        for (let i = index; i < this.instances.length; i += 1) {
          const instance = this.instances[i];
          instance.wrapTop = instance.wrapTop - removedHeight - instance.gap;
        }
      },

      /**
       * 移除页面元素
       * @param id
       */
      removeMsg(id) {
        this.messageList = this.messageList.filter((item) => item.id !== id);
        // #ifdef VUE2
        this.$set(this, 'messageList', this.messageList);
        // #endif
      },

      handleClose(e) {
        this.$emit('close-btn-click', { e });
      },

      handleLinkClick(e) {
        this.$emit('link-click', { e });
      },

      handleDurationEnd(e) {
        this.$emit('duration-end', { e });
      },
    },
  }),
};
</script>
<style scoped></style>
