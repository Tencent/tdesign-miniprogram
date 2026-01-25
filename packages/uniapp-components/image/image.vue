<template>
  <view
    :style="tools._style([customStyle])"
    :class="[tClass, classPrefix]"
  >
    <view
      v-if="isLoading"
      :style="tools._style([innerStyle])"
      :class="classPrefix + '__mask ' + classPrefix + '--loading ' + classPrefix + '--shape-' + shape"
      :aria-hidden="ariaHidden"
    >
      <t-loading
        v-if="loading === 'default'"
        theme="dots"
        size="44rpx"
        loading
        inherit-color
        :t-class="tClassLoad"
        :t-class-text="classPrefix + '--loading-text'"
      />
      <view
        v-else-if="loading !== '' && loading !== 'slot'"
        :class="classPrefix + '__common ' + tClassLoad"
      >
        {{ loading }}
      </view>
      <slot
        v-else
        name="loading"
      />
    </view>
    <view
      v-else-if="isFailed"
      :style="tools._style([innerStyle])"
      :class="[
        classPrefix + '__mask ' + classPrefix + '--failed ' + classPrefix + '--shape-' + shape,
        tClassError
      ]"
      :aria-hidden="ariaHidden"
    >
      <view
        v-if="error === 'default'"
        style="font-size: 44rpx"
        :class="tClassLoad"
      >
        <t-icon
          name="close"
          aria-role="img"
          aria-label="加载失败"
        />
      </view>
      <view
        v-else-if="error && error !== 'slot'"
        :class="[classPrefix + '__common ', tClassLoad]"
      >
        {{ error }}
      </view>
      <slot
        v-else
        name="error"
      />
    </view>
    <image
      v-if="!isFailed"
      :id="tId || 'image'"
      :style="tools._style([innerStyle])"
      :class="[
        classPrefix + '__img ' + classPrefix + '--shape-' + shape + ' ',
        (isLoading ? classPrefix + '--lazy' : '') + ' ',
        tClassImage
      ]"
      :src="src"
      :mode="mode"
      :webp="webp"
      :lazy-load="lazy"
      :show-menu-by-longpress="showMenuByLongpress"
      :aria-hidden="ariaHidden || isLoading || isFailed"
      :aria-label="ariaLabel"
      @click="onClick"
      @load="onLoaded"
      @error="onLoadError"
    />
  </view>
</template>
<script>
import TLoading from '../loading/loading';
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import ImageProps from './props';
import { prefix } from '../common/config';
import { addUnit, getRect, appBaseInfo } from '../common/utils';
import { compareVersion } from '../common/version';
import tools from '../common/utils.wxs';


const name = `${prefix}-image`;
export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-load`,
    `${prefix}-class-image`,
    `${prefix}-class-error`,
  ],
  components: {
    TLoading,
    TIcon,
  },
  props: {
    ...ImageProps,
  },
  emits: [
    'click',
  ],
  data() {
    return {
      prefix,
      isLoading: true,
      isFailed: false,
      innerStyle: '',
      classPrefix: name,
      tools,
      preSrc: '',
    };
  },
  watch: {
    src() {
      if (this.preSrc !== this.src) {
        this.update();
      }
    },
    width: 'calcSize',
    height: 'calcSize',
  },
  mounted() {
    this.calcSize(this.width, this.height);
  },
  methods: {
    onLoaded(e) {
      const version = appBaseInfo.SDKVersion;
      const {
        mode,
        tId,
      } = this;

      const lower = compareVersion(version, '2.10.3') < 0;
      // #ifdef MP-WEIXIN || MP-QQ
      if ('heightFix' === mode && lower) {
        getRect(this, `#${tId || 'image'}`).then((e) => {
          const {
            height,
            width,
          } = e;

          this.innerStyle = `height: ${addUnit(height)}; width: ${width}px;`;
        })
          .catch(() => {

          });
      }
      // #endif
      this.isLoading = false;
      this.isFailed = false;
      this.$emit('load', { e });
    },
    onLoadError(e) {
      this.isLoading = false;
      this.isFailed = true;

      this.$emit('error', { e });
    },
    calcSize(width = this.width, height = this.height) {
      let innerStyle = '';
      if (width) {
        innerStyle += `width: ${addUnit(width)};`;
      }
      if (height) {
        innerStyle += `height: ${addUnit(height)};`;
      }
      this.innerStyle = innerStyle;
    },
    update() {
      const {
        src,
      } = this;
      this.preSrc = src;
      if (src) {
        this.isLoading = true;
        this.isFailed = false;
      } else {
        this.onLoadError({
          errMsg: '图片链接为空',
        });
      }
    },
    onClick(e) {
      this.$emit('click', e);
    },
  },
});
</script>
<style scoped>
@import './image.css';
</style>
