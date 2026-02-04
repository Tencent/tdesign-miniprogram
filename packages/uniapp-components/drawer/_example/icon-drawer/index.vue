<template>
  <view>
    <t-button
      variant="outline"
      block
      size="large"
      theme="primary"
      @click="openDrawerIcon"
    >
      带图标抽屉
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
export default {
  components: {
    TButton,
    TDrawer,
  },
  data() {
    return {
      placement: 'left',
      sidebar: [],

      iconSidebar: [
        {
          title: '菜单一',
          icon: 'app',
        },
        {
          title: '菜单二',
          icon: 'app',
        },
        {
          title: '菜单三',
          icon: 'app',
        },
        {
          title: '菜单四',
          icon: 'app',
        },
        {
          title: '菜单五',
          icon: 'app',
        },
        {
          title: '菜单六',
          icon: 'app',
        },
        {
          title: '菜单七',
          icon: 'app',
        },
        {
          title: '菜单八',
          icon: 'app',
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
    openDrawerIcon() {
      this.visible = true;
      this.sidebar = this.iconSidebar;
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
