import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { isSameSecond, parseFormat, parseTimeData, TimeDataUnit } from '../count-down/utils';
import type { Coordinate, ColorPickerChangeTrigger } from './type'
import {
   SATURATION_PANEL_DEFAULT_HEIGHT, 
   SATURATION_PANEL_DEFAULT_WIDTH, 
  SLIDER_DEFAULT_WIDTH,
  DEFAULT_COLOR,
  DEFAULT_LINEAR_GRADIENT,
  ALPHA_MAX,
  HUE_MAX
 } from './constants';
import { getRect } from '../common/utils';
import { Color } from './utils'

const { prefix } = config;
const name = `${prefix}-color-picker`;

const getCoordinate = (e) => {
  const { clientX, clientY} = e.changedTouches[0] || {};
  const { offsetLeft, offsetTop} = e.currentTarget

  return {
    x: clientX - offsetLeft,
    y: clientY - offsetTop,
  }
}

const getFormatList = (format, color) => {
  // const FORMAT_MAP = {
  //   RGB: ['rgb', 'alpha'],
  //   RGBA: ['rgb', 'alpha'],
  //   HSL: ['rgb', 'alpha'],
  // }
  if (format === 'CSS') {
    return [color.css, color.alpha]
  }
  if (format === 'HEX') {
    return [color.hex, color.alpha]
  }
  return [1, 2, 3, 4]
}

@wxComponent()
export default class ColorPicker extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-count`, `${prefix}-class-split`];

  properties = props;

  observers = {
    time() {
      this.reset();
    },
    'innerValue, format'(value) {
      if (value !== this.formatValue()) {
        console.log('watch.value', value, this.formatValue())
        this.updateColor();
      }
    },
  };

  color = new Color(props.defaultValue.value || props.value.value || DEFAULT_COLOR )
  
  data = {
    prefix,
    classPrefix: name,
    timeDataUnit: TimeDataUnit,
    timeData: parseTimeData(0),
    formattedTime: '0',
    panelRect: {
      width: SATURATION_PANEL_DEFAULT_WIDTH,
      height: SATURATION_PANEL_DEFAULT_HEIGHT,
    },
    sliderRect: {
      width: SLIDER_DEFAULT_WIDTH,
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
    showPrimaryColorPreview: true,
    previewColor: props.defaultValue.value || props.value.value,
    formatList: getFormatList(props.format.value,this.color),
  };

  timeoutId: null | number = null;


  lifetimes = {
    ready() {
      this.updateColor();

      Promise.all([
        getRect(this, `.${name}__saturation`), 
        getRect(this, `.${name}__slider`)
      ]).then(([saturationRect, sliderRect]) => {
        // console.log('saturationRect', saturationRect,sliderRect )
        this.setData({
          panelRect: {
            width: saturationRect.width || SATURATION_PANEL_DEFAULT_WIDTH,
            height: saturationRect.height || SATURATION_PANEL_DEFAULT_HEIGHT,
          },
          sliderRect: {
            width: sliderRect.width || SLIDER_DEFAULT_WIDTH,
          }
        }, () => {
         this.setCoreStyle()
        })
      }).catch(err => {
        // console.log('err', err)
      })
    },
    detached() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    },
  };

  methods = {
    setCoreStyle() {
      this.setData({
        sliderInfo: {
          value: this.color.hue,
        },
        hueSliderStyle: this.getSliderThumbStyle({value: this.color.hue, maxValue: HUE_MAX}),
        alphaSliderStyle: this.getSliderThumbStyle({value: this.color.alpha * 100, maxValue: ALPHA_MAX}),
        saturationInfo: {
          saturation: this.color.saturation,
          value: this.color.value
        },
        saturationThumbStyle: this.getSaturationThumbStyle({
          saturation: this.color.saturation,
          value: this.color.value
        }),
        previewColor: this.color.rgba,
      })
    },
    emitColorChange() {
      this.setData({
        innerValue: this.formatValue(),
      })
    },
    defaultEmptyColor(){
      return DEFAULT_COLOR;
    },
    updateColor() {
      const result = this.data.innerValue || this.defaultEmptyColor();
      // console.log('result', result)
      this.color.update(result)
    },
     getSaturationAndValueByCoordinate  (coordinate: Coordinate)  {
      const { width, height } = this.data.panelRect;
      const { x, y } = coordinate;
      const saturation = x / width;
      const value = 1 - y / height;
      return {
        saturation,
        value,
      };
    },
    getSaturationThumbStyle({saturation, value}) {
      const { width, height } = this.data.panelRect;
      const top = Math.round((1 - value) * height);
      const left = Math.round(saturation * width);
      // console.log('saturation',saturation,value, width, height)
      return {
        color: this.color.rgb,
        left: `${left}px`,
        top: `${top}px`,
      };
    },
    getSliderThumbStyle({value, maxValue}) {
      console.log('value', value, this.color)
      const { width } = this.data.sliderRect;
      if (!width) {
        return;
      }
      const left = Math.round(value / maxValue * 100) ;
      return {
        left: `${left}%`,
        color: this.color.rgb, 
      };
    },
    onChangeSaturation({saturation, value}) {
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

      this.emitColorChange(changeTrigger);
     this.setCoreStyle();
      // this.setData({
      //   saturationInfo: {
      //     saturation, 
      //     value
      //   },
      //   saturationThumbStyle: this.getSaturationThumbStyle({
      //     saturation, 
      //     value
      //   })
      // }, () => {
      //   console.log('saturationThumbStyle', this.data.saturationThumbStyle)
      // })
    },
    formatValue() {
      // console.log('color',this.color)
      return this.color.getFormatsColorMap()[props.format.value] || this.color.css;
    },
    onChangeSlider({value, isAlpha}) {
      if (isAlpha) {
        this.color.alpha = value / 100;
      } else {
        this.color.hue = value;
      }
     
     this.emitColorChange();

     this.setCoreStyle();
    },
    handleSaturationDrag(e) {
      const coordinate = getCoordinate(e)
      const { saturation, value } = this.getSaturationAndValueByCoordinate(coordinate);
      // console.log('saturation', saturation)
      // console.log('value', value)
      this.onChangeSaturation({ saturation, value })
    },
    handleSliderDrag(e, isAlpha = false,) {
      // console.log('handleSliderDrag',e)
      const coordinate = getCoordinate(e)
      const { width } = this.data.sliderRect;
      const { x } = coordinate;
      console.log('x', x)
      const maxValue = isAlpha ? ALPHA_MAX : HUE_MAX;

      let value = Math.round((x / width) * maxValue * 100) / 100;
      if (value <0) value = 0;
      if (value > maxValue) value = maxValue;
      console.log('vvvv', value)
      // console.log('value', value, x ,width)
      this.onChangeSlider({value, isAlpha})
    },
    handleDiffDrag(e) {
      const dragType = e.target.dataset.type || e.currentTarget.dataset.type;
      if (dragType ==='saturation') {
        this.handleSaturationDrag(e)
      } else if (dragType === 'hue-slider') {
       this.handleSliderDrag(e) 
      } else if (dragType === 'alpha-slider') {
        this.handleSliderDrag(e, true) 
       }
    },
    onTouchStart(e) {
      // console.log('onTouchStart',e)
      this.handleDiffDrag(e);
    },
    onTouchMove(e) {
      // console.log('onTouchMove',e)
      this.handleDiffDrag(e);

    },
    onTouchEnd(e) {
      // console.log('onTouchEnd',e)
    },
    start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.doCount();
    },

    pause() {
      this.counting = false;
      this.timeoutId && clearTimeout(this.timeoutId);
    },

    reset() {
      this.pause();
      this.remain = this.properties.time;
      this.updateTime(this.remain);

      if (this.properties.autoStart) {
        this.start();
      }
    },

    getTime(): number {
      return Math.max(this.endTime - Date.now(), 0);
    },

    updateTime(remain: number) {
      const { format } = this.properties;
      this.remain = remain;
      const timeData = parseTimeData(remain);
      this.triggerEvent('change', timeData);
      const { timeText } = parseFormat(remain, format as any as string);
      const timeRange = format.split(':');
      this.setData({
        timeRange,
        timeData,
        formattedTime: timeText.replace(/:/g, ' : '),
      });

      if (remain === 0) {
        this.pause();
        this.triggerEvent('finish');
      }
    },

    doCount() {
      this.timeoutId = setTimeout(() => {
        const time = this.getTime();

        if (this.properties.millisecond) {
          this.updateTime(time);
        } else if (!isSameSecond(time, this.remain) || time === 0) {
          this.updateTime(time);
        }

        if (time !== 0) {
          this.doCount();
        }
      }, 33); // 30 帧，因此 1000 / 30 = 33
    },
  };
}
