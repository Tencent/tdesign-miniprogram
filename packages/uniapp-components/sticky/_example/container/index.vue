<template>
  <view class="wrapper">
    <t-sticky
      :container="container"
      :offset-top="navbarHeight"
    >
      <t-button
        size="large"
        t-class="external-class green-button"
        hover-class="hover-class "
        custom-style="width: 104px;margin-left: 256px;"
      >
        指定容器
      </t-button>
    </t-sticky>
  </view>
</template>

<script>
import TSticky from '@tdesign/uniapp/sticky/sticky.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
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
    return {
      container: null,
    };
  },
  mounted() {
    // 处理小程序 ready 生命周期
    this.$nextTick(() => this.ready());
  },
  created() {},
  methods: {
    ready() {
      this.container = () => uni.createSelectorQuery().in(this)
        .select('.wrapper');
    },
  },
};
</script>
<style scoped>
.wrapper {
    width: 100%;
    height: 150px;
    background-color: var(--bg-color-demo-secondary);
}

/* :deep(.external-class) {
    width: 208rpx;
    margin-left: 512rpx;
} */

.green-button {
    z-index: 0 !important;
    background-color: #008858 !important;
    color: #fff !important;
}

.hover-class::after {
    z-index: -1;
    background-color: #006c45;
    border-color: #006c45;
}
</style>
