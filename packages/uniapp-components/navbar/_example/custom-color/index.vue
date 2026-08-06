<template>
  <view>
    <t-navbar t-class="custom-navbar" left-arrow title="标题文字" :fixed="false" @right-click="handleRightClick">
      <template #right>
        <t-icon name="ellipsis" size="24px" />
        <!-- <div>右侧内容</div> -->
      </template>
    </t-navbar>
  </view>
</template>

<script>
import TNavbar from '@tdesign/uniapp/navbar/navbar.vue';
import TIcon from '@tdesign/uniapp/icon/icon.vue';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TNavbar,
    TIcon,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleRightClick() {
      console.log('right click');
    },
  },
};
</script>
<style>
.custom-navbar {
  --td-navbar-color: #fff;
  --td-navbar-bg-color: #0052d9;
}
</style>
