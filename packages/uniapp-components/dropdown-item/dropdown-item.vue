<template>
  <view
    v-if="wrapperVisible"
    :class="classPrefix + ' ' + tClass"
    :style="tools._style([getStyles(top, zIndex), customStyle])"
  >
    <view
      v-if="show"
      :class="classPrefix + '__mask'"
      :style="tools._style(['height:' + maskHeight + 'px', customStyle])"
      @click="handleMaskClick"
      @touchmove.stop.prevent="closeDropdown"
    />
    <t-popup
      :visible="show"
      :z-index="zIndex + 1"
      :duration="duration"
      :show-overlay="showOverlay"
      custom-style="position: absolute"
      :overlay-props="{ style: 'position: absolute' }"
      :t-class="classPrefix + '__popup-host'"
      :t-class-content="classPrefix + '__content ' + tClassContent"
      @leaved="onLeaved"
      @visible-change="handleMaskClick"
    >
      <view :class="classPrefix + '__body'">
        <scroll-view
          v-if="!multiple && options && options.length > 0"
          :class="classPrefix + '__scroll'"
          scroll-y
          :scroll-into-view="'id_' + dataValue"
        >
          <t-radio-group
            :t-class="classPrefix + '__radio ' + classPrefix + '__radio-group ' + tClassColumn"
            :custom-style="radioGroupCustomStyle"
            :value="dataValue"
            @change="handleRadioChange"
          >
            <view
              v-for="(item, index) in options"
              :id="'id_' + item[valueAlias]"
              :key="index"
            >
              <t-radio
                :placement="placement"
                tabindex="0"
                :checked="dataValue === item[valueAlias]"
                icon="line"
                :t-class="classPrefix + '__radio-item radio ' + tClassColumnItem"
                :t-class-label="tClassColumnItemLabel"
                :value="item[valueAlias]"
                :label="item[labelAlias]"
                :disabled="item.disabled"
                @change="e => onRadioChange(e, item[valueAlias])"
              />
            </view>
          </t-radio-group>
        </scroll-view>
        <scroll-view
          v-if="multiple && options && options.length > 0"
          :class="classPrefix + '__scroll'"
          scroll-y
          :scroll-into-view="'id_' + firstCheckedValue"
        >
          <t-checkbox-group
            ref="checkboxGroupRef"
            :t-class="classPrefix + '__checkbox ' + classPrefix + '__checkbox-group ' + tClassColumn"
            :custom-style="checkboxGroupCustomStyle"
            :value="dataValue ? dataValue : []"
            @change="handleRadioChange"
          >
            <view
              v-for="(item, index) in options"
              :id="'id_' + item[valueAlias]"
              :key="index"
            >
              <t-checkbox
                tabindex="0"
                :t-class="classPrefix + '__checkbox-item ' + tClassColumnItem"
                theme="tag"
                :value="item[valueAlias]"
                :label="item[labelAlias]"
                :disabled="item.disabled"
                :checked="dataValue.indexOf(item[valueAlias]) > -1"
                @change="e => onCheckboxChange(e, item[valueAlias])"
              />
            </view>
          </t-checkbox-group>
        </scroll-view>
        <slot />
      </view>
      <view :class="classPrefix + '__footer ' + tClassFooter">
        <slot name="footer" />
        <block v-if="multiple">
          <t-button
            block
            :t-class="footerBtnTClass"
            :class="footerBtnClass"
            theme="light"
            content="重置"
            :disabled="dataValue.length == 0"
            @click="handleReset"
          />
          <t-button
            block
            :t-class="confirmBtnTClass"
            :class="confirmBtnClass"
            theme="primary"
            content="确定"
            :disabled="dataValue.length == 0"
            @click="handleConfirm"
          />
        </block>
      </view>
    </t-popup>
  </view>
</template>
<script>
import tButton from '../button/button';
import tRadio from '../radio/radio';
import tRadioGroup from '../radio-group/radio-group';
import tCheckbox from '../checkbox/checkbox';
import tCheckboxGroup from '../checkbox-group/checkbox-group';
import tPopup from '../popup/popup';

import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce, getRect, getWindowInfo } from '../common/utils';
import props from './props';
import menuProps from '../dropdown-menu/props';
import tools from '../common/utils.wxs';
import { getStyles } from './computed';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';
import { canUseVirtualHost } from '../common/version';


const name = `${prefix}-dropdown-item`;


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
    `${prefix}-class-content`,
    `${prefix}-class-column`,
    `${prefix}-class-column-item`,
    `${prefix}-class-column-item-label`,
    `${prefix}-class-footer`,
  ],
  mixins: [ChildrenMixin(RELATION_MAP.DropdownItem)],
  components: {
    tButton,
    tRadio,
    tRadioGroup,
    tCheckbox,
    tCheckboxGroup,
    tPopup,
  },
  props: {
    ...props,
  },
  emits: ['close', 'closed', 'change', 'reset', 'confirm', 'opened', 'open'],
  data() {
    return {
      prefix,
      classPrefix: name,
      show: false,
      top: 0,
      maskHeight: 0,
      initValue: null,
      hasChanged: false,
      duration: menuProps.duration.default,
      zIndex: menuProps.zIndex.default,
      overlay: menuProps.showOverlay.default,
      labelAlias: 'label',
      valueAlias: 'value',
      computedLabel: '',
      firstCheckedValue: '',

      dataValue: coalesce(this.value, this.defaultValue),

      wrapperVisible: false,
      tools,

      windowTop: 0,
    };
  },
  computed: {
    footerBtnTClass() {
      return canUseVirtualHost() ? this.footerBtnRealClass : '';
    },
    footerBtnClass() {
      return !canUseVirtualHost() ? this.footerBtnRealClass : '';
    },
    footerBtnRealClass() {
      const { classPrefix } = this;
      return `${classPrefix}__footer-btn ${classPrefix}__reset-btn`;
    },

    confirmBtnTClass() {
      return canUseVirtualHost() ? this.confirmBtnRealClass : '';
    },
    confirmBtnClass() {
      return !canUseVirtualHost() ? this.confirmBtnRealClass : '';
    },
    confirmBtnRealClass() {
      const { classPrefix } = this;
      return `${classPrefix}__footer-btn ${classPrefix}__confirm-btn`;
    },

    radioGroupCustomStyle() {
      return tools._style([
        {
          width: '100%',
          overflow: 'scroll',
          boxSizing: 'border-box',

          display: 'grid',
          gridGap: '0px',

          gridTemplateColumns: `repeat(${this.optionsColumns}, 1fr)`,
        },
      ]);
    },
    checkboxGroupCustomStyle() {
      return tools._style([
        {
          width: '100%',
          overflow: 'scroll',
          boxSizing: 'border-box',

          display: 'grid',
          gridGap: '12px',

          gridTemplateColumns: `repeat(${this.optionsColumns}, 1fr)`,
          padding: '16px',
        },
      ]);
    },
  },
  watch: {
    keys: {
      handler(obj) {
        this.labelAlias = obj?.label || 'label';
        this.valueAlias = obj?.value || 'value';
      },
      immediate: true,
    },
    value: {
      handler(value) {
        this.dataValue = value;
      },
      immediate: true,
    },
    dataValue: {
      handler(v) {
        const { options, labelAlias, valueAlias } = this;

        if (this.multiple) {
          if (v && !Array.isArray(v)) throw TypeError('应传入数组类型的 value');
        }

        const target = options.find(item => item[valueAlias] === v);

        if (target) {
          this.computedLabel = target[labelAlias];
        }
      },
      immediate: true,
    },
    label: 'getParentAllItems',
    computedLabel: 'getParentAllItems',
    disabled: 'getParentAllItems',
    show: {
      handler(visible) {
        if (visible) {
          this.getParentBottom(() => {
            this.wrapperVisible = true;
          });
        }
      },
      immediate: true,
    },
  },
  mounted() {
    const {  windowTop } = getWindowInfo();
    this.windowTop = windowTop || 0;
  },
  methods: {
    getStyles,
    innerAfterLinked(target) {
      const { zIndex, duration, showOverlay } = target;

      this.zIndex = zIndex;
      this.duration = duration;
      this.showOverlay = showOverlay;
    },
    getParentAllItems() {
      this[RELATION_MAP.DropdownItem]?.getAllItems();
    },
    closeDropdown() {
      this[RELATION_MAP.DropdownItem].activeIdx = -1;
      this.show = false;
      this.$emit('close');
    },

    getParentBottom(cb) {
      getRect(this[RELATION_MAP.DropdownItem], `#${prefix}-bar`).then((rect) => {
        this.top = rect.bottom + (this.windowTop || 0);
        this.maskHeight = rect.top;

        setTimeout(() => {
          cb();
        }, 20);
      });
    },

    handleTreeClick(e) {
      const { level, value: itemValue } = e.currentTarget.dataset;
      const { dataValue } = this;

      dataValue[level] = itemValue;
      this._trigger('change', { value: dataValue });
    },

    onRadioChange(e, curValue) {
      this.handleRadioChange({ value: curValue });
    },
    onCheckboxChange(e) {
      const { checkAll, dataIndeterminate } = this.$refs.checkboxGroupRef;
      const { context: { value, label }, checked } = e;
      this.$refs.checkboxGroupRef.updateValue({
        value,
        checkAll,
        indeterminate: dataIndeterminate,
        checked,
        item: { label, value, checked },
        validChildren: false,
      });
    },

    handleRadioChange(e) {
      const { value } = e;

      this._trigger('change', { value });

      if (!this.multiple) {
        this.closeDropdown();
      } else {
        const firstChecked = this.options.find(item => value.includes(item.value));
        if (firstChecked) {
          this.firstCheckedValue = firstChecked.value;
        }
      }
    },

    handleMaskClick() {
      if (this[RELATION_MAP.DropdownItem]?.closeOnClickOverlay) {
        this.closeDropdown();
      }
    },

    handleReset() {
      this._trigger('change', { value: [] });
      this._trigger('reset');
    },

    handleConfirm() {
      this._trigger('confirm', { value: this.dataValue });
      this.closeDropdown();
      // 在关闭 popup 后才自动滚动到首个选项
      // this.firstCheckedValue = this.firstCheckedValue;
    },

    onLeaved() {
      this.wrapperVisible = false;
    },
  },
});

</script>
<style scoped>
@import './dropdown-item.css';
</style>
