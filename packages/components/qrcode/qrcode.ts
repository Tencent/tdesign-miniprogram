import props from './props';
import config from '../common/config';
import { SuperComponent, wxComponent } from '../common/src/index';
import usingConfig from '../mixins/using-config';

const { prefix } = config;
const componentName = 'qrcode';

@wxComponent()
export default class QRCode extends SuperComponent {
  behaviors = [usingConfig({ componentName })];

  externalClasses = [`${prefix}-class`, `${prefix}-class-canvas`];

  options = {
    multipleSlots: true,
  };

  properties = {
    ...props,
    statusRender: {
      type: Boolean,
      value: false,
    },
  };

  data = {
    prefix,
    showMask: false,
    classPrefix: `${prefix}-${componentName}`,
    canvasReady: false,
  };

  lifetimes = {
    async ready() {
      const canvasComp = this.selectComponent('#qrcodeCanvas'); // 获取 canvas 示例
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
    // 用于外部调用，重新绘制二维码
    init() {
      const canvasComp = this.selectComponent('#qrcodeCanvas');
      if (canvasComp) {
        canvasComp.initCanvas();
      }
    },

    handleDrawCompleted() {
      this.setData({
        canvasReady: true,
      });
    },
    handleDrawError(err) {
      console.error('二维码绘制失败', err);
    },
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
