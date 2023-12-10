/* eslint-disable no-console */
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
      this.triggerEvent('start', e);
    },

    onTouchMove(e) {
      if (this.properties.direction === 'none') return;
      let x = this.startX - e.touches[0].clientX;
      let y = this.startY - e.touches[0].clientY;

      if (this.properties.direction === 'horizontal') {
        y = systemInfo.windowHeight - this.rect.bottom;
      }
      if (this.properties.direction === 'vertical') {
        x = systemInfo.windowWidth - this.rect.right;
      }

      this.triggerEvent('move', { x, y, e });
    },

    async onTouchEnd(e) {
      if (this.properties.direction === 'none') return;
      await this.computedRect();
      this.triggerEvent('end', e);
    },

    async computedRect() {
      this.rect = await getRect(this, `.${this.data.classPrefix}`);
      return this.rect;
    },
  };
}
