<template>
  <view>
    <t-popup
      v-if="usePopup"
      :visible="dataVisible"
      placement="bottom"
      :close-on-overlay-click="autoClose"
      :show-overlay="isShowOverlay(popupProps && popupProps.showOverlay, true)"
      :using-custom-navbar="usingCustomNavbar || (popupProps && popupProps.usingCustomNavbar)"
      :custom-navbar-height="coalesce(customNavbarHeight, popupProps && popupProps.usingCustomNavbar)"
      :z-index="(popupProps && popupProps.zIndex) || defaultPopUpzIndex"
      :overlay-props="(popupProps && popupProps.overlayProps) || defaultPopUpProps"
      @visible-change="onPopupChange"
    >
      <template #content>
        <view
          :style="tools._style([customStyle])"
          :class="classPrefix + ' ' + tClass"
        >
          <view
            v-if="header"
            :class="classPrefix + '__toolbar'"
          >
            <view
              v-if="cancelBtn"
              :class="classPrefix + '__cancel ' + tClassCancel"
              @click="onCancel"
            >
              {{ cancelBtn }}
            </view>
            <view :class="classPrefix + '__title ' + tClassTitle">
              {{ title }}
            </view>
            <view
              v-if="confirmBtn"
              :class="classPrefix + '__confirm ' + tClassConfirm"
              @click="onConfirm"
            >
              {{ confirmBtn }}
            </view>
          </view>
          <slot name="header" />
          <slot name="content" />
          <view
            :class="tools.cls(classPrefix + '__main', [])"
            disable-scroll
          >
            <slot />
            <view :class="classPrefix + '__mask ' + classPrefix + '__mask--top'" />
            <view :class="classPrefix + '__mask ' + classPrefix + '__mask--bottom'" />
            <view
              :class="classPrefix + '__indicator'"
              :style="'height: ' + itemHeight + 'px; top: ' + indicatorTop + 'px'"
            />
          </view>
          <slot name="footer" />
        </view>
      </template>
    </t-popup>

    <block v-else>
      <view
        :style="tools._style([customStyle])"
        :class="classPrefix + ' ' + tClass"
      >
        <view
          v-if="header"
          :class="classPrefix + '__toolbar'"
        >
          <view
            v-if="cancelBtn"
            :class="classPrefix + '__cancel ' + tClassCancel"
            @click="onCancel"
          >
            {{ cancelBtn }}
          </view>
          <view :class="classPrefix + '__title ' + tClassTitle">
            {{ title }}
          </view>
          <view
            v-if="confirmBtn"
            :class="classPrefix + '__confirm ' + tClassConfirm"
            @click="onConfirm"
          >
            {{ confirmBtn }}
          </view>
        </view>
        <slot name="header" />
        <slot name="content" />
        <view
          :class="tools.cls(classPrefix + '__main', [])"
          disable-scroll
        >
          <slot />
          <view :class="classPrefix + '__mask ' + classPrefix + '__mask--top'" />
          <view :class="classPrefix + '__mask ' + classPrefix + '__mask--bottom'" />
          <view
            :class="classPrefix + '__indicator'"
            :style="'height: ' + itemHeight + 'px; top: ' + indicatorTop + 'px'"
          />
        </view>
        <slot name="footer" />
      </view>
    </block>
  </view>
</template>
<script>
import TPopup from '../popup/popup';
import { uniComponent } from '../common/src/index';
import { coalesce } from '../common/utils';
import { prefix } from '../common/config';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';

const name = `${prefix}-picker`;

const DEFAULT_KEYS = { value: 'value', label: 'label', icon: 'icon' };

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-confirm`,
    `${prefix}-class-cancel`,
    `${prefix}-class-title`,
  ],
  components: {
    TPopup,
  },
  mixins: [
    ParentMixin(RELATION_MAP.PickerItem),
    useCustomNavbar,
  ],
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
      defaultPopUpProps: {},
      defaultPopUpzIndex: 11500,
      indicatorTop: 72, // 默认indicator位置，会动态计算

      tools,

      dataValue: coalesce(this.value, this.defaultValue),
      dataVisible: this.visible,
    };
  },
  watch: {
    value: {
      handler(value) {
        this.dataValue = value;
      },
      immediate: true,
    },
    visible: {
      handler(v) {
        this.dataVisible = v;
      },
      immediate: true,
    },
    dataVisible: {
      handler() {
        this.onWatchVisible();
        setTimeout(() => {
          this.onWatchVisible();
        });
      },
      immediate: true,
    },
    dataValue: {
      handler() {
        this.onWatchVisible();
      },
      immediate: true,
    },
    itemHeight: {
      handler() {
        this.updateIndicatorPosition();
      },
      immediate: true,
    },
    visibleItemCount: {
      handler() {
        this.updateIndicatorPosition();
      },
      immediate: true,
    },
  },
  mounted() {
    this.children?.map((column, index) => (column.columnIndex = index));
    this.updateIndicatorPosition();
    setTimeout(() => {
      this.updateChildren();
    });
  },
  methods: {
    coalesce,

    innerAfterLinked() {
      this.updateChildren();
    },

    updateChildren() {
      const { pickItemHeight } = this;
      const { value, defaultValue, keys, visibleItemCount, itemHeight } = this;

      this.children?.forEach((child, index) => {
        child.value = coalesce(value?.[index], defaultValue?.[index], '');
        child.columnIndex = index;
        child.pickItemHeight = pickItemHeight;
        child.itemHeight = itemHeight;
        child.visibleItemCount = visibleItemCount;
        child.keys = { ...DEFAULT_KEYS, ...(keys || {}) };

        child.update();
      });
    },

    getSelectedValue() {
      const value = this.children?.map(item => item._selectedValue);
      const label = this.children?.map(item => item._selectedLabel);
      return [value, label];
    },

    getColumnIndexes() {
      const columns = this.children?.map((pickerColumn, columnIndex) => ({
        column: columnIndex,
        index: pickerColumn._selectedIndex,
      }));
      return columns;
    },

    onConfirm() {
      const [value, label] = this.getSelectedValue();
      const columns = this.getColumnIndexes();

      this.close('confirm-btn');
      this.$emit('confirm', { value, label, columns });

      if (JSON.stringify(this.dataValue) === JSON.stringify(value)) return;
      this.$emit('change', { value, label, columns });
    },

    triggerColumnChange({ column, index }) {
      const [value, label] = this.getSelectedValue();
      this.$emit('pick', { value, label, column, index });
    },

    onCancel() {
      this.close('cancel-btn');
      this.$emit('cancel');
    },

    onPopupChange(e) {
      const { visible } = e;

      this.close('overlay');
      this.$emit('visible-change', { visible });
      this.$emit('update:visible', visible);
    },

    close(trigger) {
      if (this.autoClose) {
        this.dataVisible = false;
        this.$emit('update:visible', false);
      }
      this.$emit('close', { trigger });
    },

    updateIndicatorPosition() {
      const { itemHeight, visibleItemCount } = this;
      const indicatorTop = ((visibleItemCount - 1) / 2) * itemHeight;
      this.indicatorTop = indicatorTop;
    },

    onWatchVisible() {
      const {
        usePopup,
        dataVisible,
      } = this;
      if (!usePopup || dataVisible) {
        this.updateChildren();
        this.updateIndicatorPosition();
      }
    },

    isShowOverlay(value, defaultValue) {
      return tools.isBoolean(value) ? value : defaultValue;
    },
  },
});
</script>
<style scoped>
@import './picker.css';

/* #ifndef MP-WEIXIN */
/* 适配 qq 小程序等 */
:deep(t-picker-item) {
  z-index: 1;
  flex: 1;
}
/* #endif */
</style>
