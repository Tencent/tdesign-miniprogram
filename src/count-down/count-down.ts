import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { isSameSecond, parseFormat, parseTimeData, TimeDataUnit } from './utils';

const { prefix } = config;
const name = `${prefix}-count-down`;

@wxComponent()
export default class CountDown extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-count`, `${prefix}-class-split`];

  properties = props;

  observers = {
    time() {
      this.reset();
    },
  };

  data = {
    prefix,
    classPrefix: name,
    timeDataUnit: TimeDataUnit,
    timeData: parseTimeData(0),
    formattedTime: '0',
  };

  timeoutId: null | number = null;

  lifetimes = {
    detached() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    },
  };

  methods = {
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
