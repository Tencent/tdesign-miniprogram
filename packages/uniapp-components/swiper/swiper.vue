<template>
  <view
    :class="classPrefix + ' ' + tClass"
    :style="tools._style([customStyle])"
  >
    <swiper
      :class="classPrefix + '-host'"
      :autoplay="autoplay"
      :current="current"
      :interval="interval"
      :duration="duration"
      :circular="loop"
      :vertical="direction == 'vertical'"
      :easing-function="easingFunction"
      :previous-margin="tools.addUnit(previousMargin)"
      :next-margin="tools.addUnit(nextMargin)"
      :snap-to-edge="snapToEdge"
      :display-multiple-items="displayMultipleItems"
      :style="'height: ' + tools.addUnit(height)"
      @change="onChange"
      @animationfinish="onAnimationFinish"
    >
      <swiper-item
        v-for="(item, index) in list"
        :key="index"
        :class="
          tools.cls(classPrefix + '__item', [
            ['preview', isPrev(navCurrent, index, list)],
            ['next', isNext(navCurrent, index, list)]
          ])
        "
        :data-index="index"
        :aria-hidden="navCurrent !== index"
        aria-role="image"
        :aria-label="tools.isObject(item) ? item.ariaLabel : ''"
        @click="onTap($event, { index })"
      >
        <t-image
          :t-class="getImageClass(prefix, navCurrent, index, list, tClassImage, tClassPrevImage, tClassNextImage)"
          :custom-style="'height: ' + tools.addUnit(height) || ''"
          :error="imageProps.error || 'default'"
          :lazy="imageProps.lazy || false"
          :loading="imageProps.loading || 'default'"
          :shape="imageProps.shape || 'square'"
          :src="tools.isObject(item) ? item.value : item"
          :mode="imageProps.mode || 'aspectFill'"
          :webp="imageProps.webp || false"
          :show-menu-by-longpress="imageProps.showMenuByLongpress || false"
          @load="onImageLoad($event, { custom: index || null })"
        />
      </swiper-item>
    </swiper>
    <t-swiper-nav
      v-if="navigation"
      :t-class="tClassNav"
      :type="navigation.type || 'dots'"
      :current="navCurrent || 0"
      :total="list.length || 0"
      :direction="direction || 'horizontal'"
      :pagination-position="paginationPosition || 'bottom'"
      :min-show-num="navigation.minShowNum || 2"
      :show-controls="navigation.showControls || false"
      @nav-btn-change="onNavBtnChange"
    />
    <slot name="navigation" />
    <slot name="nav" />
  </view>
</template>
<script>
import tSwiperNav from '../swiper-nav/swiper-nav';
import tImage from '../image/image';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { isPrev, isNext, getImageClass } from './computed.js';
import { ParentMixin, RELATION_MAP } from '../common/relation';

const name = `${prefix}-swiper`;

export default uniComponent({
  name,
  options: {
    multipleSlots: true,
    styleIsolation: 'shared',
  },
  externalClasses: [`${prefix}-class`, `${prefix}-class-nav`, `${prefix}-class-image`, `${prefix}-class-prev-image`, `${prefix}-class-next-image`],
  mixins: [ParentMixin(RELATION_MAP.SwiperNav)],
  components: {
    tSwiperNav,
    tImage,
  },
  props: {
    ...props,
  },
  emits: [
    'click',
    'change',
    'animationfinish',
    'image-load',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,
      navCurrent: 0,
    };
  },
  watch: {
    navCurrent(t) {
      this.updateNav(t);
    },
  },

  mounted() {
    this.navCurrent = this.current;
  },

  methods: {
    isPrev,
    isNext,
    getImageClass,
    getImageSize(column) {
      if (column >= 5) return 'small';
      if (column === 4) return 'middle';
    },

    updateNav(currentValue) {
      if (this.navigation) return;
      const $nav = this.getRelationNodes('./swiper-nav')?.[0];
      if (!$nav) return;
      const { direction, paginationPosition, list } = this;

      this.current = currentValue;
      this.total = list.length;
      this.direction = direction;
      this.paginationPosition = paginationPosition;
    },

    onTap(e, dataset) {
      const { index } = dataset;
      this.$emit('click', { index });
    },

    onChange(e) {
      const { current, source } = e.detail;

      if (!source) return;

      this.navCurrent = current;
      this.triggerSource = source;

      this.$emit('change', { current, source });
    },

    onAnimationFinish(e) {
      const { current, source } = e.detail;

      this.$emit('animationfinish', { current, source: source || this.triggerSource });
    },

    onNavBtnChange(e) {
      const { dir, source } = e;

      this.doNavBtnChange(dir, source);
    },

    doNavBtnChange(dir, source) {
      const { current, list, loop, navCurrent } = this;
      const count = list.length;
      let nextPos = dir === 'next' ? current + 1 : current - 1;

      if (loop) {
        nextPos = dir === 'next' ? (current + 1) % count : (current - 1 + count) % count;
      } else {
        nextPos = nextPos < 0 || nextPos >= count ? current : nextPos;
      }

      if (nextPos === navCurrent) return;

      this.navCurrent = nextPos;
      this.triggerSource = source;

      this.$emit('change', { current: nextPos, source });
    },

    onImageLoad(e, dataset) {
      this.$emit('image-load', { index: dataset.custom });
    },
  },
});

</script>
<style scoped>
@import './swiper.css';
</style>
