<template>
  <view
    :class="classPrefix + '__panel'"
    :style="customStyle"
  >
    <view
      :class="classPrefix + '__body ' + classPrefix + '__body--' + type"
    >
      <!-- #ifdef MP-ALIPAY -->
      <view
        disable-scroll
      >
        <!-- #endif -->

        <view
          v-if="isMultiple"
          :class="classPrefix + '__saturation'"
          data-type="saturation"
          :style="'background: hsl(' + sliderInfo.value + ', 100%, 50%)'"
          @touchstart.stop.prevent="onTouchStart"
          @touchmove.stop.prevent="onTouchMove"
          @touchend.stop.prevent="onTouchEnd"
        >
          <view
            :class="classPrefix + '__thumb'"
            :tab-index="0"
            :style="utils._style(saturationThumbStyle)"
          />
        </view>
        <!-- #ifdef MP-ALIPAY -->
      </view>
      <!-- #endif -->


      <view
        v-if="isMultiple"
        :class="classPrefix + '__sliders-wrapper'"
      >
        <view
          :class="classPrefix + '__sliders'"
        >
          <view
            :class="classPrefix + '__slider-wrapper ' + classPrefix + '__slider-wrapper--hue-type'"
            disable-scroll
          >
            <view
              :class="classPrefix + '__slider'"
              data-type="hue-slider"
              @touchstart.stop.prevent="onTouchStart"
              @touchmove.stop.prevent="onTouchMove"
              @touchend.stop.prevent="onTouchEnd"
            >
              <view :class="classPrefix + '__rail'" />
              <view
                :class="classPrefix + '__thumb'"
                :style="utils._style(hueSliderStyle)"
              />
            </view>
          </view>
          <view
            v-if="enableAlpha"
            :class="classPrefix + '__slider-wrapper ' + classPrefix + '__slider-wrapper--alpha-type'"
            :disable-scroll="true"
          >
            <view
              :class="classPrefix + '__slider-padding'"
              :style="
                'background: linear-gradient(90deg, rgba(0,0,0,.0) 0%, rgba(0,0,0,.0) 93%, ' + alphaSliderStyle.color + ' 93%, ' + alphaSliderStyle.color + ' 100%)'
              "
              :disable-scroll="false"
            />
            <view
              :class="classPrefix + '__slider'"
              data-type="alpha-slider"
              @touchstart.stop.prevent="onTouchStart"
              @touchmove.stop.prevent="onTouchMove"
              @touchend.stop.prevent="onTouchEnd"
            >
              <view
                :class="classPrefix + '__rail'"
                :style="'background: linear-gradient(to right, rgba(0, 0, 0, 0), ' + alphaSliderStyle.color + ')'"
              />
              <view
                :class="classPrefix + '__thumb'"
                :style="utils._style(alphaSliderStyle)"
              />
            </view>
          </view>
        </view>
        <view
          v-if="showPrimaryColorPreview"
          :class="classPrefix + '__sliders-preview ' + classPrefix + '--bg-alpha'"
        >
          <view
            :class="classPrefix + '__sliders-preview-inner'"
            :style="'background: ' + previewColor"
          />
        </view>
      </view>
      <view
        v-if="isMultiple"
        :class="classPrefix + '__format'"
      >
        <view :class="classPrefix + '__format-item ' + classPrefix + '__format-item--first'">
          {{ format }}
        </view>
        <view :class="classPrefix + '__format-item ' + classPrefix + '__format-item--second'">
          <view :class="classPrefix + '__format-inputs'">
            <view
              v-for="(item, index) in formatList"
              :key="index"
              :class="
                classPrefix + '__format-input ' + classPrefix + '__format-input--' + (index === formatList.length - 1 && formatList.length === 2 ? 'fixed' : 'base')
              "
            >
              {{ item }}
            </view>
          </view>
        </view>
      </view>
      <view
        v-if="innerSwatchList.length"
        :class="classPrefix + '__swatches-wrap'"
      >
        <view :class="classPrefix + '__swatches'">
          <view
            v-if="isMultiple"
            :class="classPrefix + '__swatches-title'"
          >
            系统预设色彩
          </view>
          <view :class="classPrefix + '__swatches-items'">
            <view
              v-for="(swatch, index) in innerSwatchList"
              :key="index"
              :class="classPrefix + '__swatches-item'"
              :data-value="swatch"
              @click.stop.prevent="clickSwatch"
            >
              <view
                :class="classPrefix + '__swatches-inner'"
                :style="'background-color: ' + swatch + ';'"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import utils from '../common/utils.wxs';
import props from './template.props';
import { getRect } from '../common/utils';


export default {
  options: {
    styleIsolation: 'shared',
  },
  props: {
    ...props,
  },
  emits: [
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
    'clickSwatch',
  ],
  data() {
    return {
      utils,
    };
  },
  methods: {
    onTouchStart(...args) {
      this.$emit('onTouchStart', ...args);
    },
    onTouchMove(...args) {
      this.$emit('onTouchMove', ...args);
    },
    onTouchEnd(...args) {
      this.$emit('onTouchEnd', ...args);
    },
    clickSwatch(...args) {
      this.$emit('clickSwatch', ...args);
    },
    getRect(selector, needAll, useH5Origin) {
      return getRect(this, selector, needAll, useH5Origin);
    },
  },
};
</script>

<style scoped>
@import './color-picker.css';
</style>
