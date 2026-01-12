<template>
  <view>
    <!-- theme 为 logo -->
    <view class="footer-example">
      <TFooter :logo="logo" />
    </view>

    <view class="footer-example">
      <TFooter
        :logo="{url:
          theme === 'dark'
            ? 'https://tdesign.gtimg.com/mobile/demos/footer-logo-dark.png'
            : 'https://tdesign.gtimg.com/mobile/demos/logo1.png'
        } "
      />
    </view>
  </view>
</template>

<script>
import TFooter from 'tdesign-uniapp/footer/footer.vue';
import { themeMixin } from 'tdesign-uniapp/mixins/theme-change';

const logo = {
  icon: 'https://tdesign.gtimg.com/mobile/demos/logo2.png',
  title: '品牌名称',
};


export default {
  components: {
    TFooter,
  },
  mixins: [
    themeMixin,
  ],
  data() {
    return {
      logo,
    };
  },
};

</script>
<style>
.footer-example {
    padding: 8rpx 0;
}

.footer-example:not(:last-child) {
    margin-bottom: 32rpx;
}
</style>
