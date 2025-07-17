import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdQRCodeProps } from './type';

const { prefix } = config;
const name = `${prefix}-qrcode`;

@wxComponent()
export default class QRCode extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = props as TdQRCodeProps;

  data = {
    prefix,
    classPrefix: name,
    canvasReady: false,
    showMask: false,
  };

  lifetimes = {
    attached() {
      this.setData({ showMask: this.properties.status !== 'active' });
    }
  };

  observers = {
    'status': function(newVal: string) {
      this.setData({ showMask: newVal !== 'active' });
    }
  };

  methods = {
    qrcodeTouch() {
      console.log("点击二维码");
    },
    handleDrawCompleted() { 
      console.log("二维码绘制成功");
      this.setData({ canvasReady: true });
    },
    handleDrawError(e: any) {
      const { error, detail } = e.detail;
      console.log("二维码绘制失败", error, detail);
    },
    handleRefresh() {
      console.log("点击refresh");
      this.triggerEvent("onRefresh");
    }
  };
}