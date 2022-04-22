import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import type { TdLoadingProps } from './type';

const { prefix } = config;
const name = `${prefix}-loading`;

export interface LoadingProps extends TdLoadingProps {}
@wxComponent()
export default class Loading extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-text`, `${prefix}-class-indicator`];

  data = {
    prefix,
    classPrefix: name,
    show: true,
  };

  options = {
    multipleSlots: true,
  };

  properties = props;

  timer = null;

  observers = {
    loading(this, cur) {
      const { delay } = this.properties;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (cur) {
        if (delay) {
          this.timer = setTimeout(() => {
            this.setData({ show: cur });
            this.timer = null;
          }, delay);
        } else {
          this.setData({ show: cur });
        }
      } else {
        this.setData({ show: cur });
      }
    },
  };

  lifetimes = {
    detached() {
      clearTimeout(this.timer);
    },
  };

  refreshPage() {
    this.triggerEvent('reload');
  }
}
