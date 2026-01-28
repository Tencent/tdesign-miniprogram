<template>
  <view class="skyline">
    <t-demo-navbar
      custom-class="block"
      title="Button"
    />
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <view class="demo-title">
          Button 按钮
        </view>
        <view class="demo-desc">
          用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
        </view>
        <t-demo
          title="01 组件类型"
          desc="基础按钮"
        >
          <base-demo />
        </t-demo>

        <t-demo desc="图标按钮">
          <icon-btn :skyline="true" />
        </t-demo>

        <t-demo desc="幽灵按钮">
          <ghost-btn />
        </t-demo>

        <t-demo desc="组合按钮">
          <group-btn />
        </t-demo>

        <t-demo desc="通栏按钮">
          <block-btn />
        </t-demo>

        <t-demo
          title="02 组件状态"
          desc="按钮禁用态"
        >
          <disabled-demo />
        </t-demo>

        <t-demo
          title="03 组件样式"
          desc="按钮尺寸"
        >
          <size-demo />
        </t-demo>

        <t-demo desc="按钮形状">
          <shape-demo />
        </t-demo>

        <t-demo desc="按钮主题">
          <theme-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import BaseDemo from '../base/index.vue';
import SizeDemo from '../size/index.vue';
import IconBtn from '../icon-btn/index.vue';
import GroupBtn from '../group-btn/index.vue';
import BlockBtn from '../block-btn/index.vue';
import GhostBtn from '../ghost-btn/index.vue';
import ShapeDemo from '../shape/index.vue';
import ThemeDemo from '../theme/index.vue';
import DisabledDemo from '../disabled/index.vue';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    BaseDemo,
    SizeDemo,
    IconBtn,
    GroupBtn,
    BlockBtn,
    GhostBtn,
    ShapeDemo,
    ThemeDemo,
    DisabledDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import './button.less';
</style>
