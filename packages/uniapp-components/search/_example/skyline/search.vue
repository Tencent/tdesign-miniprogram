<template>
  <view class="skyline">
    <t-demo-navbar
      title="Search"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo-title">
        Search 搜索框
      </view>
      <view class="demo-desc">
        用于用户输入搜索信息，并进行页面内容搜索。
      </view>
      <t-demo
        title="01 组件类型"
        desc="基础搜索框"
      >
        <base-demo />
      </t-demo>
      <t-demo desc="字数限制">
        <maxlength-demo />
      </t-demo>
      <t-demo desc="获取焦点后显示取消按钮">
        <action-demo />
      </t-demo>
      <t-demo
        title="02 组件样式"
        desc="搜索框形状"
      >
        <shape-demo />
      </t-demo>
      <t-demo
        title="03 组件状态"
        desc="默认状态其他对齐方式"
      >
        <other-demo />
      </t-demo>
    </scroll-view>
  </view>
</template>

<script>

import BaseDemo from '../base/index.vue';
import MaxlengthDemo from '../maxlength/index.vue';
import ActionDemo from '../action/index.vue';
import ShapeDemo from '../shape/index.vue';
import OtherDemo from '../other/index.vue';
export default {
  components: {
    BaseDemo,
    MaxlengthDemo,
    ActionDemo,
    ShapeDemo,
    OtherDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './search.less';
</style>
