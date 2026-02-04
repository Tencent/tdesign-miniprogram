<template>
  <view
    :id="classPrefix"
    :style="tools._style([rootCustomStyle])"
    :class="tools.cls(classPrefix, [dataAlign, dataTheme, ['no-description', !description]]) + ' ' + tClass"
  >
    <t-popup
      :visible="dataVisible"
      placement="bottom"
      :using-custom-navbar="dataUsingCustomNavbar"
      :custom-navbar-height="customNavbarHeight"
      :show-overlay="dataShowOverlay"
      :z-index="(dataPopupProps && dataPopupProps.zIndex) || defaultPopUpzIndex"
      :overlay-props="(dataPopupProps && dataPopupProps.overlayProps) || defaultPopUpProps"
      @visible-change="onPopupVisibleChange"
    >
      <view
        :class="classPrefix + '__content ' + tClassContent"
        tabindex="0"
      >
        <view
          v-if="dataDescription"
          tabindex="0"
          :class="classPrefix + '__description'"
        >
          {{ dataDescription }}
        </view>

        <block v-if="gridThemeItems.length">
          <block v-if="gridThemeItems.length === 1">
            <t-grid
              align="center"
              :t-class="classPrefix + '__grid'"
              :column="dataCount / 2"
              :class="classPrefix + '__single-wrap'"
            >
              <t-grid-item
                v-for="(item, index) in gridThemeItems[0]"
                :key="index"
                :t-class="classPrefix + '__grid-item ' + classPrefix + '__square'"
                :data-index="index"
                :icon="{ color: item.color, ...getIconData(item.icon) }"
                :text="item.label || ''"
                :description="item.description || ''"
                :image="item.image || ''"
                :style="'--td-grid-item-text-color: ' + item.color"
                @click="onSelect($event, { index })"
              />
            </t-grid>
          </block>

          <block v-else-if="gridThemeItems.length > 1">
            <view :class="classPrefix + '__swiper-wrap'">
              <swiper
                :style="heightStyle"
                :autoplay="false"
                :current="currentSwiperIndex"
                @change="onSwiperChange"
              >
                <swiper-item
                  v-for="(item, index) in gridThemeItems"
                  :key="index"
                >
                  <t-grid
                    align="center"
                    :t-class="classPrefix + '__grid ' + classPrefix + '__grid--swiper'"
                    :column="dataCount / 2"
                    :custom-style="gridStyle"
                  >
                    <t-grid-item
                      v-for="(item, index1) in item"
                      :key="index1"
                      :t-class="classPrefix + '__grid-item'"
                      :class="classPrefix + '__square'"
                      :data-index="index"
                      :icon="{ color: item.color, ...getIconData(item.icon) }"
                      :text="item.label || ''"
                      :description="item.description || ''"
                      :image="item.image || ''"
                      :style="'--td-grid-item-text-color: ' + item.color"
                      @click="onSelect($event, { index })"
                    />
                  </t-grid>
                </swiper-item>
              </swiper>
              <view :class="classPrefix + '__nav'">
                <view :class="classPrefix + '__dots'">
                  <view
                    v-for="(item, index) in gridThemeItems.length"
                    :key="index"
                    :class="classPrefix + '__dots-item ' + (index === currentSwiperIndex ? prefix + '-is-active' : '')"
                  />
                </view>
              </view>
            </view>
          </block>
        </block>

        <view
          v-else-if="dataItems && dataItems.length"
          :class="classPrefix + '__list'"
        >
          <block
            v-for="(item, index) in dataItems"
            :key="index"
          >
            <view
              :data-index="index"
              :style="item.color ? 'color: ' + item.color : ''"
              :class="tools.cls(classPrefix + '__list-item', [['disabled', item.disabled]])"
              :aria-role="ariaRole || 'button'"
              :aria-label="item.label || item"
              tabindex="0"
              @click="() => onSelect(item, { index })"
            >
              <view :class="classPrefix + '__list-item-content'">
                <t-icon
                  v-if="getIconData(item.icon)"
                  :prefix="getIconData(item.icon).prefix"
                  :name="getIconData(item.icon).name"
                  :size="getIconData(item.icon).size"
                  :color="getIconData(item.icon).color"
                  :aria-hidden="getIconData(item.icon).ariaHidden"
                  :aria-label="getIconData(item.icon).ariaLabel"
                  :aria-role="getIconData(item.icon).ariaRole"
                  :t-class="classPrefix + '__list-item-icon'"
                  :custom-style="iconCustomStyle"
                />
                <view :class="classPrefix + '__list-item-text'">
                  {{ item.label || item }}
                </view>
                <t-icon
                  v-if="getIconData(item.suffixIcon)"
                  :prefix="getIconData(item.suffixIcon).prefix"
                  :name="getIconData(item.suffixIcon).name"
                  :size="getIconData(item.suffixIcon).size"
                  :color="getIconData(item.suffixIcon).color"
                  :aria-hidden="getIconData(item.suffixIcon).ariaHidden"
                  :aria-label="getIconData(item.suffixIcon).ariaLabel"
                  :aria-role="getIconData(item.suffixIcon).ariaRole"
                  :t-class="classPrefix + '__list-item-icon ' + classPrefix + '__list-item-icon--suffix'"
                  style="margin-left: auto;"
                  :custom-style="suffixIconCustomStyle"
                />
              </view>
              <view
                v-if="item.description"
                :class="classPrefix + '__list-item-desc'"
              >
                {{ item.description }}
              </view>
            </view>
          </block>
        </view>
      </view>
      <slot />
      <view
        v-if="dataShowCancel"
        :class="classPrefix + '__footer'"
      >
        <view :class="classPrefix + '__gap-' + dataTheme" />
        <view
          :class="classPrefix + '__cancel ' + tClassCancel"
          :hover-class="classPrefix + '__cancel--hover'"
          hover-stay-time="70"
          aria-role="button"
          @click="onCancel"
        >
          {{ dataCancelText || '取消' }}
        </view>
      </view>
    </t-popup>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import TPopup from '../popup/popup';
import TGrid from '../grid/grid';
import TGridItem from '../grid-item/grid-item';
import { chunk } from '../common/utils';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { actionSheetTheme } from './show';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';
import tools from '../common/utils.wxs';
import { getFunctionalMixin } from '../common/functional/mixin';
import { getIconData } from './computed';

const name = `${prefix}-action-sheet`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [{
    key: 'visible',
    event: 'visible-change',
  }],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-cancel`,
  ],
  mixins: [getFunctionalMixin(props), useCustomNavbar],
  components: {
    TIcon,
    TPopup,
    TGrid,
    TGridItem,
  },
  props: {
    ...props,
  },
  emits: [
    'visible-change',
    'update:visible',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      gridThemeItems: [],
      currentSwiperIndex: 0,
      defaultPopUpProps: {},
      defaultPopUpzIndex: 11500,
      tools,

      heightStyle: 'height: 456rpx;',
    };
  },
  computed: {
    rootCustomStyle() {
      return tools._style([
        this.customStyle,
        this.dataTheme === 'grid' ? 'padding-bottom: 16rpx' : '',
      ]);
    },
    iconCustomStyle() {
      return 'margin-right: 8px;';
    },
    suffixIconCustomStyle() {
      return 'margin-right: 8px;margin-left: auto;';
    },
    gridStyle() {
      return `${this.heightStyle}padding-bottom: 48rpx;`;
    },
  },
  watch: {
    dataVisible: {
      handler(e) {
        if (e) {
          this.init();
        }
      },
      immediate: true,
    },
    dataItems: {
      handler() {
        if (this.dataVisible) {
          this.init();
        }
      },
      immediate: true,
    },
  },
  methods: {
    init() {
      this.memoInitialData();
      this.splitGridThemeActions();
    },

    getIconData,

    memoInitialData() {
      this.initialData = {
      };
    },

    splitGridThemeActions() {
      if (this.dataTheme !== actionSheetTheme.Grid) return;
      this.gridThemeItems = chunk(this.dataItems, this.dataCount);
    },

    /** 指令调用显示 */
    show(options) {
      const defaultOptions = [
        'align',
        'cancelText',
        'count',
        'description',
        'items',
        'popupProps',
        'showCancel',
        'showOverlay',
        'theme',
        'usingCustomNavbar',
      ].reduce((acc, key) => ({
        ...acc,
        [key]: props[key].default,
      }));

      this.setData({
        ...defaultOptions,
        ...options,
        visible: true,
      });
      this.splitGridThemeActions();
      this.autoClose = true;
      this._trigger('visible-change', { visible: true });
    },

    /** 指令调用隐藏 */
    close() {
      this.$emit('close', { trigger: 'command' });
      this._trigger('visible-change', { visible: false });
    },

    /** 默认点击遮罩关闭 */
    onPopupVisibleChange(detail) {
      if (!detail.visible) {
        this.$emit('close', { trigger: 'overlay' });
        this._trigger('visible-change', { visible: false });
      }
      if (this.autoClose) {
        this.dataVisible = false;
        this.autoClose = false;
      }
    },

    onSwiperChange(e) {
      const { current } = e.detail;
      this.currentSwiperIndex = current;
    },

    onSelect(event, { index }) {
      const { currentSwiperIndex, dataItems, gridThemeItems, dataCount, dataTheme } = this;
      const isSwiperMode = dataTheme === actionSheetTheme.Grid;
      const item = isSwiperMode ? gridThemeItems[currentSwiperIndex][index] : dataItems[index];
      const realIndex = isSwiperMode ? index + currentSwiperIndex * dataCount : index;

      if (item) {
        this.$emit('selected', { selected: item, index: realIndex });

        if (!item.disabled) {
          this.$emit('close', { trigger: 'select' });
          this._trigger('visible-change', { visible: false });
        }
      }
    },

    onCancel() {
      this.$emit('cancel');
      if (this.autoClose) {
        this.dataVisible = false;
        this.autoClose = false;
      }
    },
  },
});
</script>

<style scoped>
@import './action-sheet.css';
</style>
