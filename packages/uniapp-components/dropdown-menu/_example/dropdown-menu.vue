<template>
  <view>
    <t-demo-navbar
      title="DropdownMenu"
    />
    <view class="demo">
      <t-demo-header
        title="DropdownMenu 下拉菜单"
        desc="菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="单选下拉菜单"
      >
        <single-demo />
      </t-demo>

      <t-demo desc="分栏下拉菜单">
        <multi-demo />
      </t-demo>

      <!-- <t-demo desc="树形下拉菜单">
    <tree />
  </t-demo> -->

      <t-demo
        title="02 组件状态"
        desc="禁用状态"
      >
        <t-dropdown-menu relation-key="relationKey">
          <t-dropdown-item
            disabled
            label="禁用菜单"
            :relation-key="relationKey"
          />
          <t-dropdown-item
            disabled
            label="禁用菜单"
            :relation-key="relationKey"
          />
        </t-dropdown-menu>
      </t-demo>

      <view style="height: 600rpx" />
    </view>
  </view>
</template>

<script>

import SingleDemo from './single/index.vue';
import MultiDemo from './multi/index.vue';
import TDropdownMenu from '@tdesign/uniapp/dropdown-menu/dropdown-menu.vue';
import TDropdownItem from '@tdesign/uniapp/dropdown-item/dropdown-item.vue';


export default {
  components: {
    SingleDemo,
    MultiDemo,
    TDropdownMenu,
    TDropdownItem,
  },
  data() {
    return {
      relationKey: `${Math.random()}`,
    };
  },
  methods: {},
};
</script>
<style lang="less">
@import './dropdown-menu.less';
</style>
