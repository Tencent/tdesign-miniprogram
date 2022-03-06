import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { trimSingleValue, trimValue } from './tool';
import props from './props';

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
  _value: number | number[];
  prefix: string;
};
@wxComponent()
export default class Slider extends SuperComponent {
  externalClasses = [
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
    'value, min, max'(this: Slider, newValue: number | number[]) {
      this.handlePropsChange(newValue);
    },
    _value(this: Slider, newValue: number | number[]) {
      const { min, max, range } = this.properties;
      const { maxRange, blockSize } = this.data;
      const fullLineWidth = maxRange + Number(blockSize);

      if (range) {
        const left = (fullLineWidth * (newValue[0] - Number(min))) / (Number(max) - Number(min));
        const right = (fullLineWidth * (Number(max) - newValue[1])) / (Number(max) - Number(min));
        // 因为要计算点相对于线的绝对定位，所以要取整条线的长度而非可滑动的范围
        this.setDotStyle(left, right);
      } else {
        const left =
          (fullLineWidth * (Number(newValue) - Number(min))) / (Number(max) - Number(min));
        this.setDotStyle(left, null);
        this.getSingleBarWidth(newValue as number);
      }
    },
  };

  attached() {
    const { marks, value } = this.properties;
    if (!value) this.handlePropsChange(0);
    this.handleMask(marks);
    this.getInitialStyle();
  }

  /**
   * 通知父组件，触发change事件
   * touchMove过程中，_value变化，但不trigger，其他改变_value的场景需要调用该函数
   * @param {number | number[]} value
   * @memberof Slider
   */
  triggerValue(value?: number | number[]) {
    this._trigger('change', {
      value: trimValue(value, this.properties),
    });
  }

  /**
   * 监控props传参，计算组件value值
   * @param newValue
   */
  handlePropsChange(newValue: number | number[]) {
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
    if (marks?.length && Array.isArray(marks)) {
      this.setData({
        isScale: true,
        scaleArray: marks,
      });
    }

    if (Object.prototype.toString.call(marks) === '[object Object]') {
      const scaleArray = Object.keys(marks).map((item) => Number(item));
      const scaleTextArray = scaleArray.map((item) => marks[item]);
      if (scaleArray.length) {
        this.setData({
          isScale: true,
          scaleArray,
          scaleTextArray,
        });
      }
    }
  }

  getSingleBarWidth(value: number) {
    const { max, min } = this.properties;
    const width = `${((Number(value) - Number(min)) * 100) / (Number(max) - Number(min))}%`;
    this.setData({
      lineBarWidth: width,
    });
  }

  getSelectorQuery(id: string): Promise<{ left: number; right: number }> {
    return new Promise((resolve, reject) => {
      this.createSelectorQuery()
        .select(`#${id}`)
        .boundingClientRect((rect) => {
          if (rect) {
            resolve(rect);
          } else {
            reject(rect);
          }
        })
        .exec();
    });
  }

  async getInitialStyle() {
    const line: { right: number; left: number } = await this.getSelectorQuery('sliderLine');
    const { blockSize } = this.data;
    const halfBlock: number = Number(blockSize) / 2;
    this.setData({
      maxRange: line.right - line.left - Number(blockSize),
      initialLeft: line.left - halfBlock,
      initialRight: line.right + halfBlock,
    });
  }

  setDotStyle(left: number, right: number) {
    const { range } = this.properties;
    const { blockSize } = this.data;
    const halfBlock = Number(blockSize) / 2;
    if (left !== null) {
      this.setData({
        activeLeft: left - halfBlock,
      });
    }

    if (right !== null) {
      this.setData({
        activeRight: right - halfBlock,
      });
    }

    if (range) {
      this.setLineStyle();

      const [a, b] = this.data._value as any;

      this.setData({
        dotTopValue: [a, b],
      });
    }
  }

  stepValue(value: number): number {
    const { step, min, max } = this.properties;

    if (Number(step) < 1 || Number(step) > Number(max) - Number(min)) return value;

    const closestStep = trimSingleValue(
      Math.round(value / Number(step)) * Number(step),
      Number(min),
      Number(max),
    );

    return closestStep as number;
  }

  // 点击滑动条的事件
  onSingleLineTap(e: any) {
    const value = this.getSingleChangeValue(e);
    this.triggerValue(value);
  }

  getSingleChangeValue(e: any) {
    const { disabled, min, max } = this.properties;
    const { initialLeft, maxRange, blockSize } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const { pageX } = touch;
    const halfBlock = Number(blockSize) / 2;

    const currentLeft = pageX - initialLeft - halfBlock;
    let value = 0;

    if (currentLeft <= 0) {
      value = Number(min);
    } else if (currentLeft >= maxRange + Number(blockSize)) {
      value = Number(max);
    } else {
      value = Math.round(
        (currentLeft / (maxRange + Number(blockSize))) * (Number(max) - Number(min)) + Number(min),
      );
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
    const { maxRange, blockSize } = this.data;
    const { max, min } = this.properties;
    const fullLineWidth = maxRange + blockSize;
    return dir === 0
      ? (posValue / fullLineWidth) * (Number(max) - Number(min)) + Number(min)
      : Number(max) - (posValue / fullLineWidth) * (Number(max) - Number(min));
  }

  // 点击范围选择滑动条的事件
  onLineTap(e: any) {
    const { disabled } = this.properties;
    const { initialLeft, initialRight, maxRange, blockSize } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const { pageX } = touch;
    const halfBlock = Number(blockSize) / 2;

    const currentLeft = pageX - initialLeft - halfBlock;
    if (currentLeft < 0 || currentLeft > maxRange + Number(blockSize)) return;

    this.getSelectorQuery('leftDot').then((leftDot: { left: number; right: number }) => {
      this.getSelectorQuery('rightDot').then((rightDot: { left: number; right: number }) => {
        // 点击处-halfblock 与 leftDot左侧的距离（绝对值）
        const distanceLeft = Math.abs(pageX - leftDot.left - halfBlock);
        // 点击处-halfblock 与 rightDot左侧的距离（绝对值）
        const distanceRight = Math.abs(rightDot.left - pageX + halfBlock);
        // 哪个绝对值小就移动哪个Dot
        const isMoveLeft = distanceLeft < distanceRight;
        if (isMoveLeft) {
          // 当前leftdot中心 + 左侧偏移量 = 目标左侧中心距离
          const left = pageX - initialLeft - halfBlock;
          const leftValue = this.convertPosToValue(left, 0);
          this.triggerValue([this.stepValue(leftValue), this.data._value[1]]);
        } else {
          const right = -(pageX - initialRight) - halfBlock;
          const rightValue = this.convertPosToValue(right, 1);
          const newValue = trimValue(
            [this.data._value[0], this.stepValue(rightValue)],
            this.properties,
          );

          this.triggerValue(newValue);
        }
      });
    });
  }

  onTouchMoveLeft(e: any) {
    const { disabled } = this.properties;
    const { initialLeft, blockSize, _value } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const { pageX } = touch;

    const halfBlock = Number(blockSize) / 2;
    const currentLeft = pageX - initialLeft - halfBlock;

    const newData = [...(_value as number[])];
    const leftValue = this.convertPosToValue(currentLeft, 0);

    newData[0] = this.stepValue(leftValue);

    this.triggerValue(newData);
  }

  onTouchMoveRight(e: any) {
    const { disabled } = this.properties;
    const { initialRight, blockSize, _value } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const { pageX } = touch;

    const halfBlock = Number(blockSize) / 2;
    const currentRight = -(pageX - initialRight) - halfBlock;

    const newData = [...(_value as number[])];
    const rightValue = this.convertPosToValue(currentRight, 1);
    newData[1] = this.stepValue(rightValue);

    this.triggerValue(newData);
  }

  setLineStyle() {
    const { activeLeft, activeRight, maxRange, blockSize } = this.data;
    const halfBlock = Number(blockSize) / 2;
    if (activeLeft + activeRight <= maxRange) {
      this.setData({
        lineLeft: activeLeft + halfBlock,
        lineRight: activeRight + halfBlock,
      });
    } else {
      this.setData({
        lineLeft: maxRange + halfBlock - activeRight,
        lineRight: maxRange - activeLeft + halfBlock * 1.5, //eslint-disable-line
      });
    }
  }
}
