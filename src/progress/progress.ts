import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { getBackgroundColor } from './utils';
import { unitConvert } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-progress`;

@wxComponent()
export default class Progress extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-bar`, `${prefix}-class-label`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    colorBar: '',
    heightBar: '',
    computedStatus: '',
    computedProgress: 0,
    isIOS: false,
  };

  attached() {
    wx.getSystemInfo({
      success: (res) => {
        const isIOS = !!(res.system.toLowerCase().search('ios') + 1);
        this.setData({
          isIOS,
        });
      },
      fail: (err) => {
        console.error('progress 获取系统信息失败', err);
      },
    });
  }

  observers = {
    percentage(percentage) {
      percentage = Math.max(0, Math.min(percentage, 100));

      this.setData({
        computedStatus: percentage === 100 ? 'success' : '',
        computedProgress: percentage,
      });
    },

    color(color) {
      this.setData({
        colorBar: getBackgroundColor(color),
        colorCircle: typeof color === 'object' ? '' : color, // 环形不支持渐变，单独处理
      });
    },

    strokeWidth(strokeWidth) {
      if (!strokeWidth) {
        return '';
      }
      this.setData({
        heightBar: unitConvert(strokeWidth),
      });
    },

    trackColor(trackColor) {
      this.setData({
        bgColorBar: trackColor,
      });
    },
  };
}
