import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { Coordinate, ColorPickerChangeTrigger } from './interfaces';
import {
  SATURATION_PANEL_DEFAULT_HEIGHT,
  SATURATION_PANEL_DEFAULT_WIDTH,
  SLIDER_DEFAULT_WIDTH,
  DEFAULT_COLOR,
  ALPHA_MAX,
  HUE_MAX,
  DEFAULT_SYSTEM_SWATCH_COLORS,
} from './constants';
import { getRect } from '../common/utils';
import { Color, getColorObject } from './utils';

const { prefix } = config;
const name = `${prefix}-color-picker`;

const getCoordinate = (e, react, isFixed?: boolean) => {
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

@wxComponent()
export default class ColorPicker extends SuperComponent {
  options = {
    multipleSlots: true,
  };

  properties = props;

  observers = {
    format() {
      this.setCoreStyle();
    },
    swatchColors(value) {
      this.setData({
        innerSwatchList: genSwatchList(value),
      });
    },
    type(value) {
      this.setData({
        isMultiple: value === 'multiple',
      });
    },
    'usePopup, visible'(usePopup: boolean, visible: boolean) {
      if (this.timer) {
        clearTimeout(this.timer);
      }

      if (usePopup && visible) {
        this.timer = setTimeout(() => {
          this.getEleReact();
        }, 350); // popup的transition-duration为300ms，为保证popup已渲染完毕，故使用350ms
      }
    },
  };

  color = new Color(props.defaultValue.value || props.value.value || DEFAULT_COLOR);

  data = {
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
    innerValue: props.defaultValue.value || props.value.value,
    showPrimaryColorPreview: false,
    previewColor: props.defaultValue.value || props.value.value,
    formatList: getFormatList(props.format.value, this.color),
    innerSwatchList: genSwatchList(props.swatchColors.value),
    isMultiple: props.type.value === 'multiple',
    defaultOverlayProps: {},
  };

  lifetimes = {
    ready() {
      this.init();
    },

    detached() {
      clearTimeout(this.timer);
    },
  };

  methods = {
    init() {
      const { value, defaultValue } = this.properties;
      const innerValue = value || defaultValue;
      if (innerValue) {
        this.setData({
          innerValue,
        });
      }
      this.color = new Color(innerValue || DEFAULT_COLOR);
      this.updateColor();
      this.getEleReact();
    },

    getEleReact() {
      Promise.all([getRect(this, `.${name}__saturation`), getRect(this, `.${name}__slider`)]).then(
        ([saturationRect, sliderRect]) => {
          this.setData(
            {
              panelRect: {
                width: saturationRect.width || SATURATION_PANEL_DEFAULT_WIDTH,
                height: saturationRect.height || SATURATION_PANEL_DEFAULT_HEIGHT,
                left: saturationRect.left || 0,
                top: saturationRect.top || 0,
              },
              sliderRect: {
                left: sliderRect.left || 0,
                width: sliderRect.width || SLIDER_DEFAULT_WIDTH,
              },
            },
            () => {
              this.setCoreStyle();
            },
          );
        },
      );
    },

    clickSwatch(e) {
      const swatch = e.currentTarget.dataset.value;
      this.color.update(swatch);
      this.emitColorChange('preset');
      this.setCoreStyle();
    },

    setCoreStyle() {
      this.setData({
        sliderInfo: {
          value: this.color.hue,
        },
        hueSliderStyle: this.getSliderThumbStyle({ value: this.color.hue, maxValue: HUE_MAX }),
        alphaSliderStyle: this.getSliderThumbStyle({ value: this.color.alpha * 100, maxValue: ALPHA_MAX }),
        saturationInfo: {
          saturation: this.color.saturation,
          value: this.color.value,
        },
        saturationThumbStyle: this.getSaturationThumbStyle({
          saturation: this.color.saturation,
          value: this.color.value,
        }),
        previewColor: this.color.rgba,
        formatList: getFormatList(this.properties.format, this.color),
      });
    },

    emitColorChange(trigger) {
      this.setData({
        innerValue: this.formatValue(),
      });
      this.triggerEvent('change', {
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
      const result = this.data.innerValue || this.defaultEmptyColor();
      this.color.update(result);
    },

    getSaturationAndValueByCoordinate(coordinate: Coordinate) {
      const { width, height } = this.data.panelRect;
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
      const { width, height } = this.data.panelRect;
      const top = Math.round((1 - value) * height);
      const left = Math.round(saturation * width);
      return {
        color: this.color.rgb,
        left: `${left}px`,
        top: `${top}px`,
      };
    },

    getSliderThumbStyle({ value, maxValue }) {
      const { width } = this.data.sliderRect;
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
      let changeTrigger: ColorPickerChangeTrigger = 'palette-saturation-brightness';
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

      this.triggerEvent('palette-bar-change', {
        color: getColorObject(this.color),
      });

      this.emitColorChange(changeTrigger);
      this.setCoreStyle();
    },

    formatValue() {
      return this.color.getFormatsColorMap()[this.properties.format] || this.color.css;
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
      const { usePopup, fixed } = this.properties;
      const coordinate = getCoordinate(e, this.data.panelRect, usePopup || fixed);
      const { saturation, value } = this.getSaturationAndValueByCoordinate(coordinate);
      this.onChangeSaturation({ saturation, value });
    },

    handleSliderDrag(e, isAlpha = false) {
      const { width } = this.data.sliderRect;
      const coordinate = getCoordinate(e, this.data.sliderRect);
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
      wx.nextTick(() => {
        this.handleDiffDrag(e);
      });
    },

    close(trigger: string) {
      if (this.properties.autoClose) {
        this.setData({ visible: false });
      }

      this.triggerEvent('close', { trigger });
    },

    onVisibleChange() {
      this.close('overlay');
    },
  };
}
