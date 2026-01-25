<template>
  <view>
    <t-notice-bar
      :visible="visible"
      :prefix-icon="false"
      :marquee="marquee1"
      content="提示文字描述提示文字描述提示文字描述提示文字描述文"
    />

    <t-notice-bar
      :visible="visible"
      :marquee="marquee2"
      content="提示文字描述提示文字描述提示文字描述提示文字描述文"
    />

    <t-notice-bar
      :visible="true"
      direction="vertical"
      :interval="3000"
      :content="content"
      prefix-icon="sound"
      @click="click"
    />
  </view>
</template>

<script>
import TNoticeBar from 'tdesign-uniapp/notice-bar/notice-bar.vue';
export default {
  components: {
    TNoticeBar,
  },
  data() {
    return {
      visible: true,
      marquee1: {
        speed: 80,
        loop: -1,
        delay: 0,
      },
      marquee2: {
        speed: 60,
        loop: -1,
        delay: 0,
      },
      content: ['君不见', '高堂明镜悲白发', '朝如青丝暮成雪', '人生得意须尽欢', '莫使金樽空对月'],
    };
  },
  created() {},
  methods: {
    click() {
      console.log('占位：函数 click 未声明');
    },
  },
};
</script>
<style>
</style>
