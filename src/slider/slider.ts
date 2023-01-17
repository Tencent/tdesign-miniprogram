import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { trimSingleValue, trimValue } from './tool';
import props from './props';
import type { SliderValue } from './type';
import { getRect } from '../common/utils';
import Bus from '../common/bus';

const { prefix } = config;
const name = `${prefix}-slider`;

type dataType = {
  sliderStyles: string;
  classPrefix: string;
  initialLeft: number | null;
  initialRight: number | null;
  activeLeft: number;
  activeRight: number;
  maxRange: number;
  lineLeft: number;
  lineRight: number;
  dotTopValue: number[];
  blockSize: number;
  isScale: boolean;
  scaleArray: any[];
  scaleTextArray: any[];
  _value: SliderValue;
  prefix: string;
};

interface boundingClientRect {
  left: number;
  right: number;
}
@wxComponent()
export default class Slider extends SuperComponent {
  externalClasses = [
    'class',
    `${prefix}-class`,
    `${prefix}-class-bar`,
    `${prefix}-class-bar-active`,
    `${prefix}-class-bar-disabled`,
    `${prefix}-class-cursor`,
  ];

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  // 组件的内部数据
  data: dataType = {
    // 按钮样式列表
    sliderStyles: '',
    classPrefix: name,
    initialLeft: null,
    initialRight: null,
    activeLeft: 0,
    activeRight: 0,
    maxRange: 0,
    lineLeft: 0,
    lineRight: 0,
    dotTopValue: [0, 0],
    _value: 0,
    blockSize: 20,
    isScale: false,
    scaleArray: [],
    scaleTextArray: [],
    prefix,
  };

  observers = {
    value(newValue: SliderValue) {
      this.handlePropsChange(newValue);
    },
    _value(newValue: SliderValue) {
      const { min, max, range } = this.properties;
      const { maxRange } = this.data;

      if (range) {
        const left = (maxRange * (newValue[0] - Number(min))) / (Number(max) - Number(min));
        const right = (maxRange * (Number(max) - newValue[1])) / (Number(max) - Number(min));
        // 因为要计算点相对于线的绝对定位，所以要取整条线的长度而非可滑动的范围
        this.setLineStyle(left, right);
      } else {
        this.setSingleBarWidth(newValue as number);
      }
    },
    marks(val) {
      if (this.data.initialLeft != null) {
        this.handleMask(val);
      } else {
        this.bus.on('initial', () => this.handleMask(val));
      }
    },
  };

  lifetimes = {
    created() {
      this.bus = new Bus();
    },
    attached() {
      const { value } = this.properties;
      if (!value) this.handlePropsChange(0);
      this.getInitialStyle();
    },
  };

  triggerValue(value?: SliderValue) {
    this._trigger('change', {
      value: trimValue(value, this.properties),
    });
  }

  handlePropsChange(newValue: SliderValue) {
    const value = trimValue(newValue, this.properties);

    const setValueAndTrigger = () => {
      this.setData({
        _value: value,
      });
    };

    // 基本样式未初始化，等待初始化后在改变数据。
    if (this.data.maxRange === 0) {
      this.getInitialStyle().then(setValueAndTrigger);
      return;
    }

    setValueAndTrigger();
  }

  handleMask(marks: any) {
    const calcPos = (arr: number[]) => {
      const { theme } = this.properties;
      const { blockSize, maxRange } = this.data;
      const margin = (theme as any) === 'capsule' ? blockSize / 2 : 0;

      return arr.map((item) => ({
        val: item,
        left: Math.round((item / 100) * maxRange) + margin,
      }));
    };
    if (marks?.length && Array.isArray(marks)) {
      this.setData({
        isScale: true,
        scaleArray: calcPos(marks),
        scaleTextArray: [],
      });
    }

    if (Object.prototype.toString.call(marks) === '[object Object]') {
      const scaleArray = Object.keys(marks).map((item) => Number(item));
      const scaleTextArray = scaleArray.map((item) => marks[item]);

      this.setData({
        isScale: scaleArray.length > 0,
        scaleArray: calcPos(scaleArray),
        scaleTextArray,
      });
    }
  }

  setSingleBarWidth(value: number) {
    const { max, min, theme } = this.properties;
    const { maxRange, blockSize } = this.data;
    const halfBlock = (theme as any) === 'capsule' ? Number(blockSize) / 2 : 0;
    const percentage = (Number(value) - Number(min)) / (Number(max) - Number(min));
    const width = percentage * maxRange + halfBlock;

    this.setData({
      lineBarWidth: `${width}px`,
    });
  }

  async getInitialStyle() {
    const line: boundingClientRect = await getRect(this, '#sliderLine');
    const { blockSize } = this.data;
    const { theme } = this.properties;
    const halfBlock = Number(blockSize) / 2;
    let maxRange = line.right - line.left;
    let initialLeft = line.left;
    let initialRight = line.right;

    if ((theme as any) === 'capsule') {
      maxRange = maxRange - Number(blockSize) - 6; // 6 是边框宽度
      initialLeft -= halfBlock;
      initialRight -= halfBlock;
    }

    this.setData({
      maxRange,
      initialLeft,
      initialRight,
    });
    this.bus.emit('initial');
  }

  stepValue(value: number): number {
    const { step, min, max } = this.properties;

    if (Number(step) < 1 || Number(step) > Number(max) - Number(min)) return value;

    const closestStep = trimSingleValue(Math.round(value / Number(step)) * Number(step), Number(min), Number(max));

    return closestStep as number;
  }

  // 点击滑动条的事件
  onSingleLineTap(e: WechatMiniprogram.TouchEvent) {
    const { disabled } = this.properties;
    if (disabled) return;

    const value = this.getSingleChangeValue(e);
    this.triggerValue(value);
  }

  getSingleChangeValue(e: WechatMiniprogram.TouchEvent) {
    const { min, max } = this.properties;
    const { initialLeft, maxRange } = this.data;
    const [touch] = e.changedTouches;
    const { pageX } = touch;
    const currentLeft = pageX - initialLeft;
    let value = 0;

    if (currentLeft <= 0) {
      value = Number(min);
    } else if (currentLeft >= maxRange) {
      value = Number(max);
    } else {
      value = Math.round((currentLeft / maxRange) * (Number(max) - Number(min)) + Number(min));
    }
    return this.stepValue(value);
  }

  /**
   * 将位置转换为值
   *
   * @param {number} posValue 位置数据
   * @param {(0 | 1)} dir 方向： 0-left， 1-right
   * @return  {number}
   * @memberof Slider
   */
  convertPosToValue(posValue: number, dir: 0 | 1): number {
    const { maxRange } = this.data;
    const { max, min } = this.properties;
    return dir === 0
      ? (posValue / maxRange) * (Number(max) - Number(min)) + Number(min)
      : Number(max) - (posValue / maxRange) * (Number(max) - Number(min));
  }

  // 点击范围选择滑动条的事件
  onLineTap(e: WechatMiniprogram.TouchEvent) {
    const { disabled, theme } = this.properties;
    const { initialLeft, initialRight, maxRange, blockSize } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const { pageX } = touch;
    const halfBlock = (theme as any) === 'capsule' ? Number(blockSize) / 2 : 0;

    const currentLeft = pageX - initialLeft;
    if (currentLeft < 0 || currentLeft > maxRange + Number(blockSize)) return;

    Promise.all([getRect(this, '#leftDot'), getRect(this, '#rightDot')]).then(([leftDot, rightDot]) => {
      // 点击处-halfblock 与 leftDot左侧的距离（绝对值）
      const distanceLeft = Math.abs(pageX - leftDot.left - halfBlock);
      // 点击处-halfblock 与 rightDot左侧的距离（绝对值）
      const distanceRight = Math.abs(rightDot.left - pageX + halfBlock);
      // 哪个绝对值小就移动哪个Dot
      const isMoveLeft = distanceLeft < distanceRight;
      if (isMoveLeft) {
        // 当前leftdot中心 + 左侧偏移量 = 目标左侧中心距离
        const left = pageX - initialLeft;
        const leftValue = this.convertPosToValue(left, 0);
        this.triggerValue([this.stepValue(leftValue), this.data._value[1]]);
      } else {
        const right = -(pageX - initialRight);
        const rightValue = this.convertPosToValue(right, 1);

        this.triggerValue([this.data._value[0], this.stepValue(rightValue)]);
      }
    });
  }

  onTouchMoveLeft(e: WechatMiniprogram.TouchEvent) {
    const { disabled } = this.properties;
    const { initialLeft, _value } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const { pageX } = touch;
    const currentLeft = pageX - initialLeft;

    const newData = [...(_value as number[])];
    const leftValue = this.convertPosToValue(currentLeft, 0);

    newData[0] = this.stepValue(leftValue);

    this.triggerValue(newData);
  }

  onTouchMoveRight(e: WechatMiniprogram.TouchEvent) {
    const { disabled } = this.properties;
    const { initialRight, _value } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const { pageX } = touch;

    const currentRight = -(pageX - initialRight);

    const newData = [...(_value as number[])];
    const rightValue = this.convertPosToValue(currentRight, 1);
    newData[1] = this.stepValue(rightValue);

    this.triggerValue(newData);
  }

  setLineStyle(left: number, right: number) {
    const { theme } = this.properties;
    const { blockSize, maxRange } = this.data;
    const halfBlock = (theme as any) === 'capsule' ? Number(blockSize) / 2 : 0;
    const [a, b] = this.data._value as any;
    const cut = (v) => parseInt(v, 10);

    this.setData({
      dotTopValue: [a, b],
    });

    if (left + right <= maxRange) {
      this.setData({
        lineLeft: cut(left + halfBlock),
        lineRight: cut(right + halfBlock),
      });
    } else {
      this.setData({
        lineLeft: cut(maxRange + halfBlock - right),
        lineRight: cut(maxRange - left + halfBlock * 1.5),
      });
    }
  }
}
