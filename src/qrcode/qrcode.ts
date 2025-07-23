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
    async ready() {
      const canvasComp = this.selectComponent('#qrcodeCanvas'); // 获取子组件示例提供下载
      const canvas = await canvasComp.getCanvasNode();
      this.setData({ canvasNode: canvas });
    },

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
    // 二维码下载方法
    async handleDownload() {
      if (!this.data.canvasNode) {
        console.error('未找到 canvas 节点');
        return;
      }

      wx.canvasToTempFilePath(
        {
          canvas: this.data.canvasNode,
          success: (res) => {
            wx.saveImageToPhotosAlbum({ filePath: res.tempFilePath });
          },
          fail: (err) => {
            console.error('canvasToTempFilePath failed', err);
          },
        },
        this,
      );
    },
  };
}
