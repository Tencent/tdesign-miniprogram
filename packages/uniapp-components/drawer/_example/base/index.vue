<template>
  <view>
    <t-button
      variant="outline"
      block
      size="large"
      theme="primary"
      @click="openDrawerBase"
    >
      基础抽屉
    </t-button>

    <t-drawer
      :visible="visible"
      :placement="placement"
      :items="sidebar"
      :using-custom-navbar="!isMPAlipay"
      :custom-navbar-height="gCustomNavbarHeight"
      @update:visible="visible = $event"
      @overlay-click="overlayClick"
      @item-click="itemClick"
    />
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';
import TDrawer from '@tdesign/uniapp/drawer/drawer.vue';
import SkylineBehavior from '@tdesign/uniapp/mixins/skyline.js';

export default {
  components: {
    TButton,
    TDrawer,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      placement: 'left',
      sidebar: [],

      baseSidebar: [
        {
          title: '菜单一',
        },
        {
          title: '菜单二',
        },
        {
          title: '菜单三',
        },
        {
          title: '菜单四',
        },
        {
          title: '菜单五',
        },
        {
          title: '菜单六',
        },
        {
          title: '菜单七',
        },
        {
          title: '菜单八',
        },
      ],

      visible: false,
    };
  },
  created() {},
  /**
     * 组件的方法列表
     */
  methods: {
    openDrawerBase() {
      this.visible = true;
      this.sidebar = this.baseSidebar;
    },
    itemClick(e) {
      console.log(e);
    },
    overlayClick(e) {
      console.log(e);
    },
  },
};
</script>
<style>
</style>
