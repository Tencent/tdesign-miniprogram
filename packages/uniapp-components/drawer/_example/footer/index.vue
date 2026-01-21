<template>
  <view>
    <t-button
      variant="outline"
      block
      size="large"
      theme="primary"
      @click="openDrawerBase"
    >
      带底部插槽
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
    >
      <template
        #footer
      >
        <view class="button-host">
          <t-button
            size="large"
            block
            variant="outline"
          >
            操作
          </t-button>
        </view>
      </template>
    </t-drawer>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tDrawer from 'tdesign-uniapp/drawer/drawer.vue';
export default {
  components: {
    tButton,
    tDrawer,
  },
  data() {
    return {
      visible: false,
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
.button-host {
    margin: 20rpx 32rpx 0;
}
</style>
