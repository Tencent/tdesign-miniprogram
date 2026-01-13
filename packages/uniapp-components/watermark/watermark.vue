<template>
  <view
    :class="classPrefix + ' ' + tClass"
    :style="tools._style([customStyle])"
  >
    <block v-if="content">
      {{ content }}
    </block>
    <slot name="content" />
    <slot />
    <canvas
      :id="canvasId"
      :canvas-id="canvasId"
      type="2d"
      :style="canvasStyle"
    />
    <view
      :class="movable ? 'watermark-move' : ''"
      :style="tools._style(watermarkStyle)"
    />
  </view>
</template>

<script>
import tools from '../common/utils.wxs';
import watermarkProps from './props';
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import { appBaseInfo, nextTick } from '../common/utils';
import generateBase64Url from './utils/generateBase64Url';
import randomMovingStyle from './utils/randomMovingStyle';

const name = `${prefix}-watermark`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [`${prefix}-class`],
  props: {
    ...watermarkProps,
  },
  data() {
    return {
      classPrefix: name,
      tools,
      watermarkStyle: {},
      initialed: false,
      canvasId: `watermark-canvas-${Math.random().toString(36)
        .slice(2, 11)}`,
    };
  },
  computed: {
    canvasStyle() {
      let result = 'width: 100px; height: 100px;';
      let shouldHide = true;

      // #ifdef APP-PLUS || MP-ALIPAY
      if (!this.initialed) {
        shouldHide = false;
      }
      // #endif

      if (shouldHide) {
        result += 'display: none;';
      }
      return result;
    },
  },
  watch: {
    watermarkContent: 'renderWatermark',
    movable: 'renderWatermark',
    rotate: 'renderWatermark',
    x: 'renderWatermark',
    y: 'renderWatermark',
    width: 'renderWatermark',
    height: 'renderWatermark',
    alpha: 'renderWatermark',
    lineSpace: 'renderWatermark',
    moveInterval: 'renderWatermark',
    zIndex: 'renderWatermark',
    offset: 'renderWatermark',
    removable: 'renderWatermark',
    isRepeat: 'renderWatermark',
    layout: 'renderWatermark',
  },
  async mounted() {
    await nextTick();
    this.renderWatermark();
  },
  methods: {
    watermarkColor() {
      return appBaseInfo.theme === 'dark'
        ? 'rgba(238, 238, 238, 0.1)'
        : 'rgba(0, 0, 0, 0.1)';
    },
    renderWatermark() {
      const query = uni.createSelectorQuery().in(this);

      query
        .select(`#${this.canvasId}`)
        .fields({ node: true, size: true })
        .exec(async (res) => {
          if (!res[0]?.node) {
            console.error('Canvas node not found');
            return;
          }
          const canvas = res[0].node;
          const gapX = this.movable ? 0 : this.x;
          const gapY = this.movable ? 0 : this.y;
          const offset = this.offset || [];
          const offsetLeft = offset[0] || gapX / 2;
          const offsetTop = offset[1] || gapY / 2;

          const bgImageOptions = {
            width: this.width,
            height: this.height,
            rotate: this.movable ? 0 : this.rotate,
            lineSpace: this.lineSpace,
            alpha: this.alpha,
            gapX,
            gapY,
            watermarkContent: this.watermarkContent,
            offsetLeft,
            offsetTop,
            watermarkColor: this.watermarkColor(),
            layout: this.layout,
          };
          generateBase64Url.call(
            this,
            canvas,
            this.canvasId,
            bgImageOptions,
            (base64Url, backgroundSize) => {
              let animationVars = {};
              if (this.movable) {
                const {
                  left0,
                  left25,
                  left50,
                  left75,
                  top0,
                  top25,
                  top50,
                  top75,
                } = randomMovingStyle();
                animationVars = {
                  '--watermark-left-0': left0,
                  '--watermark-left-25': left25,
                  '--watermark-left-50': left50,
                  '--watermark-left-75': left75,
                  '--watermark-top-0': top0,
                  '--watermark-top-25': top25,
                  '--watermark-top-50': top50,
                  '--watermark-top-75': top75,
                  '--watermark-animation-duration': `${
                    (this.moveInterval * 4) / 60
                  }s`,
                };
              }

              this.watermarkStyle = {
                zIndex: this.zIndex,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                backgroundSize: `${
                  backgroundSize?.width || gapX + this.width
                }px`,
                pointerEvents: 'none',
                backgroundRepeat: this.movable ? 'no-repeat' : 'repeat',
                backgroundImage: `url('${base64Url}')`,
                ...animationVars,
              };
            },
            () => {
              this.initialed = true;
            },
          ).catch((e) => {
            console.log('e', e);
          });
        });
    },
  },
});
</script>

<style scoped>
@import './watermark.css';
</style>
