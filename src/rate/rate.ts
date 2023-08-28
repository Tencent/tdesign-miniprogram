import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { unitConvert, getRect } from '../common/utils';

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
    isVisibleToScreenReader: false,
  };

  methods = {
    onTouch(e: WechatMiniprogram.TouchEvent, eventType: 'tap' | 'move') {
      const { count, allowHalf, gap, value: currentValue, size } = this.properties;
      const [touch] = e.changedTouches;
      const margin = unitConvert(gap);
      getRect(this, `.${name}__wrapper`).then((rect) => {
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
            scaleIndex: Math.ceil(value),
            tipsLeft: Math.max(left, 0),
          });
        }

        if (value !== currentValue) {
          this._trigger('change', { value });
        }

        if (this.touchEnd) {
          this.hideTips();
        }
      });
    },
    onTap(e: WechatMiniprogram.TouchEvent) {
      this.onTouch(e, 'tap');
    },
    onTouchStart() {
      this.touchEnd = false;
    },
    onTouchMove(e: WechatMiniprogram.TouchEvent) {
      this.onTouch(e, 'move');
      this.showAlertText();
    },
    onTouchEnd() {
      this.touchEnd = true;
      this.hideTips();
    },
    hideTips() {
      if (this.data.actionType === 'move') {
        this.setData({ tipsVisible: false, scaleIndex: -1 });
      }
    },
    onSelect(e: WechatMiniprogram.TouchEvent) {
      const { value } = e.currentTarget.dataset;
      const { actionType } = this.data;

      if (actionType === 'move') return;

      this._trigger('change', { value });
      setTimeout(() => this.setData({ tipsVisible: false, scaleIndex: -1 }), 300);
    },
    // 旁白模式: 变更数值时显示告警文案
    showAlertText() {
      if (this.data.isVisibleToScreenReader === true) return;
      this.setData({
        isVisibleToScreenReader: true,
      });
      setTimeout(() => {
        this.setData({
          isVisibleToScreenReader: false,
        });
      }, 2e3);
    },
  };
}
