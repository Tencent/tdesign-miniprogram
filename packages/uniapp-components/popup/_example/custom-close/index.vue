<template>
  <view>
    <t-popup
      :visible="visible"
      placement="center"
      @visible-change="onVisibleChange"
    >
      <view class="block">
        <t-icon
          name="close-circle"
          :custom-style="closeIconCustomStyle"
          size="64rpx"
          color="#fff"
          @click="onClose"
        />
      </view>
    </t-popup>

    <t-button
      block
      size="large"
      variant="outline"
      theme="primary"
      custom-style="display: block; margin-top: 32rpx"
      @click="handlePopup"
    >
      居中弹出层-带自定义关闭按钮
    </t-button>
  </view>
</template>

<script>
import TPopup from 'tdesign-uniapp/popup/popup.vue';
import TIcon from 'tdesign-uniapp/icon/icon.vue';
import TButton from 'tdesign-uniapp/button/button.vue';
import tools from 'tdesign-uniapp/common/utils.wxs';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TPopup,
    TIcon,
    TButton,
  },
  data() {
    return {
      cur: {},

      position: [
        {
          value: 'top',
          text: '顶部弹出',
        },
        {
          value: 'left',
          text: '左侧弹出',
        },
        {
          value: 'center',
          text: '中间弹出',
        },
        {
          value: 'bottom',
          text: '底部弹出',
        },
        {
          value: 'right',
          text: '右侧弹出',
        },
      ],

      visible: false,

      closeIconCustomStyle: tools._style({
        position: 'absolute',
        left: '50%',
        marginLeft: '-16px',
        bottom: 'calc(-1 * (24px + 32px))',
      }),
    };
  },
  created() {},
  methods: {
    handlePopup() {
      this.visible = true;
    },
    onVisibleChange({ visible }) {
      this.visible = visible;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
<style scoped>
.block {
    position: relative;
    width: 240px;
    height: 240px;
    background: var(--td-bg-color-container);
    border-radius: 16rpx;
}
</style>
