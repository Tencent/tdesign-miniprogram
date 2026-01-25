<template>
  <view
    v-if="dataVisible"
    :id="classPrefix"
    :class="classPrefix + ' ' + tClass"
    :style="tools._style([customStyle, '--td-image-viewer-top: ' + distanceTop + 'px'])"
    :aria-modal="true"
    aria-role="dialog"
    aria-label="图片查看器"
    @touchmove.stop.prevent="true"
  >
    <view
      :class="classPrefix + '__mask'"
      data-source="overlay"
      :style="tools._style([backgroundColor && '--td-image-viewer-mask-bg-color: ' + backgroundColor])"
      aria-role="button"
      aria-label="关闭"
      @click="(e) => onClose(e, 'overlay')"
    />
    <block v-if="images && images.length">
      <view :class="classPrefix + '__content'">
        <swiper
          class="swiper"
          :style="swiperStyle[currentSwiperIndex] && swiperStyle[currentSwiperIndex].style"
          :autoplay="false"
          :current="currentSwiperIndex"
          tabindex="0"
          @change="onSwiperChange"
          @click="(e) => onClose(e, '')"
        >
          <swiper-item
            v-for="(item, index) in images"
            :key="index"
            :class="classPrefix + '__preview-image'"
          >
            <t-image
              v-if="!lazy || shouldLoadImage(index, currentSwiperIndex, loadedImageIndexes)"
              :t-class="prefix + '-image--external'"
              :class="classPrefix + '__image'"
              :custom-style="(imagesStyle[index] && imagesStyle[index].style) || ''"
              :data-index="index"
              :src="item"
              :mode="(imageProps && imageProps.mode) || 'aspectFit'"
              :lazy="(imageProps && imageProps.lazy) || false"
              :loading="(imageProps && imageProps.loading) || 'default'"
              :shape="(imageProps && imageProps.shape) || 'square'"
              :webp="(imageProps && imageProps.webp) || false"
              :show-menu-by-longpress="(imageProps && imageProps.showMenuByLongpress) || false"
              @load="onImageLoadSuccess($event, { index })"
            />
          </swiper-item>
        </swiper>
      </view>
      <view
        :class="classPrefix + '__nav'"
      >
        <view
          :class="classPrefix + '__nav-close'"
          aria-role="button"
          aria-label="关闭"
          @click.stop.prevent="(e) => onClose(e, '')"
        >
          <slot name="close-btn" />
          <block
            v-if="_closeBtn"
            name="icon"
          >
            <t-icon
              :custom-style="_closeBtn.style || ''"
              :t-class="_closeBtn.tClass"
              :prefix="_closeBtn.prefix"
              :name="_closeBtn.name"
              :size="_closeBtn.size"
              :color="_closeBtn.color"
              :aria-hidden="!!_closeBtn.ariaHidden"
              :aria-label="_closeBtn.ariaLabel"
              :aria-role="_closeBtn.ariaRole"
              @click="_closeBtn.click || ''"
            />
          </block>
        </view>
        <view
          v-if="showIndex"
          :class="classPrefix + '__nav-index'"
        >
          {{ currentSwiperIndex + 1 }}/{{ images.length }}
        </view>
        <view
          :class="classPrefix + '__nav-delete'"
          aria-role="button"
          aria-label="删除"
          @click="onDelete"
        >
          <slot name="delete-btn" />
          <t-icon
            v-if="_deleteBtn"
            :custom-style="_deleteBtn.style || ''"
            :t-class="_deleteBtn.tClass"
            :prefix="_deleteBtn.prefix"
            :name="_deleteBtn.name"
            :size="_deleteBtn.size"
            :color="_deleteBtn.color"
            :aria-hidden="!!_deleteBtn.ariaHidden"
            :aria-label="_deleteBtn.ariaLabel"
            :aria-role="_deleteBtn.ariaRole"
            @click="_deleteBtn.click || ''"
          />
        </view>
      </view>
    </block>
  </view>
</template>
<script>
import TImage from '../image/image';
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { styles, calcIcon, systemInfo } from '../common/utils';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { shouldLoadImage } from './computed.js';
import useCustomNavbar from '../mixins/using-custom-navbar';


const name = `${prefix}-image-viewer`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'visible',
      event: 'close',
    },
  ],
  externalClasses: [`${prefix}-class`],
  mixins: [useCustomNavbar],
  components: {
    TImage,
    TIcon,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      currentSwiperIndex: 0,
      loadedImageIndexes: [],
      windowHeight: 0,
      windowWidth: 0,
      swiperStyle: {},
      imagesStyle: {},
      maskTop: 0,
      tools,

      _deleteBtn: null,
      _closeBtn: null,
      dataVisible: this.visible,
    };
  },
  watch: {
    visible: {
      handler(v) {
        this.dataVisible = v;
        this.init();
      },
    },
    initialIndex: 'init',
    images: 'init',

    closeBtn: {
      handler(v) {
        this._closeBtn = calcIcon(v, 'close');
      },
      immediate: true,
    },

    deleteBtn: {
      handler(v) {
        this._deleteBtn =  calcIcon(v, 'delete');
      },
      immediate: true,
    },
  },
  created() {
    this.saveScreenSize();
    // this.calcMaskTop();
  },
  mounted() {
    this.init();
  },
  methods: {
    shouldLoadImage,
    init() {
      const { visible: dataVisible, images, initialIndex } = this;
      if (dataVisible && images?.length) {
        this.loadedImageIndexes = [];
        this.currentSwiperIndex =  initialIndex >= images.length ? images.length - 1 : initialIndex;
      }
    },
    calcMaskTop() {
      if (this.usingCustomNavbar) {
        const rect = wx?.getMenuButtonBoundingClientRect() || null;
        const { statusBarHeight } = systemInfo;

        if (rect && statusBarHeight) {
          this.maskTop =  rect.top - statusBarHeight + rect.bottom;
        }
      }
    },
    saveScreenSize() {
      const { windowHeight, windowWidth } = systemInfo;
      this.windowHeight = windowHeight;
      this.windowWidth = windowWidth;
    },

    calcImageDisplayStyle(imageWidth, imageHeight) {
      const { windowWidth, windowHeight } = this;
      const ratio = imageWidth / imageHeight;
      // 图片宽高都小于屏幕宽高
      if (imageWidth < windowWidth && imageHeight < windowHeight) {
        return {
          styleObj: {
            width: `${imageWidth}px`,
            height: `${imageHeight}px`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        };
      }
      // 图片宽高至少存在一个大于屏幕宽高，此时判断图片宽高比，按长边显示
      if (ratio >= 1) {
        return {
          styleObj: {
            width: '100vw',
            height: `${(windowWidth / ratio)}px`,
          },
        };
      }

      // 图片的高大于宽（纵向图），设定高度为100vh，宽度自适应，且确保宽度不超过屏幕宽度
      const scaledHeight = ratio * windowHeight * 2;
      if (scaledHeight < windowWidth) {
        return {
          styleObj: {
            width: `${scaledHeight}rpx`,
            height: '100vh',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        };
      }
      // 当通过高度计算的图片宽度超过屏幕宽度时, 以屏幕宽度为基准, 重新计算高度
      return {
        styleObj: {
          width: '100vw',
          height: `${(windowWidth / imageWidth) * imageHeight}px`,
        },
      };
    },

    onImageLoadSuccess({ e }, { index }) {
      const {
        detail: { width, height },
      } = e;

      const { mode, styleObj } = this.calcImageDisplayStyle(width, height);
      const originImagesStyle = this.imagesStyle;
      const originSwiperStyle = this.swiperStyle;

      if (!this.loadedImageIndexes.includes(index)) {
        this.loadedImageIndexes = [...this.loadedImageIndexes, index];
      }


      this.swiperStyle = {
        ...originSwiperStyle,
        [index]: {
          style: `height: ${styleObj.height}`,
        },
      };
      this.imagesStyle = {
        ...originImagesStyle,
        [index]: {
          mode,
          style: styles({ ...styleObj }),
        },
      };
    },

    onSwiperChange(e) {
      const {
        detail: { current },
      } = e;
      this.currentSwiperIndex = current;

      this._trigger('change', { index: current });
    },

    onClose(e, source) {
      this._trigger('close', { visible: false, trigger: source || 'button', index: this.currentSwiperIndex });
    },

    onDelete() {
      this._trigger('delete', { index: this.currentSwiperIndex });
    },
  },
});
</script>
<style scoped>
@import './image-viewer.css';

</style>
