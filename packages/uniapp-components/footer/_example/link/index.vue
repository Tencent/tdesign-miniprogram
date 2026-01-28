<template>
  <view>
    <!-- theme 为 text，含有底部链接 -->
    <view class="footer-example">
      <t-footer
        :text="text"
        :links="links[0]"
      />
    </view>

    <view class="footer-example">
      <t-footer
        :text="text"
        :links="links[1]"
      />
    </view>
  </view>
</template>

<script>
import TFooter from '@tdesign/uniapp/footer/footer.vue';
export default {
  components: {
    TFooter,
  },
  data() {
    return {
      text: 'Copyright © 2021-2031 TD.All Rights Reserved.',
      links: [[{
        name: '底部链接',
        url: '/pages/home/home',
        openType: 'navigate',
      }], [{
        name: '底部链接',
        url: '/pages/home/home',
        openType: 'navigate',
      }, {
        name: '底部链接',
        url: '',
        openType: 'navigateBack',
      }]],
    };
  },
  created() {},
  methods: {},
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
