<template>
  <view
    :class="[
      tools.cls(classPrefix, [['auto-size', column == 0]]),
      tClass
    ]"
    :style="tools._style([gridItemStyle, customStyle])"
    :hover-class="hover ? classPrefix + '--hover' : ''"
    :hover-stay-time="200"
    :aria-role="ariaRole || 'button'"
    :aria-label="ariaLabel"
    :aria-describedby="describedbyID"
    @click="onClick"
  >
    <view
      :class="tools.cls(classPrefix + '__wrapper', [layout])"
      :style="gridItemWrapperStyle"
    >
      <view
        :class="[
          tools.cls(classPrefix + '__content', [align, layout]),
          tClassContent
        ]"
        :style="gridItemContentStyle"
      >
        <slot />
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
              tools.cls(classPrefix + '__image', [getImageSize(column), ['icon', icon]]),
              tClassImage
            ]"
          >
            <block v-if="image && image != 'slot'">
              <t-image
                :t-class="tools.cls(classPrefix + '__image', [getImageSize(column)]) + ' ' + tClassImage"
                :custom-style="tools._style([imageProps.style, imageProps.customStyle])"
                :height="imageProps.height || ''"
                :width="imageProps.width || ''"
                :error="imageProps.error"
                :lazy="imageProps.lazy"
                :loading="imageProps.loading"
                :shape="imageProps.shape || 'round'"
                :src="imageProps.src || image"
                :mode="imageProps.mode || 'widthFix'"
                :webp="imageProps.webp"
                :show-menu-by-longpress="imageProps.showMenuByLongpress"
                :data-custom="imageProps.dataset"
                @error="binderror($event)"
                @load="bindload($event)"
              />
            </block>
            <slot name="image" />
            <block
              v-if="iconName || tools.isNoEmptyObj(iconData)"
              name="icon"
            >
              <t-icon
                :custom-style="iconData.style || ''"
                :t-class="classPrefix + '__icon ' + classPrefix + '__icon--' + (iconData.activeIdx == iconData.index ? 'active ' : ' ')"
                :prefix="iconData.prefix"
                :name="iconName || iconData.name"
                :size="iconData.size"
                :color="iconData.color"
                :aria-hidden="!!iconData.ariaHidden"
                :aria-label="iconData.ariaLabel"
                :aria-role="iconData.ariaRole"
              />
            </block>
          </view>
        </t-badge>
        <view
          :id="describedbyID"
          :class="tools.cls(classPrefix + '__words', [layout])"
          :aria-label="ariaLabel
            || (
              (badgeProps && (badgeProps.dot || badgeProps.count))
                ? text + ',' + description + ',' + tools.getBadgeAriaLabel({ ...(badgeProps || {}) })
                : '')"
        >
          <view
            v-if="text"
            :class="[
              tools.cls(classPrefix + '__text', [getImageSize(column), layout]) + ' ',
              tClassText
            ]"
          >
            {{ text }}
          </view>
          <slot name="text" />
          <view
            v-if="description"
            :class="[
              tools.cls(classPrefix + '__description', [getImageSize(column), layout]) + ' ',
              tClassDescription
            ]"
          >
            {{ description }}
          </view>
          <slot name="description" />
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import TImage from '../image/image';
import TIcon from '../icon/icon';
import TBadge from '../badge/badge';

import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { uniqueFactory, setIcon } from '../common/utils';
import { isObject } from '../common/validator';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-grid-item`;
const getUniqueID = uniqueFactory('grid_item');


const LinkTypes = {
  'redirect-to': 'redirectTo',
  'switch-tab': 'switchTab',
  relaunch: 'reLaunch',
  'navigate-to': 'navigateTo',
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-image`,
    `${prefix}-class-text`,
    `${prefix}-class-description`,
  ],
  mixins: [ChildrenMixin(RELATION_MAP.GridItem)],
  components: {
    TImage,
    TIcon,
    TBadge,
  },
  props: {
    ...props,
  },
  emits: [
    'click',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      gridItemStyle: '',
      gridItemWrapperStyle: '',
      gridItemContentStyle: '',
      align: 'center',
      column: 0,
      describedbyID: '',
      tools,

      iconName: '',
      iconData: {},

      hover: false,
    };
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
    this.describedbyID = getUniqueID();
  },
  methods: {
    innerAfterLinked() {
      this.updateStyle();
      this.column = this[RELATION_MAP.GridItem].column;
    },
    binderror() {},
    bindload() {},
    getImageSize(column) {
      if (!column || column == 4) return 'middle';
      return column > 4 ? 'small' : 'large';
    },
    updateStyle() {
      const { hover, align } = this[RELATION_MAP.GridItem];
      const gridItemStyles = [];
      const gridItemWrapperStyles = [];
      const gridItemContentStyles = [];
      const widthStyle = this.getWidthStyle();
      const paddingStyle = this.getPaddingStyle();
      const borderStyle = this.getBorderStyle();
      widthStyle && gridItemStyles.push(widthStyle);
      paddingStyle && gridItemWrapperStyles.push(paddingStyle);
      borderStyle && gridItemContentStyles.push(borderStyle);

      this.gridItemStyle = `${gridItemStyles.join(';')}`;
      this.gridItemWrapperStyle = gridItemWrapperStyles.join(';');
      this.gridItemContentStyle = gridItemContentStyles.join(';');
      this.hover = hover;
      this.align = align;
    },

    // 判断应该加在gridItem上的宽度
    getWidthStyle() {
      const { column } = this[RELATION_MAP.GridItem];
      return column > 0 ? `width:${(1 / column) * 100}%` : '';
    },

    // 获取应该加在gridWrap上的padding
    getPaddingStyle() {
      const { gutter } = this[RELATION_MAP.GridItem];
      if (gutter) return `padding-bottom:${gutter}rpx;padding-right:${gutter}rpx`;
      return '';
    },

    // 判断border在grid-item-content上的css属性
    getBorderStyle() {
      const { gutter } = this[RELATION_MAP.GridItem];
      let { border } = this[RELATION_MAP.GridItem];

      if (!border) {
        // 如果border的值没传或者是border的值为false
        return '';
      }

      if (!isObject(border)) {
        border = {};
      }
      const { color = '#266FE8', width = 2, style = 'solid' } = border ;

      if (gutter) {
        return `border:${width}rpx ${style} ${color}`;
      }

      return `border-bottom:${width}rpx ${style} ${color};border-right:${width}rpx ${style} ${color}`;
    },

    onClick(e) {
      const { item } = e.currentTarget.dataset;
      this.$emit('click', item);
      this.jumpLink();
    },

    jumpLink() {
      const { url, jumpType } = this;
      if (url && jumpType) {
        if (LinkTypes[jumpType]) {
          wx[LinkTypes[jumpType]]({ url });
        }
      }
    },
  },
});
</script>
<style scoped>
@import './grid-item.css';
</style>
<style scoped>
.t-grid-item__content--left {
  width: 100%;
  box-sizing: border-box;
}
</style>
