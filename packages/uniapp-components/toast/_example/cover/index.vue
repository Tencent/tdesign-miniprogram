<template>
  <view>
    <t-toast
      ref="t-toast"
    />

    <view class="box">
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        block
        @click="handleToast"
      >
        禁止滑动和点击
      </t-button>
    </view>
  </view>
</template>

<script>
import TToast from '@tdesign/uniapp/toast/toast.vue';
import Toast from '@tdesign/uniapp/toast/index';
import TButton from '@tdesign/uniapp/button/button.vue';


export default {
  components: {
    TToast,
    TButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleToast() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '禁止滑动和点击',
        direction: 'column',
        duration: 3000,
        preventScrollThrough: true,
        icon: 'poweroff',
      });
    },
  },
};
</script>
<style>
</style>
