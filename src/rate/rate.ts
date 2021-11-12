/*
 * @Author: rileycai
 * @Date: 2021-09-21 19:01:54
 * @LastEditTime: 2021-11-10 14:30:02
 * @LastEditors: rileycai
 * @Description: Rate组件
 * @FilePath: /tdesign-miniprogram/src/rate/rate.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';

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
  externalClasses = ['t-class', 't-class-icon', 't-class-desc'];

  properties = props;

  data = {
    classPrefix: name,
    icon: 'star-filled',
    halfIcon: 'star-filled',
    defaultTexts: ['极差', '失望', '一般', '满意', '惊喜'],
    disabledColor: '#999999',
  };

  onTouch(e: any) {
    const { count, allowHalf, gap, value: currentValue } = this.properties as any;
    const [touch] = e.touches;
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
        let value = remainder <= 0.5 && allowHalf ? integral + 0.5 : integral + 1;
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
