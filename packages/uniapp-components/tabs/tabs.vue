<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [placement]) + ' ' + tClass"
  >
    <t-sticky
      :t-class="tools.cls(classPrefix + '__sticky', [placement])"
      :disabled="!sticky"
      :z-index="(stickyProps && stickyProps.zIndex) || 1"
      :offset-top="(stickyProps && stickyProps.offsetTop) || 0"
      :container="stickyProps && stickyProps.container"
      @scroll="onTouchScroll"
    >
      <view :class="tools.cls(classPrefix + '__wrapper', [theme])">
        <scroll-view
          :class="tools.cls(classPrefix + '__scroll', [placement, ['split', split]])"
          enhanced
          enable-flex
          :scroll-left="offset"
          :scroll-x="true"
          scroll-anchoring
          scroll-with-animation
          enable-passive
          :show-scrollbar="false"
          type="list"
          @scroll="onScroll"
        >
          <view
            :class="tools.cls(classPrefix + '__nav', [placement, ['evenly', spaceEvenly]])"
            aria-role="tablist"
          >
            <view
              v-for="(item, index) in tabs"
              :key="index"
              :data-index="index"
              :class="
                tools.cls(classPrefix + '__item', [theme, ['evenly', spaceEvenly], placement, ['disabled', item.disabled], ['active', currentIndex === index]]) +
                  ' ' +
                  (currentIndex === index ? tClassActive : '') +
                  ' ' +
                  tClassItem
              "
              aria-role="tab"
              :aria-controls="tabID + '_panel_' + index"
              :aria-selected="currentIndex === index"
              :aria-disabled="item.disabled"
              :aria-label="ariaLabel || (item.badgeProps.dot || item.badgeProps.count ? item.label + tools.getBadgeAriaLabel({ ...item.badgeProps }) : '')"
              @click="onTabTap"
            >
              <view
                :class="tools.cls(classPrefix + '__item-inner', [theme, ['active', currentIndex === index]])"
                :aria-hidden="item.badgeProps.dot || item.badgeProps.count"
              >
                <block
                  v-if="item.icon"
                  name="icon"
                >
                  <t-icon
                    :t-class="classPrefix + '__icon'"
                    :custom-style="getIconCustomStyle(item)"
                    :prefix="item.icon.prefix"
                    :name="item.icon.name"
                    :size="item.icon.size"
                    :color="item.icon.color"
                    :aria-hidden="!!item.icon.ariaHidden"
                    :aria-label="item.icon.ariaLabel"
                    :aria-role="item.icon.ariaRole"
                    @click="item.icon.click || ''"
                  />
                </block>
                <block v-if="item.badgeProps">
                  <t-badge
                    :color="item.badgeProps.color || ''"
                    :content="item.label"
                    :count="item.badgeProps.count || 0"
                    :dot="item.badgeProps.dot || false"
                    :max-count="item.badgeProps.maxCount || 99"
                    :offset="item.badgeProps.offset || []"
                    :shape="item.badgeProps.shape || 'circle'"
                    :show-zero="item.badgeProps.showZero || false"
                    :size="item.badgeProps.size || 'medium'"
                    :t-class="
                      tools.cls(classPrefix + '__badge', [
                        ['disabled', item.disabled],
                        ['active', currentIndex === index]
                      ])
                    "
                    :custom-style="getBadgeCustomStyle(item, index)"
                    :t-class-content="item.badgeProps.tClassContent"
                    :t-class-count="item.badgeProps.tClassCount"
                  />
                </block>
                <block v-else>
                  {{ item.label }}
                </block>
              </view>

              <view
                v-if="theme == 'card' && currentIndex - 1 == index"
                :class="classPrefix + '__item-prefix'"
              />

              <view
                v-if="theme == 'card' && currentIndex + 1 == index"
                :class="classPrefix + '__item-suffix'"
              />
            </view>
            <view
              v-if="theme == 'line' && showBottomLine"
              :class="tools.cls(classPrefix + '__track', [placement]) + ' ' + tClassTrack"
              :style="trackStyle(trackOption)"
            />
          </view>
        </scroll-view>
      </view>
    </t-sticky>
    <slot name="middle" />
    <view
      :class="tools.cls(classPrefix + '__content', [['animated', animation]])"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
    >
      <view
        :class="classPrefix + '__content-inner ' + tClassContent"
        :style="animate({ duration: animation && animation.duration, currentIndex: currentIndex })"
      >
        <slot />
      </view>
    </view>
  </view>
</template>
<script>
import tSticky from '../sticky/sticky';
import tBadge from '../badge/badge';
import tIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import props from './props';
import { prefix } from '../common/config';
import touch from '../mixins/touch';
import { getRect, uniqueFactory, coalesce, nextTick } from '../common/utils';
import { getObserver } from '../common/wechat';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';
import { animate, trackStyle } from './computed';

const name = `${prefix}-tabs`;
const getUniqueID = uniqueFactory('tabs');


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [{
    key: 'value',
    event: 'change',
  }],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-item`,
    `${prefix}-class-active`,
    `${prefix}-class-track`,
    `${prefix}-class-content`,
  ],
  mixins: [touch, ParentMixin(RELATION_MAP.TabPanel)],
  components: {
    tSticky,
    tBadge,
    tIcon,
  },
  props: {
    ...props,
  },
  emits: [
    'change',
    'scroll',
    'error',
    'click',
  ],
  watch: {
    value: {
      handler(e) {
        this.dataValue = e;
      },
      immediate: true,
    },
    dataValue(name) {
      if (name !== this.getCurrentName()) {
        this.setCurrentIndexByName(name);
      }
    },
  },
  created() {
    this.children = this.children || [];
  },

  mounted() {
    nextTick().then(() => {
      this.setTrack();
    });
    getRect(this, `.${name}`).then((rect) => {
      this.containerWidth = rect.width;
    });
    this.tabID = getUniqueID();
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      tabs: [],
      currentLabels: [],
      currentIndex: -1,
      trackOption: {
        lineWidth: 0,
        distance: 0,
        isInit: true,
      },
      offset: 0,
      scrollLeft: 0,
      tabID: '',
      placement: 'top',
      tools,

      dataValue: coalesce(this.value, this.defaultValue),
    };
  },
  methods: {
    trackStyle,
    animate,
    innerAfterLinked(target) {
      // mixin 中已注入
      // this.children.push(target);
      this.initChildId();
      target.dataIndex = this.children.length - 1;
      this.updateTabs();
    },
    innerAfterUnlinked(target) {
      this.children = this.children.filter(item => item.index !== target.dataIndex);
      this.updateTabs(() => this.setTrack());
      this.initChildId();
    },
    initChildId() {
      this.children.forEach((item, index) => {
        item.setId(`${this.tabID}_panel_${index}`);
      });
    },
    onScroll(e = {}) {
      const { scrollLeft } = e.detail || {};
      this.scrollLeft = scrollLeft;
    },
    updateTabs(cb) {
      const { children } = this;
      const tabs = children.map((child) => {
        const { label, badgeProps, disabled, icon, panel, value, lazy } = child;
        return {
          label, badgeProps, disabled, icon, panel, value, lazy,
        };
      });

      tabs.forEach((item) => {
        if (typeof item.icon === 'string') {
          item.icon = { name: item.icon };
        }
      });

      this.tabs = tabs;
      if (typeof cb === 'function') {
        setTimeout(cb, 33);
      }

      this.setCurrentIndexByName(this.dataValue);
    },

    setCurrentIndexByName(name) {
      const { children } = this;
      const index = children.findIndex(child => child.getComputedName() === `${name}`);
      if (index > -1) {
        this.setCurrentIndex(index);
      }
    },

    setCurrentIndex(index) {
      if (index <= -1 || index >= this.children.length) return;
      const Labels = [];
      this.children.forEach((child, idx) => {
        const isActive = index === idx;
        if (isActive !== child.active || !child.initialized) {
          child.render(isActive, this);
        }
        Labels.push(child.label);
      });

      const { currentIndex, currentLabels } = this;
      if (currentIndex === index && currentLabels.join('') === Labels.join('')) return;

      this.currentIndex = index;
      this.currentLabels = Labels;


      setTimeout(() => {
        this.setTrack();
      }, 33);
    },

    getCurrentName() {
      if (this.children) {
        const activeTab = this.children[this.currentIndex];
        if (activeTab) {
          return activeTab.getComputedName();
        }
      }
    },

    calcScrollOffset(containerWidth, targetLeft, targetWidth, offset) {
      return offset + targetLeft - (1 / 2) * containerWidth + targetWidth / 2;
    },

    // 外部无法获取虚拟组件节点位置信息
    getTabHeight() {
      return getRect(this, `.${name}`);
    },

    getTrackSize() {
      const { bottomLineMode } = this;
      const targetMap = {
        fixed: `.${prefix}-tabs__track`,
        auto: `.${prefix}-tabs__item--active .${prefix}-tabs__item-inner`,
        full: `.${prefix}-tabs__item--active`,
      };
      return new Promise((resolve, reject) => {
        if (this.trackWidth) {
          resolve(this.trackWidth);
          return;
        }
        getRect(this, targetMap[bottomLineMode] || targetMap.fixed)
          .then((res) => {
            if (res) {
              resolve(res.width);
            }
          })
          .catch(reject);
      });
    },

    async setTrack() {
      const { children } = this;
      if (!children) return;
      const { currentIndex } = this;
      if (currentIndex <= -1) return;

      try {
        const res = await getRect(this, `.${prefix}-tabs__item`, true);
        const rect = res[currentIndex];
        if (!rect) return;
        let count = 0;
        let distance = 0;
        let totalSize = 0;

        res.forEach((item) => {
          if (count < currentIndex) {
            distance += item.width;
            count += 1;
          }
          totalSize += item.width;
        });

        if (this.containerWidth) {
          const offset = this.calcScrollOffset(this.containerWidth, rect.left, rect.width, this.scrollLeft);
          const maxOffset = totalSize - this.containerWidth;
          this.offset = Math.min(Math.max(offset, 0), maxOffset);
        } else if (!this._hasObserved) {
          this._hasObserved = true;
          getObserver(this, `.${name}`).then(() => this.setTrack());
        }

        const lineWidth = await this.getTrackSize();
        if (this.theme === 'line') {
          distance += (rect.width - lineWidth) / 2;
        }

        const isInit = this.previousIndex === undefined;
        if (isInit
          || this.previousIndex !== currentIndex
          || this.lastDistance !== distance
        ) {
          this.previousIndex = currentIndex;
          this.trackOption = { lineWidth, distance, isInit };
          this.lastDistance = distance;
        }
      } catch (err) {
        this.$emit('error', err);
      }
    },

    onTabTap(event) {
      const { index } = event.currentTarget.dataset;

      this.changeIndex(index);
    },

    onTouchStart(event) {
      if (!this.swipeable) return;

      this.touchStart(event);
    },

    onTouchMove(event) {
      if (!this.swipeable) return;

      this.touchMove(event);
    },

    onTouchEnd() {
      if (!this.swipeable) return;

      const { direction, deltaX, offsetX } = this;
      const minSwipeDistance = 50;
      if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
        const index = this.getAvailableTabIndex(deltaX);
        if (index !== -1) {
          this.changeIndex(index);
        }
      }
    },

    onTouchScroll(event) {
      this._trigger('scroll', event);
    },

    changeIndex(index) {
      const currentTab = this.tabs[index];
      const { value, label } = currentTab;
      if (!currentTab?.disabled && index !== this.currentIndex) {
        this._trigger('change', { value, label });
      }
      this._trigger('click', { value, label });
    },

    getAvailableTabIndex(deltaX) {
      const step = deltaX > 0 ? -1 : 1;
      const { currentIndex, tabs } = this;
      const len = tabs.length;
      for (let i = step; currentIndex + step >= 0 && currentIndex + step < len; i += step) {
        const newIndex = currentIndex + i;
        if (newIndex >= 0 && newIndex < len && tabs[newIndex]) {
          if (!tabs[newIndex].disabled) {
            return newIndex;
          }
        } else {
          return currentIndex;
        }
      }
      return -1;
    },

    getBadgeCustomStyle(item, index) {
      if (item.disabled) {
        return '--td-badge-content-text-color: var(--td-tab-item-disabled-color, var(--td-text-color-disabled, var(--td-font-gray-4, rgba(0, 0, 0, .26))))';
      }
      if (this.currentIndex === index) {
        return '--td-badge-content-text-color: var(--td-tab-item-active-color, var(--td-brand-color, var(--td-primary-color-7, #0052d9)));';
      }
      return '';
    },

    getIconCustomStyle(item) {
      return tools._style([
        {
          fontSize: 'var(--td-tab-icon-size, 18px)',
          marginRight: 'calc(var(--td-spacer, 8px) / 4)',
        },
        item.icon.style || '',
      ]);
    },
  },
});
</script>
<style scoped>
@import './tabs.css';

/* #ifndef MP-WEIXIN */
:deep(t-tab-panel) {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
/* #endif */
</style>
