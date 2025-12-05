<template>
  <view>
    <view class="block">
      <t-navbar
        t-class-placeholder="t-navbar-placeholder"
        t-class-content="t-navbar-content"
        title="标题文字"
        t-class-title="nav-title"
      />
    </view>

    <view class="block">
      <t-navbar
        t-class-placeholder="t-navbar-placeholder"
        t-class-content="t-navbar-content"
        class="block"
        title="标题文字"
        left-arrow
        @go-back="handleBack"
      />
    </view>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
export default {
  components: {
    tNavbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleBack() {
      console.log('go back');
    },
  },
};
</script>
<style scoped>
</style>
