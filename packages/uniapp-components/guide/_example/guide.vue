<template>
  <view>
    <view class="custom-navbar">
      <t-demo-navbar
        custom-class="demo-navbar"
        title="Guide"
      />
    </view>

    <view class="demo">
      <t-demo-header
        title="Guide 引导"
        desc="逐步骤进行指引或解释说明的组件，常用于用户不熟悉的或需进行特别强调的页面。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="基础引导"
        padding
      >
        <view style="text-align: center">
          <t-button
            theme="primary"
            content="用户引导"
            @click="handleBaseClick"
          />
        </view>
        <t-popup
          :visible="visibleBasePopup"
          placement="bottom"
          :show-overlay="false"
        >
          <view :style="'height: calc(100vh - ' + navbarHeight + 'px)'">
            <base-demo
              v-if="visibleBase"
              @close="handleBaseClose"
            />
          </view>
        </t-popup>
      </t-demo>
      <t-demo
        desc="不带遮罩的引导"
        padding
      >
        <view style="text-align: center">
          <t-button
            theme="primary"
            content="用户引导"
            @click="handleNoMaskClick"
          />
        </view>
        <t-popup
          :visible="visibleNoMaskPopup"
          placement="bottom"
          :show-overlay="false"
        >
          <view :style="'height: calc(100vh - ' + navbarHeight + 'px)'">
            <no-mask
              v-if="visibleNoMask"
              @close="handleNoMaskClose"
            />
          </view>
        </t-popup>
      </t-demo>
      <t-demo
        desc="弹窗形式的引导"
        padding
      >
        <view style="text-align: center">
          <t-button
            theme="primary"
            content="用户引导"
            @click="handleDialogClick"
          />
        </view>
        <t-popup
          :visible="visibleDialogPopup"
          placement="bottom"
          :show-overlay="false"
        >
          <view :style="'height: calc(100vh - ' + navbarHeight + 'px)'">
            <dialog-demo
              v-if="visibleDialog"
              @close="handleDialogClose"
            />
          </view>
        </t-popup>
      </t-demo>
      <t-demo
        desc="气泡与弹窗混合的引导"
        padding
      >
        <view style="text-align: center">
          <t-button
            theme="primary"
            content="用户引导"
            @click="handleDialog1Click"
          />
        </view>
        <t-popup
          :visible="visibleDialog1Popup"
          placement="bottom"
          :show-overlay="false"
        >
          <view :style="'height: calc(100vh - ' + navbarHeight + 'px)'">
            <multiple-demo
              v-if="visibleDialog1"
              @close="handleDialog1Close"
            />
          </view>
        </t-popup>
      </t-demo>
      <t-demo
        desc="自定义气泡"
        padding
      >
        <view style="text-align: center">
          <t-button
            theme="primary"
            content="用户引导"
            @click="handleContentClick"
          />
        </view>
        <t-popup
          :visible="visibleContentPopup"
          placement="bottom"
          :show-overlay="false"
        >
          <view :style="'height: calc(100vh - ' + navbarHeight + 'px)'">
            <content-demo
              v-if="visibleContent"
              @close="handleContentClose"
            />
          </view>
        </t-popup>
      </t-demo>
    </view>
  </view>
</template>

<script>

import TButton from '@tdesign/uniapp/button/button.vue';
import TPopup from '@tdesign/uniapp/popup/popup.vue';
import BaseDemo from './base/index.vue';
import NoMask from './no-mask/index.vue';
import DialogDemo from './dialog/index.vue';
import MultipleDemo from './multiple/index.vue';
import ContentDemo from './content/index.vue';

export default {
  components: {
    TButton,
    TPopup,
    BaseDemo,
    NoMask,
    DialogDemo,
    MultipleDemo,
    ContentDemo,
  },
  data() {
    return {
      navbarHeight: 60,
      visibleBasePopup: false,
      visibleBase: false,
      visibleNoMaskPopup: false,
      visibleNoMask: false,
      visibleDialogPopup: false,
      visibleDialog: false,
      visibleDialog1Popup: false,
      visibleDialog1: false,
      visibleContentPopup: false,
      visibleContent: false,
    };
  },
  mounted() {
    setTimeout(() => {
      uni.createSelectorQuery()
        .in(this)
        .select('.custom-navbar')
        .boundingClientRect((rect) => {
          this.navbarHeight = rect.height;
        })
        .exec();
    }, 33);
  },
  methods: {
    handleBaseClick() {
      this.visibleBasePopup = true;
      setTimeout(() => {
        this.visibleBase = true;
      }, 300);
    },

    handleBaseClose() {
      this.visibleBasePopup = false;
      setTimeout(() => {
        this.visibleBase = false;
      }, 300);
    },

    handleNoMaskClick() {
      this.visibleNoMaskPopup = true;
      setTimeout(() => {
        this.visibleNoMask = true;
      }, 300);
    },

    handleNoMaskClose() {
      this.visibleNoMaskPopup = false;
      setTimeout(() => {
        this.visibleNoMask = false;
      }, 300);
    },

    handleDialogClick() {
      this.visibleDialogPopup = true;
      setTimeout(() => {
        this.visibleDialog = true;
      }, 300);
    },

    handleDialogClose() {
      this.visibleDialogPopup = false;
      setTimeout(() => {
        this.visibleDialog = false;
      }, 300);
    },

    handleDialog1Click() {
      this.visibleDialog1Popup = true;
      setTimeout(() => {
        this.visibleDialog1 = true;
      }, 300);
    },

    handleDialog1Close() {
      this.visibleDialog1Popup = false;
      setTimeout(() => {
        this.visibleDialog1 = false;
      }, 300);
    },

    handleContentClick() {
      this.visibleContentPopup = true;
      setTimeout(() => {
        this.visibleContent = true;
      }, 300);
    },

    handleContentClose() {
      this.visibleContentPopup = false;
      setTimeout(() => {
        this.visibleContent = false;
      }, 300);
    },
  },
};
</script>
<style lang="less">
@import './guide.less';
</style>
