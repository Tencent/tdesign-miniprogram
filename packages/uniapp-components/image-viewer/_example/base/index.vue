<template>
  <view>
    <t-button
      theme="primary"
      size="large"
      variant="outline"
      block
      @click="onClick"
    >
      基础图片预览
    </t-button>
    <t-toast
      ref="t-toast"
    />
    <t-image-viewer
      :using-custom-navbar="!isMPAlipay"
      :custom-navbar-height="gCustomNavbarHeight"
      :delete-btn="deleteBtn"
      :close-btn="closeBtn"
      :show-index="showIndex"
      :visible="visible"
      :images="images"
      @change="onChange"
      @delete="onDelete"
      @close="onClose"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tToast from 'tdesign-uniapp/toast/toast.vue';
import tImageViewer from 'tdesign-uniapp/image-viewer/image-viewer.vue';
import Toast from 'tdesign-uniapp/toast/index';
export default {
  components: {
    tButton,
    tToast,
    tImageViewer,
  },
  data() {
    return {
      visible: false,
      showIndex: false,
      closeBtn: false,
      deleteBtn: false,
      images: [],
    };
  },
  created() {},
  methods: {
    onClick() {
      this.images = ['https://tdesign.gtimg.com/mobile/demos/swiper1.png', 'https://tdesign.gtimg.com/mobile/demos/swiper2.png'];
      this.showIndex = true;
      this.visible = true;
    },
    onChange(e) {
      const { index } = e;
      console.log('change', index);
    },
    onDelete(e) {
      const { index } = e;
      Toast({
        context: this,
        selector: '#t-toast',
        message: `删除第${index + 1}个`,
      });
    },
    onClose(e) {
      const { trigger } = e;
      console.log(trigger);
      this.visible = false;
    },
  },
};
</script>
<style>
</style>
