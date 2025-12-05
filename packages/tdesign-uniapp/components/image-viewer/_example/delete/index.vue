<template>
  <view>
    <t-button
      theme="primary"
      size="large"
      variant="outline"
      block
      @click="onClick"
    >
      带操作图片预览
    </t-button>

    <t-action-sheet
      id="t-action-sheet"
      ref="t-action-sheet"
    />

    <t-image-viewer
      :using-custom-navbar="!isMPAlipay"
      :delete-btn="deleteBtn"
      :close-btn="closeBtn"
      :show-index="showIndex"
      :visible="visible"
      :images="images"
      :custom-navbar-height="gCustomNavbarHeight"
      @change="onChange"
      @delete="onDelete"
      @close="onClose"
    />
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import tActionSheet from 'tdesign-uniapp/action-sheet/action-sheet.vue';
import tImageViewer from 'tdesign-uniapp/image-viewer/image-viewer.vue';
import ActionSheet from 'tdesign-uniapp/action-sheet/index';
export default {
  components: {
    tButton,
    tActionSheet,
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
      this.closeBtn = true;
      this.deleteBtn = true;
    },
    onChange(e) {
      const { index } = e;
      console.log(index);
    },
    onDelete(e) {
      const { index } = e;
      console.log(index);
      ActionSheet.show({
        context: this,
        selector: '#t-action-sheet',
        description: '要删除这张照片吗？',
        items: [
          {
            label: '删除',
            color: '#d54941',
          },
        ],
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
