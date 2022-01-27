const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
export const parseTimeData = function (time) {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);
    const milliseconds = Math.floor(time % SECOND);
    return {
        days,
        hours,
        minutes,
        seconds,
        milliseconds,
    };
};
export const isSameSecond = function (time1, time2) {
    return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
};
/**
 *
 * @param time 倒计时时间，毫秒单位
 * @param format 倒计时格式化字符串，例如：dd天hh小时mm分ss秒SSS毫秒，hh:mm:ss.SSS，hh:mm:ss
 */
export const parseFormat = function (time, format) {
    const obj = {
        'D+': Math.floor(time / 86400000),
        'H+': Math.floor((time % 86400000) / 3600000),
        'm+': Math.floor((time % 3600000) / 60000),
        's+': Math.floor((time % 60000) / 1000),
        'S+': Math.floor(time % 1000), // 毫秒
    };
    const timeList = [];
    let timeText = format;
    Object.keys(obj).forEach((prop) => {
        if (new RegExp(`(${prop})`).test(timeText)) {
            timeText = timeText.replace(RegExp.$1, (match, offset, source) => {
                const v = `${obj[prop]}`;
                let digit = v;
                if (match.length > 1) {
                    digit = (match.replace(new RegExp(match[0], 'g'), '0') + v).substr(v.length);
                }
                const unit = source.substr(offset + match.length);
                const last = timeList[timeList.length - 1];
                if (last) {
                    const index = last.unit.indexOf(match);
                    if (index !== -1) {
                        last.unit = last.unit.substr(0, index);
                    }
                }
                timeList.push({ digit, unit, match });
                return digit;
            });
        }
    });
    return { timeText, timeList };
};

//# sourceMappingURL=utils.js.map
