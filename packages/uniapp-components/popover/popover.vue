<template>
  <view>
    <view
      :id="classPrefix + '-wrapper'"
      :class="classPrefix + '__wrapper'"
    >
      <slot />
    </view>
    <t-overlay
      v-if="realVisible && closeOnClickOutside"
      id="popover-overlay"
      :visible="true"
      :z-index="11000"
      :duration="0"
      background-color="rgba(0,0,0,0)"
      @click="onOverlayTap($event, { tagId: 'popover-overlay' })"
    />
    <view
      v-if="realVisible"
      :id="classPrefix + '-content'"
      :style="contentStyle + ' ' + customStyle"
      :class="classPrefix + ' ' + transitionClass + ' ' + tClass + ' ' + classPrefix + '--placement-' + innerPlacement + ' ' + (fixed ? classPrefix + '--fixed' : '')"
    >
      <view :class="classPrefix + '__content ' + classPrefix + '--' + theme + ' ' + tClassContent + ' ' + (showArrow ? classPrefix + '__content--arrow' : '')">
        <slot name="content" />
        <view v-if="content">
          {{ content }}
        </view>
        <view
          v-if="showArrow"
          :class="classPrefix + '__arrow'"
          :style="arrowStyle"
        />
      </view>
    </view>
  </view>
</template>

<script>
import TOverlay from '../overlay/overlay';
import { getWindowInfo } from '../common/wechat';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { debounce, nextTick, coalesce } from '../common/utils';
import { transitionMixins } from '../mixins/transition';
import pageScrollMixin from '../mixins/page-scroll';

delete props.visible;

const name = `${prefix}-popover`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },

  controlledProps: [
    {
      key: 'visible',
      event: 'visible-change',
    },
  ],

  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-trigger`,
  ],

  mixins: [
    transitionMixins,
    pageScrollMixin(),
  ],

  components: {
    TOverlay,
  },

  props: {
    ...props,
  },

  emits: [
    'visible-change',
    'leaved',
    'update:visible',
  ],

  data() {
    return {
      prefix,
      classPrefix: name,

      dataVisible: coalesce(this.visible, this.defaultVisible),

      innerPlacement: 'top',
      contentStyle: '',
      arrowStyle: '',
    };
  },
  watch: {
    visible(val) {
      if (val === undefined || val === null) return;
      this.updateVisible(val);
    },
    'placement'(v) {
      if (v) {
        nextTick().then(() => {
          this.computePosition();
        });
      }
    },
    realVisible(v) {
      if (v) {
        nextTick().then(() => {
          this.computePosition();
          nextTick().then(() => {
            this.computePosition();
          });
        });
      }
    },
  },
  mounted() {

  },
  methods: {
    onScroll() {
      if (this.realVisible) {
        debounce(() => this.computePosition(), 100);
      }
    },

    updateVisible(visible) {
      if (visible === this.dataVisible) return;
      this.dataVisible = visible;
      nextTick().then(() => {
        this._trigger('visible-change', { visible });
        this.$emit('update:visible', visible);
      });
    },

    onOverlayTap() {
      if (this.closeOnClickOutside) {
        this.updateVisible(false);
      }
    },

    getToward(placement) {
      const horizontal = ['top', 'bottom'];
      const vertical = ['left', 'right'];
      const isHorizontal = horizontal.find(item => placement.includes(item));
      const isVertical = vertical.find(item => placement.includes(item));
      const isBase = [...horizontal, ...vertical].find(item => item === placement);
      const isEnd = placement.includes('end');
      return {
        isHorizontal,
        isVertical,
        isBase,
        isEnd,
      };
    },

    calcArrowStyle(placement, contentDom, popoverDom) {
      const { isHorizontal, isVertical, isBase, isEnd } = this.getToward(placement);

      if (isBase) {
        return '';
      }

      const { width, left } = contentDom;
      const { width: popperWidth, height: popperHeight } = popoverDom;
      const { windowWidth } = getWindowInfo();

      if (isHorizontal) {
        const padding = isEnd ? Math.min(width + left, popperWidth) : Math.min(windowWidth - left, popperWidth);
        if (isEnd) {
          return `left:${padding - 28}px;`;
        }
        return `right:${padding - 28}px;`;
      }
      if (isVertical) {
        const offset = popperHeight - 28;
        if (isEnd) {
          return `top:${offset}px;`;
        }
        return `bottom:${offset}px;top:unset;`;
      }
      return '';
    },

    calcContentPosition(placement, triggerRect, contentRect) {
      let top = 0;
      let left = 0;

      const isTopBase = placement.startsWith('top');
      const isBottomBase = placement.startsWith('bottom');
      const isLeftBase = placement.startsWith('left');
      const isRightBase = placement.startsWith('right');

      if (isTopBase) {
        top = triggerRect.top - contentRect.height;
      } else if (isBottomBase) {
        top = triggerRect.top + triggerRect.height;
      } else if (isLeftBase) {
        left = triggerRect.left - contentRect.width;
      } else if (isRightBase) {
        left = triggerRect.left + triggerRect.width;
      } else {
        top = triggerRect.top - contentRect.height;
      }

      const isStart = placement.includes('start');
      const isEnd = placement.includes('end');

      let align;
      if (isStart) align = 'start';
      else if (isEnd) align = 'end';
      else align = 'center';

      if (isTopBase || isBottomBase) {
        left = this.alignCrossAxis(triggerRect.left, triggerRect.width, contentRect.width, align);
      }

      if (isLeftBase || isRightBase) {
        top = this.alignCrossAxis(triggerRect.top, triggerRect.height, contentRect.height, align);
      }

      return { top, left };
    },

    alignCrossAxis(start, triggerSize, contentSize, align) {
      if (align === 'start') return start;
      if (align === 'end') return start + triggerSize - contentSize;
      return start + triggerSize / 2 - contentSize / 2;
    },

    calcPlacement(isFixed, placement, triggerRect, contentRect) {
      return new Promise((resolve) => {
        const owner = uni.createSelectorQuery().in(this);
        owner.select(`.${name}-wrapper--fixed`).boundingClientRect();
        owner.exec((b) => {
          const [triggerChildRect] = b;
          if (triggerChildRect && isFixed) {
            triggerRect = triggerChildRect;
          }

          const {
            isHorizontal,
            isVertical,
          } = this.getToward(placement);
          const {
            width: contentWidth,
            height: contentHeight,
          } = contentRect;
          const {
            left: triggerLeft,
            top: triggerTop,
            right: triggerRight,
            bottom: triggerBottom,
          } = triggerRect;
          let canPlace = true;
          const {
            windowWidth,
            windowHeight,
          } = getWindowInfo();
          let finalPlacement = placement;
          if (isHorizontal) {
            if (placement.startsWith('top')) {
              canPlace = triggerTop - contentHeight >= 0;
            } else if (placement.startsWith('bottom')) {
              canPlace = triggerBottom + contentHeight <= windowHeight;
            }
          } else if (isVertical) {
            if (placement.startsWith('left')) {
              canPlace = triggerLeft - contentWidth >= 0;
            } else if (placement.startsWith('right')) {
              canPlace = triggerRight + contentWidth <= windowWidth;
            }
          }
          if (!canPlace) {
          // 反向
            if (isHorizontal) {
              finalPlacement = placement.startsWith('top')
                ? placement.replace('top', 'bottom')
                : placement.replace('bottom', 'top');
            } else if (isVertical) {
              finalPlacement = placement.startsWith('left')
                ? placement.replace('left', 'right')
                : placement.replace('right', 'left');
            }
          }
          const basePos = this.calcContentPosition(finalPlacement, triggerRect, contentRect);

          resolve({
            placement: finalPlacement,
            ...basePos,
          });
        });
      });
    },
    async computePosition() {
      const { placement } = this;
      const innerPlacement = placement
        .replace(/-(left|top)$/, '-start')
        .replace(/-(right|bottom)$/, '-end');
      // 此处必须要设置，否则计算的位置会出错
      this.innerPlacement = innerPlacement;

      const query = uni.createSelectorQuery().in(this);

      query.select(`#${name}-wrapper`).boundingClientRect();
      query.select(`#${name}-content`).boundingClientRect();
      query.selectViewport().scrollOffset();
      query.exec(async (res) => {
        const [triggerRect, contentRect, viewportOffset] = res;
        if (!triggerRect || !contentRect) return;
        const isFixed = this.fixed;
        // 最终放置位置
        const { placement: finalPlacement, ...basePos } = await this.calcPlacement(
          isFixed,
          innerPlacement,
          triggerRect,
          contentRect,
        );
        // TODO 优化：滚动时可能导致箭头闪烁
        this.innerPlacement = finalPlacement;

        const {
          scrollTop = 0,
          scrollLeft = 0,
        } = viewportOffset || {};
        const top = isFixed ? basePos.top : basePos.top + scrollTop;
        const left = isFixed ? basePos.left : basePos.left + scrollLeft;
        const style = `top:${Math.max(top, 0)}px;left:${Math.max(left, 0)}px;`;
        const arrowStyle = this.calcArrowStyle(innerPlacement, triggerRect, contentRect);

        this.contentStyle = style;
        this.arrowStyle = arrowStyle;
      });
    },
  },
});


</script>
<style scoped>
@import './popover.css';
</style>
