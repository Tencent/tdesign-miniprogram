<template>
  <view>
    <view class="block">
      <t-navbar
        title="标题文字"
        t-class-title="nav-title"
        :fixed="false"
      />
    </view>

    <view class="block">
      <t-navbar
        class="block"
        title="标题文字"
        left-arrow
        :fixed="false"
        @go-back="handleBack"
      />
    </view>
  </view>
</template>

<script>
import TNavbar from 'tdesign-uniapp/navbar/navbar.vue';
export default {
  components: {
    TNavbar,
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
