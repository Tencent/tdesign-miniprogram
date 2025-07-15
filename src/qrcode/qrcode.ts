import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { TdQRCodeProps } from './type';

const { prefix } = config;
const name = `${prefix}-qrcode`;

@wxComponent()
export default class QRCode extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-bar`, `${prefix}-class-label`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    canvasReady: false,
    showMask: false,
  };

  attached() {
    // 初始化逻辑可以放在这里
  }

  observers = {
    status(newVal) {
      this.setData({
        showMask: newVal !== 'active'
      });
    },
    // 可以添加其他属性观察器
  };

  // 方法直接定义为类方法
  qrcodeTouch() {
    console.log("点击二维码");
  }

  handleDrawCompleted() {
    this.setData({
      canvasReady: true
    });
  }

  handleDrawError(e: any) {
    const { error, detail } = e.detail;
    console.log("二维码绘制失败", error, detail);
  }
}