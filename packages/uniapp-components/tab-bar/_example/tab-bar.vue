<template>
  <view>
    <t-demo-navbar
      title="TabBar"
    />
    <view class="demo">
      <t-demo-header
        title="TabBar 标签栏"
        desc="用于在不同功能模块之间进行快速切换，位于页面底部。"
      />
      <t-demo
        title="01 组件类型"
        desc="纯文本标签栏"
      >
        <text-only />
      </t-demo>

      <t-demo desc="图标加文本标签栏">
        <base-demo />
      </t-demo>

      <t-demo desc="纯图标标签栏">
        <icon-only />
      </t-demo>

      <t-demo desc="双层级文本标签栏">
        <sub-demo />
      </t-demo>

      <t-demo
        title="02 组件样式"
        desc="弱选中标签栏"
      >
        <badge-demo />
      </t-demo>

      <t-demo desc="悬浮胶囊标签栏">
        <round-demo />
      </t-demo>

      <t-demo
        title="03 自定义"
        desc="自定义样式"
      >
        <custom-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>

import TextOnly from './text-only/index.vue';
import IconOnly from './icon-only/index.vue';
import BaseDemo from './base/index.vue';
import SubDemo from './sub/index.vue';
import BadgeDemo from './badge/index.vue';
import RoundDemo from './round/index.vue';
import CustomDemo from './custom/index.vue';
export default {
  components: {
    TextOnly,
    IconOnly,
    BaseDemo,
    SubDemo,
    BadgeDemo,
    RoundDemo,
    CustomDemo,
  },
  data() {
    return {
      value: 'label_1',
    };
  },
  methods: {
    onChange(event) {
      console.log(event);
    },
  },
};
</script>
<style lang="less">
@import './tab-bar.less';
</style>
