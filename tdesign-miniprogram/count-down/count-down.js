var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { isSameSecond, parseFormat, parseTimeData } from './utils';
const { prefix } = config;
const name = `${prefix}-count-down`;
const simpleTick = function (fn) {
    return setTimeout(fn, 30);
};
let CountDown = class CountDown extends SuperComponent {
    constructor() {
        super(...arguments);
        this.externalClasses = ['t-class'];
        this.properties = props;
        this.observers = {
            time() {
                this.reset();
            },
        };
        this.data = {
            classPrefix: name,
            timeData: parseTimeData(0),
            formattedTime: '0',
        };
        this.tid = null;
    }
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
        }
        else {
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
            const remain = this.getRemain();
            if (!isSameSecond(remain, this.remain) || remain === 0) {
                this.setRemain(remain);
            }
            if (this.remain !== 0) {
                this.macroTick();
            }
        });
    }
    getRemain() {
        return Math.max(this.endTime - Date.now(), 0);
    }
    setRemain(remain) {
        this.remain = remain;
        const timeData = parseTimeData(remain);
        this.triggerEvent('change', timeData);
        const { timeText } = parseFormat(remain, this.properties.format);
        this.setData({
            timeData,
            formattedTime: timeText.replace(/:/g, ' : '),
        });
        if (remain === 0) {
            this.pause();
            this.triggerEvent('finish');
        }
    }
};
CountDown = __decorate([
    wxComponent()
], CountDown);
export default CountDown;

//# sourceMappingURL=count-down.js.map
