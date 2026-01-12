<template>
  <view
    :style="`${tools._style([customStyle])}; width:${containerSize}px; height: ${containerSize}px; background-color: ${bgColor};`"
    :class="`${classPrefix} ${borderless ? prefix + '-' + 'borderless' : ''} ${tClass}`"
  >
    <QrcodeCanvas
      ref="qrcodeCanvas"
      :t-class="tClassCanvas"
      :size="size"
      :value="value"
      :level="level"
      :color="color"
      :bg-color="bgColor"
      :icon="icon"
      :icon-size="iconSize"
      @drawError="handleDrawError"
      @drawCompleted="handleDrawCompleted"
    />

    <view
      v-if="showMask && canvasReady"
      :class="`${prefix}-mask`"
    >
      <QrcodeStatus
        :status="status"
        :status-render="statusRender"
        @refresh="handleRefresh"
      >
        <template #statusRender>
          <slot name="statusRender" />
        </template>
      </QrcodeStatus>
    </view>
  </view>
</template>

<script>
import QrcodeCanvas from './components/qrcode-canvas/qrcode-canvas.vue';
import QrcodeStatus from './components/qrcode-status/qrcode-status.vue';
import { prefix } from '../common/config';
import props from './props';
import { uniComponent } from '../common/src/index';
import tools from '../common/utils.wxs';

const name = `${prefix}-qrcode`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-canvas`,
  ],
  components: {
    QrcodeCanvas,
    QrcodeStatus,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      tools,
      showMask: false,
      classPrefix: name,
      canvasReady: false,
      canvasNode: null,
    };
  },
  computed: {
    // 容器尺寸 = Canvas 尺寸 + padding * 2
    // padding 为 12px，所以容器需要额外 24px
    containerSize() {
      return this.size + 24;
    },
  },
  watch: {
    status: {
      handler(newVal) {
        this.showMask = newVal !== 'active';
      },
      immediate: true,
    },
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    async initCanvas() {
      // 获取 canvas 实例
      const canvasComp = this.$refs.qrcodeCanvas;
      if (canvasComp) {
        const canvas = await canvasComp.getCanvasNode();
        this.canvasNode = canvas;
      }
    },
    handleDrawCompleted() {
      this.canvasReady = true;
    },
    handleDrawError(err) {
      console.error('二维码绘制失败', err);
    },
    handleRefresh() {
      this.$emit('refresh');
    },
    // 二维码下载方法
    async handleDownload() {
      if (!this.canvasNode) {
        console.error('未找到 canvas 节点');
        return;
      }

      // 注意：此方法在非小程序环境需要适配
      if (typeof wx !== 'undefined' && uni.canvasToTempFilePath) {
        uni.canvasToTempFilePath({
          canvas: this.canvasNode,
          success: (res) => {
            uni.saveImageToPhotosAlbum({ filePath: res.tempFilePath });
          },
          fail: (err) => {
            console.error('canvasToTempFilePath failed', err);
          },
        });
      }
    },
  },
});
</script>

<style lang="less" scoped>
@import './qrcode.css';
</style>
