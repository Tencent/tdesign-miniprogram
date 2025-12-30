<template>
  <view>
    <TMessageItem
      v-for="(item) in messageList"
      :key="item.id"
      :ref="item.id"
      @close-btn-click="handleClose($event, { tagId: item.id })"
      @link-click="handleLinkClick($event, { tagId: item.id })"
      @duration-end="handleDurationEnd($event, { tagId: item.id })"
    >
      <template #icon>
        <slot
          name="icon"
        />
      </template>
      <template #content>
        <slot
          name="content"
        />
      </template>
      <slot />
      <template #link>
        <slot
          name="link"
        />
      </template>
      <template #close-btn>
        <slot
          name="close-btn"
        />
      </template>
    </TMessageItem>
  </view>
</template>

<script>
import TMessageItem from '../message-item/message-item.vue';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { MessageType } from './message.interface';
import props from './props';
import { unitConvert } from '../common/utils';


const SHOW_DURATION = 400;
const name = `${prefix}-message`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TMessageItem,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      messageList: [],
      instances: [],
      index: 0,
    };
  },
  watch: {
    visible: {
      handler(value) {
        if (value) {
          const data = Object.keys(props).reduce((acc, key) => ({
            ...acc,
            [key]: this[key],
          }), {});

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

  mounted() {
  },

  methods: {
    /**
   * 设置消息信息
   * @param msg
   * @param theme
   */
    setMessage(msg, theme = MessageType.info) {
      let id = `${name}_${this.index}`;
      if (msg.single) {
        // 不能与外层的 ref 相同，否则抖音小程序报错
        id = `${name}_inner`;
      }
      const gap = unitConvert(msg.gap || this.gap);
      const msgObj = {
        ...msg,
        theme,
        id,
        gap,
      };
      const instanceIndex = this.instances.findIndex(x => x.id === id);
      if (instanceIndex < 0) {
        this.addMessage(msgObj);
      } else {
      // 更新消息
        const instance = this.instances[instanceIndex];
        const offsetHeight = this.getOffsetHeight(instanceIndex);
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
      const list = [...this.messageList, { id: msgObj.id }];
      this.messageList = list;

      setTimeout(() => {
        const offsetHeight = this.getOffsetHeight();
        const instance = this.showMessageItem(msgObj, msgObj.id, offsetHeight);
        if (this.instances) {
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
      setTimeout(() => {
        this.removeMsg(id);
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
      const instance = this.instances.find(x => x.id === id);
      if (instance) {
        instance.hide();
      }
    },

    /**
   * 移除全部消息
   */
    hideAll() {
    // 消息移除后也会移除instance，下标不用增加，直至全部删除
      for (let i = 0; i < this.instances.length;) {
        const instance = this.instances[i];
        instance.hide();
      }
    },

    /**
   * 移除message实例
   */
    removeInstance(id) {
      const index = this.instances.findIndex(x => x.id === id);
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
      this.messageList = this.messageList.filter(item => item.id !== id);
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
});
</script>
<style scoped>
</style>
