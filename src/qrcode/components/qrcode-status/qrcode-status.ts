// src/qrcode/index.ts
import { SuperComponent, wxComponent } from '../../../common/src/index';
import config from '../../../common/config';
import props from './props';
import { QRCodeStatusProps, QRCodeStatusEvents } from './type';

const { prefix } = config;
const name = `${prefix}-qrcode`;

@wxComponent()
export default class QRCode extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    classPrefix: name,
  };

  // 事件类型声明
  events: QRCodeStatusEvents = {
    refresh: true,
  };

  methods = {
    handleRefresh() {
      this.triggerEvent('refresh');
      console.log('点击重新刷新');
    },
  };
}