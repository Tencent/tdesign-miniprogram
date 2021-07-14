import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
const { prefix } = config;
const name = `${prefix}-loading`;
@wxComponent()
export default class Loading extends SuperComponent {
  externalClasses = ['t-class', 't-class-text', 't-class-indicator'];
  data = {
    classPrefix: name,
    show: false,
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
            console.log('Debounce');
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
