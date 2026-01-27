<template>
  <!-- #ifndef MP-ALIPAY -->
  <t-navbar
    :class="customClass"
    :title="title"
    left-arrow
    :delta="-1"
    placeholder
    :z-index="99"
    @go-back="onDemoGoBack"
  />
  <!-- #endif -->
  <!-- #ifdef MP-ALIPAY -->
  <view />
  <!-- #endif -->
</template>
<script>
import TNavbar from '../navbar/navbar.vue';
import { goBackOrGoHome } from '../common/route';


export default {
  components: {
    TNavbar,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    onDemoGoBack() {
      goBackOrGoHome();
    },
  },
};
</script>
