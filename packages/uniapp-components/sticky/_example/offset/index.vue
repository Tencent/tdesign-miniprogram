<template>
  <view>
    <t-sticky :offset-top="40 + navbarHeight">
      <t-button
        size="large"
        theme="danger"
        t-class="external-class"
        custom-style="width: 104px;margin-left: 136px;"
      >
        吸顶距离
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
    margin-left: 272rpx;
} */
</style>
