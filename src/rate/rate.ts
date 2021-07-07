import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-rate`;

const rpx2px = (() => {
  let systemInfo: any = null;
  return (rpx: number): number => {
    if (!systemInfo) {
      systemInfo = wx.getSystemInfoSync();
    }
    return (rpx * (systemInfo ? systemInfo.screenWidth : 750)) / 750;
  };
})();

@wxComponent()
export default class Rate extends SuperComponent {
  externalClasses = ['t-class'];
  properties = {
    value: Number,
    size: {
      type: Number,
      value: 48,
    },
    gap: {
      type: Number,
      value: 6,
    },
    count: {
      type: Number,
      value: 5,
    },
    color: {
      type: String,
      value: '#ED7B2F',
    },
    voidColor: {
      type: String,
      value: '#E3E6EB',
    },
    disabledColor: {
      type: String,
      value: '#999',
    },
    touchable: {
      type: Boolean,
      value: false,
    },
    half: {
      type: Boolean,
      value: false,
    },
    readonly: Boolean,
    disabled: Boolean,
    icon: {
      type: String,
      value: 'star_fill',
    },
    voidIcon: {
      type: String,
      value: 'star_fill',
    },
    halfIcon: {
      type: String,
      value: 'star_fill',
    },
    showText: {
      type: Boolean,
      value: false,
    },
    texts: {
      type: Array,
      value: ['极差', '失望', '一般', '满意', '惊喜'],
    },
  };
  data = {
    classPrefix: name,
  };
  onTouch(e: any) {
    const { count, half, gap, value: currentValue } = this.properties as any;
    const touch = e.touches[0];
    const margin = rpx2px(gap);
    const selQuery = this.createSelectorQuery();
    selQuery
      .select(`.${name}__wrapper`)
      .boundingClientRect((rect: any) => {
        const { width, left } = rect;
        const starWidth = (width - (count - 1) * margin) / count;
        const offsetX = touch.pageX - left;
        const num = (offsetX + margin) / (starWidth + margin);
        const remainder = num % 1;
        const integral = num - remainder;
        let value = remainder <= 0.5 && half ? integral + 0.5 : integral + 1;
        if (value > count) {
          value = count;
        } else if (value < 0) {
          value = 0;
        }
        if (value !== currentValue) {
          this.triggerEvent('change', { value });
        }
      })
      .exec();
  }
}
