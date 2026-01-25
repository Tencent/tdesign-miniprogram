<template>
  <view>
    <t-sticky :offset-top="navbarHeight">
      <t-button
        size="large"
        theme="primary"
        t-class="external-class"
        custom-style="width: 104px"
      >
        基础吸顶
      </t-button>
    </t-sticky>
  </view>
</template>

<script>
import TSticky from 'tdesign-uniapp/sticky/sticky.vue';
import TButton from 'tdesign-uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TSticky,
    TButton,
  },
  props: {
    navbarHeight: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
/* :deep(.external-class) {
    width: 208rpx;
} */
</style>
