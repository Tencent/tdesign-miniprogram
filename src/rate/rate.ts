import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { unitConvert } from '../common/utils';

const { prefix } = config;
const name = `${prefix}-rate`;

@wxComponent()
export default class Rate extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-icon`, `${prefix}-class-text`];

  properties = props;

  controlledProps = [
    {
      key: 'value',
      event: 'change',
    },
  ];

  data = {
    prefix,
    classPrefix: name,
    defaultTexts: ['极差', '失望', '一般', '满意', '惊喜'],
    tipsVisible: false,
    tipsLeft: 0,
    actionType: '',
    scaleIndex: -1,
  };

  methods = {
    onTouch(e: WechatMiniprogram.TouchEvent, eventType: 'tap' | 'move') {
      const { count, allowHalf, gap, value: currentValue, size } = this.properties;
      const [touch] = e.touches;
      const margin = unitConvert(gap);
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

          if (eventType === 'move' || (eventType === 'tap' && allowHalf)) {
            const left = Math.ceil(value - 1) * (unitConvert(gap) + unitConvert(size)) + unitConvert(size) * 0.5;
            this.setData({
              tipsVisible: true,
              actionType: eventType,
              scaleIndex: eventType === 'move' ? Math.ceil(value) : -1,
              tipsLeft: Math.max(left, 0),
            });
          }

          if (value !== currentValue) {
            this._trigger('change', { value });
          }
        })
        .exec();
    },
    onTap(e: WechatMiniprogram.TouchEvent) {
      this.onTouch(e, 'tap');
    },
    onTouchMove(e: WechatMiniprogram.TouchEvent) {
      this.onTouch(e, 'move');
    },
    onTouchEnd() {
      if (this.data.actionType === 'move') {
        this.setData({}, () => {
          this.setData({ tipsVisible: false, scaleIndex: -1 });
        });
      }
    },
    onSelect(e: WechatMiniprogram.TouchEvent) {
      const { value } = e.currentTarget.dataset;
      const { actionType } = this.data;

      if (actionType === 'move') return;

      this._trigger('change', { value });
      setTimeout(() => this.setData({ tipsVisible: false }), 300);
    },
  };
}
