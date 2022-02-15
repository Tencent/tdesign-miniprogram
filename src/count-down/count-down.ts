import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { isSameSecond, parseFormat, parseTimeData } from './utils';

const { prefix } = config;
const name = `${prefix}-count-down`;
const simpleTick = function (fn: (...args: any[]) => void): any {
  return setTimeout(fn, 30);
};

@wxComponent()
export default class CountDown extends SuperComponent {
  externalClasses = ['t-class'];

  properties = props;

  observers = {
    time() {
      this.reset();
    },
  };

  data = {
    classPrefix: name,
    timeData: parseTimeData(0),
    formattedTime: '0',
  };

  tid: null | number = null;

  detached() {
    this.destroyed();
  }

  destroyed() {
    if (this.tid) {
      clearTimeout(this.tid);
      this.tid = null;
    }
  }

  // 开始
  start() {
    if (this.counting) {
      return;
    }

    this.counting = true;
    this.endTime = Date.now() + this.remain;
    this.tick();
  }

  // 暂停
  pause() {
    this.counting = false;
    this.tid && clearTimeout(this.tid);
  }

  // 重置
  reset() {
    this.pause();
    this.remain = this.properties.time;
    this.setRemain(this.remain);

    if (this.properties.autoStart) {
      this.start();
    }
  }

  tick() {
    if (this.properties.millisecond) {
      this.microTick();
    } else {
      this.macroTick();
    }
  }

  microTick() {
    this.tid = simpleTick(() => {
      this.setRemain(this.getRemain());

      if (this.remain !== 0) {
        this.microTick();
      }
    });
  }

  macroTick() {
    this.tid = simpleTick(() => {
      const remain: number = this.getRemain();

      if (!isSameSecond(remain, this.remain) || remain === 0) {
        this.setRemain(remain);
      }

      if (this.remain !== 0) {
        this.macroTick();
      }
    });
  }

  getRemain(): number {
    return Math.max(this.endTime - Date.now(), 0);
  }

  setRemain(remain: number) {
    this.remain = remain;
    const timeData = parseTimeData(remain);
    this.triggerEvent('change', timeData);
    const { timeText } = parseFormat(remain, this.properties.format as any as string);
    this.setData({
      timeData,
      formattedTime: timeText.replace(/:/g, ' : '),
    });

    if (remain === 0) {
      this.pause();
      this.triggerEvent('finish');
    }
  }
}
