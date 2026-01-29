<template>
  <view>
    <t-button
      variant="outline"
      block
      size="large"
      theme="primary"
      @click="openDrawerBase"
    >
      带标题抽屉
    </t-button>

    <t-drawer
      v-model:visible="visible"
      :placement="placement"
      title="标题"
      :items="sidebar"
      :using-custom-navbar="!isMPAlipay"
      :custom-navbar-height="gCustomNavbarHeight"
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
