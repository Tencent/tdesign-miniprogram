<template>
  <view>
    <TActionSheet
      ref="t-action-sheet"
      :using-custom-navbar="!isMPAlipay"
      @selected="handleSelected($event, { tagId: 't-action-sheet' })"
    />

    <TButton
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleAction"
    >
      常规宫格型
    </TButton>

    <TButton
      size="large"
      variant="outline"
      block
      theme="primary"
      @click="handleMultiAction"
    >
      带翻页宫格型
    </TButton>
  </view>
</template>

<script>
import ActionSheet, { ActionSheetTheme } from 'tdesign-uniapp/action-sheet/index';
import TActionSheet from 'tdesign-uniapp/action-sheet/action-sheet.vue';
import TButton from 'tdesign-uniapp/button/button.vue';


const firstGrid = [
  {
    label: '微信',
    image: 'https://tdesign.gtimg.com/mobile/demos/wechat.png',
  },
  {
    label: '朋友圈',
    image: 'https://tdesign.gtimg.com/mobile/demos/times.png',
  },
  {
    label: 'QQ',
    image: 'https://tdesign.gtimg.com/mobile/demos/qq.png',
  },
  {
    label: '企业微信',
    image: 'https://tdesign.gtimg.com/mobile/demos/wecom.png',
  },
  {
    label: '收藏',
    icon: 'star',
  },
  {
    label: '刷新',
    icon: 'refresh',
  },
  {
    label: '下载',
    icon: 'download',
  },
  {
    label: '复制',
    icon: 'queue',
  },
];
export default {
  components: {
    TActionSheet,
    TButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: firstGrid,
      });
    },
    handleMultiAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.Grid,
        selector: '#t-action-sheet',
        context: this,
        items: firstGrid.concat(new Array(8).fill({
          label: '标题文字',
          icon: 'image',
        })),
      });
    },
    handleSelected(e) {
      console.log(e);
    },
  },
};
</script>
