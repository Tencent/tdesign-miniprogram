import { SuperComponent, wxComponent } from '../../common/src/index';
import config from '../../common/config';
import props from './props';
import { getRect } from '../../common/utils';
import type { TdDraggableProps } from './type';

const systemInfo = wx.getSystemInfoSync();
const { prefix } = config;
const name = `${prefix}-draggable`;

export interface DraggableProps extends TdDraggableProps {}

@wxComponent()
export default class Draggable extends SuperComponent {
  properties = props;

  externalClasses = [`${prefix}-class`];

  data = {
    prefix,
    classPrefix: name,
  };

  lifetimes = {
    ready() {
      this.computedRect();
    },
  };

  methods = {
    onTouchStart(e) {
      if (this.properties.direction === 'none') return;
      this.startX = e.touches[0].clientX + systemInfo.windowWidth - this.rect.right;
      this.startY = e.touches[0].clientY + systemInfo.windowHeight - this.rect.bottom;
      this.triggerEvent('start', { startX: this.startX, startY: this.startY, rect: this.rect, e });
    },

    onTouchMove(e) {
      if (this.properties.direction === 'none') return;
      let x = this.startX - e.touches[0].clientX; // x轴移动偏移量
      let y = this.startY - e.touches[0].clientY; // y轴移动偏移量

      if (this.properties.direction === 'vertical') {
        x = systemInfo.windowWidth - this.rect.right;
      }
      if (this.properties.direction === 'horizontal') {
        y = systemInfo.windowHeight - this.rect.bottom;
      }

      this.triggerEvent('move', { x, y, rect: this.rect, e });
    },

    async onTouchEnd(e) {
      if (this.properties.direction === 'none') return;
      await this.computedRect();
      this.triggerEvent('end', { rect: this.rect, e });
    },

    async computedRect() {
      this.rect = { right: 0, bottom: 0, width: 0, height: 0 };
      this.rect = await getRect(this, `.${this.data.classPrefix}`);
    },
  };
}
