<template>
  <view :class="classPrefix + '__root'">
    <t-popup
      v-if="usePopup"
      :visible="dataVisible"
      :using-custom-navbar="(popupProps && popupProps.usingCustomNavbar) || false"
      :custom-navbar-height="popupProps && popupProps.customNavbarHeight"
      :show-overlay="(popupProps && popupProps.showOverlay) || true"
      :z-index="(popupProps && popupProps.zIndex) || 11500"
      :overlay-props="(popupProps && popupProps.overlayProps) || defaultOverlayProps"
      placement="bottom"
      @visible-change="onVisibleChange"
    >
      <slot name="header" />

      <!-- 防止转成 px 后，尺寸没铺满 -->
      <!-- 750rpx => 100% -->
      <TemplateVue
        ref="templateVue"
        :class-prefix="classPrefix"
        :custom-style="tools._style(['width: 100%', customStyle])"
        :is-multiple="isMultiple"
        :type="type"
        :slider-info="sliderInfo"
        :saturation-thumb-style="saturationThumbStyle"
        :hue-slider-style="hueSliderStyle"
        :enable-alpha="enableAlpha"
        :alpha-slider-style="alphaSliderStyle"
        :show-primary-color-preview="showPrimaryColorPreview"
        :preview-color="previewColor"
        :format-list="formatList"
        :inner-swatch-list="innerSwatchList"
        :format="format"
        @onTouchStart="onTouchStart"
        @onTouchMove="onTouchMove"
        @onTouchEnd="onTouchEnd"
        @clickSwatch="clickSwatch"
      />
      <slot name="footer" />
    </t-popup>
    <block v-else>
      <TemplateVue
        ref="templateVue"
        :class-prefix="classPrefix"
        :custom-style="tools._style([customStyle])"
        :is-multiple="isMultiple"
        :type="type"
        :slider-info="sliderInfo"
        :saturation-thumb-style="saturationThumbStyle"
        :hue-slider-style="hueSliderStyle"
        :enable-alpha="enableAlpha"
        :alpha-slider-style="alphaSliderStyle"
        :show-primary-color-preview="showPrimaryColorPreview"
        :preview-color="previewColor"
        :format-list="formatList"
        :inner-swatch-list="innerSwatchList"
        :format="format"
        @onTouchStart="onTouchStart"
        @onTouchMove="onTouchMove"
        @onTouchEnd="onTouchEnd"
        @clickSwatch="clickSwatch"
      />
    </block>
  </view>
</template>
<script>
import TPopup from '../popup/popup';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import {
  SATURATION_PANEL_DEFAULT_HEIGHT,
  SATURATION_PANEL_DEFAULT_WIDTH,
  SLIDER_DEFAULT_WIDTH,
  DEFAULT_COLOR,
  ALPHA_MAX,
  HUE_MAX,
  DEFAULT_SYSTEM_SWATCH_COLORS,
} from './constants';
import { debounce, nextTick } from '../common/utils';
import { Color, getColorObject } from './utils';
import TemplateVue from './template.vue';

import tools from '../common/utils.wxs';


const name = `${prefix}-color-picker`;

const getCoordinate = (e, react, isFixed) => {
  const { pageX, pageY, clientY } = e.changedTouches[0] || {};

  const offsetY = isFixed ? react.top : e.currentTarget?.offsetTop;

  return {
    x: Math.min(Math.max(0, pageX - react.left), react.width),
    y: Math.min(Math.max(0, (isFixed ? clientY : pageY) - offsetY), react.height),
  };
};

const getFormatList = (format, color) => {
  const FORMAT_MAP = {
    HSV: Object.values(color.getHsva()),
    HSVA: Object.values(color.getHsva()),

    HSL: Object.values(color.getHsla()),
    HSLA: Object.values(color.getHsla()),
    HSB: Object.values(color.getHsla()),

    RGB: Object.values(color.getRgba()),
    RGBA: Object.values(color.getRgba()),
    CMYK: [...Object.values(color.getCmyk()), 0],

    CSS: [color.css, 0],
    HEX: [color.hex, 0],
  };

  const cur = FORMAT_MAP[format];
  if (cur) {
    return [...cur.slice(0, cur.length - 1), `${Math.round(color.alpha * 100)}%`];
  }
  return FORMAT_MAP.RGB;
};

const genSwatchList = (prop) => {
  if (prop === undefined) {
    return DEFAULT_SYSTEM_SWATCH_COLORS;
  }
  if (!prop || !prop.length) {
    return [];
  }
  return prop;
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TPopup,
    TemplateVue,
  },
  props: {
    ...props,
  },
  emits: [
    'palette-bar-change',
    'close',
    'change',
    'update:visible',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      panelRect: {
        width: SATURATION_PANEL_DEFAULT_WIDTH,
        height: SATURATION_PANEL_DEFAULT_HEIGHT,
      },
      sliderRect: {
        width: SLIDER_DEFAULT_WIDTH,
        left: 0,
      },
      saturationInfo: {
        saturation: 0,
        value: 0,
      },
      saturationThumbStyle: {
        left: 0,
        top: 0,
      },
      sliderInfo: {
        value: 0, // hue
      },
      hueSliderStyle: {
        left: 0,
      },
      alphaSliderStyle: {
        left: 0,
      },
      innerValue: props.defaultValue.default || props.value.default,
      showPrimaryColorPreview: false,
      previewColor: props.defaultValue.default || props.value.default,
      formatList: [],
      innerSwatchList: genSwatchList(props.swatchColors.default),
      isMultiple: props.type.default === 'multiple',
      defaultOverlayProps: {},
      tools,
      color: {},
      dataVisible: this.visible,
    };
  },
  watch: {
    format: {
      handler() {
        this.setCoreStyle();
      },
      deep: true,
    },
    swatchColors: {
      handler(value) {
        this.innerSwatchList = genSwatchList(value);
      },
      immediate: true,
    },
    type: {
      handler(value) {
        this.isMultiple = value === 'multiple';
      },
      immediate: true,
    },
    visible: {
      handler(v) {
        this.dataVisible = v;
      },
      immediate: true,
    },
    usePopup: 'onWatchPopupVisible',
    dataVisible: 'onWatchPopupVisible',

    value(v) {
      if (v) {
        this.init();
      }
    },
  },
  created() {
    this.color = new Color(props.defaultValue.default || props.value.default || DEFAULT_COLOR);
    this.formatList =  getFormatList(props.format.default, this.color);
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 33);
    this.debouncedUpdateEleRect = debounce(e => this.updateEleRect(e), 150);
  },
  beforeUnMount() {
    clearTimeout(this.timer);
  },
  methods: {
    init() {
      const { value, defaultValue } = this;
      const innerValue = value || defaultValue;
      if (innerValue) {
        this.innerValue = innerValue;
      }
      this.color = new Color(innerValue || DEFAULT_COLOR);
      this.updateColor();
      this.getEleReact();
    },

    updateEleRect(e) {
      if (!e) return;

      const { scrollTop } = e.detail;
      const { width, height, left, initTop } = this.panelRect;
      this.panelRect = {
        width,
        height,
        left,
        top: initTop - scrollTop,
        initTop,
      };
    },

    getEleReact() {
      const saturationSelector = `.${name}__saturation`;
      const sliderSelector = `.${name}__slider`;
      // }
      if (!this.$refs.templateVue) return;

      Promise.all([
        this.$refs.templateVue.getRect(saturationSelector),
        this.$refs.templateVue.getRect(sliderSelector),
      ])
        .then(([saturationRect, sliderRect]) => {
          this.panelRect = {
            width: saturationRect.width || SATURATION_PANEL_DEFAULT_WIDTH,
            height: saturationRect.height || SATURATION_PANEL_DEFAULT_HEIGHT,
            left: saturationRect.left || 0,
            top: saturationRect.top || 0,
            initTop: saturationRect.top || 0,
          };
          this.sliderRect = {
            left: sliderRect.left || 0,
            width: sliderRect.width || SLIDER_DEFAULT_WIDTH,
          };

          setTimeout(() => {
            this.setCoreStyle();
          }, 33);
        })
        .catch(() => {
        });
    },

    clickSwatch(e) {
      const swatch = e.currentTarget.dataset.value;
      this.color.update(swatch);
      this.emitColorChange('preset');
      this.setCoreStyle();
    },

    setCoreStyle() {
      this.sliderInfo = {
        value: this.color.hue,
      };
      this.hueSliderStyle = this.getSliderThumbStyle({ value: this.color.hue, maxValue: HUE_MAX });
      this.alphaSliderStyle = this.getSliderThumbStyle({ value: this.color.alpha * 100, maxValue: ALPHA_MAX });
      this.saturationInfo = {
        saturation: this.color.saturation,
        value: this.color.value,
      };
      this.saturationThumbStyle = this.getSaturationThumbStyle({
        saturation: this.color.saturation,
        value: this.color.value,
      });
      this.previewColor = this.color.rgba;
      this.formatList = getFormatList(this.format, this.color);
    },

    emitColorChange(trigger) {
      this.innerValue = this.formatValue();

      this.$emit('change', {
        value: this.formatValue(),
        context: {
          trigger,
          color: getColorObject(this.color),
        },
      });
    },

    defaultEmptyColor() {
      return DEFAULT_COLOR;
    },

    updateColor() {
      const result = this.innerValue || this.defaultEmptyColor();
      this.color.update(result);
    },

    getSaturationAndValueByCoordinate(coordinate) {
      const { width, height } = this.panelRect;
      const { x, y } = coordinate;
      let saturation = x / width;
      let value = 1 - y / height;
      saturation = Math.min(1, Math.max(0, saturation));
      value = Math.min(1, Math.max(0, value));

      return {
        saturation,
        value,
      };
    },

    getSaturationThumbStyle({ saturation, value }) {
      const { width, height } = this.panelRect;
      const top = Math.round((1 - value) * height);
      const left = Math.round(saturation * width);
      return {
        color: this.color.rgb,
        left: `${left}px`,
        top: `${top}px`,
      };
    },

    getSliderThumbStyle({ value, maxValue }) {
      const { width } = this.sliderRect;
      if (!width) {
        return;
      }
      const left = Math.round((value / maxValue) * 100);
      return {
        left: `${left}%`,
        color: this.color.rgb,
      };
    },

    onChangeSaturation({ saturation, value }) {
      const { saturation: sat, value: val } = this.color;
      let changeTrigger = 'palette-saturation-brightness';
      if (value !== val && saturation !== sat) {
        this.color.saturation = saturation;
        this.color.value = value;
        changeTrigger = 'palette-saturation-brightness';
      } else if (saturation !== sat) {
        this.color.saturation = saturation;
        changeTrigger = 'palette-saturation';
      } else if (value !== val) {
        this.color.value = value;
        changeTrigger = 'palette-brightness';
      } else {
        return;
      }

      this.$emit('palette-bar-change', {
        color: getColorObject(this.color),
      });

      this.emitColorChange(changeTrigger);
      this.setCoreStyle();
    },

    formatValue() {
      return this.color.getFormatsColorMap()[this.format] || this.color.css;
    },

    onChangeSlider({ value, isAlpha }) {
      if (isAlpha) {
        this.color.alpha = value / 100;
      } else {
        this.color.hue = value;
      }

      this.emitColorChange(isAlpha ? 'palette-alpha-bar' : 'palette-hue-bar');

      this.setCoreStyle();
    },

    handleSaturationDrag(e) {
      const { usePopup, fixed } = this;
      const coordinate = getCoordinate(e, this.panelRect, usePopup || fixed);
      const { saturation, value } = this.getSaturationAndValueByCoordinate(coordinate);
      this.onChangeSaturation({ saturation, value });
    },

    handleSliderDrag(e, isAlpha = false) {
      const { width } = this.sliderRect;
      const coordinate = getCoordinate(e, this.sliderRect);
      const { x } = coordinate;
      const maxValue = isAlpha ? ALPHA_MAX : HUE_MAX;

      let value = Math.round((x / width) * maxValue * 100) / 100;
      if (value < 0) value = 0;
      if (value > maxValue) value = maxValue;
      this.onChangeSlider({ value, isAlpha });
    },

    handleDiffDrag(e) {
      const dragType = e.target.dataset.type || e.currentTarget.dataset.type;
      switch (dragType) {
        case 'saturation':
          this.handleSaturationDrag(e);
          break;
        case 'hue-slider':
          this.handleSliderDrag(e);
          break;
        case 'alpha-slider':
          this.handleSliderDrag(e, true);
          break;
        default:
          break;
      }
    },

    onTouchStart(e) {
      this.handleDiffDrag(e);
    },

    onTouchMove(e) {
      this.handleDiffDrag(e);
    },

    onTouchEnd(e) {
      nextTick().then(() => {
        this.handleDiffDrag(e);
      });
    },

    close(trigger) {
      if (this.autoClose) {
        this.dataVisible = false;
        this.$emit('update:visible', false);
      }

      this.$emit('close', { trigger });
    },

    onVisibleChange() {
      this.close('overlay');
    },

    onWatchPopupVisible() {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (this.usePopup && this.dataVisible) {
        this.timer = setTimeout(() => {
          this.getEleReact();
        }, 350); // popup 的 transition-duration 为 300ms，为保证 popup 已渲染完毕，故使用 350ms
      }
    },
  },
});

</script>
<style scoped>
@import './color-picker.css';
</style>
