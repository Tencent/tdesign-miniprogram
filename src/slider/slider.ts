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
  isVisibleToScreenReader: boolean;
  identifier: number[];
};

interface boundingClientRect {
  left: number;
  right: number;
  bottom: number;
  top: number;
}
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
    isVisibleToScreenReader: false,
    identifier: [-1, -1],
  };

  observers = {
    value(newValue: SliderValue) {
      this.handlePropsChange(newValue);
    },
    _value(newValue: SliderValue) {
      this.bus.on('initial', () => this.renderLine(newValue));
      this.toggleA11yTips();
    },
    marks(val) {
      this.bus.on('initial', () => this.handleMark(val));
    },
  };

  lifetimes = {
    created() {
      this.bus = new Bus();
    },
    attached() {
      const { value } = this.properties;
      if (!value) this.handlePropsChange(0);
      this.init();
      this.injectPageScroll();
    },
  };

  injectPageScroll() {
    const { range, vertical } = this.properties;
    if (!range || !vertical) return;
    const pages = getCurrentPages() || [];
    let curPage = null;
    if (pages && pages.length - 1 >= 0) {
      curPage = pages[pages.length - 1];
    }
    if (!curPage) return;
    const originPageScroll = curPage?.onPageScroll;
    curPage.onPageScroll = (rest) => {
      originPageScroll?.call(this, rest);
      this.observerScrollTop(rest);
    };
  }

  observerScrollTop(rest) {
    const { scrollTop } = rest || {};
    this.pageScrollTop = scrollTop;
  }

  toggleA11yTips() {
    this.setData({
      isVisibleToScreenReader: true,
    });
    setTimeout(() => {
      this.setData({
        isVisibleToScreenReader: false,
      });
    }, 2000);
  }

  renderLine(val) {
    const { min, max, range } = this.properties;
    const { maxRange } = this.data;

    if (range) {
      const left = (maxRange * (val[0] - Number(min))) / (Number(max) - Number(min));
      const right = (maxRange * (Number(max) - val[1])) / (Number(max) - Number(min));
      // 因为要计算点相对于线的绝对定位，所以要取整条线的长度而非可滑动的范围
      this.setLineStyle(left, right);
    } else {
      this.setSingleBarWidth(val as number);
    }
  }

  triggerValue(value?: SliderValue) {
    if (this.preval === value) return;
    this.preval = value;
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
      this.init().then(setValueAndTrigger);
      return;
    }

    setValueAndTrigger();
  }

  handleMark(marks: any) {
    const calcPos = (arr: number[]) => {
      const { max, theme } = this.properties;
      const { blockSize, maxRange } = this.data;
      const margin = (theme as any) === 'capsule' ? blockSize / 2 : 0;

      return arr.map((item) => ({
        val: item,
        left: Math.round((item / Number(max)) * maxRange) + margin,
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

  async init() {
    const line: boundingClientRect = await getRect(this, '#sliderLine');
    const { blockSize } = this.data;
    const { theme, vertical } = this.properties;
    const halfBlock = Number(blockSize) / 2;
    const { top, bottom, right, left } = line;
    let maxRange = vertical ? bottom - top : right - left;
    let initialLeft = vertical ? top : left;
    let initialRight = vertical ? bottom : right;
    if (initialLeft === 0 && initialRight === 0) return;

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
    const decimal = String(step).indexOf('.') > -1 ? String(step).length - String(step).indexOf('.') - 1 : 0;
    const closestStep = trimSingleValue(
      Number((Math.round(value / Number(step)) * Number(step)).toFixed(decimal)),
      Number(min),
      Number(max),
    );
    return closestStep as number;
  }

  // 点击滑动条的事件
  onSingleLineTap(e: WechatMiniprogram.TouchEvent) {
    const { disabled } = this.properties;
    if (disabled) return;
    const isSingleLineTap = this.data.identifier[0] === -1; // 区分点击滑动条和单游标的滑动
    if (isSingleLineTap) {
      const [touch] = e.changedTouches;
      this.data.identifier[0] = touch.identifier;
    }
    const value = this.getSingleChangeValue(e);
    if (isSingleLineTap) {
      this.data.identifier[0] = -1;
    }
    this.triggerValue(value);
  }

  getSingleChangeValue(e: WechatMiniprogram.TouchEvent) {
    const { min, max, theme, vertical } = this.properties;
    const { initialLeft, maxRange, blockSize } = this.data;
    const touch = e.changedTouches.find((item) => item.identifier === this.data.identifier[0]);
    const pagePosition = this.getPagePosition(touch);

    let offset = 0;
    if ((theme as any) === 'capsule') {
      offset = Number(blockSize);
      if (vertical) {
        offset *= 2;
      }
      offset += 6;
    } else if (vertical) {
      offset = Number(blockSize);
    }

    const currentLeft = pagePosition - initialLeft - offset;
    let value = 0;
    if (currentLeft <= 0) {
      value = Number(min);
    } else if (currentLeft >= maxRange) {
      value = Number(max);
    } else {
      value = (currentLeft / maxRange) * (Number(max) - Number(min)) + Number(min);
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
    const { disabled, theme, vertical } = this.properties;
    const { initialLeft, initialRight, maxRange, blockSize } = this.data;
    if (disabled) return;

    const [touch] = e.changedTouches;
    const pagePosition = this.getPagePosition(touch);
    const halfBlock = (theme as any) === 'capsule' ? Number(blockSize) / 2 : 0;

    const currentLeft = pagePosition - initialLeft;
    const currentRight = -(pagePosition - initialRight);
    if (currentLeft < 0 || currentRight > maxRange + Number(blockSize)) return;

    Promise.all([getRect(this, '#leftDot'), getRect(this, '#rightDot')]).then(([leftDot, rightDot]) => {
      const pageScrollTop = this.pageScrollTop || 0;
      // 点击处-halfblock 与 leftDot左侧的距离（绝对值）
      const leftDotPosition = vertical ? leftDot.top + pageScrollTop : leftDot.left;
      const distanceLeft = Math.abs(pagePosition - leftDotPosition - halfBlock);
      // 点击处-halfblock 与 rightDot左侧的距离（绝对值）
      const rightDotPosition = vertical ? rightDot.top + pageScrollTop : rightDot.left;
      const distanceRight = Math.abs(rightDotPosition - pagePosition + halfBlock);
      // 哪个绝对值小就移动哪个Dot
      const isMoveLeft = distanceLeft < distanceRight;

      let offset = 0;
      if ((theme as any) === 'capsule') {
        offset = Number(blockSize);
        if (vertical) {
          offset *= 2;
        }
        offset += 6;
      } else if (vertical) {
        offset = Number(blockSize);
      }

      if (isMoveLeft) {
        // 当前leftdot中心 + 左侧偏移量 = 目标左侧中心距离
        const left = pagePosition - initialLeft - offset;
        const leftValue = this.convertPosToValue(left, 0);
        this.triggerValue([this.stepValue(leftValue), this.data._value[1]]);
      } else {
        let right = -(pagePosition - initialRight);
        if (vertical) {
          right += offset / 2;
        }
        const rightValue = this.convertPosToValue(right, 1);

        this.triggerValue([this.data._value[0], this.stepValue(rightValue)]);
      }
    });
  }

  onTouchStart(e: WechatMiniprogram.TouchEvent) {
    this.triggerEvent('dragstart', { e });
    const [touch] = e.changedTouches;
    if (e.currentTarget.id === 'rightDot') {
      this.data.identifier[1] = touch.identifier;
    } else {
      this.data.identifier[0] = touch.identifier;
    }
  }

  onTouchMoveLeft(e: WechatMiniprogram.TouchEvent) {
    const { disabled, theme, vertical } = this.properties;
    const { initialLeft, _value, blockSize } = this.data;
    if (disabled) return;

    const touch = e.changedTouches.find((item) => item.identifier === this.data.identifier[0]);
    const pagePosition = this.getPagePosition(touch);
    let offset = 0;
    if ((theme as any) === 'capsule') {
      offset += Number(blockSize);
    }
    if (vertical) {
      offset += Number(blockSize) + 6;
    }
    const currentLeft = pagePosition - initialLeft - offset;

    const newData = [...(_value as number[])];
    const leftValue = this.convertPosToValue(currentLeft, 0);

    newData[0] = this.stepValue(leftValue);

    this.triggerValue(newData);
  }

  onTouchMoveRight(e: WechatMiniprogram.TouchEvent) {
    const { disabled, vertical } = this.properties;
    const { initialRight, _value, blockSize } = this.data;
    if (disabled) return;

    const touch = e.changedTouches.find((item) => item.identifier === this.data.identifier[1]);
    const pagePosition = this.getPagePosition(touch);
    let offset = 0;
    if (vertical) {
      offset += Number(blockSize) / 2 + 6;
    }
    const currentRight = -(pagePosition - initialRight - offset);

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

  onTouchEnd(e: WechatMiniprogram.TouchEvent) {
    this.triggerEvent('dragend', { e });
    if (e.currentTarget.id === 'rightDot') {
      this.data.identifier[1] = -1;
    } else {
      this.data.identifier[0] = -1;
    }
  }

  getPagePosition(touch) {
    const { pageX, pageY } = touch;
    const { vertical } = this.properties;
    return vertical ? pageY : pageX;
  }
}
