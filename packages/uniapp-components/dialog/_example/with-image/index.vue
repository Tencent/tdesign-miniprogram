<template>
  <view>
    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="imageOnTop"
      block
      @click="showDialog($event, { key: 'imageOnTop' })"
    >
      图片置顶-带标题描述
    </t-button>
    <t-dialog
      :visible="imageOnTop"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="imageOnTopWithContent"
      block
      @click="showDialog($event, { key: 'imageOnTopWithContent' })"
    >
      图片置顶-无标题
    </t-button>
    <t-dialog
      :visible="imageOnTopWithContent"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      size="large"
      theme="primary"
      variant="outline"
      data-key="imageOnTopWithTitle"
      block
      @click="showDialog($event, { key: 'imageOnTopWithTitle' })"
    >
      图片置顶-纯标题
    </t-button>
    <t-dialog
      :visible="imageOnTopWithTitle"
      title="对话框标题"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="imageOnMiddleWithImage"
      block
      @click="showDialog($event, { key: 'imageOnMiddleWithImage' })"
    >
      图片置顶-纯图片
    </t-button>
    <t-dialog
      :visible="imageOnMiddleWithImage"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #top
      >
        <t-image
          t-class="dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="imageOnMiddle"
      block
      @click="showDialog($event, { key: 'imageOnMiddle' })"
    >
      图片居中-带标题描述
    </t-button>
    <t-dialog
      :visible="imageOnMiddle"
      title="对话框标题"
      content="告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #middle
      >
        <t-image
          t-class="image-host dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>

    <t-button
      t-class="wrapper"
      theme="primary"
      size="large"
      variant="outline"
      data-key="imageOnMiddleWithTitle"
      block
      @click="showDialog($event, { key: 'imageOnMiddleWithTitle' })"
    >
      图片居中-纯标题
    </t-button>
    <t-dialog
      :visible="imageOnMiddleWithTitle"
      title="对话框标题"
      :confirm-btn="{ content: '确定', variant: 'base' }"
      cancel-btn="取消"
      @confirm="closeDialog"
      @cancel="closeDialog"
    >
      <template
        #middle
      >
        <t-image
          t-class="image-host dialog-image"
          src="https://tdesign.gtimg.com/mobile/demos/dialog1.png"
        />
      </template>
    </t-dialog>
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';
import TImage from '@tdesign/uniapp/image/image.vue';
import TDialog from '@tdesign/uniapp/dialog/dialog.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TButton,
    TImage,
    TDialog,
  },
  data() {
    return {
      dialogKey: '',
      imageOnTop: false,
      imageOnTopWithContent: false,
      imageOnTopWithTitle: false,
      imageOnMiddle: false,
      imageOnMiddleWithTitle: false,
      imageOnMiddleWithImage: false,
    };
  },
  created() {},
  methods: {
    showDialog(e, { key }) {
      this[key] = true;
      this.dialogKey = key;
    },
    closeDialog() {
      const { dialogKey } = this;
      this[dialogKey] = false;
    },
  },
};
</script>
<style>
.wrapper {
    margin-bottom: 32rpx;
}

.dialog-image {
    width: 100%;
    height: 160px;
}

.image-host {
    display: block;
    margin-top: 48rpx;
}
</style>
