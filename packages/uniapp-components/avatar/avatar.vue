<template>
  <view
    :class="[
      classPrefix + '__wrapper',
      tClass
    ]"
    :style="tools._style([utils.getStyles(isShow), customStyle, innerStyle])"
  >
    <t-badge
      v-if="badgeProps"
      :color="badgeProps.color || ''"
      :content="badgeProps.content || ''"
      :count="badgeProps.count || 0"
      :dot="badgeProps.dot || false"
      :max-count="badgeProps.maxCount || 99"
      :offset="badgeProps.offset || []"
      :shape="badgeProps.shape || 'circle'"
      :show-zero="badgeProps.showZero || false"
      :size="badgeProps.size || 'medium'"
      :t-class="badgeProps.tClass"
      :t-class-content="badgeProps.tClassContent"
      :t-class-count="badgeProps.tClassCount"
    >
      <view
        :class="[
          utils.getClass(classPrefix, dataSize || 'medium', dataShape, dataBordered),
          tClassImage
        ]"
        :style="utils.getSize(dataSize, systemInfo)"
        :aria-label="ariaLabel || alt || '头像'"
        :aria-role="ariaRole || 'img'"
        :aria-hidden="ariaHidden"
      >
        <t-image
          v-if="image"
          :t-class="prefix + '-image ' + classPrefix + '__image'"
          :t-class-load="tClassAlt"
          :custom-style="imageCustomStyle"
          style="width: 100%;height: 100%;"
          :src="image"
          :mode="(imageProps && imageProps.mode) || 'aspectFill'"
          :lazy="(imageProps && imageProps.lazy) || false"
          :loading="(imageProps && imageProps.loading) || 'default'"
          :shape="(imageProps && imageProps.shape) || 'round'"
          :webp="(imageProps && imageProps.webp) || false"
          :error="alt || 'default'"
          @error="onLoadError"
        />
        <block
          v-else-if="iconName || tools.isNoEmptyObj(iconData)"
          name="icon"
        >
          <t-icon
            :t-class="classPrefix + '__icon ' + classPrefix + '__icon--' + (iconData.activeIdx == iconData.index ? 'active ' : ' ') + tClassIcon"
            :prefix="iconData.prefix"
            :name="iconName || iconData.name"
            :size="iconData.size"
            :color="iconData.color"
            :aria-hidden="!!iconData.ariaHidden"
            :aria-label="iconData.ariaLabel"
            :aria-role="iconData.ariaRole"
            :custom-style="iconCustomStyle"
            @click="iconData.click || ''"
          />
        </block>
        <view
          v-else
          :class="[
            classPrefix + '__text ',
            tClassContent
          ]"
        >
          <slot />
        </view>
      </view>
    </t-badge>
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import tBadge from '../badge/badge';
import tImage from '../image/image';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import avatarProps from './props';
import { setIcon, systemInfo } from '../common/utils';
import tools from '../common/utils.wxs';
import { utils } from './computed.js';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-avatar`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-image`,
    `${prefix}-class-icon`,
    `${prefix}-class-alt`,
    `${prefix}-class-content`,
  ],
  mixins: [ChildrenMixin(RELATION_MAP.Avatar)],
  components: {
    tIcon,
    tBadge,
    tImage,
  },
  props: {
    ...avatarProps,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      isShow: true,
      zIndex: 0,
      systemInfo,
      utils,
      tools,

      iconName: '',
      iconData: {},

      dataShape: this.shape,
      dataSize: this.size,
      dataBordered: this.bordered,
      innerStyle: '',
    };
  },
  computed: {
    iconCustomStyle() {
      const fontSize = {
        small: 'var(--td-avatar-icon-small-font-size, 20px)',
        medium: 'var(--td-avatar-icon-medium-font-size, 24px)',
        large: 'var(--td-avatar-icon-large-font-size, 32px)',
      };
      if (!fontSize[this.dataSize]) return '';
      return tools._style([
        {
          fontSize: fontSize[this.dataSize],
        },
        this.iconData.style || '',
      ]);
    },
    imageCustomStyle() {
      return tools._style([
        {
          width: '100%',
          height: '100%',
        },
        this.imageProps?.style || '',
      ]);
    },
  },
  watch: {
    icon: {
      handler(t) {
        const obj = setIcon('icon', t, '');

        Object.keys(obj).forEach((key) => {
          this[key] = obj[key];
        });
      },
      immediate: true,
    },

  },
  mounted() {

  },
  methods: {
    innerAfterLinked() {
      this.dataShape = this.shape || this[RELATION_MAP.Avatar]?.shape || 'circle';
      this.dataSize = this.size || this[RELATION_MAP.Avatar]?.size;
      this.dataBordered = true;
    },
    hide() {
      this.isShow = false;
    },
    onLoadError(e) {
      if (this.hideOnLoadFailed) {
        this.isShow = false;
      }
      this.$emit('error', e && e.e);
    },
    setStyle(val = '') {
      this.innerStyle = val;
    },
  },
});

</script>
<style scoped>
@import './avatar.css';
</style>
