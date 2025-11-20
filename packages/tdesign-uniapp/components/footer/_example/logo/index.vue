<template>
  <view>
    <!-- theme 为 logo -->
    <view class="footer-example">
      <t-footer :logo="logo" />
    </view>

    <view class="footer-example">
      <t-footer
        :logo="{url:
          theme === 'dark'
            ? 'https://tdesign.gtimg.com/mobile/demos/footer-logo-dark.png'
            : 'https://tdesign.gtimg.com/mobile/demos/logo1.png'
        } "
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import tFooter from 'tdesign-uniapp/footer/footer.vue';
import { ref } from 'vue';
import { useTheme } from 'tdesign-uniapp/mixins/theme-change';

const logo = ref({
  icon: 'https://tdesign.gtimg.com/mobile/demos/logo2.png',
  title: '品牌名称',
});
const { theme } = useTheme();

</script>
<style>
.footer-example {
    padding: 8rpx 0;
}

.footer-example:not(:last-child) {
    margin-bottom: 32rpx;
}
</style>
