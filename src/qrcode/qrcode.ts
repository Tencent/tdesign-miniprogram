import props from './props';
import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';

const { prefix } = config;
const name = `${prefix}-qrcode`;

@wxComponent()
export default class QRCode extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
    virtualHost: true,
  };

  properties = {
    ...props,
    statusRender: {
      type: Boolean,
      value: false,
    },
    style: {
      type: String,
      value: '',
    },
    customStyle: {
      type: String,
      value: '',
    },
  };

  data = {
    prefix,
    showMask: false,
    classPrefix: name,
    canvasReady: false,
  };

  lifetimes = {
    attached() {
      this.setData({
        showMask: this.properties.status !== 'active',
      });
    },
  };

  observers = {
    status: function (newVal: string) {
      this.setData({
        showMask: newVal !== 'active',
      });
    },
  };

  methods = {
    handleDrawCompleted() {
      this.setData({
        canvasReady: true,
      });
    },
    handleDrawError() {},
    handleRefresh() {
      this.triggerEvent('refresh');
    },
  };
}
