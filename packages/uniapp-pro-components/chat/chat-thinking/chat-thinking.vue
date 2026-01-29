<template>
  <view
    :class="classPrefix"
    :style="_._style([customStyle])"
  >
    <view :class="_.cls(classPrefix + '__inner', [layout])">
      <view :class="classPrefix + '__hd'">
        <block v-if="status === 'error' || status === 'complete' || status === 'stop'">
          <t-icon
            :t-class="_.cls(classPrefix + '__icon', [status])"
            :name="status === 'error' ? 'close-circle' : 'check-circle'"
          />
        </block>
        <block v-else>
          <TChatLoading :animation="animation" />
        </block>
        <view :class="classPrefix + '__txt'">
          {{ content.title || '正在思考中...' }}
        </view>
        <view :data-event-opts="[['tap', [['handleCollapse', ['$event']]]]]">
          <t-icon
            :custom-style="localCollapsed ? 'transform: rotate(180deg)' : ''"
            :t-class="_.cls(classPrefix + '__icon', [['collapse', true]])"
            name="chevron-up"
            @click="handleCollapse"
          />
        </view>
      </view>
      <view
        v-if="!localCollapsed"
        :class="_.cls(classPrefix + '__bd', [layout])"
        :style="contentStyle"
      >
        {{ content.text || '' }}
      </view>
    </view>
  </view>
</template>
<script>
import TChatLoading from '../chat-loading/chat-loading.vue';
import TIcon from '@tdesign/uniapp/icon/icon.vue';
import { prefix } from '@tdesign/uniapp/common/config';
import props from './props';
import _ from '@tdesign/uniapp/common/utils.wxs';
import { uniComponent } from '@tdesign/uniapp/common/src/index';


const name = `${prefix}-chat-thinking`;

export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },

  components: {
    TIcon,
    TChatLoading,
  },

  props: {
    ...props,
  },

  data() {
    return {
      localCollapsed: false,
      contentStyle: '',
      classPrefix: name,
      _,
    };
  },

  watch: {
    maxHeight: {
      handler() {
        this.setContentStyle();
      },
      immediate: true,
    },
  },

  created() {
  },

  mounted() {
    const createdFn = function __anonymous() {
      // 初始化折叠状态
      this.localCollapsed = this.collapsed || false;
    };
    createdFn.call(this);


    // 调用新增的函数
    this.setContentStyle();
  },

  methods: {
    handleCollapse() {
      // 切换内部折叠状态
      this.localCollapsed = !this.localCollapsed;

      // 通知父组件状态变化
      this.$emit('collapsedChange',  this.localCollapsed);
    },
    setContentStyle() {
      if (this.maxHeight) {
        this.contentStyle = `max-height: ${this.maxHeight}px;`;
      } else {
        this.contentStyle = '';
      }
    },
  },

});


</script>
<style scoped>
@import './chat-thinking.css';
</style>
